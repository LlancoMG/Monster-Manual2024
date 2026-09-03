// src/features/tracker-model.js
// Gestor de estado y lógica para el Rastreador de Iniciativa.

const CLAVE_STORAGE_INICIATIVA = 'compendio_iniciativa_estado';

export function crearRastreadorIniciativa() {
  let estado = {
    combatientes: [],
    indiceActivo: 0,
    ronda: 1,
    contadorUid: 1
  };

  // Cargar estado guardado si existe
  cargarDesdeStorage();

  function cargarDesdeStorage() {
    try {
      const guardado = localStorage.getItem(CLAVE_STORAGE_INICIATIVA);
      if (guardado) {
        const parseado = JSON.parse(guardado);
        if (parseado && Array.isArray(parseado.combatientes)) {
          estado = {
            combatientes: parseado.combatientes,
            indiceActivo: typeof parseado.indiceActivo === 'number' ? parseado.indiceActivo : 0,
            ronda: typeof parseado.ronda === 'number' ? Math.max(1, parseado.ronda) : 1,
            contadorUid: typeof parseado.contadorUid === 'number' ? parseado.contadorUid : (parseado.combatientes.length + 1)
          };
        }
      }
    } catch (e) {
      console.warn('No se pudo cargar el estado de iniciativa de localStorage:', e);
    }
  }

  function guardarEnStorage() {
    try {
      localStorage.setItem(CLAVE_STORAGE_INICIATIVA, JSON.stringify(estado));
    } catch (e) {
      console.warn('No se pudo guardar el estado de iniciativa en localStorage:', e);
    }
  }

  function obtenerEstado() {
    return estado;
  }

  function ordenarCombatientes() {
    // Ordena descendentemente por iniciativa. En empate, por nombre o bono de des si existe.
    estado.combatientes.sort((a, b) => {
      const diff = b.iniciativa - a.iniciativa;
      if (diff !== 0) return diff;
      const desA = a.desMod || 0;
      const desB = b.desMod || 0;
      if (desB !== desA) return desB - desA;
      return a.nombre.localeCompare(b.nombre);
    });
  }

  function agregarCombatiente({
    nombre,
    iniciativa = 0,
    hp = 10,
    maxHp = null,
    ca = 10,
    tipo = 'pc',
    bando = 'ally',
    condiciones = '',
    monstruoId = null,
    desMod = 0
  }) {
    const nuevoHp = Number(hp) || 0;
    const nuevoMaxHp = maxHp !== null && maxHp !== undefined ? Number(maxHp) : nuevoHp;

    const combatiente = {
      uid: estado.contadorUid++,
      nombre: String(nombre).trim() || 'Combatiente',
      iniciativa: Number(iniciativa) || 0,
      hp: nuevoHp,
      maxHp: Math.max(1, nuevoMaxHp),
      ca: Number(ca) || 10,
      tipo: tipo === 'npc' ? 'npc' : 'pc',
      bando: bando === 'enemy' ? 'enemy' : 'ally',
      condiciones: String(condiciones || '').trim(),
      monstruoId: monstruoId || null,
      desMod: Number(desMod) || 0
    };

    estado.combatientes.push(combatiente);
    ordenarCombatientes();
    guardarEnStorage();
    return combatiente;
  }

  function actualizarCombatiente(uid, cambios) {
    const c = estado.combatientes.find((item) => item.uid === uid);
    if (!c) return null;

    if (cambios.nombre !== undefined) c.nombre = String(cambios.nombre).trim() || c.nombre;
    if (cambios.iniciativa !== undefined) {
      c.iniciativa = Number(cambios.iniciativa) || 0;
      ordenarCombatientes();
    }
    if (cambios.hp !== undefined) c.hp = Math.max(0, Number(cambios.hp) || 0);
    if (cambios.maxHp !== undefined) c.maxHp = Math.max(1, Number(cambios.maxHp) || 1);
    if (cambios.ca !== undefined) c.ca = Number(cambios.ca) || 0;
    if (cambios.tipo !== undefined) c.tipo = cambios.tipo === 'npc' ? 'npc' : 'pc';
    if (cambios.bando !== undefined) c.bando = cambios.bando === 'enemy' ? 'enemy' : 'ally';
    if (cambios.condiciones !== undefined) c.condiciones = String(cambios.condiciones);
    if (cambios.desMod !== undefined) c.desMod = Number(cambios.desMod) || 0;

    guardarEnStorage();
    return c;
  }

  function eliminarCombatiente(uid) {
    const idx = estado.combatientes.findIndex((item) => item.uid === uid);
    if (idx === -1) return false;

    estado.combatientes.splice(idx, 1);
    if (idx < estado.indiceActivo) {
      estado.indiceActivo = Math.max(0, estado.indiceActivo - 1);
    }
    if (estado.indiceActivo >= estado.combatientes.length) {
      estado.indiceActivo = 0;
    }
    guardarEnStorage();
    return true;
  }

  function aplicarDanoCuracion(uid, cantidad, esDano = true) {
    const c = estado.combatientes.find((item) => item.uid === uid);
    if (!c) return;
    const num = Math.abs(Number(cantidad) || 0);
    if (num === 0) return;

    if (esDano) {
      c.hp = Math.max(0, c.hp - num);
    } else {
      c.hp = c.hp + num;
      if (c.hp > c.maxHp) {
        c.maxHp = c.hp;
      }
    }
    guardarEnStorage();
  }

  function siguienteTurno() {
    if (estado.combatientes.length === 0) return;
    estado.indiceActivo++;
    if (estado.indiceActivo >= estado.combatientes.length) {
      estado.indiceActivo = 0;
      estado.ronda++;
    }
    guardarEnStorage();
  }

  function anteriorTurno() {
    if (estado.combatientes.length === 0) return;
    estado.indiceActivo--;
    if (estado.indiceActivo < 0) {
      estado.indiceActivo = estado.combatientes.length - 1;
      estado.ronda = Math.max(1, estado.ronda - 1);
    }
    guardarEnStorage();
  }

  function reiniciarRonda() {
    estado.ronda = 1;
    estado.indiceActivo = 0;
    guardarEnStorage();
  }

  function vaciarRegistro() {
    estado.combatientes = [];
    estado.indiceActivo = 0;
    estado.ronda = 1;
    guardarEnStorage();
  }

  return {
    obtenerEstado,
    agregarCombatiente,
    actualizarCombatiente,
    eliminarCombatiente,
    aplicarDanoCuracion,
    ordenarCombatientes,
    siguienteTurno,
    anteriorTurno,
    reiniciarRonda,
    vaciarRegistro
  };
}

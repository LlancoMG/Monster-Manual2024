// src/features/reloj-model.js
// Reloj de mundo para el Rastreador de Iniciativa.

const CLAVE_STORAGE_RELOJ = 'compendio_reloj_estado';
const MINUTOS_POR_TURNO = 0.1;
const MINUTOS_DESCANSO_CORTO = 60;
const MINUTOS_DESCANSO_LARGO = 480;

export function crearRelojMundo() {
  let estado = {
    totalMinutos: 8 * 60,
    enReproduccion: true,
    eventos: [],
    contadorEventoId: 1
  };

  cargarDesdeStorage();

  function cargarDesdeStorage() {
    try {
      const guardado = localStorage.getItem(CLAVE_STORAGE_RELOJ);
      if (!guardado) return;
      const parseado = JSON.parse(guardado);
      if (!parseado || typeof parseado.totalMinutos !== 'number') return;
      estado = {
        totalMinutos: parseado.totalMinutos,
        enReproduccion: typeof parseado.enReproduccion === 'boolean' ? parseado.enReproduccion : true,
        eventos: Array.isArray(parseado.eventos) ? parseado.eventos : [],
        contadorEventoId: typeof parseado.contadorEventoId === 'number' ? parseado.contadorEventoId : 1
      };
    } catch (error) {
      console.warn('No se pudo cargar el reloj de mundo:', error);
    }
  }

  function guardarEnStorage() {
    try {
      localStorage.setItem(CLAVE_STORAGE_RELOJ, JSON.stringify(estado));
    } catch (error) {
      console.warn('No se pudo guardar el reloj de mundo:', error);
    }
  }

  function obtenerHoraMinuto() {
    const totalMinutos = ((Math.floor(estado.totalMinutos) % 1440) + 1440) % 1440;
    return { horas: Math.floor(totalMinutos / 60), minutos: totalMinutos % 60 };
  }

  function obtenerPosicionCeleste() {
    const { horas, minutos } = obtenerHoraMinuto();
    const horaDecimal = horas + minutos / 60;
    const esDia = horaDecimal >= 6 && horaDecimal < 18;
    const fraccion = esDia
      ? (horaDecimal - 6) / 12
      : ((horaDecimal - 18 + 24) % 24) / 12;
    return { esDia, fraccion: Math.max(0, Math.min(1, fraccion)) };
  }

  function obtenerEstado() {
    const { horas, minutos } = obtenerHoraMinuto();
    const eventos = estado.eventos
      .map((evento) => ({
        ...evento,
        minutosRestantes: Math.max(0, evento.objetivoTotalMinutos - estado.totalMinutos)
      }))
      .sort((a, b) => a.minutosRestantes - b.minutosRestantes);
    return {
      horas,
      minutos,
      enReproduccion: estado.enReproduccion,
      eventos,
      celeste: obtenerPosicionCeleste()
    };
  }

  function verificarEventosVencidos() {
    const vencidos = estado.eventos.filter((evento) => estado.totalMinutos >= evento.objetivoTotalMinutos);
    if (vencidos.length > 0) {
      estado.eventos = estado.eventos.filter((evento) => estado.totalMinutos < evento.objetivoTotalMinutos);
      guardarEnStorage();
    }
    return vencidos;
  }

  function agregarMinutos(minutos) {
    const cantidad = Number(minutos);
    if (!Number.isFinite(cantidad) || cantidad <= 0) return [];
    estado.totalMinutos += cantidad;
    guardarEnStorage();
    return verificarEventosVencidos();
  }

  function establecerHora(horas, minutos) {
    const hora = Number(horas);
    const minuto = Number(minutos);
    if (!Number.isInteger(hora) || hora < 0 || hora > 23 || !Number.isInteger(minuto) || minuto < 0 || minuto > 59) {
      return null;
    }
    const diasTranscurridos = Math.floor(estado.totalMinutos / 1440);
    estado.totalMinutos = diasTranscurridos * 1440 + hora * 60 + minuto;
    guardarEnStorage();
    return verificarEventosVencidos();
  }

  function alternarReproduccion() {
    estado.enReproduccion = !estado.enReproduccion;
    guardarEnStorage();
    return estado.enReproduccion;
  }

  function tickTiempoReal(segundosReales = 1) {
    if (!estado.enReproduccion) return [];
    return agregarMinutos(segundosReales);
  }

  function agregarEvento(nombre, minutosDuracion) {
    const nombreLimpio = String(nombre || '').trim();
    const duracion = Number(minutosDuracion);
    if (!nombreLimpio || !Number.isFinite(duracion) || duracion <= 0) return null;
    const evento = {
      id: estado.contadorEventoId++,
      nombre: nombreLimpio,
      objetivoTotalMinutos: estado.totalMinutos + duracion
    };
    estado.eventos.push(evento);
    guardarEnStorage();
    return evento;
  }

  function eliminarEvento(id) {
    estado.eventos = estado.eventos.filter((evento) => evento.id !== id);
    guardarEnStorage();
  }

  function pausarPorInicioCombate() {
    if (!estado.enReproduccion) return false;
    estado.enReproduccion = false;
    guardarEnStorage();
    return true;
  }

  return {
    obtenerEstado,
    agregarMinutos,
    establecerHora,
    alternarReproduccion,
    tickTiempoReal,
    avanzarPorTurno: () => agregarMinutos(MINUTOS_POR_TURNO),
    aplicarDescansoCorto: () => agregarMinutos(MINUTOS_DESCANSO_CORTO),
    aplicarDescansoLargo: () => agregarMinutos(MINUTOS_DESCANSO_LARGO),
    agregarEvento,
    eliminarEvento,
    estaReproduciendo: () => estado.enReproduccion,
    pausarPorInicioCombate
  };
}

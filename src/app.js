import { TAM_PAGINA, TIPO_COLOR } from './features/constants.js';
import { normalizar, escapeHtml } from './features/utils.js';
import { NOMBRES_INGLES } from './features/nombres-en.js';
import { crearCompendio } from './features/monster-model.js';
import { imagenesListas } from './features/storage.js';
import { crearRastreadorIniciativa } from './features/tracker-model.js';
import { crearRelojMundo } from './features/reloj-model.js';
import { construirPanelResultados, retratoProcedural, vistaDetalle } from './ui/monster-views.js';
import { vistaLista } from './ui/filtros-views.js';
import { vistaTracker, renderizarListaCombatientes, renderizarSugerenciasMonstruos } from './ui/tracker-views.js';
import { vistaReloj } from './ui/reloj-views.js';
import { abrirModalDados, cerrarModalDados } from './ui/dice-modal.js';

const BASE_CREATURES = Array.isArray(window.Monstruos) ? window.Monstruos : [];
const compendio = crearCompendio(BASE_CREATURES);
const rastreador = crearRastreadorIniciativa();
const relojMundo = crearRelojMundo();

function manejarEventosVencidos(vencidos) {
  if (!vencidos || vencidos.length === 0) return;
  const mensaje = vencidos.length === 1
    ? `Evento cumplido: ${vencidos[0].nombre}`
    : `Eventos cumplidos:\n- ${vencidos.map((evento) => evento.nombre).join('\n- ')}`;
  alert(`⏰ ${mensaje}`);
}

function actualizarVistaReloj() {
  const panel = document.getElementById('panel-reloj-mundo');
  if (!panel) return;
  if (document.activeElement?.classList.contains('reloj-hora-texto')) return;
  panel.outerHTML = vistaReloj({ estado: relojMundo.obtenerEstado() });
  enlazarEventosReloj();
}

function enlazarEventosReloj() {
  const horaEditable = document.querySelector('.reloj-hora-texto');
  if (horaEditable) {
    const confirmarHora = () => {
      const coincidencia = horaEditable.value.match(/^([01]\d|2[0-3]):[0-5]\d$/);
      if (!coincidencia) {
        actualizarVistaReloj();
        return;
      }
      const [horas, minutos] = horaEditable.value.split(':').map(Number);
      const vencidos = relojMundo.establecerHora(horas, minutos);
      if (vencidos === null) {
        actualizarVistaReloj();
        return;
      }
      manejarEventosVencidos(vencidos);
      actualizarVistaReloj();
    };
    horaEditable.onkeydown = (evento) => {
      if (evento.key === 'Enter') {
        evento.preventDefault();
        horaEditable.blur();
      }
      if (evento.key === 'Escape') {
        evento.preventDefault();
        actualizarVistaReloj();
      }
    };
    horaEditable.onblur = confirmarHora;
  }

  const btnPlay = document.getElementById('btn-reloj-play');
  if (btnPlay) btnPlay.onclick = () => {
    relojMundo.alternarReproduccion();
    actualizarVistaReloj();
  };

  const btnCorto = document.getElementById('btn-reloj-descanso-corto');
  if (btnCorto) btnCorto.onclick = () => {
    manejarEventosVencidos(relojMundo.aplicarDescansoCorto());
    actualizarVistaReloj();
  };

  const btnLargo = document.getElementById('btn-reloj-descanso-largo');
  if (btnLargo) btnLargo.onclick = () => {
    manejarEventosVencidos(relojMundo.aplicarDescansoLargo());
    actualizarVistaReloj();
  };

  const btnAgregarTiempo = document.getElementById('btn-reloj-agregar-tiempo');
  if (btnAgregarTiempo) btnAgregarTiempo.onclick = () => {
    const cantidad = Number(document.getElementById('reloj-cantidad-tiempo')?.value || 0);
    if (!cantidad || cantidad <= 0) return;
    const esHora = document.getElementById('reloj-unidad-tiempo')?.value === 'h';
    manejarEventosVencidos(relojMundo.agregarMinutos(esHora ? cantidad * 60 : cantidad));
    actualizarVistaReloj();
  };

  const btnAgregarEvento = document.getElementById('btn-reloj-agregar-evento');
  if (btnAgregarEvento) btnAgregarEvento.onclick = () => {
    const nombre = document.getElementById('reloj-evento-nombre')?.value.trim();
    const cantidad = Number(document.getElementById('reloj-evento-minutos')?.value || 0);
    if (!nombre || !cantidad || cantidad <= 0) return;
    const esHora = document.getElementById('reloj-evento-unidad')?.value === 'h';
    relojMundo.agregarEvento(nombre, esHora ? cantidad * 60 : cantidad);
    actualizarVistaReloj();
  };

  document.querySelectorAll('.reloj-evento-quitar').forEach((boton) => {
    boton.onclick = () => {
      relojMundo.eliminarEvento(Number(boton.dataset.eventoId));
      actualizarVistaReloj();
    };
  });

  const nombreEvento = document.getElementById('reloj-evento-nombre');
  if (nombreEvento) nombreEvento.onkeydown = (evento) => {
    if (evento.key === 'Enter') {
      evento.preventDefault();
      document.getElementById('btn-reloj-agregar-evento')?.click();
    }
  };
}

// ===================== UNIDADES DE DISTANCIA EN LA FICHA =====================
// Cada distancia en pies dentro de la ficha (Velocidad, alcance de acciones,
// radios de conos/esferas, etc.) se envuelve en un <span class="dist"> desde
// monster-views.js. Acá se maneja la conversión a metros/casillas y el
// popover que aparece al tocar cualquiera de esas distancias. La unidad
// elegida se recuerda mientras dure la sesión y se aplica a TODAS las
// distancias de la ficha (no solo a la que se tocó).
let unidadDistanciaActual = 'pies';

// 5 pies = 1 casilla siempre en este compendio, así que la división es exacta.
function valorSegunUnidad(pies, unidad) {
  if (unidad === 'metros')   return (pies * 0.3048).toFixed(1);
  if (unidad === 'casillas') return String(pies / 5);
  return String(pies);
}

function sufijoUnidad(unidad, valorUnico) {
  if (unidad === 'metros')   return 'm';
  if (unidad === 'casillas') return valorUnico === '1' ? 'casilla' : 'casillas';
  return 'pies';
}

function textoDistancia(pies1, pies2, unidad) {
  const v1 = valorSegunUnidad(pies1, unidad);
  if (pies2 === null) return `${v1} ${sufijoUnidad(unidad, v1)}`;
  const v2 = valorSegunUnidad(pies2, unidad);
  return `${v1}/${v2} ${sufijoUnidad(unidad, null)}`;
}

function actualizarTextoDistancias() {
  document.querySelectorAll('.dist').forEach((span) => {
    const pies1 = Number(span.dataset.pies);
    const pies2 = span.dataset.pies2 ? Number(span.dataset.pies2) : null;
    span.textContent = textoDistancia(pies1, pies2, unidadDistanciaActual);
  });
}

function manejarEscPopoverDistancia(evento) {
  if (evento.key === 'Escape') cerrarPopoverDistancia();
}

function manejarClickFueraPopoverDistancia(evento) {
  const popover = document.querySelector('.dist-popover');
  if (popover && !popover.contains(evento.target) && !evento.target.classList.contains('dist')) {
    cerrarPopoverDistancia();
  }
}

function cerrarPopoverDistancia() {
  const popover = document.querySelector('.dist-popover');
  if (popover) popover.remove();
  document.removeEventListener('keydown', manejarEscPopoverDistancia);
  document.removeEventListener('click', manejarClickFueraPopoverDistancia, true);
}

function abrirPopoverDistancia(span) {
  cerrarPopoverDistancia();
  const pies1 = Number(span.dataset.pies);
  const pies2 = span.dataset.pies2 ? Number(span.dataset.pies2) : null;

  const popover = document.createElement('div');
  popover.className = 'dist-popover';
  popover.setAttribute('role', 'menu');
  popover.innerHTML = ['pies', 'metros', 'casillas'].map((unidad) => `
    <button type="button" class="dist-popover-opcion${unidad === unidadDistanciaActual ? ' activa' : ''}" data-unidad="${unidad}" role="menuitem">${textoDistancia(pies1, pies2, unidad)}</button>`).join('');
  document.body.appendChild(popover);

  const rectSpan       = span.getBoundingClientRect();
  const anchoPopover   = popover.offsetWidth;
  let izquierda        = rectSpan.left + window.scrollX;
  const limiteDerecho  = window.scrollX + document.documentElement.clientWidth - anchoPopover - 8;
  if (izquierda > limiteDerecho) izquierda = Math.max(8, limiteDerecho);
  popover.style.left = `${izquierda}px`;
  popover.style.top  = `${rectSpan.bottom + window.scrollY + 4}px`;

  popover.querySelectorAll('.dist-popover-opcion').forEach((boton) => {
    boton.onclick = (evento) => {
      evento.stopPropagation();
      unidadDistanciaActual = boton.dataset.unidad;
      actualizarTextoDistancias();
      cerrarPopoverDistancia();
    };
  });

  document.addEventListener('keydown', manejarEscPopoverDistancia);
  setTimeout(() => document.addEventListener('click', manejarClickFueraPopoverDistancia, true), 0);
}

function enlazarEventosDistancias() {
  document.querySelectorAll('.dist').forEach((span) => {
    span.tabIndex = 0;
    span.setAttribute('role', 'button');
    span.onclick  = (evento) => { evento.stopPropagation(); abrirPopoverDistancia(span); };
    span.onkeydown = (evento) => {
      if (evento.key === 'Enter' || evento.key === ' ') {
        evento.preventDefault();
        abrirPopoverDistancia(span);
      }
    };
  });
  actualizarTextoDistancias(); // aplica la unidad ya elegida si no es "pies"
}

// ===================== ENLACE DE EVENTOS PARA DADOS 3D =====================
function enlazarEventosDados(nombreMonstruo) {
  document.querySelectorAll('.dado-tirable').forEach((elem) => {
    const activarTirada = (evento) => {
      evento.stopPropagation();
      try {
        const rawJson = elem.getAttribute('data-roll');
        if (!rawJson) return;
        const configTirada = JSON.parse(decodeURIComponent(rawJson));

        // Obtener nombre de la acción/rasgo contenedor si existe
        const contenedorRasgo = elem.closest('.rasgo');
        const nombreAccion = (contenedorRasgo && contenedorRasgo.getAttribute('data-nombre-accion'))
          || (contenedorRasgo && contenedorRasgo.querySelector('b') && contenedorRasgo.querySelector('b').textContent.replace(':', '').trim())
          || '';

        abrirModalDados({ configTirada, nombreMonstruo, nombreAccion });
      } catch (err) {
        console.error('Error al iniciar tirada de dados:', err);
      }
    };

    elem.onclick   = activarTirada;
    elem.onkeydown = (evento) => {
      if (evento.key === 'Enter' || evento.key === ' ') {
        evento.preventDefault();
        activarTirada(evento);
      }
    };
  });
}

function analizarHash() {
  const hash   = location.hash || '#/';
  const partes = hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  if (partes[0] === 'monstruo' && partes[1]) return { vista: 'detalle', id: decodeURIComponent(partes[1]) };
  if (partes[0] === 'iniciativa' || partes[0] === 'rastreador' || partes[0] === 'combate') return { vista: 'iniciativa' };
  return { vista: 'lista' };
}

function irA(hash) { location.hash = hash; }

// Las tarjetas son <a href="#/monstruo/..."> reales, por lo que ctrl/cmd+clic,
// clic central y clic derecho funcionan sin JS adicional.
function enlazarEventosPanelResultados() {
  const btnAnterior  = document.getElementById('btn-pag-anterior');
  const btnSiguiente = document.getElementById('btn-pag-siguiente');
  if (btnAnterior)  btnAnterior.onclick  = () => { compendio.setPaginaActual(compendio.getPaginaActual() - 1); actualizarPanelResultados(); };
  if (btnSiguiente) btnSiguiente.onclick = () => { compendio.setPaginaActual(compendio.getPaginaActual() + 1); actualizarPanelResultados(); };
  const btnLimpiarVacio = document.getElementById('btn-limpiar-vacio');
  if (btnLimpiarVacio) btnLimpiarVacio.onclick = () => { compendio.resetFiltros(); render(); };
}

function actualizarPanelResultados() {
  const panelResultados = document.querySelectorAll('.panel')[1];
  const todos      = compendio.obtenerTodosMonstruos();
  const resultados = compendio.calcularResultados();
  const panel = construirPanelResultados({
    todos,
    resultados,
    paginaActual: compendio.getPaginaActual(),
    tamPagina: TAM_PAGINA,
    obtenerFuenteImagen: compendio.obtenerFuenteImagen,
    tipoColor: TIPO_COLOR,
    obtenerVariantesConCr: compendio.obtenerVariantesConCr,
  });
  compendio.setPaginaActual(panel.pagina);
  panelResultados.innerHTML = panel.html;
  enlazarEventosPanelResultados();
}
function refrescarSoloResultados() { compendio.resetPagina(); actualizarPanelResultados(); }

function enlazarDropdownSimple(nombre, aplicar) {
  document.querySelectorAll(`input[name="${nombre}"]`).forEach((radio) => {
    radio.onchange = (e) => { aplicar(e.target.value); compendio.resetPagina(); render(); };
  });
}

function enlazarEventosLista() {
  const byId = (id) => document.getElementById(id);

  byId('f-q').oninput = (e) => { compendio.filtros.q = e.target.value; refrescarSoloResultados(); };
  enlazarDropdownSimple('f-rango',     (v) => { compendio.filtros.rango    = v; });
  enlazarDropdownSimple('f-cr-exacto', (v) => { compendio.filtros.crExacto = v; });
  enlazarDropdownSimple('f-tipo',      (v) => { compendio.filtros.tipo     = v; });
  enlazarDropdownSimple('f-tamano',    (v) => { compendio.filtros.tamano   = v; });
  enlazarDropdownSimple('f-orden',     (v) => { compendio.filtros.orden    = v; });

  document.querySelectorAll('.f-habitat-item').forEach((chk) => {
    chk.onchange = () => {
      compendio.filtros.habitat = Array.from(
        document.querySelectorAll('.f-habitat-item:checked')
      ).map((c) => c.value);
      const resumen = document.querySelector('#dd-habitat summary');
      if (resumen) {
        resumen.textContent = compendio.filtros.habitat.length === 0 ? 'Todos'
          : compendio.filtros.habitat.length === 1 ? compendio.filtros.habitat[0]
          : `${compendio.filtros.habitat.length} hábitats seleccionados`;
      }
      refrescarSoloResultados();
    };
  });

  byId('btn-limpiar').onclick = () => { compendio.resetFiltros(); render(); };
  enlazarEventosPanelResultados();

  const btnImportar  = byId('btn-importar');
  const inputImportar = byId('input-importar');
  if (btnImportar && inputImportar) {
    btnImportar.onclick = () => inputImportar.click();
    inputImportar.onchange = (e) => {
      const archivo = e.target.files[0];
      if (!archivo) return;
      const lector = new FileReader();
      lector.onload = (evento) => {
        try {
          const datos = JSON.parse(evento.target.result);
          if (!Array.isArray(datos)) throw new Error('El JSON debe ser un array de monstruos.');
          compendio.importarMonstruos(datos);
          alert(`Se importaron ${datos.length} monstruo(s) correctamente.`);
          compendio.resetPagina();
          render();
        } catch (error) {
          alert(`No se pudo importar el archivo: ${error.message}`);
        }
      };
      lector.readAsText(archivo);
    };
  }
}
// ===================== ZOOM DE IMAGEN DE LA FICHA =====================
// El retrato ampliado se muestra en un overlay `position:fixed` centrado en
// pantalla, para que la imagen completa siempre entre en cualquier resolución.
// Se cierra con Escape, con clic fuera de la imagen o con el botón ×.
function manejarEscZoomImagen(evento) {
  if (evento.key === 'Escape') cerrarZoomImagen();
}

function cerrarZoomImagen() {
  const fondo = document.querySelector('.zoom-imagen-fondo');
  if (fondo) fondo.remove();
  document.removeEventListener('keydown', manejarEscZoomImagen);
}

function abrirZoomImagen(contenidoHtml, nombreMonstruo) {
  cerrarZoomImagen();
  const fondo = document.createElement('div');
  fondo.className = 'zoom-imagen-fondo';
  fondo.setAttribute('role', 'dialog');
  fondo.setAttribute('aria-modal', 'true');
  fondo.setAttribute('aria-label', `Imagen ampliada de ${nombreMonstruo}`);
  fondo.innerHTML = `
    <button type="button" class="zoom-imagen-cerrar" aria-label="Cerrar imagen ampliada">×</button>
    <div class="zoom-imagen-contenido">${contenidoHtml}</div>`;
  document.body.appendChild(fondo);
  fondo.onclick = (evento) => { if (evento.target === fondo) cerrarZoomImagen(); };
  fondo.querySelector('.zoom-imagen-cerrar').onclick = cerrarZoomImagen;
  document.addEventListener('keydown', manejarEscZoomImagen);
  fondo.querySelector('.zoom-imagen-cerrar').focus();
}

function enlazarEventosZoomImagenFicha(nombreMonstruo) {
  const imagenFicha = document.getElementById('ficha-imagen-principal');
  if (!imagenFicha) return;
  const activarZoom = () => abrirZoomImagen(imagenFicha.innerHTML, nombreMonstruo || '');
  imagenFicha.onclick   = activarZoom;
  imagenFicha.onkeydown = (evento) => {
    if (evento.key === 'Enter' || evento.key === ' ') {
      evento.preventDefault();
      activarZoom();
    }
  };
}

function enlazarEventosDetalle(id, nombreMonstruo) {
  const btnVolver = document.getElementById('btn-volver');
  if (btnVolver) btnVolver.onclick = () => irA('#/');
  const selectorVariante = document.getElementById('selector-variante');
  if (selectorVariante) selectorVariante.onchange = (e) => {
    compendio.guardarVarianteSeleccionada(id, e.target.value);
    render();
  };
  enlazarEventosZoomImagenFicha(nombreMonstruo);
  enlazarEventosDistancias();
  enlazarEventosDados(nombreMonstruo);
}
function actualizarTabsNavegacion(vista) {
  const tabCompendio = document.getElementById('nav-tab-compendio');
  const tabIniciativa = document.getElementById('nav-tab-iniciativa');
  if (!tabCompendio || !tabIniciativa) return;
  if (vista === 'iniciativa') {
    tabCompendio.classList.remove('activa');
    tabIniciativa.classList.add('activa');
  } else {
    tabCompendio.classList.add('activa');
    tabIniciativa.classList.remove('activa');
  }
}

let trackerMonstruoSeleccionado = null;
let trackerDesModActual = 0;

function actualizarVistaRoster() {
  const estado = rastreador.obtenerEstado();
  const rosterLista = document.getElementById('tracker-roster-lista');
  const emptyState = document.getElementById('tracker-empty-state');
  const rondaNum = document.getElementById('tracker-ronda-num');
  const turnoEl = document.querySelector('.tracker-turno-actual');
  const tituloRoster = document.querySelector('.tracker-roster-titulo');

  if (rondaNum) rondaNum.textContent = estado.ronda;
  if (tituloRoster) tituloRoster.textContent = `Orden de Iniciativa (${estado.combatientes.length})`;

  if (emptyState) {
    emptyState.style.display = estado.combatientes.length === 0 ? 'block' : 'none';
  }

  if (turnoEl) {
    const cActivo = estado.combatientes.length > 0 ? estado.combatientes[estado.indiceActivo] : null;
    turnoEl.innerHTML = cActivo
      ? `<span class="turno-indicador">Turno:</span> <b class="turno-nombre-activo">${escapeHtml(cActivo.nombre)}</b>`
      : '<span class="turno-vacio">Sin combatientes activos</span>';
  }

  if (rosterLista) {
    rosterLista.innerHTML = renderizarListaCombatientes(estado);
    enlazarEventosRoster();
  }
}

function enlazarEventosRoster() {
  const rosterLista = document.getElementById('tracker-roster-lista');
  if (!rosterLista) return;

  // Restar Daño (-)
  rosterLista.querySelectorAll('[data-accion="dmg"], .hp-btn.dmg').forEach((btn) => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const uid = Number(btn.dataset.uid);
      const amountInput = rosterLista.querySelector(`.tracker-hp-amount[data-uid="${uid}"]`);
      const amount = Number(amountInput ? amountInput.value : 0);
      if (amount <= 0) return;
      rastreador.aplicarDanoCuracion(uid, amount, true);
      actualizarVistaRoster();
    };
  });

  // Sumar Curación (+)
  rosterLista.querySelectorAll('[data-accion="heal"], .hp-btn.heal').forEach((btn) => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const uid = Number(btn.dataset.uid);
      const amountInput = rosterLista.querySelector(`.tracker-hp-amount[data-uid="${uid}"]`);
      const amount = Number(amountInput ? amountInput.value : 0);
      if (amount <= 0) return;
      rastreador.aplicarDanoCuracion(uid, amount, false);
      actualizarVistaRoster();
    };
  });

  // Enter en input de cantidad: siempre resta vida por defecto
  rosterLista.querySelectorAll('.tracker-hp-amount').forEach((inp) => {
    inp.onkeydown = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const uid = Number(inp.dataset.uid);
        const amount = Number(inp.value || 0);
        if (amount <= 0) return;
        rastreador.aplicarDanoCuracion(uid, amount, true);
        actualizarVistaRoster();
      }
    };
  });

  // Edición inline de campos
  rosterLista.querySelectorAll('.editable-inline').forEach((inp) => {
    const uid = Number(inp.dataset.uid);
    const campo = inp.dataset.campo;

    if (campo === 'condiciones') {
      inp.oninput = (e) => {
        rastreador.actualizarCombatiente(uid, { condiciones: e.target.value });
      };
    } else if (campo === 'iniciativa') {
      inp.onchange = (e) => {
        rastreador.actualizarCombatiente(uid, { iniciativa: Number(e.target.value) || 0 });
        actualizarVistaRoster();
      };
      inp.onkeydown = (e) => {
        if (e.key === 'Enter') inp.blur();
      };
    } else {
      inp.onchange = (e) => {
        const val = e.target.value;
        const cambios = {};
        if (campo === 'nombre') cambios.nombre = val;
        else if (campo === 'hp') cambios.hp = Number(val) || 0;
        else if (campo === 'maxHp') cambios.maxHp = Number(val) || 1;
        else if (campo === 'ca') cambios.ca = Number(val) || 0;
        rastreador.actualizarCombatiente(uid, cambios);
        actualizarVistaRoster();
      };
      inp.onkeydown = (e) => {
        if (e.key === 'Enter') inp.blur();
      };
    }
  });

  // Alternar Tipo (PJ / PNJ)
  rosterLista.querySelectorAll('[data-accion="toggle-tipo"]').forEach((btn) => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const uid = Number(btn.dataset.uid);
      const estado = rastreador.obtenerEstado();
      const c = estado.combatientes.find((item) => item.uid === uid);
      if (!c) return;
      const nuevoTipo = c.tipo === 'pc' ? 'npc' : 'pc';
      rastreador.actualizarCombatiente(uid, { tipo: nuevoTipo });
      actualizarVistaRoster();
    };
  });

  // Alternar Bando (Aliado / Enemigo)
  rosterLista.querySelectorAll('[data-accion="toggle-bando"]').forEach((btn) => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const uid = Number(btn.dataset.uid);
      const estado = rastreador.obtenerEstado();
      const c = estado.combatientes.find((item) => item.uid === uid);
      if (!c) return;
      const nuevoBando = c.bando === 'ally' ? 'enemy' : 'ally';
      rastreador.actualizarCombatiente(uid, { bando: nuevoBando });
      actualizarVistaRoster();
    };
  });

  // Relanzar iniciativa con 3D
  rosterLista.querySelectorAll('.btn-reroll-init').forEach((btn) => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const uid = Number(btn.dataset.uid);
      const nombre = btn.dataset.nombre || 'Combatiente';
      const desMod = Number(btn.dataset.desmod) || 0;
      const modStr = desMod !== 0 ? (desMod > 0 ? `+${desMod}` : `${desMod}`) : '';

      abrirModalDados({
        configTirada: {
          cantidad: 1,
          caras: 20,
          mod: desMod,
          etiqueta: `1d20${modStr}`,
          tipoDano: 'general',
          tipoTirada: 'iniciativa'
        },
        nombreMonstruo: nombre,
        nombreAccion: 'Relanzar Iniciativa',
        alTerminar: (res) => {
          rastreador.actualizarCombatiente(uid, { iniciativa: res.total });
          actualizarVistaRoster();
          setTimeout(() => {
            cerrarModalDados();
          }, 1400);
        }
      });
    };
  });

  // Eliminar combatiente
  rosterLista.querySelectorAll('[data-accion="eliminar"]').forEach((btn) => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const uid = Number(btn.dataset.uid);
      rastreador.eliminarCombatiente(uid);
      actualizarVistaRoster();
    };
  });
}

function enlazarEventosTracker() {
  const inNombre = document.getElementById('inTrackerNombre');
  const inInit = document.getElementById('inTrackerInit');
  const inHp = document.getElementById('inTrackerHp');
  const inAc = document.getElementById('inTrackerAc');
  const inTipo = document.getElementById('inTrackerTipo');
  const inBando = document.getElementById('inTrackerBando');
  const btnAgregar = document.getElementById('btn-tracker-agregar');
  const btnTirarInit = document.getElementById('btn-tirar-init-nuevo');
  const cajaSugerencias = document.getElementById('tracker-sugerencias-monstruos');

  // Dropdowns personalizados para Tipo y Bando (estilo compendio)
  const ddTipo = document.getElementById('dd-tracker-tipo');
  const resumenTipo = document.getElementById('resumen-tracker-tipo');

  function setTipoTracker(tipo) {
    if (inTipo) inTipo.value = tipo;
    if (resumenTipo) resumenTipo.textContent = tipo === 'pc' ? 'PJ' : 'PNJ';
    const radio = ddTipo?.querySelector(`input[name="tracker-tipo-radio"][value="${tipo}"]`);
    if (radio) radio.checked = true;
  }

  if (ddTipo) {
    ddTipo.querySelectorAll('input[name="tracker-tipo-radio"]').forEach((radio) => {
      radio.onchange = () => {
        setTipoTracker(radio.value);
        ddTipo.removeAttribute('open');
      };
    });
  }

  const ddBando = document.getElementById('dd-tracker-bando');
  const resumenBando = document.getElementById('resumen-tracker-bando');

  function setBandoTracker(bando) {
    if (inBando) inBando.value = bando;
    if (resumenBando) resumenBando.textContent = bando === 'ally' ? 'Aliado' : 'Enemigo';
    const radio = ddBando?.querySelector(`input[name="tracker-bando-radio"][value="${bando}"]`);
    if (radio) radio.checked = true;
  }

  if (ddBando) {
    ddBando.querySelectorAll('input[name="tracker-bando-radio"]').forEach((radio) => {
      radio.onchange = () => {
        setBandoTracker(radio.value);
        ddBando.removeAttribute('open');
      };
    });
  }

  document.addEventListener('click', (e) => {
    if (ddTipo && !ddTipo.contains(e.target)) ddTipo.removeAttribute('open');
    if (ddBando && !ddBando.contains(e.target)) ddBando.removeAttribute('open');
  });

  function cerrarSugerencias() {
    if (cajaSugerencias) {
      cajaSugerencias.style.display = 'none';
      cajaSugerencias.innerHTML = '';
    }
  }

  if (inNombre && cajaSugerencias) {
    inNombre.oninput = () => {
      const query = inNombre.value.trim();
      if (query.length < 1) {
        cerrarSugerencias();
        trackerMonstruoSeleccionado = null;
        trackerDesModActual = 0;
        return;
      }

      const qNorm = normalizar(query);
      const todos = compendio.obtenerTodosMonstruos();
      const itemsSugeridos = [];

      for (const m of todos) {
        if (itemsSugeridos.length >= 18) break;

        const nomNorm = normalizar(m.nombre || '');
        const idNorm = normalizar(m.id || '');
        const enNorm = normalizar(NOMBRES_INGLES[m.id] || '');
        const coincideBase = nomNorm.includes(qNorm) || idNorm.includes(qNorm) || enNorm.includes(qNorm);

        if (coincideBase) {
          itemsSugeridos.push({
            id: m.id,
            varianteId: null,
            nombreMostrar: m.nombre,
            monstruoRef: m,
            pg: Number(m.pg) || 10,
            ca: m.ca,
            des: m.atributos && m.atributos.des !== undefined ? m.atributos.des : 10
          });
        }

        // Revisar variantes de la criatura si tiene
        if (Array.isArray(m.variantes) && m.variantes.length > 0) {
          for (const v of m.variantes) {
            if (itemsSugeridos.length >= 18) break;
            const varNomNorm = normalizar(v.nombre || '');
            const coincideVariante = coincideBase || varNomNorm.includes(qNorm);

            if (coincideVariante) {
              const nombreConVar = `${m.nombre} (${v.nombre})`;
              if (!itemsSugeridos.some((it) => it.nombreMostrar === nombreConVar)) {
                const mVar = compendio.aplicarVariante(m, v);
                itemsSugeridos.push({
                  id: m.id,
                  varianteId: v.id,
                  nombreMostrar: nombreConVar,
                  monstruoRef: mVar,
                  pg: Number(mVar.pg) || Number(m.pg) || 10,
                  ca: mVar.ca || m.ca,
                  des: (mVar.atributos && mVar.atributos.des !== undefined) ? mVar.atributos.des : (m.atributos?.des ?? 10)
                });
              }
            }
          }
        }
      }

      if (itemsSugeridos.length === 0) {
        cerrarSugerencias();
        return;
      }

      cajaSugerencias.innerHTML = renderizarSugerenciasMonstruos(itemsSugeridos);
      cajaSugerencias.style.display = 'block';

      // Click con ratón → carga todo el monstruo directamente
      cajaSugerencias.querySelectorAll('.sugerencia-item').forEach((item) => {
        item.onclick = (e) => {
          e.stopPropagation();
          cargarMonstruoDesdeItem(item);
          cerrarSugerencias();
          if (inInit) inInit.focus();
        };
      });
    };

    // Función que carga todos los datos del monstruo al formulario
    function cargarMonstruoDesdeItem(item) {
      const nombreSel = item.dataset.nombre;
      const pg = Number(item.dataset.pg) || 10;
      const caMatch = String(item.dataset.ca || '').match(/\d+/);
      const caVal = caMatch ? Number(caMatch[0]) : 10;
      const desVal = Number(item.dataset.des) || 10;

      inNombre.value = nombreSel;
      if (inHp) inHp.value = pg;
      if (inAc) inAc.value = caVal;

      setTipoTracker('npc');
      setBandoTracker('enemy');

      trackerDesModActual = Math.floor((desVal - 10) / 2);
      if (inInit) {
        inInit.placeholder = trackerDesModActual >= 0 ? `+${trackerDesModActual}` : `${trackerDesModActual}`;
      }

      const mId = item.dataset.id;
      const base = compendio.obtenerMonstruoPorId(mId);
      const vId = item.dataset.varianteId;
      const variante = (base && Array.isArray(base.variantes)) ? base.variantes.find((v) => v.id === vId) : null;
      trackerMonstruoSeleccionado = (base && variante) ? compendio.aplicarVariante(base, variante) : base;
    }

    let indiceSugerido = -1;

    function resaltarSugerencia(items, nuevoIndice) {
      items.forEach((it, i) => {
        it.classList.toggle('sugerencia-resaltada', i === nuevoIndice);
        if (i === nuevoIndice) {
          it.scrollIntoView({ block: 'nearest' });
        }
      });
    }

    inNombre.onkeydown = (e) => {
      const items = cajaSugerencias
        ? Array.from(cajaSugerencias.querySelectorAll('.sugerencia-item'))
        : [];
      const visible = cajaSugerencias && cajaSugerencias.style.display !== 'none' && items.length > 0;

      if (e.key === 'ArrowDown') {
        if (!visible) return;
        e.preventDefault();
        indiceSugerido = (indiceSugerido + 1) % items.length;
        resaltarSugerencia(items, indiceSugerido);
      } else if (e.key === 'ArrowUp') {
        if (!visible) return;
        e.preventDefault();
        indiceSugerido = (indiceSugerido - 1 + items.length) % items.length;
        resaltarSugerencia(items, indiceSugerido);
      } else if (e.key === 'Enter') {
        if (visible && indiceSugerido >= 0 && items[indiceSugerido]) {
          // El primer Enter selecciona y carga los datos predeterminados.
          e.preventDefault();
          e.stopImmediatePropagation();
          cargarMonstruoDesdeItem(items[indiceSugerido]);
          cerrarSugerencias();
          indiceSugerido = -1;
        }
        // El segundo Enter, ya sin sugerencias visibles, añade el combatiente.
      } else if (e.key === 'Escape') {
        cerrarSugerencias();
        indiceSugerido = -1;
      } else {
        indiceSugerido = -1;
      }
    };

    document.addEventListener('click', (e) => {
      if (cajaSugerencias && !cajaSugerencias.contains(e.target) && e.target !== inNombre) {
        cerrarSugerencias();
      }
    });
  }

  // Tirar iniciativa en el formulario con 3D
  if (btnTirarInit) {
    btnTirarInit.onclick = () => {
      const nombre = (inNombre && inNombre.value.trim()) || (trackerMonstruoSeleccionado && trackerMonstruoSeleccionado.nombre) || 'Iniciativa';
      const mod = trackerDesModActual || 0;
      const modStr = mod !== 0 ? (mod > 0 ? `+${mod}` : `${mod}`) : '';

      abrirModalDados({
        configTirada: {
          cantidad: 1,
          caras: 20,
          mod: mod,
          etiqueta: `1d20${modStr}`,
          tipoDano: 'general',
          tipoTirada: 'iniciativa'
        },
        nombreMonstruo: nombre,
        nombreAccion: 'Tirada de Iniciativa',
        alTerminar: (res) => {
          if (inInit) {
            inInit.value = res.total;
          }
          setTimeout(() => {
            cerrarModalDados();
          }, 1400);
        }
      });
    };
  }

  // Agregar combatiente
  function ejecutarAgregar() {
    const nombre = inNombre ? inNombre.value.trim() : '';
    if (!nombre) {
      if (inNombre) inNombre.focus();
      return;
    }

    const iniciativa = inInit && inInit.value !== '' ? Number(inInit.value) : (trackerDesModActual || 0);
    const hp = Number(inHp ? inHp.value : 0) || 10;
    const ac = Number(inAc ? inAc.value : 0) || 10;
    const tipo = inTipo ? inTipo.value : 'npc';
    const bando = inBando ? inBando.value : 'enemy';
    const monstruoId = trackerMonstruoSeleccionado ? trackerMonstruoSeleccionado.id : null;

    rastreador.agregarCombatiente({
      nombre,
      iniciativa,
      hp,
      maxHp: hp,
      ca: ac,
      tipo,
      bando,
      monstruoId,
      desMod: trackerDesModActual
    });

    if (rastreador.obtenerEstado().combatientes.length === 1) {
      relojMundo.pausarPorInicioCombate();
      actualizarVistaReloj();
    }

    // Resetear formulario
    if (inNombre) inNombre.value = '';
    if (inInit) {
      inInit.value = '';
      inInit.placeholder = 'd20';
    }
    if (inHp) inHp.value = '';
    if (inAc) inAc.value = '';
    setTipoTracker('npc');
    setBandoTracker('enemy');
    trackerMonstruoSeleccionado = null;
    trackerDesModActual = 0;
    cerrarSugerencias();

    actualizarVistaRoster();
    if (inNombre) inNombre.focus();
  }


  if (btnAgregar) {
    btnAgregar.onclick = ejecutarAgregar;
  }

  [inNombre, inInit, inHp, inAc].forEach((input) => {
    if (input) {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          ejecutarAgregar();
        }
      });
    }
  });

  // Botones de Ronda y Turno
  const btnNext = document.getElementById('btn-tracker-next-turn');
  if (btnNext) {
    btnNext.onclick = () => {
      rastreador.siguienteTurno();
      manejarEventosVencidos(relojMundo.avanzarPorTurno());
      actualizarVistaRoster();
      actualizarVistaReloj();
    };
  }

  const btnPrev = document.getElementById('btn-tracker-prev-turn');
  if (btnPrev) {
    btnPrev.onclick = () => {
      rastreador.anteriorTurno();
      actualizarVistaRoster();
    };
  }

  const btnOrdenar = document.getElementById('btn-tracker-ordenar');
  if (btnOrdenar) {
    btnOrdenar.onclick = () => {
      rastreador.ordenarCombatientes();
      actualizarVistaRoster();
    };
  }

  const btnReiniciarRonda = document.getElementById('btn-tracker-reiniciar-ronda');
  if (btnReiniciarRonda) {
    btnReiniciarRonda.onclick = () => {
      if (confirm('¿Deseas reiniciar la ronda a 1?')) {
        rastreador.reiniciarRonda();
        actualizarVistaRoster();
      }
    };
  }

  const btnVaciar = document.getElementById('btn-tracker-vaciar');
  if (btnVaciar) {
    btnVaciar.onclick = () => {
      if (confirm('¿Estás seguro de que deseas vaciar todos los combatientes del encuentro?')) {
        rastreador.vaciarRegistro();
        actualizarVistaRoster();
      }
    };
  }

  enlazarEventosRoster();
}

function render() {
  cerrarZoomImagen();
  cerrarPopoverDistancia();
  cerrarModalDados();

  const ruta = analizarHash();
  const app  = document.getElementById('app');

  actualizarTabsNavegacion(ruta.vista);

  if (ruta.vista === 'iniciativa') {
    app.innerHTML = vistaTracker({ estado: rastreador.obtenerEstado(), estadoReloj: relojMundo.obtenerEstado() });
    enlazarEventosTracker();
    enlazarEventosReloj();
  } else if (ruta.vista === 'detalle') {
    const base     = compendio.obtenerMonstruoPorId(ruta.id);
    const variante = compendio.obtenerVarianteSeleccionada(base);
    const monstruo = base ? compendio.aplicarVariante(base, variante) : null;
    app.innerHTML = vistaDetalle({
      monstruoBase: base,
      monstruo,
      varianteSeleccionada: variante,
      obtenerFuenteImagen: compendio.obtenerFuenteImagen,
      tipoColor: TIPO_COLOR,
    });
    enlazarEventosDetalle(ruta.id, monstruo && monstruo.nombre);
  } else {
    const todos      = compendio.obtenerTodosMonstruos();
    const resultados = compendio.calcularResultados();
    const panel = construirPanelResultados({
      todos,
      resultados,
      paginaActual: compendio.getPaginaActual(),
      tamPagina: TAM_PAGINA,
      obtenerFuenteImagen: compendio.obtenerFuenteImagen,
      tipoColor: TIPO_COLOR,
      obtenerVariantesConCr: compendio.obtenerVariantesConCr,
    });
    compendio.setPaginaActual(panel.pagina);
    const crsExactos = [...new Set(
      todos.flatMap((m) => compendio.obtenerCrsFiltrables(m))
    )].sort((a, b) => a - b);
    app.innerHTML = vistaLista({ filtros: compendio.filtros, crsExactos, panelResultadosHtml: panel.html });
    enlazarEventosLista();
  }

  window.scrollTo(0, 0);
}

window.manejarErrorImagen = (imgEl, id) => {
  const monstruo = compendio.obtenerMonstruoPorId(id);
  if (monstruo) imgEl.outerHTML = retratoProcedural(monstruo, TIPO_COLOR);
};

window.addEventListener('hashchange', render);
setInterval(() => {
  const vencidos = relojMundo.tickTiempoReal(1);
  if (vencidos.length > 0) manejarEventosVencidos(vencidos);
  if (relojMundo.estaReproduciendo() || vencidos.length > 0) actualizarVistaReloj();
}, 1000);
imagenesListas.then(() => {
  if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', render);
  else render();
});

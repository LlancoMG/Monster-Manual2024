import { TAM_PAGINA, TIPO_COLOR } from './features/constants.js';
import { crearCompendio } from './features/monster-model.js';
import { imagenesListas } from './features/storage.js';
import { construirPanelResultados, retratoProcedural, vistaDetalle } from './ui/monster-views.js';
import { vistaLista } from './ui/filtros-views.js';

const BASE_CREATURES = Array.isArray(window.Monstruos) ? window.Monstruos : [];
const compendio = crearCompendio(BASE_CREATURES);

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
  if (unidad === 'metros') return (pies * 0.3048).toFixed(1);
  if (unidad === 'casillas') return String(pies / 5);
  return String(pies);
}
function sufijoUnidad(unidad, valorUnico) {
  if (unidad === 'metros') return 'm';
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
  const rectSpan = span.getBoundingClientRect();
  const anchoPopover = popover.offsetWidth;
  let izquierda = rectSpan.left + window.scrollX;
  const limiteDerecho = window.scrollX + document.documentElement.clientWidth - anchoPopover - 8;
  if (izquierda > limiteDerecho) izquierda = Math.max(8, limiteDerecho);
  popover.style.left = `${izquierda}px`;
  popover.style.top = `${rectSpan.bottom + window.scrollY + 4}px`;
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
    span.onclick = (evento) => { evento.stopPropagation(); abrirPopoverDistancia(span); };
    span.onkeydown = (evento) => {
      if (evento.key === 'Enter' || evento.key === ' ') { evento.preventDefault(); abrirPopoverDistancia(span); }
    };
  });
  actualizarTextoDistancias(); // aplica la unidad ya elegida si no es "pies"
}

function analizarHash() {
  const hash = location.hash || '#/';
  const partes = hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  if (partes[0] === 'monstruo' && partes[1]) return { vista: 'detalle', id: decodeURIComponent(partes[1]) };
  return { vista: 'lista' };
}
function irA(hash) { location.hash = hash; }
function enlazarEventosPanelResultados() {
  // Las tarjetas ahora son <a href="#/monstruo/..."> reales (ver monster-views.js),
  // así que la navegación con clic izquierdo, ctrl/cmd+clic, clic central y
  // clic derecho → "Abrir en pestaña nueva" ya funciona sola, sin JS.
  const btnAnterior = document.getElementById('btn-pag-anterior');
  const btnSiguiente = document.getElementById('btn-pag-siguiente');
  if (btnAnterior) btnAnterior.onclick = () => { compendio.setPaginaActual(compendio.getPaginaActual() - 1); actualizarPanelResultados(); };
  if (btnSiguiente) btnSiguiente.onclick = () => { compendio.setPaginaActual(compendio.getPaginaActual() + 1); actualizarPanelResultados(); };
  const btnLimpiarVacio = document.getElementById('btn-limpiar-vacio');
  if (btnLimpiarVacio) btnLimpiarVacio.onclick = () => { compendio.resetFiltros(); render(); };
}
function actualizarPanelResultados() {
  const panelResultados = document.querySelectorAll('.panel')[1];
  const todos = compendio.obtenerTodosMonstruos();
  const resultados = compendio.calcularResultados();
  const panel = construirPanelResultados({
    todos, resultados, paginaActual: compendio.getPaginaActual(), tamPagina: TAM_PAGINA,
    obtenerFuenteImagen: compendio.obtenerFuenteImagen, tipoColor: TIPO_COLOR,
    obtenerVariantesConCr: compendio.obtenerVariantesConCr
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
  enlazarDropdownSimple('f-rango', (v) => { compendio.filtros.rango = v; });
  enlazarDropdownSimple('f-cr-exacto', (v) => { compendio.filtros.crExacto = v; });
  enlazarDropdownSimple('f-tipo', (v) => { compendio.filtros.tipo = v; });
  enlazarDropdownSimple('f-tamano', (v) => { compendio.filtros.tamano = v; });
  enlazarDropdownSimple('f-orden', (v) => { compendio.filtros.orden = v; });
  document.querySelectorAll('.f-habitat-item').forEach((chk) => {
    chk.onchange = () => {
      compendio.filtros.habitat = Array.from(document.querySelectorAll('.f-habitat-item:checked')).map((c) => c.value);
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
  const btnImportar = byId('btn-importar');
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
        } catch (error) { alert(`No se pudo importar el archivo: ${error.message}`); }
      };
      lector.readAsText(archivo);
    };
  }
}
// ===================== ZOOM DE IMAGEN DE LA FICHA =====================
// El retrato ampliado se muestra en un overlay `position:fixed` centrado en
// pantalla (no un transform sobre el propio elemento de la ficha), para que
// la imagen completa siempre entre en cualquier resolución y quede centrada.
// Se cierra con Escape, con clic fuera de la imagen o con el botón ×.
// Importante: esto NO toca el marcado ni los estilos de `.ficha-imagen`
// (el retrato sin ampliar dentro de la ficha queda intacto).
function manejarEscZoomImagen(evento) {
  if (evento.key === 'Escape') cerrarZoomImagen();
}
function cerrarZoomImagen() {
  const fondo = document.querySelector('.zoom-imagen-fondo');
  if (fondo) fondo.remove();
  document.removeEventListener('keydown', manejarEscZoomImagen);
}
function abrirZoomImagen(contenidoHtml, nombreMonstruo) {
  cerrarZoomImagen(); // por si quedó uno abierto
  const fondo = document.createElement('div');
  fondo.className = 'zoom-imagen-fondo';
  fondo.setAttribute('role', 'dialog');
  fondo.setAttribute('aria-modal', 'true');
  fondo.setAttribute('aria-label', `Imagen ampliada de ${nombreMonstruo}`);
  fondo.innerHTML = `
    <button type="button" class="zoom-imagen-cerrar" aria-label="Cerrar imagen ampliada">×</button>
    <div class="zoom-imagen-contenido">${contenidoHtml}</div>`;
  document.body.appendChild(fondo);
  // Clic en el fondo oscuro (fuera de la imagen) cierra el zoom.
  fondo.onclick = (evento) => { if (evento.target === fondo) cerrarZoomImagen(); };
  fondo.querySelector('.zoom-imagen-cerrar').onclick = cerrarZoomImagen;
  document.addEventListener('keydown', manejarEscZoomImagen);
  fondo.querySelector('.zoom-imagen-cerrar').focus();
}
function enlazarEventosZoomImagenFicha(nombreMonstruo) {
  const imagenFicha = document.getElementById('ficha-imagen-principal');
  if (!imagenFicha) return;
  const activarZoom = () => abrirZoomImagen(imagenFicha.innerHTML, nombreMonstruo || '');
  imagenFicha.onclick = activarZoom;
  imagenFicha.onkeydown = (evento) => {
    if (evento.key === 'Enter' || evento.key === ' ') { evento.preventDefault(); activarZoom(); }
  };
}
function enlazarEventosDetalle(id, nombreMonstruo) {
  const btnVolver = document.getElementById('btn-volver');
  if (btnVolver) btnVolver.onclick = () => irA('#/');
  const selectorVariante = document.getElementById('selector-variante');
  if (selectorVariante) selectorVariante.onchange = (e) => { compendio.guardarVarianteSeleccionada(id, e.target.value); render(); };
  enlazarEventosZoomImagenFicha(nombreMonstruo);
  enlazarEventosDistancias();
}
function render() {
  cerrarZoomImagen();
  cerrarPopoverDistancia();
  const ruta = analizarHash();
  const app = document.getElementById('app');
  if (ruta.vista === 'detalle') {
    const base = compendio.obtenerMonstruoPorId(ruta.id);
    const variante = compendio.obtenerVarianteSeleccionada(base);
    const monstruo = base ? compendio.aplicarVariante(base, variante) : null;
    app.innerHTML = vistaDetalle({
      monstruoBase: base, monstruo, varianteSeleccionada: variante,
      obtenerFuenteImagen: compendio.obtenerFuenteImagen, tipoColor: TIPO_COLOR
    });
    enlazarEventosDetalle(ruta.id, monstruo && monstruo.nombre);
  } else {
    const todos = compendio.obtenerTodosMonstruos();
    const resultados = compendio.calcularResultados();
    const panel = construirPanelResultados({
      todos, resultados, paginaActual: compendio.getPaginaActual(), tamPagina: TAM_PAGINA,
      obtenerFuenteImagen: compendio.obtenerFuenteImagen, tipoColor: TIPO_COLOR,
      obtenerVariantesConCr: compendio.obtenerVariantesConCr
    });
    compendio.setPaginaActual(panel.pagina);
    const crsExactos = [...new Set(todos.flatMap((m) => compendio.obtenerCrsFiltrables(m)))].sort((a, b) => a - b);
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
imagenesListas.then(() => {
  if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', render);
  else render();
});

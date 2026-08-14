import { TAM_PAGINA, TIPO_COLOR } from './features/constants.js';
import { crearCompendio } from './features/monster-model.js';
import { imagenesListas } from './features/storage.js';
import { construirPanelResultados, retratoProcedural, vistaDetalle } from './ui/monster-views.js';
import { vistaLista } from './ui/filtros-views.js';

const BASE_CREATURES = Array.isArray(window.Monstruos) ? window.Monstruos : [];
const compendio = crearCompendio(BASE_CREATURES);

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
function abrirModalImagen(id) {
  const monstruo = compendio.obtenerMonstruoPorId(id);
  if (!monstruo) return;
  const fondo = document.createElement('div');
  fondo.className = 'modal-fondo';
  fondo.innerHTML = `<div class="modal-caja" role="dialog" aria-modal="true" aria-label="Cambiar imagen de ${monstruo.nombre}">
    <h3>Cambiar imagen — ${monstruo.nombre}</h3>
    <label>Pegar una URL de imagen</label><input type="text" id="modal-url" placeholder="https://...">
    <label>o subir un archivo desde tu equipo</label><input type="file" id="modal-file" accept="image/*">
    <div class="modal-acciones">
      <button class="accion" id="modal-guardar">Guardar</button>
      <button class="accion fantasma" id="modal-cancelar">Cancelar</button>
    </div></div>`;
  document.body.appendChild(fondo);
  fondo.querySelector('#modal-cancelar').onclick = () => fondo.remove();
  fondo.onclick = (evento) => { if (evento.target === fondo) fondo.remove(); };
  fondo.querySelector('#modal-guardar').onclick = async () => {
    const url = fondo.querySelector('#modal-url').value.trim();
    const archivo = fondo.querySelector('#modal-file').files[0];
    if (archivo) {
      const lector = new FileReader();
      lector.onload = async (evento) => {
        try { await compendio.guardarImagenCustom(id, evento.target.result); fondo.remove(); render(); }
        catch (error) { alert(`No se pudo guardar la imagen: ${error.message || error}`); }
      };
      lector.readAsDataURL(archivo);
    } else if (url) {
      try { await compendio.guardarImagenCustom(id, url); fondo.remove(); render(); }
      catch (error) { alert(`No se pudo guardar la imagen: ${error.message || error}`); }
    } else { alert('Pega una URL o elige un archivo antes de guardar.'); }
  };
}
function enlazarEventosZoomImagenFicha() {
  const imagenFicha = document.getElementById('ficha-imagen-principal');
  if (!imagenFicha) return;
  const alternarZoom = () => {
    const ampliada = imagenFicha.classList.toggle('ficha-imagen-ampliada');
    imagenFicha.setAttribute('aria-pressed', ampliada ? 'true' : 'false');
  };
  imagenFicha.onclick = alternarZoom;
  imagenFicha.onkeydown = (evento) => {
    if (evento.key === 'Enter' || evento.key === ' ') { evento.preventDefault(); alternarZoom(); }
  };
}
function enlazarEventosDetalle(id) {
  const btnVolver = document.getElementById('btn-volver');
  if (btnVolver) btnVolver.onclick = () => irA('#/');
  const btnCambiar = document.getElementById('btn-cambiar-imagen');
  const btnRestaurar = document.getElementById('btn-restaurar-imagen');
  const selectorVariante = document.getElementById('selector-variante');
  if (btnCambiar) btnCambiar.onclick = () => abrirModalImagen(id);
  if (btnRestaurar) btnRestaurar.onclick = async () => { await compendio.borrarImagenCustom(id); render(); };
  if (selectorVariante) selectorVariante.onchange = (e) => { compendio.guardarVarianteSeleccionada(id, e.target.value); render(); };
  enlazarEventosZoomImagenFicha();
}
function render() {
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
    enlazarEventosDetalle(ruta.id);
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

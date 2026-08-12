import { TIPOS, TAMANOS, HABITATS, HABITAT_ESTILO } from '../features/constants.js';
import { crAFraccion } from '../features/utils.js';

// Estilos compartidos: TODOS los controles de filtro usan la misma piel
// (caja pergamino con flecha ▾ y panel desplegable con chips), igual que el de hábitat.
const ESTILOS_FILTROS = `<style>
.campo-filtro{position:relative;min-width:170px;}
.control-filtro{width:100%;box-sizing:border-box;font-family:'EB Garamond',serif;font-size:15px;padding:7px 9px;border:1px solid #b8a878;border-radius:6px;background:#fbf6e9;color:var(--tinta);}
.dd-filtro>summary{list-style:none;position:relative;cursor:pointer;padding-right:26px;}
.dd-filtro>summary::-webkit-details-marker{display:none;}
.dd-filtro>summary::after{content:'▾';position:absolute;right:10px;top:50%;transform:translateY(-50%);color:var(--tinta-suave);transition:transform .15s;}
.dd-filtro[open]>summary::after{transform:translateY(-50%) rotate(180deg);}
.dd-filtro[open]>summary,.dd-filtro>summary:focus-visible{outline:3px solid var(--oro-claro);outline-offset:2px;border-color:var(--oro);}
.dd-panel{position:absolute;top:100%;left:0;z-index:20;background:var(--pergamino);border:1px solid var(--oro);border-radius:8px;padding:10px;margin-top:4px;box-shadow:0 10px 24px rgba(0,0,0,.35);}
.dd-panel-rejilla{display:grid;grid-template-columns:repeat(3,minmax(150px,1fr));gap:6px;width:520px;}
.dd-panel-columna{display:flex;flex-direction:column;gap:6px;min-width:210px;}
.chip-opcion{display:flex;align-items:center;gap:6px;padding:4px 8px;border-radius:6px;font-family:'EB Garamond',serif;font-size:13.5px;font-weight:600;background:#fbf6e9;border:1px solid #b8a878;color:var(--tinta-suave);cursor:pointer;opacity:.6;}
.chip-opcion:has(input:checked){opacity:1;box-shadow:inset 0 0 0 2px var(--oro);}
.chip-opcion input{transform:scale(1.2);accent-color:var(--oro);}
</style>`;

function dropdownSimpleHtml({ id, etiqueta, opciones, valorActual, textoActual }) {
  return `
  <div class="campo-filtro">
    <label>${etiqueta}</label>
    <details class="dd-filtro" id="dd-${id}">
      <summary class="control-filtro">${textoActual}</summary>
      <div class="dd-panel dd-panel-columna">
        ${opciones.map(([valor, texto]) => `
        <label class="chip-opcion">
          <input type="radio" name="f-${id}" value="${valor}" ${valor === valorActual ? 'checked' : ''}>${texto}
        </label>`).join('')}
      </div>
    </details>
  </div>`;
}
function dropdownHabitatHtml(seleccionados) {
  const resumen = seleccionados.length === 0 ? 'Todos'
    : seleccionados.length === 1 ? seleccionados[0]
    : `${seleccionados.length} hábitats seleccionados`;
  return `
  <div class="campo-filtro">
    <label>Hábitat</label>
    <details class="dd-filtro" id="dd-habitat">
      <summary class="control-filtro">${resumen}</summary>
      <div class="dd-panel dd-panel-rejilla">
        ${HABITATS.map((h) => {
          const estilo = HABITAT_ESTILO[h] || {};
          return `
          <label class="chip-opcion" style="background:${estilo.fondo || '#fbf6e9'};border-color:${estilo.borde || '#b8a878'};color:${estilo.texto || 'var(--tinta-suave)'}">
            <input type="checkbox" class="f-habitat-item" value="${h}" ${seleccionados.includes(h) ? 'checked' : ''}>${h}
          </label>`;
        }).join('')}
      </div>
    </details>
  </div>`;
}
export function vistaLista({ filtros, crsExactos, panelResultadosHtml }) {
  const opcionesRango = [['todos', 'Todos'], ['0-4', 'Bajo (CR 0–4)'], ['5-10', 'Medio (CR 5–10)'], ['11-16', 'Alto (CR 11–16)'], ['17+', 'Mortal (CR 17+)']];
  const textoRango = (opcionesRango.find(([v]) => v === filtros.rango) || ['', 'Todos'])[1];
  const opcionesCr = [['todos', 'Todos'], ...crsExactos.map((cr) => [String(cr), crAFraccion(cr)])];
  const textoCr = filtros.crExacto === 'todos' ? 'Todos' : crAFraccion(Number(filtros.crExacto));
  const opcionesTipo = [['todos', 'Todos'], ...TIPOS.map((t) => [t, t])];
  const opcionesTamano = [['todos', 'Todos'], ...TAMANOS.map((t) => [t, t])];
  const opcionesOrden = [['nombre_asc', 'Nombre (A→Z)'], ['nombre_desc', 'Nombre (Z→A)'], ['cr_asc', 'CR (menor→mayor)'], ['cr_desc', 'CR (mayor→menor)']];
  const textoOrden = (opcionesOrden.find(([v]) => v === filtros.orden) || ['', ''])[1];
  return `
  ${ESTILOS_FILTROS}
  <div class="panel">
    <h2>Buscar en el compendio</h2>
    <div class="fila">
      <div class="campo-filtro" style="flex:2;min-width:260px;">
        <label>Nombre (español o inglés)</label>
        <input type="text" id="f-q" class="control-filtro" value="${filtros.q}" placeholder="ej. dragón, goblin, beholder, dragon...">
      </div>
      ${dropdownSimpleHtml({ id: 'rango', etiqueta: 'Rango de peligro', opciones: opcionesRango, valorActual: filtros.rango, textoActual: textoRango })}
      ${dropdownSimpleHtml({ id: 'cr-exacto', etiqueta: 'CR exacto', opciones: opcionesCr, valorActual: filtros.crExacto, textoActual: textoCr })}
    </div>
    <div class="fila">
      ${dropdownSimpleHtml({ id: 'tipo', etiqueta: 'Tipo', opciones: opcionesTipo, valorActual: filtros.tipo, textoActual: filtros.tipo === 'todos' ? 'Todos' : filtros.tipo })}
      ${dropdownSimpleHtml({ id: 'tamano', etiqueta: 'Tamaño', opciones: opcionesTamano, valorActual: filtros.tamano, textoActual: filtros.tamano === 'todos' ? 'Todos' : filtros.tamano })}
      ${dropdownSimpleHtml({ id: 'orden', etiqueta: 'Ordenar por', opciones: opcionesOrden, valorActual: filtros.orden, textoActual: textoOrden })}
      ${dropdownHabitatHtml(filtros.habitat)}
    </div>
    <div class="botones-filtro">
      <button class="accion fantasma" id="btn-limpiar">Limpiar filtros</button>
    </div>
  </div>
  <div class="panel">${panelResultadosHtml}</div>
  <p class="footer-nota">Creado por <a href="https://github.com/LlancoMG" target="_blank" rel="noopener noreferrer">LlancoMG</a>.</p>`;
}
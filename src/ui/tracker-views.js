// src/ui/tracker-views.js
// Vistas y plantillas HTML para el Rastreador de Iniciativa y Registro de Batalla.

import { escapeHtml } from '../features/utils.js';

export function vistaTracker({ estado }) {
  const { combatientes, indiceActivo, ronda } = estado;
  const combatienteActivo = combatientes.length > 0 ? combatientes[indiceActivo] : null;

  return `
    <div class="tracker-contenedor">
      <div class="tracker-cabecera-batalla">
        <div class="eyebrow tracker-eyebrow">Sesión de Mesa &bull; Encuentro Activo</div>
        <h1 class="tracker-titulo-principal">Registro de Batalla</h1>
        <div class="rule tracker-rule"></div>

        <div class="round-bar tracker-round-bar">
          <button type="button" class="btn icon-btn" id="btn-tracker-prev-turn" title="Turno anterior">◂</button>

          <div class="round-badge tracker-round-badge">
            <div class="round-num" id="tracker-ronda-num">${ronda}</div>
            <div class="round-label">Ronda</div>
            <div class="tracker-turno-actual">
              ${combatienteActivo
                ? `<span class="turno-indicador">Turno:</span> <b class="turno-nombre-activo">${escapeHtml(combatienteActivo.nombre)}</b>`
                : '<span class="turno-vacio">Sin combatientes</span>'}
            </div>
          </div>

          <button type="button" class="btn-primary btn-siguiente-turno" id="btn-tracker-next-turn" title="Avanzar siguiente turno">
            Siguiente turno ▸
          </button>
        </div>
      </div>

      <div class="panel tracker-form-panel">
        <h2 class="form-titulo">Añadir Combatiente</h2>
        <div class="tracker-add-grid">
          <div class="campo-autocompletar-wrapper">
            <label for="inTrackerNombre" class="field-label">Nombre</label>
            <div class="input-con-sugerencias">
              <input type="text" id="inTrackerNombre" placeholder="Ej: Goblin, Dragón..." autocomplete="off">
              <div class="sugerencias-desplegable" id="tracker-sugerencias-monstruos" style="display:none;"></div>
            </div>
          </div>

          <div class="campo-init-wrapper">
            <label for="inTrackerInit" class="field-label">Iniciativa</label>
            <div class="input-con-dado">
              <input type="number" id="inTrackerInit" placeholder="d20" class="input-mono">
              <button type="button" class="btn-dado-init" id="btn-tirar-init-nuevo" title="Lanzar d20 de iniciativa en 3D">
                🎲 Tirar
              </button>
            </div>
          </div>

          <div>
            <label for="inTrackerHp" class="field-label">PV</label>
            <input type="number" id="inTrackerHp" placeholder="PV" min="0" class="input-mono">
          </div>

          <div>
            <label for="inTrackerAc" class="field-label">CA</label>
            <input type="number" id="inTrackerAc" placeholder="CA" min="0" class="input-mono">
          </div>

          <div class="campo-filtro campo-tracker-dd">
            <label class="field-label">Tipo</label>
            <details class="dd-filtro dd-tracker" id="dd-tracker-tipo">
              <summary class="control-filtro" id="resumen-tracker-tipo">PNJ</summary>
              <div class="dd-panel dd-panel-columna dd-panel-tracker">
                <label class="chip-opcion chip-tracker">
                  <input type="radio" name="tracker-tipo-radio" value="npc" checked> PNJ
                </label>
                <label class="chip-opcion chip-tracker">
                  <input type="radio" name="tracker-tipo-radio" value="pc"> PJ
                </label>
              </div>
            </details>
            <input type="hidden" id="inTrackerTipo" value="npc">
          </div>

          <div class="campo-filtro campo-tracker-dd">
            <label class="field-label">Bando</label>
            <details class="dd-filtro dd-tracker" id="dd-tracker-bando">
              <summary class="control-filtro" id="resumen-tracker-bando">Enemigo</summary>
              <div class="dd-panel dd-panel-columna dd-panel-tracker">
                <label class="chip-opcion chip-tracker">
                  <input type="radio" name="tracker-bando-radio" value="enemy" checked> Enemigo
                </label>
                <label class="chip-opcion chip-tracker">
                  <input type="radio" name="tracker-bando-radio" value="ally"> Aliado
                </label>
              </div>
            </details>
            <input type="hidden" id="inTrackerBando" value="enemy">
          </div>

          <div class="campo-boton-agregar">
            <button type="button" class="btn-primary btn-agregar-combatiente" id="btn-tracker-agregar">
              + Añadir
            </button>
          </div>
        </div>
      </div>

      <div class="tracker-roster-seccion">
        <div class="tracker-roster-header">
          <h2 class="tracker-roster-titulo">Orden de Batalla (${combatientes.length})</h2>
          <div class="tracker-roster-ayuda">Haz clic en cualquier valor para editarlo en vivo</div>
        </div>

        <div id="tracker-empty-state" class="vacio tracker-vacio" style="${combatientes.length === 0 ? '' : 'display:none;'}">
          La mesa está en silencio. Añade combatientes arriba para comenzar el encuentro.
        </div>

        <div class="roster tracker-roster-lista" id="tracker-roster-lista">
          ${renderizarListaCombatientes(estado)}
        </div>
      </div>

      <div class="controls-bottom tracker-controles-pie">
        <button type="button" class="btn" id="btn-tracker-ordenar" title="Reordenar lista por iniciativa">
          Reordenar por iniciativa
        </button>
        <button type="button" class="btn" id="btn-tracker-reiniciar-ronda" title="Reiniciar ronda a 1">
          Reiniciar ronda a 1
        </button>
        <button type="button" class="btn" id="btn-tracker-vaciar" title="Eliminar todos los combatientes">
          Vaciar registro
        </button>
      </div>
    </div>
  `;
}

export function renderizarListaCombatientes(estado) {
  const { combatientes, indiceActivo } = estado;
  if (!combatientes || combatientes.length === 0) return '';

  return combatientes.map((c, idx) => {
    const esActivo = idx === indiceActivo;
    const esCaido = c.hp <= 0;
    const porcentajeHp = c.maxHp > 0 ? Math.max(0, Math.min(100, Math.round((c.hp / c.maxHp) * 100))) : 0;
    const colorBarra = porcentajeHp > 50 ? '#4a7a52' : (porcentajeHp > 20 ? '#cfa233' : '#7a2e2e');

    return `
      <div class="card tracker-tarjeta ${c.bando} ${esActivo ? 'active' : ''} ${esCaido ? 'down' : ''}" data-uid="${c.uid}">
        <div class="tracker-col-init" title="Iniciativa (clic para editar o relanzar)">
          <div class="init-num tracker-init-box">
            <input type="number" class="tracker-input-init editable-inline input-mono" data-uid="${c.uid}" data-campo="iniciativa" value="${c.iniciativa}">
          </div>
          <button type="button" class="btn-reroll-init" data-uid="${c.uid}" data-nombre="${escapeHtml(c.nombre)}" data-desmod="${c.desMod || 0}" title="Relanzar 1d20 con dados 3D">🎲</button>
        </div>

        <div class="name-block tracker-col-info">
          <div class="name-row tracker-nombre-fila">
            <input type="text" class="cname-input tracker-input-nombre" data-uid="${c.uid}" data-campo="nombre" value="${escapeHtml(c.nombre)}" title="Clic para editar nombre">
            <span class="tag ${c.tipo} tracker-tag-toggle" data-uid="${c.uid}" data-accion="toggle-tipo" title="Alternar PJ / PNJ">${c.tipo === 'pc' ? 'PJ' : 'PNJ'}</span>
            <span class="tag ${c.bando === 'ally' ? 'pc' : 'npc'} tracker-tag-toggle" data-uid="${c.uid}" data-accion="toggle-bando" title="Alternar Aliado / Enemigo">${c.bando === 'ally' ? 'Aliado' : 'Enemigo'}</span>
            ${c.monstruoId ? `
              <a href="#/monstruo/${encodeURIComponent(c.monstruoId)}" class="tag tracker-tag-ficha" target="_blank" title="Abrir ficha del compendio">
                📖 Ficha
              </a>
            ` : ''}
          </div>

          <div class="tracker-condiciones-fila">
            <input type="text" class="cond-input tracker-input-condiciones" data-uid="${c.uid}" data-campo="condiciones" placeholder="condiciones (ej: aturdido, veneno)..." value="${escapeHtml(c.condiciones || '')}">
          </div>

          <div class="tracker-barra-hp-wrapper" title="${c.hp} / ${c.maxHp} PV">
            <div class="tracker-barra-hp" style="width:${porcentajeHp}%; background:${colorBarra};"></div>
          </div>
        </div>

        <div class="stat tracker-col-hp">
          <div class="stat-label">PV</div>
          <div class="hp-block">
            <div class="hp-display tracker-hp-display">
              <input type="number" class="tracker-input-hp-actual editable-inline input-mono" data-uid="${c.uid}" data-campo="hp" value="${c.hp}" min="0" title="PV actuales (clic para editar)">
              <span class="tracker-hp-separador">/</span>
              <input type="number" class="tracker-input-hp-max editable-inline input-mono" data-uid="${c.uid}" data-campo="maxHp" value="${c.maxHp}" min="1" title="PV máximos (clic para editar)">
            </div>
            <div class="hp-controls tracker-hp-controls">
              <input type="number" class="hp-amount tracker-hp-amount input-mono" data-uid="${c.uid}" data-campo="cantidad" placeholder="0" min="0" title="Escribe una cantidad y presiona Enter para restar vida">
              <button type="button" class="hp-btn heal" data-uid="${c.uid}" data-accion="heal" title="Sumar curación">+</button>
            </div>
          </div>
        </div>

        <div class="stat tracker-col-ac">
          <div class="stat-label">CA</div>
          <div class="ac-val">
            <input type="number" class="tracker-input-ac editable-inline input-mono" data-uid="${c.uid}" data-campo="ca" value="${c.ca}" min="0" title="Clase de armadura (clic para editar)">
          </div>
        </div>

        <div class="actions tracker-col-acciones">
          <button type="button" class="icon-btn danger" data-uid="${c.uid}" data-accion="eliminar" title="Eliminar combatiente">✕</button>
        </div>
      </div>
    `;
  }).join('');
}

export function renderizarSugerenciasMonstruos(items) {
  if (!items || items.length === 0) {
    return '';
  }

  return items.map((it) => `
    <div class="sugerencia-item" data-id="${it.id}" data-variante-id="${it.varianteId || ''}" data-nombre="${escapeHtml(it.nombreMostrar)}" data-pg="${it.pg || 10}" data-ca="${escapeHtml(String(it.ca || 10))}" data-des="${it.des !== undefined ? it.des : 10}">
      <span class="sugerencia-texto-nombre">${escapeHtml(it.nombreMostrar)}</span>
    </div>
  `).join('');
}

// src/ui/dice-modal.js
// Modal centrado para la visualización y ejecución interactiva de tiradas de dados 3D.
// Se despliega de forma similar al zoom de imagen, centrado en el bloque de la ficha.

import { alternarSilencioSonido, estaSonidoSilenciado } from '../features/dice-audio.js';
import { DANOS_INFO } from '../features/dice-parser.js';
import {
  inicializarEscenaDados,
  ejecutarTirada3D,
  redimensionarEscenaDados,
  limpiarEscenaDados
} from '../features/dice-3d.js';

let modalAbierto = false;
let configTiradaActual = null;
let resultadoActual = null;
let tiradaIdActual = 0;

function manejarEscModalDados(evento) {
  if (evento.key === 'Escape') cerrarModalDados();
}

function manejarResizeModalDados() {
  const canvas = document.getElementById('canvas-dados-3d');
  if (!canvas) return;
  const ancho = canvas.clientWidth;
  const alto = canvas.clientHeight;
  if (ancho > 0 && alto > 0) {
    redimensionarEscenaDados(ancho, alto);
  }
}

export function cerrarModalDados() {
  const fondo = document.querySelector('.modal-dados-fondo');
  if (fondo) fondo.remove();
  limpiarEscenaDados();
  modalAbierto = false;
  configTiradaActual = null;
  resultadoActual = null;
  document.removeEventListener('keydown', manejarEscModalDados);
  window.removeEventListener('resize', manejarResizeModalDados);
}

export function abrirModalDados({ configTirada, nombreMonstruo = '', nombreAccion = '' }) {
  cerrarModalDados(); // Evitar duplicados

  configTiradaActual = configTirada;
  modalAbierto = true;

  const infoDano = DANOS_INFO[configTirada.tipoDano] || DANOS_INFO.general;

  const fondo = document.createElement('div');
  fondo.className = 'modal-dados-fondo';
  fondo.setAttribute('role', 'dialog');
  fondo.setAttribute('aria-modal', 'true');
  fondo.setAttribute('aria-label', `Tirada de dados para ${configTirada.etiqueta}`);

  fondo.innerHTML = `
    <div class="modal-dados-caja" style="--color-tema:${infoDano.colorPrincipal}; --color-luz:${infoDano.luz};">
      <div class="modal-dados-cabecera">
        <div class="modal-dados-titulos">
          <h3 class="modal-dados-titulo-monstruo">${nombreMonstruo || 'Compendio D&D 2024'}</h3>
          <p class="modal-dados-subtitulo">${nombreAccion ? `<b>${nombreAccion}</b> — ` : ''}${configTirada.etiqueta}</p>
        </div>
        <div class="modal-dados-controles-top">
          <button type="button" class="btn-sonido-tirada" id="btn-sonido-dados" aria-label="Silenciar o activar sonido" title="Alternar sonido">${estaSonidoSilenciado() ? '🔇' : '🔊'}</button>
          <button type="button" class="modal-dados-cerrar" id="btn-cerrar-dados" aria-label="Cerrar tirada de dados">×</button>
        </div>
      </div>

      <div class="modal-dados-canvas-wrapper">
        <canvas id="canvas-dados-3d"></canvas>
      </div>

      <div class="modal-dados-panel-resultado" id="panel-resultado-dados">
        <div class="resultado-cargando">Lanzando dados en la canasta...</div>
      </div>

      <div class="modal-dados-acciones">
        <button type="button" class="accion" id="btn-retirar-dados">🎲 Volver a tirar</button>
        <button type="button" class="accion fantasma" id="btn-cerrar-dados-pie">Cerrar</button>
      </div>
    </div>
  `;

  document.body.appendChild(fondo);

  // Enlazar eventos de cierre y sonido
  fondo.onclick = (evento) => {
    if (evento.target === fondo) cerrarModalDados();
  };
  document.getElementById('btn-cerrar-dados').onclick = cerrarModalDados;
  document.getElementById('btn-cerrar-dados-pie').onclick = cerrarModalDados;

  const btnSonido = document.getElementById('btn-sonido-dados');
  if (btnSonido) {
    btnSonido.onclick = () => {
      const silenciado = alternarSilencioSonido();
      btnSonido.textContent = silenciado ? '🔇' : '🔊';
    };
  }

  const btnRetirar = document.getElementById('btn-retirar-dados');
  if (btnRetirar) {
    btnRetirar.onclick = () => realizarLanzamiento();
  }

  document.addEventListener('keydown', manejarEscModalDados);
  window.addEventListener('resize', manejarResizeModalDados);

  // Inicializar Three.js en el canvas
  const canvas = document.getElementById('canvas-dados-3d');
  const ancho = canvas.clientWidth || 440;
  const alto = canvas.clientHeight || 280;
  inicializarEscenaDados(canvas, ancho, alto);

  // Realizar primer lanzamiento
  realizarLanzamiento();
}

function realizarLanzamiento() {
  if (!configTiradaActual) return;

  const esteTiradaId = ++tiradaIdActual;
  const panel = document.getElementById('panel-resultado-dados');
  if (panel) {
    panel.innerHTML = `
      <div class="resultado-cargando" style="display:flex; align-items:center; justify-content:center; gap:8px;">
        <span style="animation: pulso-critico 0.6s infinite alternate ease-in-out;">🎲</span>
        <span>Lanzando ${configTiradaActual.etiqueta}...</span>
      </div>`;
  }

  const { cantidad, caras, mod, tipoDano } = configTiradaActual;

  resultadoActual = ejecutarTirada3D({
    cantidad,
    caras,
    mod,
    tipoDano,
    alTerminar: () => {
      if (esteTiradaId === tiradaIdActual) {
        actualizarPanelResultadoFinal(resultadoActual, configTiradaActual);
      }
    }
  });

  // Temporizador de respaldo garantizado: asegura que el total se muestre siempre
  setTimeout(() => {
    if (esteTiradaId === tiradaIdActual) {
      actualizarPanelResultadoFinal(resultadoActual, configTiradaActual);
    }
  }, 1250);
}

function actualizarPanelResultadoFinal(res, config) {
  const panel = document.getElementById('panel-resultado-dados');
  if (!panel || !res) return;

  const { dados, total, mod, tipoDano } = res;
  const infoDano = DANOS_INFO[tipoDano] || DANOS_INFO.general;
  const esAtaque = config.tipoTirada === 'ataque';

  let avisoEspecialHtml = '';
  if (esAtaque && dados.length === 1 && config.caras === 20) {
    if (dados[0] === 20) {
      avisoEspecialHtml = '<div class="insignia-critico">⭐ ¡GOLPE CRÍTICO! (20 Natural) ⭐</div>';
    } else if (dados[0] === 1) {
      avisoEspecialHtml = '<div class="insignia-pifia">💀 ¡PIFIA AUTOMÁTICA! (1 Natural) 💀</div>';
    }
  }

  // Desglose de dados
  const formulaDadosStr = dados.map((d) => `<span class="chip-dado-val">${d}</span>`).join(' + ');
  const modStr = mod !== 0 ? ` ${mod > 0 ? '+' : '-'} <span class="chip-mod-val">${Math.abs(mod)}</span>` : '';
  const sumaDados = dados.reduce((a, b) => a + b, 0);

  let resumenDetalle = '';
  if (dados.length > 5) {
    resumenDetalle = `<div class="resumen-dados-extendido"><b>Todos los dados (${dados.length}):</b> [${dados.join(', ')}] = ${sumaDados}</div>`;
  }

  panel.innerHTML = `
    ${avisoEspecialHtml}
    <div class="resultado-fila-principal">
      <div class="resultado-etiqueta-dano" style="background:${infoDano.colorPrincipal}; color:${infoDano.colorTexto};">
        ${infoDano.icono} ${infoDano.nombre.toUpperCase()}
      </div>
      <div class="resultado-total-cifra">${total}</div>
    </div>
    <div class="resultado-desglose">
      <span class="resultado-formula-texto"><b>Total:</b> ${formulaDadosStr}${modStr} = <b style="font-size:16px; color:${infoDano.colorPrincipal};">${total}</b></span>
    </div>
    ${resumenDetalle}
  `;
}

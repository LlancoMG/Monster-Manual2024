// src/ui/reloj-views.js
// Vista del reloj de mundo: semicírculo, hora, controles y eventos.

import { escapeHtml } from '../features/utils.js';

function pad2(valor) {
  return String(valor).padStart(2, '0');
}

function formatoDuracion(minutosTotales) {
  const minutos = Math.round(minutosTotales);
  const horas = Math.floor(minutos / 60);
  const resto = minutos % 60;
  if (horas > 0 && resto > 0) return `${horas} h ${resto} min`;
  if (horas > 0) return `${horas} h`;
  return `${resto} min`;
}

function posicionCeleste(fraccion) {
  const centroX = 150;
  const centroY = 148;
  const radio = 118;
  const angulo = Math.PI * (1 - fraccion);
  return {
    x: centroX + radio * Math.cos(angulo),
    y: centroY - radio * Math.sin(angulo)
  };
}

export function vistaReloj({ estado }) {
  const { horas, minutos, enReproduccion, eventos, celeste } = estado;
  const horaTexto = `${pad2(horas)}:${pad2(minutos)}`;
  const posicion = posicionCeleste(celeste.fraccion);
  const claseCielo = celeste.esDia ? 'reloj-cielo-dia' : 'reloj-cielo-noche';
  const iconoAstro = celeste.esDia ? '☀' : '☾';
  const eventosHtml = eventos.length > 0
    ? eventos.map((evento) => `
      <li class="reloj-evento-item">
        <span class="reloj-evento-nombre">${escapeHtml(evento.nombre)}</span>
        <span class="reloj-evento-restante">${formatoDuracion(evento.minutosRestantes)}</span>
        <button type="button" class="reloj-evento-quitar" data-evento-id="${evento.id}" title="Quitar evento" aria-label="Quitar evento">×</button>
      </li>`).join('')
    : '<li class="reloj-evento-vacio">Sin eventos pendientes</li>';

  return `
    <section class="tracker-reloj-panel ${claseCielo}" id="panel-reloj-mundo" aria-label="Reloj del mundo">
      <div class="reloj-semicirculo-wrap">
        <svg class="reloj-svg" viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hora del mundo: ${horaTexto}">
          <path class="reloj-arco" d="M 30 148 A 118 118 0 0 1 270 148" fill="none" />
          <line x1="12" y1="148" x2="288" y2="148" class="reloj-horizonte" />
          <circle cx="${posicion.x.toFixed(1)}" cy="${posicion.y.toFixed(1)}" r="11" class="reloj-astro-halo" />
          <text x="${posicion.x.toFixed(1)}" y="${(posicion.y + 5).toFixed(1)}" class="reloj-astro-icono" text-anchor="middle">${iconoAstro}</text>
        </svg>
        <div class="reloj-hora-central">
          <input type="time" class="reloj-hora-texto" value="${horaTexto}" min="00:00" max="23:59" step="60" aria-label="Modificar hora en formato HH:MM" title="Editar hora (HH:MM)">
          <button type="button" class="reloj-btn-play" id="btn-reloj-play" aria-label="${enReproduccion ? 'Pausar reloj' : 'Reproducir reloj'}" title="${enReproduccion ? 'Pausar reloj' : 'Reproducir reloj'}">${enReproduccion ? '⏸' : '▶'}</button>
        </div>
      </div>

      <div class="reloj-controles-fila">
        <button type="button" class="btn reloj-btn-descanso" id="btn-reloj-descanso-corto" title="Añade 1 hora">Descanso corto</button>
        <button type="button" class="btn reloj-btn-descanso" id="btn-reloj-descanso-largo" title="Añade 8 horas">Descanso largo</button>
        <div class="reloj-agregar-tiempo">
          <input type="number" id="reloj-cantidad-tiempo" class="reloj-input-numero" min="1" value="10" aria-label="Cantidad de tiempo a agregar">
          <select id="reloj-unidad-tiempo" class="reloj-select-unidad" aria-label="Unidad de tiempo">
            <option value="min">min</option>
            <option value="h">horas</option>
          </select>
          <button type="button" class="reloj-btn-agregar" id="btn-reloj-agregar-tiempo">+ Añadir</button>
        </div>
      </div>

      <div class="reloj-eventos-seccion">
        <div class="reloj-eventos-form">
          <input type="text" id="reloj-evento-nombre" class="reloj-input-evento-nombre" placeholder="Ej: Fin de hechizo Invisibilidad" maxlength="60" aria-label="Nombre del evento">
          <input type="number" id="reloj-evento-minutos" class="reloj-input-evento-minutos" min="1" value="10" aria-label="Duración del evento">
          <select id="reloj-evento-unidad" class="reloj-select-unidad" aria-label="Unidad de tiempo del evento">
            <option value="min">min</option>
            <option value="h">horas</option>
          </select>
          <button type="button" class="reloj-btn-agregar" id="btn-reloj-agregar-evento">+ Evento</button>
        </div>
        <ul class="reloj-eventos-lista" id="reloj-eventos-lista">${eventosHtml}</ul>
      </div>
    </section>`;
}

import { ABIL, ABIL_NOMBRE, PELIGRO_COLOR, PELIGRO_NOMBRE, HABITAT_ESTILO } from '../features/constants.js';
import { crAFraccion, fmtMod, mod, nivelPeligro } from '../features/utils.js';

export function retratoProcedural(monstruo, tipoColor) {
  const iniciales = (monstruo.nombre || '?').split(' ').slice(0, 2).map((p) => p[0]).join('').toUpperCase();
  const color = tipoColor[monstruo.tipo] || 'var(--t-otro)';
  return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Retrato de ${monstruo.nombre}">
    <defs><radialGradient id="g-${monstruo.id}" cx="50%" cy="40%" r="70%">
      <stop offset="0%" stop-color="#f2e7c9"/><stop offset="100%" stop-color="#ddcda3"/></radialGradient></defs>
    <rect width="200" height="200" fill="url(#g-${monstruo.id})"/>
    <circle cx="100" cy="92" r="52" fill="${color}" stroke="#b8874a" stroke-width="4"/>
    <text x="100" y="108" font-family="Cinzel, serif" font-size="46" font-weight="700" fill="#f4e6c8" text-anchor="middle">${iniciales}</text>
    <polygon points="30,175 100,155 170,175 170,200 30,200" fill="#b8874a" opacity=".55"/></svg>`;
}
export function marcadoImagenConError(monstruo, obtenerFuenteImagen, tipoColor) {
  const src = obtenerFuenteImagen(monstruo);
  if (src) return `<img src="${src}" alt="Retrato de ${monstruo.nombre}" loading="lazy" onerror="manejarErrorImagen(this,'${monstruo.id}')">`;
  return retratoProcedural(monstruo, tipoColor);
}
function estiloInlineHabitat(habitat) {
  const estilo = HABITAT_ESTILO[habitat];
  if (!estilo) return '';
  return `style="background:${estilo.fondo};border-color:${estilo.borde};color:${estilo.texto}"`;
}
export function chipHabitatHtml(habitat) {
  return `<span class="chip-hab"${estiloInlineHabitat(habitat)}>${habitat}</span>`;
}
function tarjetaHtml(monstruo, obtenerFuenteImagen, tipoColor, obtenerVariantesConCr) {
  const esCrVariable = typeof monstruo.cr !== 'number' || !Number.isFinite(monstruo.cr);
  const peligro = nivelPeligro(monstruo.cr);
  const colorInsigniaCr = esCrVariable ? 'var(--cr-variable)' : PELIGRO_COLOR[peligro];
  const variantesConCr = obtenerVariantesConCr(monstruo);
  const variantesCrHtml = variantesConCr.length
    ? `<div class="variantes-cr">${variantesConCr.map((v) => `<span class="chip-cr-variante">${v.nombre}: CR ${crAFraccion(v.cr)}</span>`).join('')}</div>`
    : '';
  const nombreEn = monstruo.nombre_en ? ` · <i>${monstruo.nombre_en}</i>` : '';
  return `<button class="tarjeta" data-id="${monstruo.id}" aria-label="Ver ficha de ${monstruo.nombre}">
    <div class="miniatura">${marcadoImagenConError(monstruo, obtenerFuenteImagen, tipoColor)}</div>
    <div class="cuerpo">
      <div class="nombre-cr"><h3>${monstruo.nombre}</h3>
        <span class="insignia-cr" style="background:${colorInsigniaCr}">CR ${crAFraccion(monstruo.cr)}</span></div>
      <div class="meta">${monstruo['tamaño']} · ${monstruo.tipo}${nombreEn}</div>
      ${variantesCrHtml}
      <p class="lore">${monstruo.descripcion_breve || ''}</p>
      <div>${(monstruo.habitat || []).map((h) => chipHabitatHtml(h)).join('')}</div>
    </div></button>`;
}
export function construirPanelResultados({ todos, resultados, paginaActual, tamPagina, obtenerFuenteImagen, tipoColor, obtenerVariantesConCr }) {
  const totalPaginas = Math.max(1, Math.ceil(resultados.length / tamPagina));
  const pagina = Math.max(1, Math.min(paginaActual, totalPaginas));
  const inicio = (pagina - 1) * tamPagina;
  const paginaResultados = resultados.slice(inicio, inicio + tamPagina);
  const tarjetasHtml = paginaResultados.map((m) => tarjetaHtml(m, obtenerFuenteImagen, tipoColor, obtenerVariantesConCr)).join('');
  const controlesPaginacion = resultados.length > tamPagina ? `<div class="paginacion">
      <button class="accion fantasma" id="btn-pag-anterior" ${pagina <= 1 ? 'disabled' : ''} aria-label="Página anterior">← Anterior</button>
      <span class="pagina-info">Página ${pagina} de ${totalPaginas}</span>
      <button class="accion fantasma" id="btn-pag-siguiente" ${pagina >= totalPaginas ? 'disabled' : ''} aria-label="Página siguiente">Siguiente →</button>
    </div>` : '';
  const rangoTexto = paginaResultados.length
    ? `Mostrando ${inicio + 1}–${inicio + paginaResultados.length} de ${resultados.length} monstruo(s) (${todos.length} en total)`
    : `0 de ${todos.length} monstruo(s)`;
  const html = `<h2>Resultados</h2><p class="contador">${rangoTexto}</p>
    ${resultados.length ? `<div class="rejilla">${tarjetasHtml}</div>${controlesPaginacion}` : '<div class="vacio">Ningún monstruo coincide con estos filtros.<br><button class="accion fantasma" id="btn-limpiar-vacio" style="margin-top:10px;">Limpiar filtros</button></div>'}`;
  return { html, pagina, totalPaginas };
}
export function vistaDetalle({ monstruoBase, monstruo, varianteSeleccionada, obtenerFuenteImagen, tipoColor }) {
  if (!monstruoBase) {
    return `<div class="panel"><h2>Monstruo no encontrado</h2>
      <p>No existe ningún monstruo con ese identificador.</p>
      <button class="accion" id="btn-volver">Volver al listado</button></div>`;
  }
  const esTextoVariable = (valor) => typeof valor === 'string' && /\bvariable\b/i.test(valor);
  const valorVisible = (valor) => {
    if (valor === null || valor === undefined || valor === '') return '—';
    return esTextoVariable(valor) ? '—' : valor;
  };
  const peligro = nivelPeligro(typeof monstruo.cr === 'number' ? monstruo.cr : 0);
  const crVisible = valorVisible(monstruo.cr);
  const pxVisible = valorVisible(monstruo.px);
  const subpartes = [valorVisible(monstruo['tamaño']), valorVisible(monstruo.tipo), valorVisible(monstruo.alineamiento)].filter((v) => v !== '—');
  const subtituloFicha = subpartes.join(', ');
  const pgVisible = valorVisible(monstruo.pg);
  const dadosPgVisible = valorVisible(monstruo.dados_pg);
  const atributosHtml = ABIL.map((a) => `<div class="cel-atributo">
      <div class="n">${ABIL_NOMBRE[a]}</div><div class="v">${valorVisible(monstruo.atributos[a])}</div>
      <div class="m">${fmtMod(mod(monstruo.atributos[a]))}</div></div>`).join('');
  const bloque = (etiqueta, valor) => {
    const visible = valorVisible(valor);
    return visible !== '—' ? `<div class="linea-stat"><b>${etiqueta}.</b> ${visible}</div>` : '';
  };
  const listaRasgos = (titulo, arr) => (arr && arr.length)
    ? `<div class="seccion-titulo">${titulo}</div>${arr.map((r) => `<div class="rasgo"><b>${r.nombre}.</b> ${r.texto}</div>`).join('')}`
    : '';
  const varianteHtml = varianteSeleccionada ? `<div class="seccion-titulo">Variante seleccionada</div>
    <div class="linea-stat"><b>Variante activa.</b> ${varianteSeleccionada.nombre}</div>
    ${varianteSeleccionada.presencia ? `<div class="linea-stat"><b>Presencia.</b> ${varianteSeleccionada.presencia}</div>` : ''}
    ${varianteSeleccionada.apariencias ? `<div class="linea-stat"><b>Apariencias.</b> ${varianteSeleccionada.apariencias}</div>` : ''}` : '';
  const legendariasHtml = monstruo.legendarias ? `<div class="seccion-titulo">Acciones legendarias</div>
    <div class="rasgo">Puede realizar ${monstruo.legendarias.cantidad} acciones legendarias, eligiendo entre las opciones siguientes. Solo puede usar una opción a la vez y solo al final del turno de otra criatura. Recupera las acciones gastadas al inicio de su turno.</div>
    ${monstruo.legendarias.texto.map((t) => `<div class="rasgo">${t}</div>`).join('')}` : '';
  const nombreEnHtml = monstruo.nombre_en ? `<p class="ficha-sub" style="margin:2px 0 6px;font-style:italic;opacity:.75;">${monstruo.nombre_en}</p>` : '';
  return `
  <div class="panel"><button class="accion fantasma" id="btn-volver">← Volver al listado</button></div>
  <div class="panel">
    <div class="ficha-cabecera">
      <div class="ficha-imagen" id="ficha-imagen-principal" role="button" tabindex="0" aria-label="Ampliar o reducir retrato de ${monstruo.nombre}" aria-pressed="false">${marcadoImagenConError(monstruo, obtenerFuenteImagen, tipoColor)}</div>
      <div class="ficha-titulos">
        <h2>${monstruo.nombre}</h2>
        ${nombreEnHtml}
        <p class="ficha-sub">${subtituloFicha}</p>
        <span class="insignia-peligro" style="background:${PELIGRO_COLOR[peligro]}">CR ${crVisible === '—' ? '—' : crAFraccion(monstruo.cr)} · ${pxVisible} PX · ${PELIGRO_NOMBRE[peligro]}</span>
        <div class="chips-habitat">${(monstruo.habitat || []).map((h) => chipHabitatHtml(h)).join('')}</div>
        ${monstruoBase.variantes && monstruoBase.variantes.length ? `<div class="fila" style="margin-top:10px;align-items:flex-end">
          <div style="min-width:260px"><label>Variante</label>
          <select id="selector-variante">${monstruoBase.variantes.map((v) => `<option value="${v.id}" ${varianteSeleccionada && varianteSeleccionada.id === v.id ? 'selected' : ''}>${v.nombre}</option>`).join('')}</select></div></div>` : ''}
        <div class="botones-filtro">
          <button class="accion fantasma" id="btn-cambiar-imagen">Cambiar imagen</button>
          <button class="accion fantasma" id="btn-restaurar-imagen">Restaurar original</button>
        </div>
      </div>
    </div>
    <hr class="filete">
    <div class="linea-stat"><b>Clase de Armadura.</b> ${valorVisible(monstruo.ca)}</div>
    <div class="linea-stat"><b>Puntos de Golpe.</b> ${pgVisible}${dadosPgVisible !== '—' ? ` (${dadosPgVisible})` : ''}</div>
    <div class="linea-stat"><b>Velocidad.</b> ${valorVisible(monstruo.velocidad)}</div>
    <div class="tabla-atributos">${atributosHtml}</div>
    ${varianteHtml}
    ${bloque('Tiradas de salvación', monstruo.tiradas_salvacion)}
    ${bloque('Competencias', monstruo.competencias)}
    ${bloque('Vulnerabilidades a daño', monstruo.vulnerabilidades_dano)}
    ${bloque('Resistencias a daño', monstruo.resistencias_dano)}
    ${bloque('Inmunidades a daño', monstruo.inmunidades_dano)}
    ${bloque('Inmunidades a condición', monstruo.inmunidades_estado)}
    ${bloque('Sentidos', monstruo.sentidos)}
    ${bloque('Idiomas', monstruo.idiomas)}
    <hr class="filete">
    ${listaRasgos('Rasgos', monstruo.rasgos)}
    ${listaRasgos('Acciones', monstruo.acciones)}
    ${listaRasgos('Acciones adicionales', monstruo.acciones_adicionales)}
    ${listaRasgos('Reacciones', monstruo.reacciones)}
    ${legendariasHtml}
    ${monstruo.descripcion_breve ? `<div class="seccion-titulo">Descripción</div><p>${monstruo.descripcion_breve}</p>` : ''}
    ${monstruo.notas ? `<div class="notas-usuario"><b>Notas personales:</b> ${monstruo.notas}</div>` : ''}
    <p class="pagina-manual">${monstruo.pagina ? `Manual de Monstruos 2024, pág. ${monstruo.pagina}` : 'Página del manual sin completar — edítala en el JSON.'}</p>
  </div>`;
}
import { CAMPOS_VARIANTE_PERMITIDOS, FILTROS_POR_DEFECTO } from './constants.js';
import { coincideCampo, fraccionANumero, normalizar } from './utils.js';
import { NOMBRES_INGLES } from './nombres-en.js';
import {
  cargarVariantesSeleccionadas, guardarVarianteSeleccionada, cargarImagenesCustom,
  guardarImagenCustom, borrarImagenCustom, cargarImportados, guardarImportados
} from './storage.js';

export function normalizarCamposMonstruo(data) {
  if (!data || typeof data !== 'object') return {};
  const m = { ...data };
  if (m.vulnerabilidadesdano && !m.vulnerabilidades_dano) m.vulnerabilidades_dano = m.vulnerabilidadesdano;
  if (m.resistenciasdano && !m.resistencias_dano) m.resistencias_dano = m.resistenciasdano;
  if (m.inmunidadesdano && !m.inmunidades_dano) m.inmunidades_dano = m.inmunidadesdano;
  if (m.inmunidadesestado && !m.inmunidades_estado) m.inmunidades_estado = m.inmunidadesestado;
  return m;
}
function extraerParametrosDesdeNotas(variante) {
  if (!variante || typeof variante.notas !== 'string') return {};
  const parametros = {};
  const cr = variante.notas.match(/\bCR\s+(\d+(?:\/\d+)?(?:[.,]\d+)?)/i);
  if (cr) parametros.cr = fraccionANumero(cr[1]);
  const pg = variante.notas.match(/\b(\d+)\s*pg\b/i);
  if (pg) parametros.pg = Number(pg[1]);
  const px = variante.notas.match(/\b(\d+)\s*px\b/i);
  if (px) parametros.px = Number(px[1]);
  const ca = variante.notas.match(/\bCA\s+([^,.;]+)/i);
  if (ca) parametros.ca = ca[1].trim();
  const tamano = variante.notas.match(/\btama(?:ñ|n)o\s+([A-Za-zÁÉÍÓÚáéíóúÑñ ]+)/i);
  if (tamano) parametros['tamaño'] = tamano[1].trim();
  const velocidad = variante.notas.match(/\bvelocidad\s+([^,.;]+)/i);
  if (velocidad) parametros.velocidad = velocidad[1].trim();
  return parametros;
}
function extraerAccionesDesdeNotas(variante) {
  if (!variante || typeof variante.notas !== 'string') return [];
  const notas = variante.notas;
  const acciones = [];
  const ataques = [...notas.matchAll(/([A-Za-zÁÉÍÓÚáéíóúÑñ' ]+)\s*\+(\d+)\s*a golpear[^.]*(?:para|Impacto:)\s*([0-9dD+ ]+)\s*([A-Za-zÁÉÍÓÚáéíóúÑñ]+)/g)];
  ataques.forEach((m) => {
    const nombre = m[1].trim().replace(/\s+/g, ' ');
    acciones.push({ nombre, texto: `+${m[2]} a golpear. Impacto: ${m[3].trim()} ${m[4].trim()}.` });
  });
  const aliento = notas.match(/aliento\s+([A-Za-zÁÉÍÓÚáéíóúÑñ ]+)[^()]*\(([^)]+)\)/i);
  if (aliento) acciones.push({ nombre: `Aliento de ${aliento[1].trim()}`, texto: aliento[2].trim() });
  return acciones;
}
function esObjetoPlano(valor) { return valor && typeof valor === 'object' && !Array.isArray(valor); }
function esCrFiltrable(cr) { return typeof cr === 'number' && Number.isFinite(cr); }
function extraerSobrescriturasPermitidas(origen) {
  if (!esObjetoPlano(origen)) return {};
  const sobrescrituras = {};
  Object.keys(origen).forEach((campo) => {
    if (CAMPOS_VARIANTE_PERMITIDOS.has(campo)) sobrescrituras[campo] = origen[campo];
  });
  return sobrescrituras;
}
export function aplicarVariante(monstruoBase, variante) {
  const base = normalizarCamposMonstruo(monstruoBase);
  if (!variante) return { ...base, atributos: { ...(base.atributos || {}) } };
  const varianteNormalizada = normalizarCamposMonstruo(variante);
  const parametrosExplicitos = normalizarCamposMonstruo(varianteNormalizada.parametros || varianteNormalizada.estadisticas || {});
  const parametrosInferidos = extraerParametrosDesdeNotas(varianteNormalizada);
  const accionesDesdeNotas = extraerAccionesDesdeNotas(varianteNormalizada);
  const sobrescriturasDirectas = extraerSobrescriturasPermitidas(varianteNormalizada);
  const sobrescriturasInferidas = extraerSobrescriturasPermitidas(parametrosInferidos);
  const sobrescriturasExplicitas = extraerSobrescriturasPermitidas(parametrosExplicitos);
  const sobrescrituras = { ...sobrescriturasInferidas, ...sobrescriturasDirectas, ...sobrescriturasExplicitas };
  const combinado = { ...base, ...sobrescrituras };
  combinado.atributos = { ...(base.atributos || {}), ...(esObjetoPlano(sobrescrituras.atributos) ? sobrescrituras.atributos : {}) };
  if (esObjetoPlano(base.legendarias) && esObjetoPlano(sobrescrituras.legendarias)) {
    combinado.legendarias = { ...base.legendarias, ...sobrescrituras.legendarias };
  }
  const listasAcumulables = ['rasgos', 'acciones', 'acciones_adicionales', 'reacciones'];
  listasAcumulables.forEach((campo) => {
    const listaDirecta = Array.isArray(sobrescriturasDirectas[campo]) ? sobrescriturasDirectas[campo] : null;
    const listaExplicita = Array.isArray(sobrescriturasExplicitas[campo]) ? sobrescriturasExplicitas[campo] : null;
    if (listaDirecta) combinado[campo] = [...(base[campo] || []), ...listaDirecta];
    if (listaExplicita) {
      combinado[campo] = listaDirecta
        ? [...combinado[campo], ...listaExplicita]
        : [...(base[campo] || []), ...listaExplicita];
    }
  });
  const tieneAccionesExplicitas =
    (Array.isArray(sobrescriturasDirectas.acciones) && sobrescriturasDirectas.acciones.length > 0) ||
    (Array.isArray(sobrescriturasExplicitas.acciones) && sobrescriturasExplicitas.acciones.length > 0);
  if (accionesDesdeNotas.length && !tieneAccionesExplicitas) {
    const actuales = Array.isArray(combinado.acciones) ? combinado.acciones : [];
    const existentes = new Set(actuales.map((a) => `${a.nombre}|${a.texto}`));
    accionesDesdeNotas.forEach((accion) => {
      const clave = `${accion.nombre}|${accion.texto}`;
      if (!existentes.has(clave)) { actuales.push(accion); existentes.add(clave); }
    });
    combinado.acciones = actuales;
  }
  return combinado;
}
export function crearCompendio(baseMonstruos) {
  const filtros = { ...FILTROS_POR_DEFECTO };
  let paginaActual = 1;
  function obtenerTodosMonstruos() {
    const mapa = new Map(baseMonstruos.map((m) => [m.id, m]));
    cargarImportados().forEach((m) => { if (m && m.id) mapa.set(m.id, m); });
    // Fusiona el nombre en inglés (del JSON si existe, o del mapa de respaldo).
    return Array.from(mapa.values()).map((m) => ({ ...m, nombre_en: m.nombre_en || NOMBRES_INGLES[m.id] || '' }));
  }
  function obtenerMonstruoPorId(id) { return obtenerTodosMonstruos().find((m) => m.id === id); }
  function obtenerVariantesConCr(monstruoBase) {
    if (!monstruoBase || !Array.isArray(monstruoBase.variantes) || !monstruoBase.variantes.length) return [];
    return monstruoBase.variantes
      .map((variante) => {
        const monstruoConVariante = aplicarVariante(monstruoBase, variante);
        return { id: variante.id, nombre: variante.nombre, cr: monstruoConVariante.cr };
      })
      .filter((variante) => esCrFiltrable(variante.cr));
  }
  function obtenerCrsFiltrables(monstruoBase) {
    const crs = [];
    if (monstruoBase && esCrFiltrable(monstruoBase.cr)) crs.push(monstruoBase.cr);
    obtenerVariantesConCr(monstruoBase).forEach((v) => crs.push(v.cr));
    return [...new Set(crs)];
  }
  function monstruoPasaFiltros(m) {
    if (filtros.q) {
      const q = normalizar(filtros.q);
      const enEspanol = normalizar(m.nombre).includes(q);
      const enIngles = normalizar(m.nombre_en || '').includes(q);
      if (!enEspanol && !enIngles) return false;
    }
    const crsFiltrables = obtenerCrsFiltrables(m);
    if (filtros.rango === '0-4' && !crsFiltrables.some((cr) => cr <= 4)) return false;
    if (filtros.rango === '5-10' && !crsFiltrables.some((cr) => cr >= 5 && cr <= 10)) return false;
    if (filtros.rango === '11-16' && !crsFiltrables.some((cr) => cr >= 11 && cr <= 16)) return false;
    if (filtros.rango === '17+' && !crsFiltrables.some((cr) => cr >= 17)) return false;
    if (filtros.crExacto !== 'todos' && !crsFiltrables.some((cr) => String(cr) === filtros.crExacto)) return false;
    if (filtros.tipo !== 'todos' && !coincideCampo(m.tipo, filtros.tipo)) return false;
    if (filtros.tamano !== 'todos' && !coincideCampo(m['tamaño'], filtros.tamano)) return false;
    if (filtros.habitat.length && !filtros.habitat.every((sel) => (m.habitat || []).some((h) => coincideCampo(h, sel)))) return false;
    return true;
  }
  function ordenarMonstruos(lista) {
    const ordenada = [...lista];
    switch (filtros.orden) {
      case 'nombre_asc': ordenada.sort((a, b) => a.nombre.localeCompare(b.nombre)); break;
      case 'nombre_desc': ordenada.sort((a, b) => b.nombre.localeCompare(a.nombre)); break;
      case 'cr_asc': ordenada.sort((a, b) => a.cr - b.cr || a.nombre.localeCompare(b.nombre)); break;
      case 'cr_desc': ordenada.sort((a, b) => b.cr - a.cr || a.nombre.localeCompare(b.nombre)); break;
      default: break;
    }
    return ordenada;
  }
  function calcularResultados() { return ordenarMonstruos(obtenerTodosMonstruos().filter(monstruoPasaFiltros)); }
  function obtenerFuenteImagen(monstruo) {
    const custom = cargarImagenesCustom()[monstruo.id];
    if (custom) return custom;
    if (monstruo.imagen) return monstruo.imagen;
    return null;
  }
  function importarMonstruos(datos) {
    const actuales = cargarImportados();
    const mapa = new Map(actuales.map((m) => [m.id, m]));
    datos.forEach((m) => { if (m && m.id) mapa.set(m.id, m); });
    guardarImportados(Array.from(mapa.values()));
  }
  function obtenerVarianteSeleccionada(monstruoBase) {
    if (!monstruoBase || !monstruoBase.variantes || !monstruoBase.variantes.length) return null;
    const guardadas = cargarVariantesSeleccionadas();
    return monstruoBase.variantes.find((v) => v.id === guardadas[monstruoBase.id]) || monstruoBase.variantes[0];
  }
  return {
    filtros,
    getPaginaActual: () => paginaActual,
    setPaginaActual: (pagina) => { paginaActual = pagina; },
    resetPagina: () => { paginaActual = 1; },
    resetFiltros: () => { Object.assign(filtros, FILTROS_POR_DEFECTO, { habitat: [] }); paginaActual = 1; },
    obtenerTodosMonstruos, obtenerMonstruoPorId, calcularResultados, obtenerFuenteImagen,
    importarMonstruos, guardarImagenCustom, borrarImagenCustom, guardarVarianteSeleccionada,
    obtenerVarianteSeleccionada, aplicarVariante, obtenerVariantesConCr, obtenerCrsFiltrables
  };
}
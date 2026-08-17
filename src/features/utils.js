export function crAFraccion(cr) {
  if (cr === 0.125) return '1/8';
  if (cr === 0.25) return '1/4';
  if (cr === 0.5) return '1/2';
  return String(cr);
}
export function nivelPeligro(cr) {
  if (cr <= 4) return 'bajo';
  if (cr <= 10) return 'medio';
  if (cr <= 16) return 'alto';
  return 'mortal';
}
export function mod(score) {
  return (typeof score === 'number' && Number.isFinite(score)) ? Math.floor((score - 10) / 2) : null;
}
export function fmtMod(modificador) {
  if (typeof modificador !== 'number' || !Number.isFinite(modificador)) return '—';
  return `${modificador >= 0 ? '+' : ''}${modificador}`;
}
export function normalizar(texto) {
  return (texto || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
// Quita el contenido entre paréntesis para comparar "humanoide (orco)" contra "humanoide".
export function quitarParentesis(texto) {
  return normalizar(texto).replace(/\([^)]*\)/g, '').replace(/\s+/g, ' ').trim();
}
// Compara un campo del monstruo (con o sin paréntesis) contra un valor de filtro limpio.
export function coincideCampo(valorCampo, valorFiltro) {
  if (!valorCampo || !valorFiltro) return false;
  const campoSinParentesis = quitarParentesis(valorCampo);
  const filtroNormalizado = normalizar(valorFiltro).trim();
  if (campoSinParentesis === filtroNormalizado) return true;
  return normalizar(valorCampo).includes(filtroNormalizado);
}
export function fraccionANumero(valor) {
  if (typeof valor === 'number') return valor;
  const txt = String(valor || '').trim();
  const fraccion = txt.match(/^(\d+)\s*\/\s*(\d+)$/);
  if (fraccion) {
    const numerador = Number(fraccion[1]);
    const denominador = Number(fraccion[2]);
    return denominador ? numerador / denominador : valor;
  }
  const decimal = Number(txt.replace(',', '.'));
  return Number.isFinite(decimal) ? decimal : valor;
}
export const TIPOS_DANO = [
  'perforante', 'cortante', 'contundente', 'fuego', 'frio', 'acido',
  'veneno', 'psiquico', 'necrotico', 'radiante', 'rayo', 'trueno', 'fuerza'
];
export const ETIQUETA_TIPO_DANO = {
  perforante: 'Perforante', cortante: 'Cortante', contundente: 'Contundente',
  fuego: 'Fuego', frio: 'Frío', acido: 'Ácido', veneno: 'Veneno',
  psiquico: 'Psíquico', necrotico: 'Necrótico', radiante: 'Radiante',
  rayo: 'Rayo', trueno: 'Trueno', fuerza: 'Fuerza'
};
function normalizarTipoDano(palabra) {
  const norm = normalizar(palabra);
  return TIPOS_DANO.includes(norm) ? norm : null;
}
// Detecta expresiones de dados (ej. "2d6 + 3 cortante") dentro de un texto de
// acción y devuelve, en orden de aparición, cada grupo con su posición
// original (para resaltarlo en el HTML) y su tipo de daño si se reconoce
// una palabra clave justo después (saltando conectores como "de"/"daño").
export function extraerGruposDano(texto) {
  if (typeof texto !== 'string' || !texto) return [];
  const regexDados = /(\d+)\s*[dD]\s*(\d+)((?:\s*[+\-]\s*\d+)*)/g;
  const grupos = [];
  let m;
  while ((m = regexDados.exec(texto))) {
    const cantidad = Number(m[1]);
    const caras = Number(m[2]);
    if (!cantidad || !caras) continue;
    let bonus = 0;
    if (m[3]) {
      [...m[3].matchAll(/([+\-])\s*(\d+)/g)].forEach((bm) => {
        bonus += (bm[1] === '-' ? -1 : 1) * Number(bm[2]);
      });
    }
    let fin = m.index + m[0].length;
    let tipo = null;
    const resto = texto.slice(fin);
    const siguiente = resto.match(/^\s*(?:de\s+)?(?:daño\s+)?([A-Za-zÁÉÍÓÚáéíóúÑñ]+)/);
    if (siguiente) {
      const candidato = normalizarTipoDano(siguiente[1]);
      if (candidato) { tipo = candidato; fin += siguiente[0].length; }
    }
    grupos.push({
      indice: grupos.length, cantidad, caras, bonus, tipo,
      inicio: m.index, fin, textoOriginal: texto.slice(m.index, fin).trim()
    });
  }
  return grupos;
}
// Envuelve cada grupo detectado en un <span> clickeable, dejando el resto del texto intacto.
export function resaltarGruposDano(texto, grupos) {
  if (!grupos || !grupos.length) return texto;
  let resultado = '';
  let cursor = 0;
  grupos.forEach((g) => {
    resultado += texto.slice(cursor, g.inicio);
    resultado += `<span class="token-dado" data-grupo-idx="${g.indice}" tabindex="0" role="button" aria-label="Tirar ${g.textoOriginal}">${g.textoOriginal}</span>`;
    cursor = g.fin;
  });
  resultado += texto.slice(cursor);
  return resultado;
}
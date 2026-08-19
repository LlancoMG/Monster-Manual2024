// Convierte un número de CR a su representación en fracción legible.
export function crAFraccion(cr) {
  if (cr === 0.125) return '1/8';
  if (cr === 0.25) return '1/4';
  if (cr === 0.5) return '1/2';
  return String(cr);
}

// Clasifica un CR en un nivel de peligro descriptivo.
export function nivelPeligro(cr) {
  if (cr <= 4) return 'bajo';
  if (cr <= 10) return 'medio';
  if (cr <= 16) return 'alto';
  return 'mortal';
}

// Calcula el modificador de un atributo a partir de su valor (score).
export function mod(score) {
  return (typeof score === 'number' && Number.isFinite(score))
    ? Math.floor((score - 10) / 2)
    : null;
}

// Formatea un modificador con su signo (ej. +3, -1).
export function fmtMod(modificador) {
  if (typeof modificador !== 'number' || !Number.isFinite(modificador)) return '—';
  return `${modificador >= 0 ? '+' : ''}${modificador}`;
}

// Normaliza texto: minúsculas y sin diacríticos.
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

// Convierte una fracción textual ("1/2", "0.5") a número.
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
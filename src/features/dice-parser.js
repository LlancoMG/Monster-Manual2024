// src/features/dice-parser.js
// Reconocimiento, análisis léxico y envoltura de tiradas de dados en textos
// de fichas de monstruos (ataques, daños individuales o compuestos, rasgos,
// dados de vida y tiradas varias con o sin daño promedio fijo).

export const DANOS_INFO = {
  fuego: {
    nombre: 'Fuego', icono: '🔥',
    colorPrincipal: '#c1121f', colorSecundario: '#f77f00', colorTexto: '#ffffff',
    luz: '#ff5400', bandeja: '#38040e', descripcion: 'Llamas ardientes'
  },
  frío: {
    nombre: 'Frío', icono: '❄️',
    colorPrincipal: '#0077b6', colorSecundario: '#90e0ef', colorTexto: '#ffffff',
    luz: '#48cae4', bandeja: '#03045e', descripcion: 'Escarcha gélida'
  },
  rayo: {
    nombre: 'Rayo', icono: '⚡',
    colorPrincipal: '#023e8a', colorSecundario: '#ffd166', colorTexto: '#ffffff',
    luz: '#ffd60a', bandeja: '#001845', descripcion: 'Descarga eléctrica'
  },
  trueno: {
    nombre: 'Trueno', icono: '💥',
    colorPrincipal: '#3a0ca3', colorSecundario: '#7209b7', colorTexto: '#ffffff',
    luz: '#4361ee', bandeja: '#10002b', descripcion: 'Onda de choque sónica'
  },
  ácido: {
    nombre: 'Ácido', icono: '🧪',
    colorPrincipal: '#38b000', colorSecundario: '#70e000', colorTexto: '#ffffff',
    luz: '#9ef01a', bandeja: '#0d2818', descripcion: 'Sustancia corrosiva'
  },
  veneno: {
    nombre: 'Veneno', icono: '☠️',
    colorPrincipal: '#1b4332', colorSecundario: '#2d6a4f', colorTexto: '#ffffff',
    luz: '#52b788', bandeja: '#081c15', descripcion: 'Toxina letal'
  },
  necrótico: {
    nombre: 'Necrótico', icono: '💀',
    colorPrincipal: '#3c096c', colorSecundario: '#5a189a', colorTexto: '#ffffff',
    luz: '#7b2cbf', bandeja: '#1b0336', descripcion: 'Energía marchitante'
  },
  radiante: {
    nombre: 'Radiante', icono: '✨',
    colorPrincipal: '#b8860b', colorSecundario: '#ffb703', colorTexto: '#ffffff',
    luz: '#fff3b0', bandeja: '#493108', descripcion: 'Luz sagrada y solar'
  },
  fuerza: {
    nombre: 'Fuerza', icono: '🌀',
    colorPrincipal: '#7209b7', colorSecundario: '#f72585', colorTexto: '#ffffff',
    luz: '#4cc9f0', bandeja: '#240046', descripcion: 'Energía mágica pura'
  },
  psíquico: {
    nombre: 'Psíquico', icono: '👁️',
    colorPrincipal: '#b5179e', colorSecundario: '#f72585', colorTexto: '#ffffff',
    luz: '#ff70a6', bandeja: '#380036', descripcion: 'Ataque mental'
  },
  cortante: {
    nombre: 'Cortante', icono: '⚔️',
    colorPrincipal: '#7a1e2b', colorSecundario: '#a4161a', colorTexto: '#ffffff',
    luz: '#e5383b', bandeja: '#2b090e', descripcion: 'Filo acerado'
  },
  perforante: {
    nombre: 'Perforante', icono: '🗡️',
    colorPrincipal: '#7f4f24', colorSecundario: '#936639', colorTexto: '#ffffff',
    luz: '#b08968', bandeja: '#362110', descripcion: 'Punta punzante'
  },
  contundente: {
    nombre: 'Contundente', icono: '🔨',
    colorPrincipal: '#495057', colorSecundario: '#6c757d', colorTexto: '#ffffff',
    luz: '#adb5bd', bandeja: '#212529', descripcion: 'Impacto aplastante'
  },
  ataque: {
    nombre: 'Ataque', icono: '🎯',
    colorPrincipal: '#7a1e2b', colorSecundario: '#b8874a', colorTexto: '#ffffff',
    luz: '#d9b477', bandeja: '#2b090e', descripcion: 'Tirada de impacto (d20)'
  },
  pg: {
    nombre: 'Puntos de Golpe', icono: '❤️',
    colorPrincipal: '#2d6a4f', colorSecundario: '#52b788', colorTexto: '#ffffff',
    luz: '#74c69d', bandeja: '#081c15', descripcion: 'Tirada de vida'
  },
  general: {
    nombre: 'Tirada', icono: '🎲',
    colorPrincipal: '#5a4c33', colorSecundario: '#b8874a', colorTexto: '#ffffff',
    luz: '#d9b477', bandeja: '#1f1913', descripcion: 'Tirada de dados'
  }
};

const TIPOS_DANO_REGEX = /\b(fuego|fr[ií]o|rayo|rel[aá]mpago|trueno|[aá]cido|veneno|necr[oó]tico|radiante|fuerza|ps[ií]quico|cortante|perforante|contundente)\b/i;

export function normalizarTipoDano(str) {
  if (!str) return 'general';
  const s = str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  if (s.includes('fuego')) return 'fuego';
  if (s.includes('frio')) return 'frío';
  if (s.includes('rayo') || s.includes('relampago')) return 'rayo';
  if (s.includes('trueno')) return 'trueno';
  if (s.includes('acido')) return 'ácido';
  if (s.includes('veneno')) return 'veneno';
  if (s.includes('necrotico')) return 'necrótico';
  if (s.includes('radiante')) return 'radiante';
  if (s.includes('fuerza')) return 'fuerza';
  if (s.includes('psiquico')) return 'psíquico';
  if (s.includes('cortante')) return 'cortante';
  if (s.includes('perforante')) return 'perforante';
  if (s.includes('contundente')) return 'contundente';
  if (s.includes('ataque')) return 'ataque';
  if (s.includes('pg') || s.includes('vida') || s.includes('golpe')) return 'pg';
  return 'general';
}

export function parsearFormulaDados(formula, tipoDanoSugerido = null) {
  if (typeof formula !== 'string') return null;
  let limpia = formula.trim();

  // Caso 1: Tirada de ataque (+X a golpear)
  const coincidenciaAtaque = limpia.match(/^[+]?(-?\d+)\s+a\s+golpear/i);
  if (coincidenciaAtaque) {
    const mod = parseInt(coincidenciaAtaque[1], 10);
    return {
      cantidad: 1,
      caras: 20,
      mod: isNaN(mod) ? 0 : mod,
      tipoDano: 'ataque',
      tipoTirada: 'ataque',
      etiqueta: `Tirada de ataque (${mod >= 0 ? '+' : ''}${mod})`,
      formulaOriginal: limpia
    };
  }

  // Extraer si viene con formato '13 (4d6+2)' o '(4d6+2)'
  const coincidenciaPromedio = limpia.match(/^(?:\d+\s*)?\(([^)]+)\)(.*)$/);
  if (coincidenciaPromedio) {
    limpia = coincidenciaPromedio[1] + (coincidenciaPromedio[2] || '');
  }

  // Caso 2: Notación NdX o NdX+M / NdX-M
  const coincidenciaDados = limpia.match(/^(\d+)?d(\d+)(?:\s*([+-])\s*(\d+))?(.*)$/i);
  if (coincidenciaDados) {
    const cantidad = coincidenciaDados[1] ? parseInt(coincidenciaDados[1], 10) : 1;
    const caras = parseInt(coincidenciaDados[2], 10);
    const signo = coincidenciaDados[3];
    const valorMod = coincidenciaDados[4] ? parseInt(coincidenciaDados[4], 10) : 0;
    const mod = signo === '-' ? -valorMod : valorMod;
    const resto = coincidenciaDados[5] || '';

    let tipoDano = tipoDanoSugerido;
    if (!tipoDano) {
      const matchTipo = resto.match(TIPOS_DANO_REGEX);
      if (matchTipo) {
        tipoDano = normalizarTipoDano(matchTipo[1]);
      } else {
        tipoDano = 'general';
      }
    } else {
      tipoDano = normalizarTipoDano(tipoDano);
    }

    const infoDano = DANOS_INFO[tipoDano] || DANOS_INFO.general;
    const formulaLimpia = `${cantidad}d${caras}${mod !== 0 ? (mod > 0 ? `+${mod}` : `${mod}`) : ''}`;

    return {
      cantidad,
      caras,
      mod,
      tipoDano,
      tipoTirada: tipoDano === 'pg' ? 'pg' : 'daño',
      etiqueta: `${infoDano.nombre} (${formulaLimpia})`,
      formulaOriginal: formula.trim()
    };
  }

  return null;
}

// Envuelve tiradas en una sola pasada unificada por nodo de texto puro
// para evitar cualquier posibilidad de anidamiento de etiquetas HTML.
export function envolverTiradasDados(texto, contexto = {}) {
  if (typeof texto !== 'string' || !texto) return texto;

  // Dividimos el texto en trozos para NO tocar el contenido dentro de etiquetas HTML (<...>)
  const partes = texto.split(/(<[^>]+>)/g);

  // Regex unificada:
  // Grupo 1: Ataque (+X a golpear)
  // Grupo 2 y 3: Daño con promedio fijo tipo '13 (4d6+2) de fuego' o '52 (15d6) de daño de fuego'
  // Grupo 4 y 5: Fórmula directa tipo '1d6+2 cortante' o '2d10 perforante'
  const REGEX_UNIFICADA = /(?:([+]?\d+\s+a\s+golpear)|(\b\d+\s*\(\s*\d*d\d+(?:\s*[+-]\s*\d+)?\s*\))(?:\s*(?:de\s+daño\s+(?:de\s+)?|daño\s+(?:de\s+)?|de\s+)?(fuego|fr[ií]o|rayo|rel[aá]mpago|trueno|[aá]cido|veneno|necr[oó]tico|radiante|fuerza|ps[ií]quico|cortante|perforante|contundente))?|(\b\d*d\d+(?:\s*[+-]\s*\d+)?)(?:\s*(?:de\s+daño\s+(?:de\s+)?|daño\s+(?:de\s+)?|de\s+)?(fuego|fr[ií]o|rayo|rel[aá]mpago|trueno|[aá]cido|veneno|necr[oó]tico|radiante|fuerza|ps[ií]quico|cortante|perforante|contundente))?)/gi;

  for (let p = 0; p < partes.length; p++) {
    // Si es una etiqueta HTML existente, saltar
    if (partes[p].startsWith('<') && partes[p].endsWith('>')) continue;

    partes[p] = partes[p].replace(REGEX_UNIFICADA, (match, matchAtaque, formulaPromedio, tipoPromedio, formulaDirecta, tipoDirecto) => {
      // 1. Tirada de ataque (+X a golpear)
      if (matchAtaque) {
        const parsed = parsearFormulaDados(matchAtaque, 'ataque');
        if (!parsed) return match;
        const json = encodeURIComponent(JSON.stringify(parsed));
        return `<span class="dado-tirable dado-tirable-ataque" data-roll="${json}" role="button" tabindex="0" title="Tirar ${parsed.etiqueta}"><span class="dado-icono">🎯</span>${match}</span>`;
      }

      // 2. Daño con promedio fijo: ej. "13 (4d6) de fuego"
      if (formulaPromedio) {
        const tipo = tipoPromedio ? normalizarTipoDano(tipoPromedio) : (contexto.tipoDano || 'general');
        const parsed = parsearFormulaDados(match, tipo);
        if (!parsed) return match;

        const info = DANOS_INFO[parsed.tipoDano] || DANOS_INFO.general;
        const json = encodeURIComponent(JSON.stringify(parsed));
        const icono = info.icono ? `<span class="dado-icono">${info.icono}</span>` : '';
        return `<span class="dado-tirable dado-tirable-${parsed.tipoDano}" data-roll="${json}" role="button" tabindex="0" title="Tirar ${parsed.etiqueta}">${icono}${match}</span>`;
      }

      // 3. Fórmula directa: ej. "1d6+2 cortante"
      if (formulaDirecta) {
        const tipo = tipoDirecto ? normalizarTipoDano(tipoDirecto) : (contexto.tipoDano || 'general');
        const parsed = parsearFormulaDados(match, tipo);
        if (!parsed) return match;

        const info = DANOS_INFO[parsed.tipoDano] || DANOS_INFO.general;
        const json = encodeURIComponent(JSON.stringify(parsed));
        const icono = info.icono ? `<span class="dado-icono">${info.icono}</span>` : '';
        return `<span class="dado-tirable dado-tirable-${parsed.tipoDano}" data-roll="${json}" role="button" tabindex="0" title="Tirar ${parsed.etiqueta}">${icono}${match}</span>`;
      }

      return match;
    });
  }

  return partes.join('');
}

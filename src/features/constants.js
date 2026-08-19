export const TIPOS = ['Aberración', 'Bestia', 'Celestial', 'Constructo', 'Dragón', 'Elemental', 'Feérica', 'Fiel', 'Gigante', 'Humanoide', 'Monstruosidad', 'Limo', 'Planta', 'No muerto'];
export const TIPO_COLOR = {
  'no muerto': 'var(--t-nomuerto)', 'dragón': 'var(--t-dragon)', 'gigante': 'var(--t-gigante)',
  'fiel': 'var(--t-fiel)', 'humanoide': 'var(--t-humanoide)', 'bestia': 'var(--t-bestia)',
  'monstruosidad': 'var(--t-monstruosidad)', 'aberración': 'var(--t-aberracion)', 'limo': 'var(--t-limo)',
  celestial: 'var(--t-celestial)', constructo: 'var(--t-constructo)', elemental: 'var(--t-elemental)',
  'feérica': 'var(--t-feerica)', planta: 'var(--t-planta)'
};
export const TAMANOS = ['Diminuto', 'Pequeño', 'Mediano', 'Grande', 'Enorme', 'Gigantesco'];
export const HABITATS = ['Ártico', 'Costa', 'Desierto', 'Bosque', 'Colinas', 'Montaña', 'Pantano', 'Subterráneo', 'Urbano', 'Acuático', 'Planar', 'Selva', 'Sabana', 'Océano', 'Cielo', 'Llanura', 'Cualquiera', 'Ruinas', "Cementerio", "Volcán", "Cueva", "Río", "Tundra", "Rural"];
export const HABITAT_ESTILO = {
  Ártico: { fondo: '#dceaf5', borde: '#9cb8cc', texto: '#1d3f5d' },
  Costa: { fondo: '#d9ede9', borde: '#89b9b0', texto: '#1f4f4a' },
  Desierto: { fondo: '#f3e4c6', borde: '#cfad73', texto: '#6a4820' },
  Bosque: { fondo: '#dcead2', borde: '#93b37d', texto: '#2f5d2e' },
  Colinas: { fondo: '#ebe4d3', borde: '#b8a27e', texto: '#5f4f35' },
  Montaña: { fondo: '#dfe2e8', borde: '#9aa3b5', texto: '#3b455b' },
  Pantano: { fondo: '#d8e2c9', borde: '#92a673', texto: '#3e4f2c' },
  Subterráneo: { fondo: '#ddd7d0', borde: '#9e9388', texto: '#4e4338' },
  Urbano: { fondo: '#e2ddef', borde: '#a59abf', texto: '#4b3d70' },
  Acuático: { fondo: '#d4edf5', borde: '#7fb8cd', texto: '#1f5164' },
  Planar: { fondo: '#eadcf2', borde: '#b896c7', texto: '#5b3b6a' },
  Selva: { fondo: '#d8e2c9', borde: '#92a673', texto: '#3e4f2c' },
  Sabana: { fondo: '#f3e4c6', borde: '#cfad73', texto: '#6a4820' },
  Océano: { fondo: '#d4edf5', borde: '#7fb8cd', texto: '#1f5164' },
  Cielo: { fondo: '#d4edf5', borde: '#7fb8cd', texto: '#1f5164' },
  Llanura: { fondo: '#ebe4d3', borde: '#b8a27e', texto: '#5f4f35' },
  Cualquiera: { fondo: '#f0f0f0', borde: '#cccccc', texto: '#333333' },
  Ruinas: { fondo: '#e2ddef', borde: '#a59abf', texto: '#4b3d70' },
  Cementerio: { fondo: '#d9d9d9', borde: '#a0a0a0', texto: '#333333' },
  Volcán: { fondo: '#f2c9c9', borde: '#d97b7b', texto: '#6a1b1b' },
  Cueva: { fondo: '#d9d9d9', borde: '#a0a0a0', texto: '#333333' },
  Río: { fondo: '#c8e6f5', borde: '#7bb4d8', texto: '#1e5e8c' },
  Tundra: { fondo: '#e0f2f1', borde: '#80cbc4', texto: '#00695f' },
  Rural: { fondo: '#e8f5e9', borde: '#a5d6a7', texto: '#2e7d32' }
};
export const ABIL = ['fue', 'des', 'con', 'int', 'sab', 'car'];
export const ABIL_NOMBRE = { fue: 'FUE', des: 'DES', con: 'CON', int: 'INT', sab: 'SAB', car: 'CAR' };
export const TAM_PAGINA = 32;
export const PELIGRO_COLOR = { bajo: 'var(--bajo)', medio: 'var(--medio)', alto: 'var(--alto)', mortal: 'var(--mortal)' };
export const PELIGRO_NOMBRE = { bajo: 'Peligro bajo', medio: 'Peligro medio', alto: 'Peligro alto', mortal: 'Peligro mortal' };
export const CAMPOS_VARIANTE_PERMITIDOS = new Set([
  'cr', 'px', 'ca', 'pg', 'dados_pg', 'velocidad', 'atributos', 'tiradas_salvacion', 'competencias',
  'vulnerabilidades_dano', 'resistencias_dano', 'inmunidades_dano', 'inmunidades_estado',
  'sentidos', 'idiomas', 'rasgos', 'acciones', 'acciones_adicionales', 'reacciones', 'legendarias',
  'descripcion_breve', 'pagina', 'imagen', 'habitat', 'tamaño', 'tipo', 'alineamiento'
]);
export const FILTROS_POR_DEFECTO = {
  q: '', rango: 'todos', crExacto: 'todos', tipo: 'todos',
  tamano: 'todos', habitat: [], orden: 'nombre_asc'
};
// Bundle generado automáticamente con: node scripts/crear-bundle.js
// ---- src/features/constants.js ----
const TIPOS = ['Aberración', 'Bestia', 'Celestial', 'Constructo', 'Dragón', 'Elemental', 'Feérica', 'Fiel', 'Gigante', 'Humanoide', 'Monstruosidad', 'Limo', 'Planta', 'No muerto'];
const TIPO_COLOR = {
  'no muerto': 'var(--t-nomuerto)', 'dragón': 'var(--t-dragon)', 'gigante': 'var(--t-gigante)',
  'fiel': 'var(--t-fiel)', 'humanoide': 'var(--t-humanoide)', 'bestia': 'var(--t-bestia)',
  'monstruosidad': 'var(--t-monstruosidad)', 'aberración': 'var(--t-aberracion)', 'limo': 'var(--t-limo)',
  celestial: 'var(--t-celestial)', constructo: 'var(--t-constructo)', elemental: 'var(--t-elemental)',
  'feérica': 'var(--t-feerica)', planta: 'var(--t-planta)'
};
const TAMANOS = ['Diminuto', 'Pequeño', 'Mediano', 'Grande', 'Enorme', 'Gigantesco'];
const HABITATS = ['Ártico', 'Costa', 'Desierto', 'Bosque', 'Colinas', 'Montaña', 'Pantano', 'Subterráneo', 'Urbano', 'Acuático', 'Planar', 'Selva', 'Sabana', 'Océano', 'Cielo', 'Llanura', 'Cualquiera', 'Ruinas'];
const HABITAT_ESTILO = {
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
  Ruinas: { fondo: '#e2ddef', borde: '#a59abf', texto: '#4b3d70' }
};
const ABIL = ['fue', 'des', 'con', 'int', 'sab', 'car'];
const ABIL_NOMBRE = { fue: 'FUE', des: 'DES', con: 'CON', int: 'INT', sab: 'SAB', car: 'CAR' };
const TAM_PAGINA = 32;
const PELIGRO_COLOR = { bajo: 'var(--bajo)', medio: 'var(--medio)', alto: 'var(--alto)', mortal: 'var(--mortal)' };
const PELIGRO_NOMBRE = { bajo: 'Peligro bajo', medio: 'Peligro medio', alto: 'Peligro alto', mortal: 'Peligro mortal' };
const CAMPOS_VARIANTE_PERMITIDOS = new Set([
  'cr', 'px', 'ca', 'pg', 'dados_pg', 'velocidad', 'atributos', 'tiradas_salvacion', 'competencias',
  'vulnerabilidades_dano', 'resistencias_dano', 'inmunidades_dano', 'inmunidades_estado',
  'sentidos', 'idiomas', 'rasgos', 'acciones', 'acciones_adicionales', 'reacciones', 'legendarias',
  'descripcion_breve', 'pagina', 'imagen', 'habitat', 'tamaño', 'tipo', 'alineamiento'
]);
const FILTROS_POR_DEFECTO = {
  q: '', rango: 'todos', crExacto: 'todos', tipo: 'todos',
  tamano: 'todos', habitat: [], orden: 'nombre_asc'
};
// ---- src/features/nombres-en.js ----
// Mapa id → nombre oficial en inglés (Monster Manual 2024).
// Se usa en runtime para la búsqueda y también para inyectarlo al JSON legacy.
const NOMBRES_INGLES = {
  goblin: 'Goblin', lobo_terrible: 'Dire Wolf', orco: 'Orc', arpia: 'Harpy', espectro: 'Specter',
  mimico: 'Mimic', cubo_gelatinoso: 'Gelatinous Cube', gigante_colinas: 'Hill Giant', contemplador: 'Beholder',
  liche: 'Lich', aboleth: 'Aboleth', acechador_invisible: 'Invisible Stalker', osgo_acechador: 'Stalker Ogre',
  aarakocra_aeromante: 'Aarakocra Aeromancer', aguila: 'Eagle', aguila_gigante: 'Giant Eagle', alce: 'Elk',
  alce_gigante: 'Giant Elk', alfombra_asfixiante_animada: 'Animated Smothering Carpet', alosaurio: 'Allosaurus',
  amasijo_de_aniquilacion: 'Blob of Annihilation', ankheg: 'Ankheg', aarakocra: 'Aarakocra',
  aarakocra_escaramuzador: 'Aarakocra Skirmisher', elemental_del_aire: 'Air Elemental', animal_lord: 'Animal Lord',
  objetos_animados: 'Animated Objects', armadura_animada: 'Animated Armor', escoba_animada: 'Animated Broom',
  espadavoladoraanimada: 'Flying Sword', anquilosaurio: 'Ankylosaurus', simio: 'Ape', arcanaloth: 'Arcanaloth',
  archelon: 'Archelon', arch_hag: 'Arch-Hag', asesino: 'Assassin', plantas_despiertas: 'Awakened Plants',
  arbusto_despierto: 'Awakened Shrub', arbol_despierto: 'Awakened Tree', picosdehacha: 'Axe Beaks', azers: 'Azer',
  babuino: 'Baboon', 'tejón': 'Badger', balor: 'Balor', bandidos: 'Bandits', banshee: 'Banshee',
  diablo_barbado: 'Barbed Devil', barlgura: 'Barlgura', basilisco: 'Basilisk', murcielago: 'Bat',
  diablo_barbudo: 'Bearded Devil', behir: 'Behir', beholder: 'Beholder', berserkers: 'Berserkers',
  oso_negro: 'Black Bear', dragones_negros: 'Black Dragons', budin_negro: 'Black Pudding', blights: 'Blights',
  perro_parlante: 'Blink Dog', gota_aniquilacion: 'Drop of Annihilation', halcon_sangriento: 'Blood Hawk',
  dragones_azules: 'Blue Dragons', jabali: 'Boar', diablo_oseo: 'Bone Devil', naga_osea: 'Bone Naga',
  dragonesdebronce: 'Brass Dragons', dragonesdecobre: 'Copper Dragons', oso_pardo: 'Brown Bear', bugbears: 'Bugbears',
  bulettes: 'Bulettes', bullywugs: 'Bullywugs', cambion: 'Cambion', camello: 'Camel', reptador_carroñero: 'Carrion Crawler',
  gato: 'Cat', centauros: 'Centaurs', diablo_cadenas: 'Chain Devil', chasme: 'Chasme', quimera: 'Chimera', chuul: 'Chuul',
  golemdearcilla: 'Clay Golem', cloaker: 'Cloaker', gigante_nubes: 'Cloud Giant', cockatrices: 'Cockatrices',
  coloso: 'Colossus', plebeyo: 'Commoner', serpiente_constrictora: 'Constrictor Snake', couatl: 'Couatl', cangrejo: 'Crab',
  manos_reptantes: 'Crawling Hands', cocodrilo: 'Crocodile', cultistas: 'Cultists', ciclopes: 'Cyclopes', dao: 'Dao',
  manto_oscuro: 'Darkmantle', perro_de_la_muerte: 'Death Dog', death_knights: 'Death Knights', tirano_de_la_muerte: 'Death Tyrant',
  ciervo: 'Deer', semiliche: 'Demilich', deva: 'Deva', bestia_desplazante: 'Displacer Beast', djinni: 'Djinni',
  doppelganger: 'Doppelganger', dracolich: 'Dracolich', caballo_de_tiro: 'Draft Horse', dragon_tortuga: 'Dragon Turtle',
  dretches: 'Dretches', drider: 'Drider', druida: 'Druid', driade: 'Dryad', elemental_de_tierra: 'Earth Elemental',
  efreeti: 'Efreeti', cataclismo_elemental: 'Elemental Cataclysm', elefante: 'Elephant', empireos: 'Empyreans',
  calavera_de_fuego: 'Flameskull', golem_de_carne: 'Flesh Golem', flumph: 'Flumph', serpiente_voladora: 'Flying Snake',
  fomorian: 'Fomorian', rana: 'Frog', gigante_de_hielo: 'Frost Giant', fungi: 'Fungi', galeb_duhr: 'Galeb Duhr',
  gargola: 'Gargoyle', ghasts: 'Ghasts', fantasma: 'Ghost', ghouls: 'Ghouls', simio_gigante: 'Giant Ape',
  tejon_gigante: 'Giant Badger', murcielago_gigante: 'Giant Bat', jabali_gigante: 'Giant Boar', ciempies_gigante: 'Giant Centipede',
  serpiente_constrictora_gigante: 'Giant Constrictor Snake', cangrejo_gigante: 'Giant Crab', cocodrilo_gigante: 'Giant Crocodile',
  escarabajo_de_fuego_gigante: 'Giant Fire Beetle', rana_gigante: 'Giant Frog', cabra_gigante: 'Giant Goat',
  hiena_gigante: 'Giant Hyena', lagarto_gigante: 'Giant Lizard', pulpo_gigante: 'Giant Octopus', buho_gigante: 'Giant Owl',
  rata_gigante: 'Giant Rat', caballito_de_mar_gigante: 'Giant Sea Horse', escorpion_gigante: 'Giant Scorpion',
  tiburon_gigante: 'Giant Shark', arana_gigante: 'Giant Spider', calamar_gigante: 'Giant Squid', sapo_gigante: 'Giant Toad',
  githyanki: 'Githyanki', githzerai: 'Githzerai', glabrezu: 'Glabrezu', gladiador: 'Gladiator', gnolls: 'Gnolls',
  cabra: 'Goat', dragones_dorados: 'Gold Dragons', gorgonas: 'Gorgons', goristro: 'Goristro', limos_grises: 'Gray Oozes',
  bruja_verde: 'Green Hag', grell: 'Grell', gricks: 'Gricks', grifo: 'Griffon', grimlock: 'Grimlock',
  naga_guardiana: 'Guardian Naga', guardias: 'Guards', medio_dragon: 'Half-Dragon', halcon: 'Hawk', perro_infernal: 'Hell Hound',
  horror_acorazado: 'Helmed Horror', dragones_verdes: 'Green Dragons', hezrou: 'Hezrou', hipogrifo: 'Hippogriff',
  hipopotamo: 'Hippopotamus', hobgoblins: 'Hobgoblins', homunculus: 'Homunculus', hook_horror: 'Hook Horror',
  horned_devil: 'Horned Devil', hunter_shark: 'Hunter Shark', hidra: 'Hydra', hiena: 'Hyena', diablo_de_hielo: 'Ice Devil',
  diablillo: 'Imp', incubo: 'Incubus', devorador_de_intelectos: 'Intellect Devourer', golem_de_hierro: 'Iron Golem',
  chacal: 'Jackal', chacalwere: 'Jackalwere', kenku: 'Kenku', orca: 'Orca', caballeros: 'Knights', kobolds: 'Kobolds',
  kraken: 'Kraken', kuo_toa: 'Kuo-toa', lamia: 'Lamia', larvas: 'Larvae', lemures: 'Lemures', leon: 'Lion',
  lagarto: 'Lizard', hombres_lagarto: 'Lizardfolk', magos: 'Mages', magmin: 'Magmin', mamut: 'Mammoth', manes: 'Manes',
  manticoa: 'Manticore', marid: 'Marid', marilith: 'Marilith', mastin: 'Mastiff', medusa: 'Medusa', mefits: 'Mephits',
  merfolk: 'Merfolk', merrow: 'Merrow', mezzoloth: 'Mezzoloth', mind_flayers: 'Mind Flayers',
  minotauro_de_baphomet: 'Minotaur of Baphomet', modrones: 'Modrones', mula: 'Mule', momias: 'Mummies',
  'micónidos': 'Myconids', nalfeshnee: 'Nalfeshnee', bruja_nocturna: 'Night Hag', pesadilla: 'Nightmare', nobles: 'Nobles',
  nothic: 'Nothic', nycaloth: 'Nycaloth', gelatina_ocre: 'Ochre Jelly', pulpo: 'Octopus', ogros: 'Ogres', oni: 'Oni',
  otyugh: 'Otyugh', buho: 'Owl', osos_buho: 'Owlbears', pantera: 'Panther', pegaso: 'Pegasus', artistas: 'Performers',
  periton: 'Peryton', arana_fase: 'Phase Spider', perforador: 'Piercer', piranhas: 'Piranhas', piratas: 'Pirates',
  diablo_del_foso: 'Pit Fiend', pixies: 'Pixies', planetar: 'Planetar', plesiosaurio: 'Plesiosaurus', oso_polar: 'Polar Bear',
  poltergeist: 'Poltergeist', poni: 'Pony', sacerdotes: 'Priests', pseudodragon: 'Pseudodragon', pteranodon: 'Pteranodon',
  gusano_purpura: 'Purple Worm', quaggoths: 'Quaggoths', quasit: 'Quasit', rakshasa: 'Rakshasa', rata: 'Rat',
  cuervo: 'Raven', dragones_rojos: 'Red Dragons', tiburon_de_arrecife: 'Reef Shark', remorhazes: 'Remorhazes',
  revenants: 'Revenants', rinoceronte: 'Rhinoceros', caballo_de_montar: 'Riding Horse', roc: 'Roc', roper: 'Roper',
  monstruo_oxidante: 'Rust Monster', tigre_dientes_de_sable: 'Saber-Toothed Tiger', sahuagin: 'Sahuagin',
  salamanders: 'Salamanders', satyrs: 'Satyrs', espantapajaros: 'Scarecrow', escorpion: 'Scorpion', exploradores: 'Scouts',
  bruja_marina: 'Sea Hag', caballito_de_mar: 'Sea Horse', sombra: 'Shadow', demonio_de_sombra: 'Shadow Demon',
  dragones_de_sombra: 'Shadow Dragons', monticulo_hambriento: 'Shambling Mound', guardian_de_escudo: 'Shield Guardian',
  dragones_plateados: 'Silver Dragons', esqueletos: 'Skeletons', slaadi: 'Slaadi', solar: 'Solar', espectador: 'Spectator',
  esfinges: 'Sphinxes', arana: 'Spider', sprite: 'Sprite', stirges: 'Stirges', gigante_de_piedra: 'Stone Giant',
  gigante_de_la_tormenta: 'Storm Giant', sucuubo: 'Succubus', enjambre_de_murcielagos: 'Swarm of Bats',
  enjambre_de_insectos: 'Swarm of Insects', enjambre_de_ratas: 'Swarm of Rats', enjambre_de_cuervos: 'Swarm of Ravens',
  enjambre_de_serpientes_venenosas: 'Swarm of Poisonous Snakes', tarrasque: 'Tarrasque', matones: 'Thugs', ents: 'Treants',
  trolls: 'Trolls', unicornios: 'Unicorns', vampiros: 'Vampires', hombre_rata: 'Wererat', hombre_lobo: 'Werewolf',
  tumularios: 'Wights', fuego_fatuo: 'Will-o\'-Wisp', wyvern: 'Wyvern', xorn: 'Xorn', yeti: 'Yeti', yuan_ti: 'Yuan-ti',
  zombis: 'Zombies', dragones_hada: 'Faerie Dragons'
};
// ---- src/features/utils.js ----
function crAFraccion(cr) {
  if (cr === 0.125) return '1/8';
  if (cr === 0.25) return '1/4';
  if (cr === 0.5) return '1/2';
  return String(cr);
}
function nivelPeligro(cr) {
  if (cr <= 4) return 'bajo';
  if (cr <= 10) return 'medio';
  if (cr <= 16) return 'alto';
  return 'mortal';
}
function mod(score) {
  return (typeof score === 'number' && Number.isFinite(score)) ? Math.floor((score - 10) / 2) : null;
}
function fmtMod(modificador) {
  if (typeof modificador !== 'number' || !Number.isFinite(modificador)) return '—';
  return `${modificador >= 0 ? '+' : ''}${modificador}`;
}
function normalizar(texto) {
  return (texto || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
// Quita el contenido entre paréntesis para comparar "humanoide (orco)" contra "humanoide".
function quitarParentesis(texto) {
  return normalizar(texto).replace(/\([^)]*\)/g, '').replace(/\s+/g, ' ').trim();
}
// Compara un campo del monstruo (con o sin paréntesis) contra un valor de filtro limpio.
function coincideCampo(valorCampo, valorFiltro) {
  if (!valorCampo || !valorFiltro) return false;
  const campoSinParentesis = quitarParentesis(valorCampo);
  const filtroNormalizado = normalizar(valorFiltro).trim();
  if (campoSinParentesis === filtroNormalizado) return true;
  return normalizar(valorCampo).includes(filtroNormalizado);
}
function fraccionANumero(valor) {
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
// ---- src/features/storage.js ----
const CLAVE_VARIANTES = 'compendio_variantes_seleccionadas';
const CLAVE_IMPORTADOS = 'compendio_monstruos_importados';

// Las imágenes personalizadas viven en IndexedDB (no en localStorage) porque
// localStorage tiene un límite total de ~5 MB compartido con el resto de los
// datos, mientras que IndexedDB soporta imágenes mucho más pesadas.
const DB_NOMBRE = 'compendio_db';
const DB_VERSION = 1;
const ALMACEN_IMAGENES = 'imagenes_custom';

let dbPromise = null;
function abrirDB() {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    const peticion = indexedDB.open(DB_NOMBRE, DB_VERSION);
    peticion.onupgradeneeded = () => {
      if (!peticion.result.objectStoreNames.contains(ALMACEN_IMAGENES)) {
        peticion.result.createObjectStore(ALMACEN_IMAGENES);
      }
    };
    peticion.onsuccess = () => resolve(peticion.result);
    peticion.onerror = () => reject(peticion.error);
  });
  return dbPromise;
}

let cacheImagenes = {};

// Se resuelve cuando las imágenes guardadas ya se cargaron en memoria desde
// IndexedDB. La app espera esta promesa antes del primer render.
const imagenesListas = (async () => {
  try {
    const db = await abrirDB();
    const almacen = db.transaction(ALMACEN_IMAGENES, 'readonly').objectStore(ALMACEN_IMAGENES);
    const claves = await new Promise((resolve, reject) => {
      const req = almacen.getAllKeys();
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
    const valores = await new Promise((resolve, reject) => {
      const req = almacen.getAll();
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
    claves.forEach((clave, i) => { cacheImagenes[clave] = valores[i]; });
  } catch (error) {
    cacheImagenes = {};
  }
})();

function cargarImagenesCustom() {
  return cacheImagenes;
}

async function guardarImagenCustom(id, dataUrl) {
  cacheImagenes = { ...cacheImagenes, [id]: dataUrl };
  const db = await abrirDB();
  await new Promise((resolve, reject) => {
    const tx = db.transaction(ALMACEN_IMAGENES, 'readwrite');
    tx.objectStore(ALMACEN_IMAGENES).put(dataUrl, id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function borrarImagenCustom(id) {
  const { [id]: _quitada, ...resto } = cacheImagenes;
  cacheImagenes = resto;
  const db = await abrirDB();
  await new Promise((resolve, reject) => {
    const tx = db.transaction(ALMACEN_IMAGENES, 'readwrite');
    tx.objectStore(ALMACEN_IMAGENES).delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

function cargarVariantesSeleccionadas() {
  try {
    return JSON.parse(localStorage.getItem(CLAVE_VARIANTES)) || {};
  } catch (error) {
    return {};
  }
}

function guardarVarianteSeleccionada(id, varianteId) {
  const variantes = cargarVariantesSeleccionadas();
  variantes[id] = varianteId;
  localStorage.setItem(CLAVE_VARIANTES, JSON.stringify(variantes));
}

function cargarImportados() {
  try {
    return JSON.parse(localStorage.getItem(CLAVE_IMPORTADOS)) || [];
  } catch (error) {
    return [];
  }
}

function guardarImportados(lista) {
  localStorage.setItem(CLAVE_IMPORTADOS, JSON.stringify(lista));
}
// ---- src/features/monster-model.js ----
function normalizarCamposMonstruo(data) {
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
function aplicarVariante(monstruoBase, variante) {
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
function crearCompendio(baseMonstruos) {
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
  // Para ordenar por CR se usa el CR "representativo" de cada monstruo: si tiene
  // variantes con CR numérico, se compara contra el mínimo (orden ascendente) o
  // el máximo (orden descendente) de todos sus CR filtrables (base + variantes).
  // Los monstruos sin ningún CR numérico (CR "variable") quedan siempre al final,
  // y los empates se resuelven por nombre.
  function ordenarMonstruos(lista) {
    const ordenada = [...lista];
    const esAsc = filtros.orden === 'cr_asc';
    const esDesc = filtros.orden === 'cr_desc';
    if (esAsc || esDesc) {
      const crParaOrden = new Map();
      lista.forEach((m) => {
        const crs = obtenerCrsFiltrables(m);
        crParaOrden.set(m.id, crs.length ? (esAsc ? Math.min(...crs) : Math.max(...crs)) : null);
      });
      ordenada.sort((a, b) => {
        const ca = crParaOrden.get(a.id);
        const cb = crParaOrden.get(b.id);
        if (ca === null && cb === null) return a.nombre.localeCompare(b.nombre);
        if (ca === null) return 1;
        if (cb === null) return -1;
        return (esAsc ? ca - cb : cb - ca) || a.nombre.localeCompare(b.nombre);
      });
      return ordenada;
    }
    switch (filtros.orden) {
      case 'nombre_asc': ordenada.sort((a, b) => a.nombre.localeCompare(b.nombre)); break;
      case 'nombre_desc': ordenada.sort((a, b) => b.nombre.localeCompare(a.nombre)); break;
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
// ---- src/ui/monster-views.js ----
function retratoProcedural(monstruo, tipoColor) {
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
function marcadoImagenConError(monstruo, obtenerFuenteImagen, tipoColor) {
  const src = obtenerFuenteImagen(monstruo);
  if (src) return `<img src="${src}" alt="Retrato de ${monstruo.nombre}" loading="lazy" onerror="manejarErrorImagen(this,'${monstruo.id}')">`;
  return retratoProcedural(monstruo, tipoColor);
}
function estiloInlineHabitat(habitat) {
  const estilo = HABITAT_ESTILO[habitat];
  if (!estilo) return '';
  return `style="background:${estilo.fondo};border-color:${estilo.borde};color:${estilo.texto}"`;
}
function chipHabitatHtml(habitat) {
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
  // Se usa <a> (con href real al hash de la ficha) en vez de <button> para que
  // el clic derecho ofrezca "Abrir en una pestaña nueva", "Abrir en ventana
  // nueva", etc., como cualquier enlace normal.
  return `<a class="tarjeta" href="#/monstruo/${encodeURIComponent(monstruo.id)}" data-id="${monstruo.id}" aria-label="Ver ficha de ${monstruo.nombre}">
    <div class="miniatura">${marcadoImagenConError(monstruo, obtenerFuenteImagen, tipoColor)}</div>
    <div class="cuerpo">
      <div class="nombre-cr"><h3>${monstruo.nombre}</h3>
        <span class="insignia-cr" style="background:${colorInsigniaCr}">CR ${crAFraccion(monstruo.cr)}</span></div>
      <div class="meta">${monstruo['tamaño']} · ${monstruo.tipo}${nombreEn}</div>
      ${variantesCrHtml}
      <p class="lore">${monstruo.descripcion_breve || ''}</p>
      <div>${(monstruo.habitat || []).map((h) => chipHabitatHtml(h)).join('')}</div>
    </div></a>`;
}
function construirPanelResultados({ todos, resultados, paginaActual, tamPagina, obtenerFuenteImagen, tipoColor, obtenerVariantesConCr }) {
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
// Convierte el patrón habitual de los bloques de estadísticas ("Nombre. resto
// del texto") en "Nombre: resto del texto", igual que se hace con los
// nombres de rasgos/acciones. Solo actúa si el ". " aparece cerca del
// principio del texto (se asume que es el separador título/cuerpo y no un
// punto cualquiera dentro de una oración larga).
function formatoTituloDosPuntos(texto) {
  if (typeof texto !== 'string') return texto;
  const indice = texto.indexOf('. ');
  if (indice === -1 || indice > 60) return texto;
  return `${texto.slice(0, indice)}:${texto.slice(indice + 1)}`;
}
// Envuelve cada distancia en pies del texto ("30 pies", "80/320 pies", "cono
// de 15 pies") en un <span class="dist"> subrayado y clicable. El pie base
// (y el segundo valor si es un alcance doble tipo "80/320 pies") quedan
// guardados en data-pies / data-pies2 para poder recalcular metros y
// casillas en el cliente sin volver a tocar el texto original. Solo actúa
// dentro de la ficha de detalle (no en las tarjetas del listado).
function envolverDistancias(texto) {
  if (typeof texto !== 'string') return texto;
  return texto.replace(/(\d+)(?:\/(\d+))?\s*pies\b/g, (coincidencia, pies1, pies2) => {
    const atributoPies2 = pies2 ? ` data-pies2="${pies2}"` : '';
    return `<span class="dist" data-pies="${pies1}"${atributoPies2}>${coincidencia}</span>`;
  });
}
function vistaDetalle({ monstruoBase, monstruo, varianteSeleccionada, obtenerFuenteImagen, tipoColor }) {
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
  // Clase de Armadura / Puntos de Golpe / Velocidad ahora se muestran como
  // "estadísticas rápidas" en fichas individuales (misma familia visual que
  // la tabla de atributos), en vez de simples líneas de texto sueltas.
  const statsRapidasHtml = `<div class="stats-rapidas">
    <div class="stat-rapida"><span class="stat-rapida-etiqueta">Clase de Armadura</span><span class="stat-rapida-valor">${valorVisible(monstruo.ca)}</span></div>
    <div class="stat-rapida"><span class="stat-rapida-etiqueta">Puntos de Golpe</span><span class="stat-rapida-valor">${pgVisible}${dadosPgVisible !== '—' ? ` (${dadosPgVisible})` : ''}</span></div>
    <div class="stat-rapida"><span class="stat-rapida-etiqueta">Velocidad</span><span class="stat-rapida-valor">${envolverDistancias(valorVisible(monstruo.velocidad))}</span></div>
  </div>`;
  // Los títulos de estadísticas (Tiradas de salvación, Sentidos, etc.) ahora
  // terminan en ":" en vez de "." para que se lean como una etiqueta, igual
  // que los nombres de rasgos/acciones más abajo.
  const bloque = (etiqueta, valor) => {
    const visible = valorVisible(valor);
    if (visible === '—') return '';
    return `<div class="linea-stat"><b>${etiqueta}:</b> ${envolverDistancias(visible)}</div>`;
  };
  const listaRasgos = (titulo, arr) => (arr && arr.length)
    ? `<div class="seccion-titulo">${titulo}</div>${arr.map((r) => `<div class="rasgo"><b>${r.nombre}:</b> ${envolverDistancias(r.texto)}</div>`).join('')}`
    : '';
  const varianteHtml = varianteSeleccionada ? `<div class="seccion-titulo">Variante seleccionada</div>
    <div class="linea-stat"><b>Variante activa:</b> ${varianteSeleccionada.nombre}</div>
    ${varianteSeleccionada.presencia ? `<div class="linea-stat"><b>Presencia:</b> ${varianteSeleccionada.presencia}</div>` : ''}
    ${varianteSeleccionada.apariencias ? `<div class="linea-stat"><b>Apariencias:</b> ${varianteSeleccionada.apariencias}</div>` : ''}` : '';
  // Reacciones y Acciones legendarias ahora son categorías visualmente
  // separadas (cajas con acento de color propio), en vez de mezclarse con el
  // resto de rasgos/acciones. Acciones legendarias usa tonos dorados.
  const reaccionesHtml = (monstruo.reacciones && monstruo.reacciones.length)
    ? `<div class="seccion-reacciones">${listaRasgos('Reacciones', monstruo.reacciones)}</div>`
    : '';
  const legendariasHtml = monstruo.legendarias ? `<div class="seccion-legendarias">
    <div class="seccion-titulo seccion-titulo-legendaria">Acciones legendarias</div>
    <div class="rasgo">Puede realizar ${monstruo.legendarias.cantidad} acciones legendarias, eligiendo entre las opciones siguientes. Solo puede usar una opción a la vez y solo al final del turno de otra criatura. Recupera las acciones gastadas al inicio de su turno.</div>
    ${monstruo.legendarias.texto.map((t) => `<div class="rasgo">${envolverDistancias(formatoTituloDosPuntos(t))}</div>`).join('')}
  </div>` : '';
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
      </div>
    </div>
    <hr class="filete">
    ${statsRapidasHtml}
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
    ${reaccionesHtml}
    ${legendariasHtml}
    ${monstruo.descripcion_breve ? `<div class="seccion-titulo">Descripción</div><p>${monstruo.descripcion_breve}</p>` : ''}
    ${monstruo.notas ? `<div class="notas-usuario"><b>Notas personales:</b> ${monstruo.notas}</div>` : ''}
    <p class="pagina-manual">${monstruo.pagina ? `Manual de Monstruos 2024, pág. ${monstruo.pagina}` : ''}</p>
  </div>`;
}
// ---- src/ui/filtros-views.js ----
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
.dd-panel{position:absolute;top:100%;left:0;z-index:20;background:var(--pergamino);border:1px solid var(--oro);border-radius:8px;padding:10px;margin-top:4px;box-shadow:0 10px 24px rgba(0,0,0,.35);max-width:calc(100vw - 32px);box-sizing:border-box;}
.dd-panel-rejilla{display:grid;grid-template-columns:repeat(3,minmax(115px,1fr));gap:5px;width:400px;}
.dd-panel-columna{display:flex;flex-direction:column;gap:6px;min-width:210px;}
.chip-opcion{display:flex;align-items:center;gap:6px;padding:4px 8px;border-radius:6px;font-family:'EB Garamond',serif;font-size:13.5px;font-weight:600;background:#fbf6e9;border:1px solid #b8a878;color:var(--tinta-suave);cursor:pointer;opacity:.6;}
.chip-opcion:has(input:checked){opacity:1;box-shadow:inset 0 0 0 2px var(--oro);}
.chip-opcion input{transform:scale(1.2);accent-color:var(--oro);}
/* Fichas un poco más chicas, solo para Hábitat y CR exacto. */
.chip-opcion-compacta{padding:3px 6px;font-size:12px;gap:4px;}
/* Hábitat y CR exacto se anclan al borde derecho de su propio campo (que
   coincide con el borde derecho de la cuadrícula de filtros) en vez de crecer
   hacia la derecha, para que el panel nunca se salga de la pantalla ni obligue
   a desplazarse horizontalmente en resoluciones más chicas. */
#dd-cr-exacto .dd-panel,#dd-habitat .dd-panel{left:auto;right:0;}
</style>`;

// Si se indica "columnas", el panel se abre como rejilla de varias columnas
// (más ancho y más bajo) en lugar de una lista vertical larga.
// "compacto" reduce el ancho de columna y el tamaño de las fichas — se usa
// solo para el filtro de CR exacto.
function dropdownSimpleHtml({ id, etiqueta, opciones, valorActual, textoActual, columnas, compacto }) {
  const clasePanel = columnas ? 'dd-panel' : 'dd-panel dd-panel-columna';
  const anchoColumna = compacto ? 115 : 160;
  const espacio = compacto ? 5 : 6;
  const estiloPanel = columnas
    ? ` style="display:grid;grid-template-columns:repeat(${columnas},minmax(0,1fr));gap:${espacio}px;width:min(${columnas * anchoColumna}px,calc(100vw - 32px));"`
    : '';
  const claseOpcion = compacto ? 'chip-opcion chip-opcion-compacta' : 'chip-opcion';
  return `
  <div class="campo-filtro">
    <label>${etiqueta}</label>
    <details class="dd-filtro" id="dd-${id}">
      <summary class="control-filtro">${textoActual}</summary>
      <div class="${clasePanel}"${estiloPanel}>
        ${opciones.map(([valor, texto]) => `
        <label class="${claseOpcion}">
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
          <label class="chip-opcion chip-opcion-compacta" style="background:${estilo.fondo || '#fbf6e9'};border-color:${estilo.borde || '#b8a878'};color:${estilo.texto || 'var(--tinta-suave)'}">
            <input type="checkbox" class="f-habitat-item" value="${h}" ${seleccionados.includes(h) ? 'checked' : ''}>${h}
          </label>`;
        }).join('')}
      </div>
    </details>
  </div>`;
}
function vistaLista({ filtros, crsExactos, panelResultadosHtml }) {
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
        <input type="text" id="f-q" class="control-filtro" value="${filtros.q}" placeholder="ej. dragón, goblin, beholder, owlbear...">
      </div>
      ${dropdownSimpleHtml({ id: 'rango', etiqueta: 'Rango de peligro', opciones: opcionesRango, valorActual: filtros.rango, textoActual: textoRango })}
      ${dropdownSimpleHtml({ id: 'cr-exacto', etiqueta: 'CR exacto', opciones: opcionesCr, valorActual: filtros.crExacto, textoActual: textoCr, columnas: 4, compacto: true })}
    </div>
    <div class="fila">
      ${dropdownSimpleHtml({ id: 'tipo', etiqueta: 'Tipo', opciones: opcionesTipo, valorActual: filtros.tipo, textoActual: filtros.tipo === 'todos' ? 'Todos' : filtros.tipo, columnas: 3 })}
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
// ---- src/app.js ----
const BASE_CREATURES = Array.isArray(window.Monstruos) ? window.Monstruos : [];
const compendio = crearCompendio(BASE_CREATURES);

// ===================== UNIDADES DE DISTANCIA EN LA FICHA =====================
// Cada distancia en pies dentro de la ficha (Velocidad, alcance de acciones,
// radios de conos/esferas, etc.) se envuelve en un <span class="dist"> desde
// monster-views.js. Acá se maneja la conversión a metros/casillas y el
// popover que aparece al tocar cualquiera de esas distancias. La unidad
// elegida se recuerda mientras dure la sesión y se aplica a TODAS las
// distancias de la ficha (no solo a la que se tocó).
let unidadDistanciaActual = 'pies';
// 5 pies = 1 casilla siempre en este compendio, así que la división es exacta.
function valorSegunUnidad(pies, unidad) {
  if (unidad === 'metros') return (pies * 0.3048).toFixed(1);
  if (unidad === 'casillas') return String(pies / 5);
  return String(pies);
}
function sufijoUnidad(unidad, valorUnico) {
  if (unidad === 'metros') return 'm';
  if (unidad === 'casillas') return valorUnico === '1' ? 'casilla' : 'casillas';
  return 'pies';
}
function textoDistancia(pies1, pies2, unidad) {
  const v1 = valorSegunUnidad(pies1, unidad);
  if (pies2 === null) return `${v1} ${sufijoUnidad(unidad, v1)}`;
  const v2 = valorSegunUnidad(pies2, unidad);
  return `${v1}/${v2} ${sufijoUnidad(unidad, null)}`;
}
function actualizarTextoDistancias() {
  document.querySelectorAll('.dist').forEach((span) => {
    const pies1 = Number(span.dataset.pies);
    const pies2 = span.dataset.pies2 ? Number(span.dataset.pies2) : null;
    span.textContent = textoDistancia(pies1, pies2, unidadDistanciaActual);
  });
}
function manejarEscPopoverDistancia(evento) {
  if (evento.key === 'Escape') cerrarPopoverDistancia();
}
function manejarClickFueraPopoverDistancia(evento) {
  const popover = document.querySelector('.dist-popover');
  if (popover && !popover.contains(evento.target) && !evento.target.classList.contains('dist')) {
    cerrarPopoverDistancia();
  }
}
function cerrarPopoverDistancia() {
  const popover = document.querySelector('.dist-popover');
  if (popover) popover.remove();
  document.removeEventListener('keydown', manejarEscPopoverDistancia);
  document.removeEventListener('click', manejarClickFueraPopoverDistancia, true);
}
function abrirPopoverDistancia(span) {
  cerrarPopoverDistancia();
  const pies1 = Number(span.dataset.pies);
  const pies2 = span.dataset.pies2 ? Number(span.dataset.pies2) : null;
  const popover = document.createElement('div');
  popover.className = 'dist-popover';
  popover.setAttribute('role', 'menu');
  popover.innerHTML = ['pies', 'metros', 'casillas'].map((unidad) => `
    <button type="button" class="dist-popover-opcion${unidad === unidadDistanciaActual ? ' activa' : ''}" data-unidad="${unidad}" role="menuitem">${textoDistancia(pies1, pies2, unidad)}</button>`).join('');
  document.body.appendChild(popover);
  const rectSpan = span.getBoundingClientRect();
  const anchoPopover = popover.offsetWidth;
  let izquierda = rectSpan.left + window.scrollX;
  const limiteDerecho = window.scrollX + document.documentElement.clientWidth - anchoPopover - 8;
  if (izquierda > limiteDerecho) izquierda = Math.max(8, limiteDerecho);
  popover.style.left = `${izquierda}px`;
  popover.style.top = `${rectSpan.bottom + window.scrollY + 4}px`;
  popover.querySelectorAll('.dist-popover-opcion').forEach((boton) => {
    boton.onclick = (evento) => {
      evento.stopPropagation();
      unidadDistanciaActual = boton.dataset.unidad;
      actualizarTextoDistancias();
      cerrarPopoverDistancia();
    };
  });
  document.addEventListener('keydown', manejarEscPopoverDistancia);
  setTimeout(() => document.addEventListener('click', manejarClickFueraPopoverDistancia, true), 0);
}
function enlazarEventosDistancias() {
  document.querySelectorAll('.dist').forEach((span) => {
    span.tabIndex = 0;
    span.setAttribute('role', 'button');
    span.onclick = (evento) => { evento.stopPropagation(); abrirPopoverDistancia(span); };
    span.onkeydown = (evento) => {
      if (evento.key === 'Enter' || evento.key === ' ') { evento.preventDefault(); abrirPopoverDistancia(span); }
    };
  });
  actualizarTextoDistancias(); // aplica la unidad ya elegida si no es "pies"
}

function analizarHash() {
  const hash = location.hash || '#/';
  const partes = hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  if (partes[0] === 'monstruo' && partes[1]) return { vista: 'detalle', id: decodeURIComponent(partes[1]) };
  return { vista: 'lista' };
}
function irA(hash) { location.hash = hash; }
function enlazarEventosPanelResultados() {
  // Las tarjetas ahora son <a href="#/monstruo/..."> reales (ver monster-views.js),
  // así que la navegación con clic izquierdo, ctrl/cmd+clic, clic central y
  // clic derecho → "Abrir en pestaña nueva" ya funciona sola, sin JS.
  const btnAnterior = document.getElementById('btn-pag-anterior');
  const btnSiguiente = document.getElementById('btn-pag-siguiente');
  if (btnAnterior) btnAnterior.onclick = () => { compendio.setPaginaActual(compendio.getPaginaActual() - 1); actualizarPanelResultados(); };
  if (btnSiguiente) btnSiguiente.onclick = () => { compendio.setPaginaActual(compendio.getPaginaActual() + 1); actualizarPanelResultados(); };
  const btnLimpiarVacio = document.getElementById('btn-limpiar-vacio');
  if (btnLimpiarVacio) btnLimpiarVacio.onclick = () => { compendio.resetFiltros(); render(); };
}
function actualizarPanelResultados() {
  const panelResultados = document.querySelectorAll('.panel')[1];
  const todos = compendio.obtenerTodosMonstruos();
  const resultados = compendio.calcularResultados();
  const panel = construirPanelResultados({
    todos, resultados, paginaActual: compendio.getPaginaActual(), tamPagina: TAM_PAGINA,
    obtenerFuenteImagen: compendio.obtenerFuenteImagen, tipoColor: TIPO_COLOR,
    obtenerVariantesConCr: compendio.obtenerVariantesConCr
  });
  compendio.setPaginaActual(panel.pagina);
  panelResultados.innerHTML = panel.html;
  enlazarEventosPanelResultados();
}
function refrescarSoloResultados() { compendio.resetPagina(); actualizarPanelResultados(); }
function enlazarDropdownSimple(nombre, aplicar) {
  document.querySelectorAll(`input[name="${nombre}"]`).forEach((radio) => {
    radio.onchange = (e) => { aplicar(e.target.value); compendio.resetPagina(); render(); };
  });
}
function enlazarEventosLista() {
  const byId = (id) => document.getElementById(id);
  byId('f-q').oninput = (e) => { compendio.filtros.q = e.target.value; refrescarSoloResultados(); };
  enlazarDropdownSimple('f-rango', (v) => { compendio.filtros.rango = v; });
  enlazarDropdownSimple('f-cr-exacto', (v) => { compendio.filtros.crExacto = v; });
  enlazarDropdownSimple('f-tipo', (v) => { compendio.filtros.tipo = v; });
  enlazarDropdownSimple('f-tamano', (v) => { compendio.filtros.tamano = v; });
  enlazarDropdownSimple('f-orden', (v) => { compendio.filtros.orden = v; });
  document.querySelectorAll('.f-habitat-item').forEach((chk) => {
    chk.onchange = () => {
      compendio.filtros.habitat = Array.from(document.querySelectorAll('.f-habitat-item:checked')).map((c) => c.value);
      const resumen = document.querySelector('#dd-habitat summary');
      if (resumen) {
        resumen.textContent = compendio.filtros.habitat.length === 0 ? 'Todos'
          : compendio.filtros.habitat.length === 1 ? compendio.filtros.habitat[0]
          : `${compendio.filtros.habitat.length} hábitats seleccionados`;
      }
      refrescarSoloResultados();
    };
  });
  byId('btn-limpiar').onclick = () => { compendio.resetFiltros(); render(); };
  enlazarEventosPanelResultados();
  const btnImportar = byId('btn-importar');
  const inputImportar = byId('input-importar');
  if (btnImportar && inputImportar) {
    btnImportar.onclick = () => inputImportar.click();
    inputImportar.onchange = (e) => {
      const archivo = e.target.files[0];
      if (!archivo) return;
      const lector = new FileReader();
      lector.onload = (evento) => {
        try {
          const datos = JSON.parse(evento.target.result);
          if (!Array.isArray(datos)) throw new Error('El JSON debe ser un array de monstruos.');
          compendio.importarMonstruos(datos);
          alert(`Se importaron ${datos.length} monstruo(s) correctamente.`);
          compendio.resetPagina();
          render();
        } catch (error) { alert(`No se pudo importar el archivo: ${error.message}`); }
      };
      lector.readAsText(archivo);
    };
  }
}
// ===================== ZOOM DE IMAGEN DE LA FICHA =====================
// El retrato ampliado se muestra en un overlay `position:fixed` centrado en
// pantalla (no un transform sobre el propio elemento de la ficha), para que
// la imagen completa siempre entre en cualquier resolución y quede centrada.
// Se cierra con Escape, con clic fuera de la imagen o con el botón ×.
// Importante: esto NO toca el marcado ni los estilos de `.ficha-imagen`
// (el retrato sin ampliar dentro de la ficha queda intacto).
function manejarEscZoomImagen(evento) {
  if (evento.key === 'Escape') cerrarZoomImagen();
}
function cerrarZoomImagen() {
  const fondo = document.querySelector('.zoom-imagen-fondo');
  if (fondo) fondo.remove();
  document.removeEventListener('keydown', manejarEscZoomImagen);
}
function abrirZoomImagen(contenidoHtml, nombreMonstruo) {
  cerrarZoomImagen(); // por si quedó uno abierto
  const fondo = document.createElement('div');
  fondo.className = 'zoom-imagen-fondo';
  fondo.setAttribute('role', 'dialog');
  fondo.setAttribute('aria-modal', 'true');
  fondo.setAttribute('aria-label', `Imagen ampliada de ${nombreMonstruo}`);
  fondo.innerHTML = `
    <button type="button" class="zoom-imagen-cerrar" aria-label="Cerrar imagen ampliada">×</button>
    <div class="zoom-imagen-contenido">${contenidoHtml}</div>`;
  document.body.appendChild(fondo);
  // Clic en el fondo oscuro (fuera de la imagen) cierra el zoom.
  fondo.onclick = (evento) => { if (evento.target === fondo) cerrarZoomImagen(); };
  fondo.querySelector('.zoom-imagen-cerrar').onclick = cerrarZoomImagen;
  document.addEventListener('keydown', manejarEscZoomImagen);
  fondo.querySelector('.zoom-imagen-cerrar').focus();
}
function enlazarEventosZoomImagenFicha(nombreMonstruo) {
  const imagenFicha = document.getElementById('ficha-imagen-principal');
  if (!imagenFicha) return;
  const activarZoom = () => abrirZoomImagen(imagenFicha.innerHTML, nombreMonstruo || '');
  imagenFicha.onclick = activarZoom;
  imagenFicha.onkeydown = (evento) => {
    if (evento.key === 'Enter' || evento.key === ' ') { evento.preventDefault(); activarZoom(); }
  };
}
function enlazarEventosDetalle(id, nombreMonstruo) {
  const btnVolver = document.getElementById('btn-volver');
  if (btnVolver) btnVolver.onclick = () => irA('#/');
  const selectorVariante = document.getElementById('selector-variante');
  if (selectorVariante) selectorVariante.onchange = (e) => { compendio.guardarVarianteSeleccionada(id, e.target.value); render(); };
  enlazarEventosZoomImagenFicha(nombreMonstruo);
  enlazarEventosDistancias();
}
function render() {
  cerrarZoomImagen();
  cerrarPopoverDistancia();
  const ruta = analizarHash();
  const app = document.getElementById('app');
  if (ruta.vista === 'detalle') {
    const base = compendio.obtenerMonstruoPorId(ruta.id);
    const variante = compendio.obtenerVarianteSeleccionada(base);
    const monstruo = base ? compendio.aplicarVariante(base, variante) : null;
    app.innerHTML = vistaDetalle({
      monstruoBase: base, monstruo, varianteSeleccionada: variante,
      obtenerFuenteImagen: compendio.obtenerFuenteImagen, tipoColor: TIPO_COLOR
    });
    enlazarEventosDetalle(ruta.id, monstruo && monstruo.nombre);
  } else {
    const todos = compendio.obtenerTodosMonstruos();
    const resultados = compendio.calcularResultados();
    const panel = construirPanelResultados({
      todos, resultados, paginaActual: compendio.getPaginaActual(), tamPagina: TAM_PAGINA,
      obtenerFuenteImagen: compendio.obtenerFuenteImagen, tipoColor: TIPO_COLOR,
      obtenerVariantesConCr: compendio.obtenerVariantesConCr
    });
    compendio.setPaginaActual(panel.pagina);
    const crsExactos = [...new Set(todos.flatMap((m) => compendio.obtenerCrsFiltrables(m)))].sort((a, b) => a - b);
    app.innerHTML = vistaLista({ filtros: compendio.filtros, crsExactos, panelResultadosHtml: panel.html });
    enlazarEventosLista();
  }
  window.scrollTo(0, 0);
}
window.manejarErrorImagen = (imgEl, id) => {
  const monstruo = compendio.obtenerMonstruoPorId(id);
  if (monstruo) imgEl.outerHTML = retratoProcedural(monstruo, TIPO_COLOR);
};
window.addEventListener('hashchange', render);
imagenesListas.then(() => {
  if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', render);
  else render();
});

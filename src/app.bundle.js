// Bundle generado automáticamente con scripts/crear-bundle.py
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
const HABITATS = ['Ártico', 'Costa', 'Desierto', 'Bosque', 'Colinas', 'Montaña', 'Pantano', 'Subterráneo', 'Urbano', 'Acuático', 'Planar', 'Selva', 'Sabana', 'Océano', 'Cielo', 'Llanura', 'Cualquiera', 'Ruinas', "Cementerio", "Volcán", "Cueva", "Río", "Tundra", "Rural", "Pradera", "Alcantarilla", "Templo"];
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
  Ruinas: { fondo: '#e2ddef', borde: '#a59abf', texto: '#4b3d70' },
  Cementerio: { fondo: '#d9d9d9', borde: '#a0a0a0', texto: '#333333' },
  Volcán: { fondo: '#f2c9c9', borde: '#d97b7b', texto: '#6a1b1b' },
  Cueva: { fondo: '#d9d9d9', borde: '#a0a0a0', texto: '#333333' },
  Río: { fondo: '#c8e6f5', borde: '#7bb4d8', texto: '#1e5e8c' },
  Tundra: { fondo: '#e0f2f1', borde: '#80cbc4', texto: '#00695f' },
  Rural: { fondo: '#e8f5e9', borde: '#a5d6a7', texto: '#2e7d32' },
  Pradera: { fondo: '#e8f5e9', borde: '#a5d6a7', texto: '#2e7d32' },
  Templo: { fondo: '#f0f0f0', borde: '#cccccc', texto: '#333333' },
  Alcantarilla: { fondo: '#d9d9d9', borde: '#a0a0a0', texto: '#333333' }
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
// Convierte un número de CR a su representación en fracción legible.
function crAFraccion(cr) {
  if (cr === 0.125) return '1/8';
  if (cr === 0.25) return '1/4';
  if (cr === 0.5) return '1/2';
  return String(cr);
}

// Clasifica un CR en un nivel de peligro descriptivo.
function nivelPeligro(cr) {
  if (cr <= 4) return 'bajo';
  if (cr <= 10) return 'medio';
  if (cr <= 16) return 'alto';
  return 'mortal';
}

// Calcula el modificador de un atributo a partir de su valor (score).
function mod(score) {
  return (typeof score === 'number' && Number.isFinite(score))
    ? Math.floor((score - 10) / 2)
    : null;
}

// Formatea un modificador con su signo (ej. +3, -1).
function fmtMod(modificador) {
  if (typeof modificador !== 'number' || !Number.isFinite(modificador)) return '—';
  return `${modificador >= 0 ? '+' : ''}${modificador}`;
}

// Normaliza texto: minúsculas y sin diacríticos.
function normalizar(texto) {
  return (texto || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// Quita el contenido entre paréntesis para comparar "humanoide (orco)" contra "humanoide".
function quitarParentesis(texto) {
  return normalizar(texto).replace(/\([^)]*\)/g, '').replace(/\s+/g, ' ').trim();
}

// Compara un campo del monstruo (con o sin paréntesis) contra un valor de filtro limpio.
// src/features/utils.js

function escaparRegex(texto) {
  return texto.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function coincideCampo(valorCampo, valorFiltro) {
  if (!valorCampo || !valorFiltro) return false;
  const campoSinParentesis = quitarParentesis(valorCampo);
  const filtroNormalizado = normalizar(valorFiltro).trim();
  if (campoSinParentesis === filtroNormalizado) return true;

  // Coincidencia por subcadena, pero respetando límites de palabra: lo que
  // esté antes y después del texto buscado no puede ser otra letra o número.
  // Esto evita falsos positivos como "Río" matcheando dentro de "Cementerio"
  // o "Planar Superior" (que contiene "...pe-RIO-r").
  const patron = new RegExp(`(?:^|[^a-z0-9])${escaparRegex(filtroNormalizado)}(?:$|[^a-z0-9])`, 'i');
  return patron.test(normalizar(valorCampo));
}

// Convierte una fracción textual ("1/2", "0.5") a número.
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
// Mapa de estilos de hábitat indexado por su versión sin paréntesis y
// normalizada (minúsculas, sin tildes), para que un hábitat como
// "Subterráneo (cuevas)" o "Bosque (tropical)" herede el mismo color
// que su categoría base ("Subterráneo", "Bosque").
const HABITAT_ESTILO_POR_CLAVE = Object.keys(HABITAT_ESTILO).reduce((acc, clave) => {
  acc[quitarParentesis(clave)] = HABITAT_ESTILO[clave];
  return acc;
}, {});

// Devuelve el estilo {fondo, borde, texto} de un hábitat, resolviendo
// primero por coincidencia exacta y, si no existe, por su categoría base
// (quitando el texto entre paréntesis y sin distinguir mayúsculas/tildes).
function obtenerEstiloHabitat(habitat) {
  if (!habitat) return {};
  return HABITAT_ESTILO[habitat] || HABITAT_ESTILO_POR_CLAVE[quitarParentesis(habitat)] || {};
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
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
// ---- src/features/tracker-model.js ----
// src/features/tracker-model.js
// Gestor de estado y lógica para el Rastreador de Iniciativa.

const CLAVE_STORAGE_INICIATIVA = 'compendio_iniciativa_estado';

function crearRastreadorIniciativa() {
  let estado = {
    combatientes: [],
    indiceActivo: 0,
    ronda: 1,
    contadorUid: 1
  };

  // Cargar estado guardado si existe
  cargarDesdeStorage();

  function cargarDesdeStorage() {
    try {
      const guardado = localStorage.getItem(CLAVE_STORAGE_INICIATIVA);
      if (guardado) {
        const parseado = JSON.parse(guardado);
        if (parseado && Array.isArray(parseado.combatientes)) {
          estado = {
            combatientes: parseado.combatientes,
            indiceActivo: typeof parseado.indiceActivo === 'number' ? parseado.indiceActivo : 0,
            ronda: typeof parseado.ronda === 'number' ? Math.max(1, parseado.ronda) : 1,
            contadorUid: typeof parseado.contadorUid === 'number' ? parseado.contadorUid : (parseado.combatientes.length + 1)
          };
        }
      }
    } catch (e) {
      console.warn('No se pudo cargar el estado de iniciativa de localStorage:', e);
    }
  }

  function guardarEnStorage() {
    try {
      localStorage.setItem(CLAVE_STORAGE_INICIATIVA, JSON.stringify(estado));
    } catch (e) {
      console.warn('No se pudo guardar el estado de iniciativa en localStorage:', e);
    }
  }

  function obtenerEstado() {
    return estado;
  }

  function ordenarCombatientes() {
    // Ordena descendentemente por iniciativa. En empate, por nombre o bono de des si existe.
    estado.combatientes.sort((a, b) => {
      const diff = b.iniciativa - a.iniciativa;
      if (diff !== 0) return diff;
      const desA = a.desMod || 0;
      const desB = b.desMod || 0;
      if (desB !== desA) return desB - desA;
      return a.nombre.localeCompare(b.nombre);
    });
  }

  function agregarCombatiente({
    nombre,
    iniciativa = 0,
    hp = 10,
    maxHp = null,
    ca = 10,
    tipo = 'pc',
    bando = 'ally',
    condiciones = '',
    monstruoId = null,
    desMod = 0
  }) {
    const nuevoHp = Number(hp) || 0;
    const nuevoMaxHp = maxHp !== null && maxHp !== undefined ? Number(maxHp) : nuevoHp;

    const combatiente = {
      uid: estado.contadorUid++,
      nombre: String(nombre).trim() || 'Combatiente',
      iniciativa: Number(iniciativa) || 0,
      hp: nuevoHp,
      maxHp: Math.max(1, nuevoMaxHp),
      ca: Number(ca) || 10,
      tipo: tipo === 'npc' ? 'npc' : 'pc',
      bando: bando === 'enemy' ? 'enemy' : 'ally',
      condiciones: String(condiciones || '').trim(),
      monstruoId: monstruoId || null,
      desMod: Number(desMod) || 0
    };

    estado.combatientes.push(combatiente);
    ordenarCombatientes();
    guardarEnStorage();
    return combatiente;
  }

  function actualizarCombatiente(uid, cambios) {
    const c = estado.combatientes.find((item) => item.uid === uid);
    if (!c) return null;

    if (cambios.nombre !== undefined) c.nombre = String(cambios.nombre).trim() || c.nombre;
    if (cambios.iniciativa !== undefined) {
      c.iniciativa = Number(cambios.iniciativa) || 0;
      ordenarCombatientes();
    }
    if (cambios.hp !== undefined) c.hp = Math.max(0, Number(cambios.hp) || 0);
    if (cambios.maxHp !== undefined) c.maxHp = Math.max(1, Number(cambios.maxHp) || 1);
    if (cambios.ca !== undefined) c.ca = Number(cambios.ca) || 0;
    if (cambios.tipo !== undefined) c.tipo = cambios.tipo === 'npc' ? 'npc' : 'pc';
    if (cambios.bando !== undefined) c.bando = cambios.bando === 'enemy' ? 'enemy' : 'ally';
    if (cambios.condiciones !== undefined) c.condiciones = String(cambios.condiciones);
    if (cambios.desMod !== undefined) c.desMod = Number(cambios.desMod) || 0;

    guardarEnStorage();
    return c;
  }

  function eliminarCombatiente(uid) {
    const idx = estado.combatientes.findIndex((item) => item.uid === uid);
    if (idx === -1) return false;

    estado.combatientes.splice(idx, 1);
    if (idx < estado.indiceActivo) {
      estado.indiceActivo = Math.max(0, estado.indiceActivo - 1);
    }
    if (estado.indiceActivo >= estado.combatientes.length) {
      estado.indiceActivo = 0;
    }
    guardarEnStorage();
    return true;
  }

  function aplicarDanoCuracion(uid, cantidad, esDano = true) {
    const c = estado.combatientes.find((item) => item.uid === uid);
    if (!c) return;
    const num = Math.abs(Number(cantidad) || 0);
    if (num === 0) return;

    if (esDano) {
      c.hp = Math.max(0, c.hp - num);
    } else {
      c.hp = Math.min(c.maxHp, c.hp + num);
    }
    guardarEnStorage();
  }

  function siguienteTurno() {
    if (estado.combatientes.length === 0) return;
    estado.indiceActivo++;
    if (estado.indiceActivo >= estado.combatientes.length) {
      estado.indiceActivo = 0;
      estado.ronda++;
    }
    guardarEnStorage();
  }

  function anteriorTurno() {
    if (estado.combatientes.length === 0) return;
    estado.indiceActivo--;
    if (estado.indiceActivo < 0) {
      estado.indiceActivo = estado.combatientes.length - 1;
      estado.ronda = Math.max(1, estado.ronda - 1);
    }
    guardarEnStorage();
  }

  function reiniciarRonda() {
    estado.ronda = 1;
    estado.indiceActivo = 0;
    guardarEnStorage();
  }

  function vaciarRegistro() {
    estado.combatientes = [];
    estado.indiceActivo = 0;
    estado.ronda = 1;
    guardarEnStorage();
  }

  return {
    obtenerEstado,
    agregarCombatiente,
    actualizarCombatiente,
    eliminarCombatiente,
    aplicarDanoCuracion,
    ordenarCombatientes,
    siguienteTurno,
    anteriorTurno,
    reiniciarRonda,
    vaciarRegistro
  };
}
// ---- src/features/dice-audio.js ----
// src/features/dice-audio.js
// Síntesis de sonido procedural para tiradas de dados mediante Web Audio API.
// No requiere archivos de audio externos y produce impactos y rodadas realistas
// contra madera y fieltro.

let audioCtx = null;
let sonidoSilenciado = false;

function obtenerAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function alternarSilencioSonido() {
  sonidoSilenciado = !sonidoSilenciado;
  return sonidoSilenciado;
}

function estaSonidoSilenciado() {
  return sonidoSilenciado;
}

function reproducirImpactoDado(intensidad = 1, esPared = false) {
  if (sonidoSilenciado) return;
  try {
    const ctx = obtenerAudioContext();
    if (!ctx) return;

    const ahora = ctx.currentTime;
    const ganancia = ctx.createGain();
    
    // Nivel de volumen proporcional a la velocidad del impacto
    const volumen = Math.min(0.28, Math.max(0.04, 0.15 * intensidad));
    ganancia.gain.setValueAtTime(volumen, ahora);
    ganancia.gain.exponentialRampToValueAtTime(0.001, ahora + (esPared ? 0.08 : 0.05));

    // Generador de ruido para el chasquido del impacto
    const duracionRuido = esPared ? 0.06 : 0.04;
    const bufferRuido = ctx.createBuffer(1, ctx.sampleRate * duracionRuido, ctx.sampleRate);
    const salidaRuido = bufferRuido.getChannelData(0);
    for (let i = 0; i < salidaRuido.length; i++) {
      salidaRuido[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.015));
    }
    const fuenteRuido = ctx.createBufferSource();
    fuenteRuido.buffer = bufferRuido;

    // Filtro para simular resonancia de madera/fieltro
    const filtro = ctx.createBiquadFilter();
    filtro.type = 'bandpass';
    filtro.frequency.setValueAtTime(esPared ? (380 + Math.random() * 220) : (240 + Math.random() * 160), ahora);
    filtro.Q.setValueAtTime(3.5, ahora);

    // Oscilador de tono sordo (cuerpo de madera)
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    const frecBase = esPared ? (180 + Math.random() * 60) : (110 + Math.random() * 40);
    osc.frequency.setValueAtTime(frecBase, ahora);
    osc.frequency.exponentialRampToValueAtTime(40, ahora + 0.07);

    const gananciaOsc = ctx.createGain();
    gananciaOsc.gain.setValueAtTime(volumen * 0.8, ahora);
    gananciaOsc.gain.exponentialRampToValueAtTime(0.001, ahora + 0.07);

    fuenteRuido.connect(filtro);
    filtro.connect(ganancia);
    osc.connect(gananciaOsc);
    gananciaOsc.connect(ctx.destination);
    ganancia.connect(ctx.destination);

    fuenteRuido.start(ahora);
    osc.start(ahora);
    fuenteRuido.stop(ahora + duracionRuido);
    osc.stop(ahora + 0.08);
  } catch (e) {
    // Si el navegador bloquea audio, continuar silenciosamente
  }
}

function reproducirCritico() {
  if (sonidoSilenciado) return;
  try {
    const ctx = obtenerAudioContext();
    if (!ctx) return;
    const ahora = ctx.currentTime;
    [523.25, 659.25, 783.99, 1046.50].forEach((frec, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(frec, ahora + idx * 0.07);
      gain.gain.setValueAtTime(0.12, ahora + idx * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.001, ahora + idx * 0.07 + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ahora + idx * 0.07);
      osc.stop(ahora + idx * 0.07 + 0.4);
    });
  } catch (e) {}
}

function reproducirPifia() {
  if (sonidoSilenciado) return;
  try {
    const ctx = obtenerAudioContext();
    if (!ctx) return;
    const ahora = ctx.currentTime;
    [320, 260, 200, 150].forEach((frec, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(frec, ahora + idx * 0.09);
      gain.gain.setValueAtTime(0.09, ahora + idx * 0.09);
      gain.gain.exponentialRampToValueAtTime(0.001, ahora + idx * 0.09 + 0.28);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ahora + idx * 0.09);
      osc.stop(ahora + idx * 0.09 + 0.3);
    });
  } catch (e) {}
}
// ---- src/features/dice-parser.js ----
// src/features/dice-parser.js
// Reconocimiento, análisis léxico y envoltura de tiradas de dados en textos
// de fichas de monstruos (ataques, daños individuales o compuestos, rasgos,
// dados de vida y tiradas varias con o sin daño promedio fijo).

const DANOS_INFO = {
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

function normalizarTipoDano(str) {
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

function parsearFormulaDados(formula, tipoDanoSugerido = null) {
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
function envolverTiradasDados(texto, contexto = {}) {
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
// ---- src/features/dice-3d.js ----
// src/features/dice-3d.js
// Motor 3D con Three.js para tiradas de dados poliédricos (d4, d6, d8, d10, d12, d20)
// dentro de una canasta/bandeja octogonal de madera noble y terciopelo temático.
// Genera geometrías poliédricas con grupos de materiales y mapeo UV explícito
// por cara para que CADA número (del 1 al N) sea nítido, de alto contraste y visible.


let escena = null;
let camara = null;
let renderizador = null;
let idAnimacion = null;
let dadosActivos = [];
let lucesTematicas = [];
let bandejaMalla = null;
let callbackFinTirada = null;
let tiradaCompletada = false;
let tiempoInicioTirada = 0;

// Generador de texturas dinámicas para caras de dados
const cacheTexturas = new Map();

function crearTexturaCara(numero, colorFondo, colorTexto, colorBorde, forma = 'cuadrado') {
  const clave = `${numero}_${colorFondo}_${colorTexto}_${colorBorde}_${forma}`;
  if (cacheTexturas.has(clave)) return cacheTexturas.get(clave);

  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // 1. Fondo sólido del color temático del dado
  ctx.fillStyle = colorFondo;
  ctx.fillRect(0, 0, 512, 512);

  // 2. Degradé radial sutil en los bordes para dar volumen tridimensional
  const grad = ctx.createRadialGradient(256, 200, 30, 256, 256, 280);
  grad.addColorStop(0, 'rgba(255,255,255,0.12)');
  grad.addColorStop(0.6, 'rgba(0,0,0,0)');
  grad.addColorStop(1, 'rgba(0,0,0,0.35)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 512);

  // 3. Filete/borde geométrico de la cara
  ctx.strokeStyle = colorBorde;
  ctx.lineWidth = 14;
  ctx.lineJoin = 'round';

  if (forma === 'triangulo') {
    ctx.beginPath();
    ctx.moveTo(256, 42);
    ctx.lineTo(472, 458);
    ctx.lineTo(40, 458);
    ctx.closePath();
    ctx.stroke();
    ctx.strokeStyle = 'rgba(255,255,255,0.18)';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(256, 80);
    ctx.lineTo(440, 440);
    ctx.lineTo(72, 440);
    ctx.closePath();
    ctx.stroke();
  } else if (forma === 'pentagono') {
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const a = (i * 2 * Math.PI) / 5 - Math.PI / 2;
      const px = 256 + 215 * Math.cos(a);
      const py = 256 + 215 * Math.sin(a);
      if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.strokeStyle = 'rgba(255,255,255,0.18)';
    ctx.lineWidth = 4;
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const a = (i * 2 * Math.PI) / 5 - Math.PI / 2;
      const px = 256 + 188 * Math.cos(a);
      const py = 256 + 188 * Math.sin(a);
      if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.stroke();
  } else if (forma === 'cometa') {
    ctx.beginPath();
    ctx.moveTo(256, 32);
    ctx.lineTo(468, 230);
    ctx.lineTo(256, 478);
    ctx.lineTo(44, 230);
    ctx.closePath();
    ctx.stroke();
    ctx.strokeStyle = 'rgba(255,255,255,0.18)';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(256, 64);
    ctx.lineTo(440, 228);
    ctx.lineTo(256, 446);
    ctx.lineTo(72, 228);
    ctx.closePath();
    ctx.stroke();
  } else {
    // Cuadrado (d6)
    ctx.strokeRect(30, 30, 452, 452);
    ctx.strokeStyle = 'rgba(255,255,255,0.18)';
    ctx.lineWidth = 4;
    ctx.strokeRect(50, 50, 412, 412);
  }

  // 4. Posición vertical del número ajustada al centro óptico de cada polígono
  const yOffset = forma === 'triangulo' ? 314 : (forma === 'cometa' ? 244 : 256);

  // 5. Halo luminoso difuso detrás del número
  const radHalo = numero > 9 ? 160 : 135;
  const gradHalo = ctx.createRadialGradient(256, yOffset, 0, 256, yOffset, radHalo);
  gradHalo.addColorStop(0, 'rgba(255,255,255,0.16)');
  gradHalo.addColorStop(0.55, 'rgba(255,255,255,0.05)');
  gradHalo.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = gradHalo;
  ctx.beginPath();
  ctx.ellipse(256, yOffset, radHalo, radHalo * 0.85, 0, 0, Math.PI * 2);
  ctx.fill();

  // 6. Tipografía clásica de D&D: Cinzel / Garamond / Georgia serif
  //    Elegante, nítida y fiel a los dados reales de rol
  const tamFuente = numero > 99 ? 168 : numero > 9 ? 220 : 256;
  ctx.font = `700 ${tamFuente}px "Cinzel", "EB Garamond", "Georgia", "Times New Roman", serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Perfil oscuro refinado de 14px para dar contraste sin deformar la serifa
  ctx.strokeStyle = 'rgba(0,0,0,0.88)';
  ctx.lineWidth = 14;
  ctx.lineJoin = 'round';
  ctx.strokeText(String(numero), 256, yOffset);

  // Relleno principal del número
  ctx.fillStyle = colorTexto;
  ctx.fillText(String(numero), 256, yOffset);

  // Relieve sutil superior
  ctx.fillStyle = 'rgba(255,255,255,0.14)';
  ctx.fillText(String(numero), 255, yOffset - 3);

  // 7. Subrayado clásico de D&D para el 6 y el 9
  if (numero === 6 || numero === 9) {
    const ySub = yOffset + tamFuente * 0.42;
    const anchoSub = 110;
    // Sombra del subrayado
    ctx.fillStyle = 'rgba(0,0,0,0.85)';
    ctx.fillRect(256 - anchoSub / 2 - 3, ySub - 3, anchoSub + 6, 14);
    // Barra de subrayado en color del texto
    ctx.fillStyle = colorTexto;
    ctx.fillRect(256 - anchoSub / 2, ySub, anchoSub, 8);
  }

  const textura = new THREE.CanvasTexture(canvas);
  textura.anisotropy = 8;
  cacheTexturas.set(clave, textura);
  return textura;
}

function oscurecerColor(hex, factor) {
  let c = hex.replace('#', '');
  if (c.length === 3) c = c.split('').map((x) => x + x).join('');
  const num = parseInt(c, 16);
  let r = (num >> 16) * (1 - factor);
  let g = ((num >> 8) & 0x00FF) * (1 - factor);
  let b = (num & 0x0000FF) * (1 - factor);
  return `rgb(${Math.max(0, Math.floor(r))},${Math.max(0, Math.floor(g))},${Math.max(0, Math.floor(b))})`;
}

// ===================== GENERACIÓN DE GEOMETRÍAS POLIÉDRICAS =====================

function construirDadoD4(radio = 1.0) {
  const s = radio / Math.sqrt(3);
  const v = [
    new THREE.Vector3(s, s, s),
    new THREE.Vector3(-s, -s, s),
    new THREE.Vector3(-s, s, -s),
    new THREE.Vector3(s, -s, -s)
  ];
  const carasIndices = [
    [0, 2, 1], // Cara 1
    [0, 1, 3], // Cara 2
    [0, 3, 2], // Cara 3
    [1, 2, 3]  // Cara 4
  ];
  return ensamblarPolihedroTriangulos(v, carasIndices, 4, 'triangulo');
}

function construirDadoD6(radio = 1.0) {
  const geom = new THREE.BoxGeometry(radio * 1.35, radio * 1.35, radio * 1.35);
  // BoxGeometry ya tiene 6 grupos de materiales por defecto (0..5)
  return {
    geom, normalesCaras: [
      new THREE.Vector3(1, 0, 0),  // Cara 1
      new THREE.Vector3(-1, 0, 0), // Cara 6
      new THREE.Vector3(0, 1, 0),  // Cara 2
      new THREE.Vector3(0, -1, 0), // Cara 5
      new THREE.Vector3(0, 0, 1),  // Cara 3
      new THREE.Vector3(0, 0, -1)  // Cara 4
    ], ordenNumeros: [1, 6, 2, 5, 3, 4]
  };
}

function construirDadoD8(radio = 1.0) {
  const r = radio * 1.15;
  const v = [
    new THREE.Vector3(0, r, 0),  // 0: top
    new THREE.Vector3(0, -r, 0), // 1: bottom
    new THREE.Vector3(r, 0, 0),  // 2: +X
    new THREE.Vector3(0, 0, r),  // 3: +Z
    new THREE.Vector3(-r, 0, 0), // 4: -X
    new THREE.Vector3(0, 0, -r)  // 5: -Z
  ];
  // Caras con orden de vértices antihorario (CCW) visto desde el exterior
  const carasIndices = [
    [0, 3, 2], // 1: Top-Front-Right (+X, +Y, +Z)
    [0, 4, 3], // 2: Top-Front-Left (-X, +Y, +Z)
    [0, 5, 4], // 3: Top-Back-Left (-X, +Y, -Z)
    [0, 2, 5], // 4: Top-Back-Right (+X, +Y, -Z)
    [1, 2, 3], // 5: Bot-Front-Right (+X, -Y, +Z)
    [1, 3, 4], // 6: Bot-Front-Left (-X, -Y, +Z)
    [1, 4, 5], // 7: Bot-Back-Left (-X, -Y, -Z)
    [1, 5, 2]  // 8: Bot-Back-Right (+X, -Y, -Z)
  ];
  return ensamblarPolihedroTriangulos(v, carasIndices, 8, 'triangulo');
}

function construirDadoD10(radio = 1.0) {
  const h = radio * 1.35;
  const r = radio * 1.05;
  const hMid = radio * 0.2;
  const vTop = new THREE.Vector3(0, h, 0);
  const vBot = new THREE.Vector3(0, -h, 0);

  const ringTop = [];
  const ringBot = [];
  for (let i = 0; i < 5; i++) {
    const a1 = (i * 2 * Math.PI) / 5;
    ringTop.push(new THREE.Vector3(r * Math.cos(a1), hMid, r * Math.sin(a1)));
    const a2 = ((i * 2 + 1) * Math.PI) / 5;
    ringBot.push(new THREE.Vector3(r * Math.cos(a2), -hMid, r * Math.sin(a2)));
  }

  const posiciones = [];
  const normales = [];
  const uvs = [];
  const normalesCaras = [];
  const geom = new THREE.BufferGeometry();

  // 5 Caras Superiores (1, 2, 3, 4, 5)
  for (let i = 0; i < 5; i++) {
    const pApex = vTop;
    const pLeft = ringTop[i];
    const pBottom = ringBot[i];
    const pRight = ringTop[(i + 1) % 5];

    // Centroide y normal exterior exacta
    const centro = new THREE.Vector3().add(pApex).add(pLeft).add(pBottom).add(pRight).multiplyScalar(0.25);
    const normal = centro.clone().normalize();
    normalesCaras.push(normal);

    const startIdx = posiciones.length / 3;

    // Triángulo 1 (Apex, Left, Bottom)
    posiciones.push(pApex.x, pApex.y, pApex.z, pLeft.x, pLeft.y, pLeft.z, pBottom.x, pBottom.y, pBottom.z);
    normales.push(normal.x, normal.y, normal.z, normal.x, normal.y, normal.z, normal.x, normal.y, normal.z);
    uvs.push(0.5, 0.95, 0.05, 0.52, 0.5, 0.05);

    // Triángulo 2 (Apex, Bottom, Right)
    posiciones.push(pApex.x, pApex.y, pApex.z, pBottom.x, pBottom.y, pBottom.z, pRight.x, pRight.y, pRight.z);
    normales.push(normal.x, normal.y, normal.z, normal.x, normal.y, normal.z, normal.x, normal.y, normal.z);
    uvs.push(0.5, 0.95, 0.5, 0.05, 0.95, 0.52);

    geom.addGroup(startIdx, 6, i);
  }

  // 5 Caras Inferiores (6, 7, 8, 9, 10)
  for (let i = 0; i < 5; i++) {
    const pBotApex = vBot;
    const pBotLeft = ringBot[i];
    const pTopApex = ringTop[(i + 1) % 5];
    const pBotRight = ringBot[(i + 1) % 5];

    // Centroide y normal exterior exacta
    const centro = new THREE.Vector3().add(pBotApex).add(pBotLeft).add(pTopApex).add(pBotRight).multiplyScalar(0.25);
    const normal = centro.clone().normalize();
    normalesCaras.push(normal);

    const faceIdx = 5 + i;
    const startIdx = posiciones.length / 3;

    // Triángulo 1 (TopApex, BotLeft, BotApex)
    posiciones.push(pTopApex.x, pTopApex.y, pTopApex.z, pBotLeft.x, pBotLeft.y, pBotLeft.z, pBotApex.x, pBotApex.y, pBotApex.z);
    normales.push(normal.x, normal.y, normal.z, normal.x, normal.y, normal.z, normal.x, normal.y, normal.z);
    uvs.push(0.5, 0.95, 0.05, 0.52, 0.5, 0.05);

    // Triángulo 2 (TopApex, BotApex, BotRight)
    posiciones.push(pTopApex.x, pTopApex.y, pTopApex.z, pBotApex.x, pBotApex.y, pBotApex.z, pBotRight.x, pBotRight.y, pBotRight.z);
    normales.push(normal.x, normal.y, normal.z, normal.x, normal.y, normal.z, normal.x, normal.y, normal.z);
    uvs.push(0.5, 0.95, 0.5, 0.05, 0.95, 0.52);

    geom.addGroup(startIdx, 6, faceIdx);
  }

  geom.setAttribute('position', new THREE.Float32BufferAttribute(posiciones, 3));
  geom.setAttribute('normal', new THREE.Float32BufferAttribute(normales, 3));
  geom.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));

  return { geom, normalesCaras, ordenNumeros: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] };
}

function construirDadoD12(radio = 1.0) {
  const phi = (1 + Math.sqrt(5)) / 2;
  const invPhi = 1 / phi;
  const s = radio * 0.95 / Math.sqrt(3);

  // 20 vértices de dodecaedro
  const v = [
    new THREE.Vector3(s, s, s), new THREE.Vector3(s, s, -s), new THREE.Vector3(s, -s, s), new THREE.Vector3(s, -s, -s),
    new THREE.Vector3(-s, s, s), new THREE.Vector3(-s, s, -s), new THREE.Vector3(-s, -s, s), new THREE.Vector3(-s, -s, -s),
    new THREE.Vector3(0, s * invPhi, s * phi), new THREE.Vector3(0, s * invPhi, -s * phi), new THREE.Vector3(0, -s * invPhi, s * phi), new THREE.Vector3(0, -s * invPhi, -s * phi),
    new THREE.Vector3(s * invPhi, s * phi, 0), new THREE.Vector3(s * invPhi, -s * phi, 0), new THREE.Vector3(-s * invPhi, s * phi, 0), new THREE.Vector3(-s * invPhi, -s * phi, 0),
    new THREE.Vector3(s * phi, 0, s * invPhi), new THREE.Vector3(s * phi, 0, -s * invPhi), new THREE.Vector3(-s * phi, 0, s * invPhi), new THREE.Vector3(-s * phi, 0, -s * invPhi)
  ];

  // 12 caras pentagonales
  const pentagonos = [
    [0, 8, 4, 14, 12],
    [0, 12, 1, 17, 16],
    [0, 16, 2, 10, 8],
    [12, 14, 5, 9, 1],
    [8, 10, 6, 18, 4],
    [16, 17, 3, 13, 2],
    [7, 11, 3, 13, 15],
    [7, 15, 6, 18, 19],
    [7, 19, 5, 9, 11],
    [2, 13, 15, 6, 10],
    [1, 9, 11, 3, 17],
    [4, 18, 19, 5, 14]
  ];

  const posiciones = [];
  const normales = [];
  const uvs = [];
  const normalesCaras = [];
  const geom = new THREE.BufferGeometry();

  pentagonos.forEach((pent, caraIdx) => {
    const centro = new THREE.Vector3();
    pent.forEach((vi) => centro.add(v[vi]));
    centro.multiplyScalar(0.2);

    const normal = centro.clone().normalize();
    normalesCaras.push(normal);

    const startIdx = posiciones.length / 3;

    for (let i = 0; i < 5; i++) {
      let p1 = v[pent[i]];
      let p2 = v[pent[(i + 1) % 5]];

      // Verificar que el orden del triángulo sea CCW respecto a la normal exterior
      const cross = new THREE.Vector3().subVectors(p1, centro).cross(new THREE.Vector3().subVectors(p2, centro));
      if (cross.dot(normal) < 0) {
        const tmp = p1; p1 = p2; p2 = tmp;
      }

      const a1 = (i * 2 * Math.PI) / 5 - Math.PI / 2;
      const a2 = (((i + 1) % 5) * 2 * Math.PI) / 5 - Math.PI / 2;

      posiciones.push(centro.x, centro.y, centro.z, p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
      normales.push(normal.x, normal.y, normal.z, normal.x, normal.y, normal.z, normal.x, normal.y, normal.z);
      uvs.push(0.5, 0.5, 0.5 + 0.45 * Math.cos(a1), 0.5 + 0.45 * Math.sin(a1), 0.5 + 0.45 * Math.cos(a2), 0.5 + 0.45 * Math.sin(a2));
    }

    geom.addGroup(startIdx, 15, caraIdx);
  });

  geom.setAttribute('position', new THREE.Float32BufferAttribute(posiciones, 3));
  geom.setAttribute('normal', new THREE.Float32BufferAttribute(normales, 3));
  geom.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));

  return { geom, normalesCaras, ordenNumeros: Array.from({ length: 12 }, (_, i) => i + 1) };
}

function construirDadoD20(radio = 1.0) {
  const phi = (1 + Math.sqrt(5)) / 2;
  const s = radio * 1.15 / Math.sqrt(1 + phi * phi);

  // 12 vértices de icosaedro
  const v = [
    new THREE.Vector3(0, s, s * phi), new THREE.Vector3(0, s, -s * phi), new THREE.Vector3(0, -s, s * phi), new THREE.Vector3(0, -s, -s * phi),
    new THREE.Vector3(s, s * phi, 0), new THREE.Vector3(s, -s * phi, 0), new THREE.Vector3(-s, s * phi, 0), new THREE.Vector3(-s, -s * phi, 0),
    new THREE.Vector3(s * phi, 0, s), new THREE.Vector3(-s * phi, 0, s), new THREE.Vector3(s * phi, 0, -s), new THREE.Vector3(-s * phi, 0, -s)
  ];

  // 20 caras triangulares
  const carasIndices = [
    [0, 8, 4],   // 1
    [0, 4, 6],   // 2
    [0, 6, 9],   // 3
    [0, 9, 2],   // 4
    [0, 2, 8],   // 5
    [4, 8, 10],  // 6
    [8, 2, 5],   // 7
    [2, 9, 7],   // 8
    [9, 6, 11],  // 9
    [6, 4, 1],   // 10
    [1, 10, 4],  // 11
    [10, 5, 8],  // 12
    [5, 7, 2],   // 13
    [7, 11, 9],  // 14
    [11, 1, 6],  // 15
    [3, 10, 1],  // 16
    [3, 5, 10],  // 17
    [3, 7, 5],   // 18
    [3, 11, 7],  // 19
    [3, 1, 11]   // 20
  ];

  return ensamblarPolihedroTriangulos(v, carasIndices, 20, 'triangulo');
}

function ensamblarPolihedroTriangulos(vertices, carasIndices, totalCaras, formaCara = 'triangulo') {
  const posiciones = [];
  const normales = [];
  const uvs = [];
  const normalesCaras = [];
  const geom = new THREE.BufferGeometry();

  carasIndices.forEach((cara, idx) => {
    const p0 = vertices[cara[0]].clone();
    let p1 = vertices[cara[1]].clone();
    let p2 = vertices[cara[2]].clone();

    // 1. Centroide geométrico de la cara (desde el origen)
    const centro = new THREE.Vector3().add(p0).add(p1).add(p2).multiplyScalar(1 / 3);
    // 2. La normal exterior exacta es el vector desde el centro de masa (0,0,0) hacia el centro de la cara
    const normal = centro.clone().normalize();
    normalesCaras.push(normal);

    // 3. Garantizar orientación antihoraria (CCW) respecto a la normal exterior
    const edge1 = new THREE.Vector3().subVectors(p1, p0);
    const edge2 = new THREE.Vector3().subVectors(p2, p0);
    const cross = new THREE.Vector3().crossVectors(edge1, edge2);
    if (cross.dot(normal) < 0) {
      const tmp = p1; p1 = p2; p2 = tmp;
    }

    posiciones.push(p0.x, p0.y, p0.z, p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
    normales.push(normal.x, normal.y, normal.z, normal.x, normal.y, normal.z, normal.x, normal.y, normal.z);
    uvs.push(0.5, 0.92, 0.06, 0.12, 0.94, 0.12);

    geom.addGroup(idx * 3, 3, idx);
  });

  geom.setAttribute('position', new THREE.Float32BufferAttribute(posiciones, 3));
  geom.setAttribute('normal', new THREE.Float32BufferAttribute(normales, 3));
  geom.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));

  return { geom, normalesCaras, ordenNumeros: Array.from({ length: totalCaras }, (_, i) => i + 1) };
}

// ===================== CANASTA / BANDEJA 3D =====================

function construirBandeja(tipoDano = 'general') {
  const grupoBandeja = new THREE.Group();
  const infoDano = DANOS_INFO[tipoDano] || DANOS_INFO.general;
  const radioBandeja = 5.6;
  const alturaPared = 1.8;
  const lados = 8;

  // 1. Piso acolchado de terciopelo/cuero
  const geomFondo = new THREE.CylinderGeometry(radioBandeja - 0.2, radioBandeja - 0.2, 0.4, lados);
  const matFondo = new THREE.MeshStandardMaterial({
    color: infoDano.bandeja || '#1f1913',
    roughness: 0.85,
    metalness: 0.1
  });
  const fondoFieltro = new THREE.Mesh(geomFondo, matFondo);
  fondoFieltro.position.y = 0.2;
  fondoFieltro.receiveShadow = true;
  grupoBandeja.add(fondoFieltro);

  // 2. Anillo de orla dorada interior en el piso
  const geomOrla = new THREE.RingGeometry(radioBandeja - 0.7, radioBandeja - 0.5, lados);
  const matOrla = new THREE.MeshStandardMaterial({
    color: '#d9b477',
    metalness: 0.8,
    roughness: 0.35,
    side: THREE.DoubleSide
  });
  const mallaOrla = new THREE.Mesh(geomOrla, matOrla);
  mallaOrla.rotation.x = -Math.PI / 2;
  mallaOrla.position.y = 0.41;
  mallaOrla.receiveShadow = true;
  grupoBandeja.add(mallaOrla);

  // 3. Paredes octogonales de madera noble
  const matMadera = new THREE.MeshStandardMaterial({
    color: '#382212',
    roughness: 0.45,
    metalness: 0.2
  });
  const matMolduraOro = new THREE.MeshStandardMaterial({
    color: '#b8874a',
    roughness: 0.3,
    metalness: 0.85
  });

  for (let i = 0; i < lados; i++) {
    const angulo = (i * 2 * Math.PI) / lados + Math.PI / lados;
    const anchoPared = 2 * radioBandeja * Math.sin(Math.PI / lados);
    const geomPared = new THREE.BoxGeometry(anchoPared + 0.15, alturaPared, 0.5);
    const pared = new THREE.Mesh(geomPared, matMadera);
    const distCentro = radioBandeja * Math.cos(Math.PI / lados);
    pared.position.x = distCentro * Math.cos(angulo);
    pared.position.z = distCentro * Math.sin(angulo);
    pared.position.y = alturaPared / 2 + 0.1;
    pared.rotation.y = -angulo + Math.PI / 2;
    pared.castShadow = true;
    pared.receiveShadow = true;
    grupoBandeja.add(pared);

    // Moldura dorada superior
    const geomMoldura = new THREE.BoxGeometry(anchoPared + 0.2, 0.16, 0.62);
    const moldura = new THREE.Mesh(geomMoldura, matMolduraOro);
    moldura.position.copy(pared.position);
    moldura.position.y = alturaPared + 0.18;
    moldura.rotation.copy(pared.rotation);
    grupoBandeja.add(moldura);
  }

  bandejaMalla = grupoBandeja;
  return grupoBandeja;
}

// ===================== DADOS 3D CON MATERIALES Y TEXTURAS =====================

function obtenerConstruccionDado(caras, radio = 1.0) {
  switch (caras) {
    case 4: return { ...construirDadoD4(radio), formaCara: 'triangulo', radioColision: 0.72 };
    case 6: return { ...construirDadoD6(radio), formaCara: 'cuadrado', radioColision: 0.96 };
    case 8: return { ...construirDadoD8(radio), formaCara: 'triangulo', radioColision: 0.86 };
    case 10:
    case 100: return { ...construirDadoD10(radio), formaCara: 'cometa', radioColision: 0.88 };
    case 12: return { ...construirDadoD12(radio), formaCara: 'pentagono', radioColision: 0.90 };
    case 20:
    default: return { ...construirDadoD20(radio), formaCara: 'triangulo', radioColision: 0.83 };
  }
}

function crearMaterialesPolihedro(ordenNumeros, tipoDano, formaCara) {
  const infoDano = DANOS_INFO[tipoDano] || DANOS_INFO.general;
  const colorFondo = infoDano.colorPrincipal;
  const colorTexto = infoDano.colorTexto || '#ffffff';
  const colorBorde = infoDano.colorSecundario || '#d9b477';

  return ordenNumeros.map((num) => {
    const tex = crearTexturaCara(num, colorFondo, colorTexto, colorBorde, formaCara);
    return new THREE.MeshStandardMaterial({
      map: tex,
      roughness: 0.22,
      metalness: 0.28,
      side: THREE.DoubleSide
    });
  });
}

// ===================== CONFIGURACIÓN Y FÍSICA DE TIRADA =====================

function inicializarEscenaDados(contenedorCanvas, ancho, alto) {
  limpiarEscenaDados();

  escena = new THREE.Scene();
  escena.background = new THREE.Color('#0d0a07');

  camara = new THREE.PerspectiveCamera(40, ancho / alto, 0.1, 100);
  camara.position.set(0, 9.8, 7.6);
  camara.lookAt(0, 0.4, 0);

  renderizador = new THREE.WebGLRenderer({ canvas: contenedorCanvas, antialias: true, alpha: true });
  renderizador.setSize(ancho, alto);
  renderizador.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderizador.shadowMap.enabled = true;
  renderizador.shadowMap.type = THREE.PCFSoftShadowMap;

  // Iluminación ambiental cálida
  const luzAmbiente = new THREE.AmbientLight('#fff5e4', 0.95);
  escena.add(luzAmbiente);

  // Luz direccional principal con sombras nítidas
  const luzSol = new THREE.DirectionalLight('#fffdf5', 1.5);
  luzSol.position.set(5, 12, 6);
  luzSol.castShadow = true;
  luzSol.shadow.mapSize.width = 1024;
  luzSol.shadow.mapSize.height = 1024;
  luzSol.shadow.camera.near = 0.5;
  luzSol.shadow.camera.far = 25;
  const d = 6.5;
  luzSol.shadow.camera.left = -d;
  luzSol.shadow.camera.right = d;
  luzSol.shadow.camera.top = d;
  luzSol.shadow.camera.bottom = -d;
  luzSol.shadow.bias = -0.001;
  escena.add(luzSol);

  return { escena, camara, renderizador };
}

function ejecutarTirada3D({
  cantidad = 1,
  caras = 20,
  mod = 0,
  tipoDano = 'general',
  resultadosForzados = null,
  alTerminar = null
}) {
  if (!escena) return;

  callbackFinTirada = alTerminar;
  tiradaCompletada = false;

  // Limpiar dados previos y luces temáticas
  dadosActivos.forEach((d) => escena.remove(d.malla));
  dadosActivos = [];
  lucesTematicas.forEach((l) => escena.remove(l));
  lucesTematicas = [];

  // Reconstruir bandeja con el tema del tipo de daño
  if (bandejaMalla) escena.remove(bandejaMalla);
  const bandeja = construirBandeja(tipoDano);
  escena.add(bandeja);

  // Luz puntual temática del tipo de daño
  const infoDano = DANOS_INFO[tipoDano] || DANOS_INFO.general;
  const luzTema = new THREE.PointLight(infoDano.luz || '#ffaa00', 1.8, 14);
  luzTema.position.set(0, 4.5, 0);
  escena.add(luzTema);
  lucesTematicas.push(luzTema);

  // Determinar cuántos dados 3D mostrar (máx 5 visibles)
  const cantidad3D = Math.min(cantidad, 5);
  const resultados = resultadosForzados || Array.from({ length: cantidad }, () => Math.floor(Math.random() * caras) + 1);

  // Vector de orientación final: cara con resultado apunta hacia arriba (eje Y+).
  const dirObjetivo = new THREE.Vector3(0, 1, 0);

  // Crear dados 3D
  for (let i = 0; i < cantidad3D; i++) {
    const resultado = resultados[i];
    const { geom, normalesCaras, ordenNumeros, formaCara, radioColision } = obtenerConstruccionDado(caras, 0.85);
    const materiales = crearMaterialesPolihedro(ordenNumeros, tipoDano, formaCara);
    const malla = new THREE.Mesh(geom, materiales);
    malla.castShadow = true;
    malla.receiveShadow = true;

    // Calcular cuaternión objetivo para que la cara con el número resultado quede hacia arriba
    const indiceCara = ordenNumeros.indexOf(resultado);
    const normalCaraLocal = (indiceCara !== -1 && normalesCaras[indiceCara])
      ? normalesCaras[indiceCara].clone()
      : new THREE.Vector3(0, 1, 0);

    const quatObjetivo = new THREE.Quaternion().setFromUnitVectors(normalCaraLocal, dirObjetivo);

    // Posición inicial elevada y distribuida
    const offsetAngulo = (i / cantidad3D) * Math.PI * 2 + (Math.random() * 0.4 - 0.2);
    const radioSpawn = 2.0 + Math.random() * 0.8;
    const posX = Math.cos(offsetAngulo) * radioSpawn;
    const posZ = Math.sin(offsetAngulo) * radioSpawn - 1.2;
    const posY = 5.2 + i * 0.4 + Math.random() * 0.5;

    malla.position.set(posX, posY, posZ);

    // Impulso y rotación caótica inicial hacia el centro
    const velX = -posX * (1.2 + Math.random() * 0.8) + (Math.random() - 0.5) * 1.5;
    const velZ = -posZ * (1.2 + Math.random() * 0.8) + (Math.random() - 0.5) * 1.5;
    const velY = -1.8 - Math.random() * 1.5;

    const rotVelX = (Math.random() - 0.5) * 35;
    const rotVelY = (Math.random() - 0.5) * 35;
    const rotVelZ = (Math.random() - 0.5) * 35;

    escena.add(malla);

    dadosActivos.push({
      malla,
      caras,
      resultado,
      radioColision,
      pos: malla.position,
      vel: new THREE.Vector3(velX, velY, velZ),
      rotVel: new THREE.Vector3(rotVelX, rotVelY, rotVelZ),
      quatObjetivo,
      fase: 'rodando', // 'rodando' | 'alineando' | 'asentado'
      quatInicioAlineacion: null,
      tiempoInicioAlineacion: 0,
      rebotes: 0
    });
  }

  tiempoInicioTirada = performance.now();

  // Iniciar loop de animación
  if (!idAnimacion) {
    bucleAnimacion();
  }

  return {
    dados: resultados,
    total: resultados.reduce((a, b) => a + b, 0) + mod,
    mod,
    tipoDano
  };
}

function bucleAnimacion() {
  idAnimacion = requestAnimationFrame(bucleAnimacion);

  const dt = 0.016; // ~60fps
  const gravedad = 30;
  const RADIO_PARED_OCTO = 4.28;
  const LADOS_OCTO = 8;
  const ahora = performance.now();
  const tTranscurrido = (ahora - tiempoInicioTirada) / 1000;
  let todosAsentados = dadosActivos.length > 0;

  for (let i = 0; i < dadosActivos.length; i++) {
    const d = dadosActivos[i];
    if (d.fase === 'asentado') continue;

    if (d.fase === 'rodando') {
      // 1. FÍSICA PURA SIN CORRECCIÓN DE TRAYECTORIA DURANTE LA CAÍDA
      d.vel.y -= gravedad * dt;

      d.pos.x += d.vel.x * dt;
      d.pos.y += d.vel.y * dt;
      d.pos.z += d.vel.z * dt;

      d.malla.rotation.x += d.rotVel.x * dt;
      d.malla.rotation.y += d.rotVel.y * dt;
      d.malla.rotation.z += d.rotVel.z * dt;

      // Colisión con el piso de la bandeja
      if (d.pos.y <= d.radioColision) {
        d.pos.y = d.radioColision;
        if (Math.abs(d.vel.y) > 0.8 && tTranscurrido < 0.9) {
          reproducirImpactoDado(Math.abs(d.vel.y) / 6, false);
        }
        d.vel.y = -d.vel.y * 0.40; // Rebote elástico
        d.vel.x *= 0.82;           // Fricción de piso
        d.vel.z *= 0.82;
        d.rotVel.multiplyScalar(0.80);
        d.rebotes++;
      }

      // Colisión con las 8 paredes octogonales
      for (let w = 0; w < LADOS_OCTO; w++) {
        const angWall = (w * 2 * Math.PI) / LADOS_OCTO + Math.PI / LADOS_OCTO;
        const wnx = Math.cos(angWall);
        const wnz = Math.sin(angWall);
        const proyeccion = d.pos.x * wnx + d.pos.z * wnz;
        const limPared = RADIO_PARED_OCTO - d.radioColision;
        const penetracion = proyeccion - limPared;
        if (penetracion > 0) {
          d.pos.x -= wnx * penetracion;
          d.pos.z -= wnz * penetracion;
          const dot = d.vel.x * wnx + d.vel.z * wnz;
          if (dot > 0) {
            d.vel.x -= 2 * dot * wnx;
            d.vel.z -= 2 * dot * wnz;
            d.vel.x *= 0.65;
            d.vel.z *= 0.65;
            d.rotVel.multiplyScalar(0.80);
            if (Math.abs(dot) > 0.8 && tTranscurrido < 0.9) {
              reproducirImpactoDado(Math.abs(dot) / 4, true);
            }
          }
        }
      }

      // Fricción aerodinámica natural
      if (tTranscurrido > 0.4) {
        d.vel.x *= 0.95;
        d.vel.z *= 0.95;
        d.rotVel.multiplyScalar(0.94);
      }

      // Detección de detención del dado
      const velTotal = d.vel.length();
      const rotTotal = d.rotVel.length();
      const detenido = (d.pos.y <= d.radioColision + 0.08 && velTotal < 0.35 && rotTotal < 0.6 && tTranscurrido > 0.65) || (tTranscurrido >= 1.35);

      if (detenido) {
        d.fase = 'alineando';
        d.pos.y = d.radioColision;
        d.vel.set(0, 0, 0);
        d.rotVel.set(0, 0, 0);
        d.quatInicioAlineacion = d.malla.quaternion.clone();
        d.tiempoInicioAlineacion = ahora;
      }
    }

    if (d.fase === 'alineando') {
      // 2. ALINEACIÓN RÁPIDA FINAL (~0.38 segundos) UNA VEZ DETENIDO EN EL PISO
      const duracionAlineacion = 380;
      const tRel = Math.min(1, (ahora - d.tiempoInicioAlineacion) / duracionAlineacion);
      // Curva cúbica ease-out para un movimiento suave y natural
      const tEase = 1 - Math.pow(1 - tRel, 3);
      d.malla.quaternion.copy(d.quatInicioAlineacion).slerp(d.quatObjetivo, tEase);

      if (tRel >= 1) {
        d.fase = 'asentado';
        d.malla.quaternion.copy(d.quatObjetivo);
      }
    }

    if (d.fase !== 'asentado') {
      todosAsentados = false;
    }
  }

  // ===================== COLISIÓN ESFÉRICA ENTRE DADOS =====================
  for (let i = 0; i < dadosActivos.length; i++) {
    for (let j = i + 1; j < dadosActivos.length; j++) {
      const dA = dadosActivos[i];
      const dB = dadosActivos[j];
      if (dA.fase === 'asentado' && dB.fase === 'asentado') continue;

      const dx = dB.pos.x - dA.pos.x;
      const dy = dB.pos.y - dA.pos.y;
      const dz = dB.pos.z - dA.pos.z;
      const distSq = dx * dx + dy * dy + dz * dz;
      const minDist = dA.radioColision + dB.radioColision;

      if (distSq < minDist * minDist && distSq > 0.0001) {
        const dist = Math.sqrt(distSq);
        const nx = dx / dist;
        const ny = dy / dist;
        const nz = dz / dist;

        const overlap = (minDist - dist) * 0.5;
        if (dA.fase === 'rodando') {
          dA.pos.x -= nx * overlap;
          dA.pos.y -= ny * overlap;
          dA.pos.z -= nz * overlap;
        }
        if (dB.fase === 'rodando') {
          dB.pos.x += nx * overlap;
          dB.pos.y += ny * overlap;
          dB.pos.z += nz * overlap;
        }

        const relVx = dA.vel.x - dB.vel.x;
        const relVy = dA.vel.y - dB.vel.y;
        const relVz = dA.vel.z - dB.vel.z;
        const dotRel = relVx * nx + relVy * ny + relVz * nz;

        if (dotRel > 0) {
          const impulso = dotRel * 0.60;
          if (dA.fase === 'rodando') {
            dA.vel.x -= impulso * nx;
            dA.vel.y -= impulso * ny;
            dA.vel.z -= impulso * nz;
            dA.rotVel.multiplyScalar(0.88);
          }
          if (dB.fase === 'rodando') {
            dB.vel.x += impulso * nx;
            dB.vel.y += impulso * ny;
            dB.vel.z += impulso * nz;
            dB.rotVel.multiplyScalar(0.88);
          }
        }
      }
    }
  }

  // Notificar cuando todos los dados terminaron su alineación y reposo
  if (todosAsentados && !tiradaCompletada && dadosActivos.length > 0) {
    tiradaCompletada = true;

    // Si era d20 y sacó 20 o 1, reproducir sonido de crítico/pifia
    if (dadosActivos.length === 1 && dadosActivos[0].caras === 20) {
      if (dadosActivos[0].resultado === 20) reproducirCritico();
      else if (dadosActivos[0].resultado === 1) reproducirPifia();
    }

    if (callbackFinTirada) {
      const cb = callbackFinTirada;
      callbackFinTirada = null;
      cb();
    }
  }

  if (renderizador && escena && camara) {
    renderizador.render(escena, camara);
  }
}

function redimensionarEscenaDados(ancho, alto) {
  if (!camara || !renderizador) return;
  camara.aspect = ancho / alto;
  camara.updateProjectionMatrix();
  renderizador.setSize(ancho, alto);
}

function limpiarEscenaDados() {
  if (idAnimacion) {
    cancelAnimationFrame(idAnimacion);
    idAnimacion = null;
  }
  dadosActivos = [];
  lucesTematicas = [];
  bandejaMalla = null;
  if (renderizador) {
    renderizador.dispose();
    renderizador = null;
  }
  escena = null;
  camara = null;
}
// ---- src/features/monster-model.js ----
function normalizarCamposMonstruo(data) {
  if (!data || typeof data !== 'object') return {};
  const m = { ...data };
  if (m.vulnerabilidadesdano && !m.vulnerabilidades_dano)  m.vulnerabilidades_dano = m.vulnerabilidadesdano;
  if (m.resistenciasdano    && !m.resistencias_dano)        m.resistencias_dano    = m.resistenciasdano;
  if (m.inmunidadesdano     && !m.inmunidades_dano)         m.inmunidades_dano     = m.inmunidadesdano;
  if (m.inmunidadesestado   && !m.inmunidades_estado)       m.inmunidades_estado   = m.inmunidadesestado;
  return m;
}

// Extrae parámetros estructurados (CR, PG, CA, etc.) del campo de notas libre
// de una variante, para casos donde no vienen en el objeto `parametros`.
function extraerParametrosDesdeNotas(variante) {
  if (!variante || typeof variante.notas !== 'string') return {};
  const parametros = {};
  const cr       = variante.notas.match(/\bCR\s+(\d+(?:\/\d+)?(?:[.,]\d+)?)/i);
  const pg       = variante.notas.match(/\b(\d+)\s*pg\b/i);
  const px       = variante.notas.match(/\b(\d+)\s*px\b/i);
  const ca       = variante.notas.match(/\bCA\s+([^,.;]+)/i);
  const tamano   = variante.notas.match(/\btama(?:ñ|n)o\s+([A-Za-zÁÉÍÓÚáéíóúÑñ ]+)/i);
  const velocidad = variante.notas.match(/\bvelocidad\s+([^,.;]+)/i);
  if (cr)       parametros.cr           = fraccionANumero(cr[1]);
  if (pg)       parametros.pg           = Number(pg[1]);
  if (px)       parametros.px           = Number(px[1]);
  if (ca)       parametros.ca           = ca[1].trim();
  if (tamano)   parametros['tamaño']    = tamano[1].trim();
  if (velocidad) parametros.velocidad   = velocidad[1].trim();
  return parametros;
}

// Infiere acciones (ataques y alientos) desde el texto libre de notas.
function extraerAccionesDesdeNotas(variante) {
  if (!variante || typeof variante.notas !== 'string') return [];
  const notas   = variante.notas;
  const acciones = [];

  const ataques = [...notas.matchAll(
    /([A-Za-zÁÉÍÓÚáéíóúÑñ' ]+)\s*\+(\d+)\s*a golpear[^.]*(?:para|Impacto:)\s*([0-9dD+ ]+)\s*([A-Za-zÁÉÍÓÚáéíóúÑñ]+)/g
  )];
  ataques.forEach((m) => {
    const nombre = m[1].trim().replace(/\s+/g, ' ');
    acciones.push({ nombre, texto: `+${m[2]} a golpear. Impacto: ${m[3].trim()} ${m[4].trim()}.` });
  });

  const aliento = notas.match(/aliento\s+([A-Za-zÁÉÍÓÚáéíóúÑñ ]+)[^()]*\(([^)]+)\)/i);
  if (aliento) acciones.push({ nombre: `Aliento de ${aliento[1].trim()}`, texto: aliento[2].trim() });

  return acciones;
}

function esObjetoPlano(valor) {
  return valor && typeof valor === 'object' && !Array.isArray(valor);
}

function esCrFiltrable(cr) {
  return typeof cr === 'number' && Number.isFinite(cr);
}

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

  const varianteNormalizada   = normalizarCamposMonstruo(variante);
  const parametrosExplicitos  = normalizarCamposMonstruo(
    varianteNormalizada.parametros || varianteNormalizada.estadisticas || {}
  );
  const parametrosInferidos   = extraerParametrosDesdeNotas(varianteNormalizada);
  const accionesDesdeNotas    = extraerAccionesDesdeNotas(varianteNormalizada);

  const sobrescriturasDirectas   = extraerSobrescriturasPermitidas(varianteNormalizada);
  const sobrescriturasInferidas  = extraerSobrescriturasPermitidas(parametrosInferidos);
  const sobrescriturasExplicitas = extraerSobrescriturasPermitidas(parametrosExplicitos);
  // Prioridad: explícitas > directas > inferidas
  const sobrescrituras = { ...sobrescriturasInferidas, ...sobrescriturasDirectas, ...sobrescriturasExplicitas };

  const combinado = { ...base, ...sobrescrituras };
  combinado.atributos = {
    ...(base.atributos || {}),
    ...(esObjetoPlano(sobrescrituras.atributos) ? sobrescrituras.atributos : {})
  };

  if (esObjetoPlano(base.legendarias) && esObjetoPlano(sobrescrituras.legendarias)) {
    combinado.legendarias = { ...base.legendarias, ...sobrescrituras.legendarias };
  }

  // Las listas de rasgos/acciones son acumulables: se suman al base, no lo reemplazan.
  const listasAcumulables = ['rasgos', 'acciones', 'acciones_adicionales', 'reacciones'];
  listasAcumulables.forEach((campo) => {
    const listaDirecta   = Array.isArray(sobrescriturasDirectas[campo])   ? sobrescriturasDirectas[campo]   : null;
    const listaExplicita = Array.isArray(sobrescriturasExplicitas[campo]) ? sobrescriturasExplicitas[campo] : null;
    if (listaDirecta)   combinado[campo] = [...(base[campo] || []), ...listaDirecta];
    if (listaExplicita) {
      combinado[campo] = listaDirecta
        ? [...combinado[campo], ...listaExplicita]
        : [...(base[campo] || []), ...listaExplicita];
    }
  });

  // Añadir acciones inferidas desde notas solo si no hay acciones explícitas.
  const tieneAccionesExplicitas =
    (Array.isArray(sobrescriturasDirectas.acciones)   && sobrescriturasDirectas.acciones.length   > 0) ||
    (Array.isArray(sobrescriturasExplicitas.acciones) && sobrescriturasExplicitas.acciones.length > 0);

  if (accionesDesdeNotas.length && !tieneAccionesExplicitas) {
    const actuales   = Array.isArray(combinado.acciones) ? combinado.acciones : [];
    const existentes = new Set(actuales.map((a) => `${a.nombre}|${a.texto}`));
    accionesDesdeNotas.forEach((accion) => {
      const clave = `${accion.nombre}|${accion.texto}`;
      if (!existentes.has(clave)) {
        actuales.push(accion);
        existentes.add(clave);
      }
    });
    combinado.acciones = actuales;
  }

  return combinado;
}
function crearCompendio(baseMonstruos) {
  const filtros = { ...FILTROS_POR_DEFECTO };
  let paginaActual = 1;

  // Combina los monstruos del bundle con los importados manualmente,
  // y enriquece cada uno con su nombre en inglés si existe.
  function obtenerTodosMonstruos() {
    const mapa = new Map(baseMonstruos.map((m) => [m.id, m]));
    cargarImportados().forEach((m) => { if (m && m.id) mapa.set(m.id, m); });
    return Array.from(mapa.values()).map((m) => ({
      ...m,
      nombre_en: m.nombre_en || NOMBRES_INGLES[m.id] || ''
    }));
  }

  function obtenerMonstruoPorId(id) {
    return obtenerTodosMonstruos().find((m) => m.id === id);
  }

  function obtenerVariantesConCr(monstruoBase) {
    if (!monstruoBase || !Array.isArray(monstruoBase.variantes) || !monstruoBase.variantes.length) return [];
    return monstruoBase.variantes
      .map((variante) => {
        const monstruoConVariante = aplicarVariante(monstruoBase, variante);
        return { id: variante.id, nombre: variante.nombre, cr: monstruoConVariante.cr };
      })
      .filter((variante) => esCrFiltrable(variante.cr));
  }

  // Devuelve todos los CRs numéricos válidos de un monstruo (base + variantes).
  function obtenerCrsFiltrables(monstruoBase) {
    const crs = [];
    if (monstruoBase && esCrFiltrable(monstruoBase.cr)) crs.push(monstruoBase.cr);
    obtenerVariantesConCr(monstruoBase).forEach((v) => crs.push(v.cr));
    return [...new Set(crs)];
  }

  function monstruoPasaFiltros(m) {
    if (filtros.q) {
      const q          = normalizar(filtros.q);
      const enEspanol  = normalizar(m.nombre).includes(q);
      const enIngles   = normalizar(m.nombre_en || '').includes(q);
      if (!enEspanol && !enIngles) return false;
    }
    const crsFiltrables = obtenerCrsFiltrables(m);
    if (filtros.rango === '0-4'   && !crsFiltrables.some((cr) => cr <= 4))                    return false;
    if (filtros.rango === '5-10'  && !crsFiltrables.some((cr) => cr >= 5  && cr <= 10))       return false;
    if (filtros.rango === '11-16' && !crsFiltrables.some((cr) => cr >= 11 && cr <= 16))       return false;
    if (filtros.rango === '17+'   && !crsFiltrables.some((cr) => cr >= 17))                   return false;
    if (filtros.crExacto !== 'todos' && !crsFiltrables.some((cr) => String(cr) === filtros.crExacto)) return false;
    if (filtros.tipo   !== 'todos' && !coincideCampo(m.tipo,        filtros.tipo))   return false;
    if (filtros.tamano !== 'todos' && !coincideCampo(m['tamaño'],   filtros.tamano)) return false;
    if (filtros.habitat.length && !filtros.habitat.every(
      (sel) => (m.habitat || []).some((h) => coincideCampo(h, sel))
    )) return false;
    return true;
  }

  // Para ordenar por CR se usa el CR "representativo" de cada monstruo: si tiene
  // variantes con CR numérico, se compara contra el mínimo (orden ascendente) o
  // el máximo (orden descendente) de todos sus CR filtrables (base + variantes).
  // Los monstruos sin ningún CR numérico (CR "variable") quedan siempre al final,
  // y los empates se resuelven por nombre.
  function ordenarMonstruos(lista) {
    const ordenada = [...lista];
    const esAsc  = filtros.orden === 'cr_asc';
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
        if (ca === null) return  1;
        if (cb === null) return -1;
        return (esAsc ? ca - cb : cb - ca) || a.nombre.localeCompare(b.nombre);
      });
      return ordenada;
    }

    switch (filtros.orden) {
      case 'nombre_asc':  ordenada.sort((a, b) => a.nombre.localeCompare(b.nombre)); break;
      case 'nombre_desc': ordenada.sort((a, b) => b.nombre.localeCompare(a.nombre)); break;
      default: break;
    }
    return ordenada;
  }

  function calcularResultados() {
    return ordenarMonstruos(obtenerTodosMonstruos().filter(monstruoPasaFiltros));
  }

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
    return monstruoBase.variantes.find((v) => v.id === guardadas[monstruoBase.id])
      || monstruoBase.variantes[0];
  }

  return {
    filtros,
    getPaginaActual:   () => paginaActual,
    setPaginaActual:   (pagina) => { paginaActual = pagina; },
    resetPagina:       () => { paginaActual = 1; },
    resetFiltros:      () => { Object.assign(filtros, FILTROS_POR_DEFECTO, { habitat: [] }); paginaActual = 1; },
    obtenerTodosMonstruos,
    obtenerMonstruoPorId,
    calcularResultados,
    obtenerFuenteImagen,
    importarMonstruos,
    guardarImagenCustom,
    borrarImagenCustom,
    guardarVarianteSeleccionada,
    obtenerVarianteSeleccionada,
    aplicarVariante,
    obtenerVariantesConCr,
    obtenerCrsFiltrables,
  };
}
// ---- src/ui/dice-modal.js ----
// src/ui/dice-modal.js
// Modal centrado para la visualización y ejecución interactiva de tiradas de dados 3D.
// Se despliega de forma similar al zoom de imagen, centrado en el bloque de la ficha.


let modalAbierto = false;
let configTiradaActual = null;
let resultadoActual = null;
let tiradaIdActual = 0;
let callbackAlTerminarActual = null;
let callbackEjecutadoParaTirada = 0;

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

function cerrarModalDados() {
  const fondo = document.querySelector('.modal-dados-fondo');
  if (fondo) fondo.remove();
  limpiarEscenaDados();
  modalAbierto = false;
  configTiradaActual = null;
  resultadoActual = null;
  callbackAlTerminarActual = null;
  callbackEjecutadoParaTirada = 0;
  document.removeEventListener('keydown', manejarEscModalDados);
  window.removeEventListener('resize', manejarResizeModalDados);
}

function abrirModalDados({ configTirada, nombreMonstruo = '', nombreAccion = '', alTerminar = null }) {
  cerrarModalDados(); // Evitar duplicados

  configTiradaActual = configTirada;
  callbackAlTerminarActual = alTerminar;
  callbackEjecutadoParaTirada = 0;
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

  if (typeof callbackAlTerminarActual === 'function' && callbackEjecutadoParaTirada !== tiradaIdActual) {
    callbackEjecutadoParaTirada = tiradaIdActual;
    try {
      callbackAlTerminarActual(res);
    } catch (err) {
      console.error('Error en callbackAlTerminar de tirada de dados:', err);
    }
  }
}
// ---- src/ui/tracker-views.js ----
// src/ui/tracker-views.js
// Vistas y plantillas HTML para el Rastreador de Iniciativa.


function vistaTracker({ estado }) {
  const { combatientes, indiceActivo, ronda } = estado;
  const combatienteActivo = combatientes.length > 0 ? combatientes[indiceActivo] : null;

  return `
    <div class="tracker-contenedor">
      <div class="tracker-cabecera-batalla">
        <div class="eyebrow tracker-eyebrow">Sesión de Mesa &bull; Encuentro Activo</div>
        <h1 class="tracker-titulo-principal">Rastreador de Iniciativa</h1>
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
          <h2 class="tracker-roster-titulo">Orden de Iniciativa (${combatientes.length})</h2>
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

function renderizarListaCombatientes(estado) {
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
              <button type="button" class="hp-btn dmg" data-uid="${c.uid}" data-accion="dmg" title="Restar daño">−</button>
              <input type="number" class="hp-amount tracker-hp-amount input-mono" data-uid="${c.uid}" data-campo="cantidad" placeholder="0" min="0" title="Escribe una cantidad y presiona Enter para restar vida, o usa los botones">
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

function renderizarSugerenciasMonstruos(items) {
  if (!items || items.length === 0) {
    return '';
  }

  return items.map((it) => `
    <div class="sugerencia-item" data-id="${it.id}" data-variante-id="${it.varianteId || ''}" data-nombre="${escapeHtml(it.nombreMostrar)}" data-pg="${it.pg || 10}" data-ca="${escapeHtml(String(it.ca || 10))}" data-des="${it.des !== undefined ? it.des : 10}">
      <span class="sugerencia-texto-nombre">${escapeHtml(it.nombreMostrar)}</span>
    </div>
  `).join('');
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
  const estilo = obtenerEstiloHabitat(habitat);
  if (!estilo.fondo) return '';
  return `style="background:${estilo.fondo};border-color:${estilo.borde};color:${estilo.texto}"`;
}

function chipHabitatHtml(habitat) {
  return `<span class="chip-hab"${estiloInlineHabitat(habitat)}>${habitat}</span>`;
}
function tarjetaHtml(monstruo, obtenerFuenteImagen, tipoColor, obtenerVariantesConCr) {
  const esCrVariable      = typeof monstruo.cr !== 'number' || !Number.isFinite(monstruo.cr);
  const peligro           = nivelPeligro(monstruo.cr);
  const colorInsigniaCr   = esCrVariable ? 'var(--cr-variable)' : PELIGRO_COLOR[peligro];
  const variantesConCr    = obtenerVariantesConCr(monstruo);

  const variantesCrHtml = variantesConCr.length
    ? `<div class="variantes-cr">${
        variantesConCr.map((v) => `<span class="chip-cr-variante">${v.nombre}: CR ${crAFraccion(v.cr)}</span>`).join('')
      }</div>`
    : '';

  const nombreEn = monstruo.nombre_en ? ` · <i>${monstruo.nombre_en}</i>` : '';

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
  const totalPaginas  = Math.max(1, Math.ceil(resultados.length / tamPagina));
  const pagina        = Math.max(1, Math.min(paginaActual, totalPaginas));
  const inicio        = (pagina - 1) * tamPagina;
  const paginaResultados = resultados.slice(inicio, inicio + tamPagina);

  const tarjetasHtml = paginaResultados
    .map((m) => tarjetaHtml(m, obtenerFuenteImagen, tipoColor, obtenerVariantesConCr))
    .join('');

  const controlesPaginacion = resultados.length > tamPagina
    ? `<div class="paginacion">
      <button class="accion fantasma" id="btn-pag-anterior" ${pagina <= 1 ? 'disabled' : ''} aria-label="Página anterior">← Anterior</button>
      <span class="pagina-info">Página ${pagina} de ${totalPaginas}</span>
      <button class="accion fantasma" id="btn-pag-siguiente" ${pagina >= totalPaginas ? 'disabled' : ''} aria-label="Página siguiente">Siguiente →</button>
    </div>`
    : '';

  const rangoTexto = paginaResultados.length
    ? `Mostrando ${inicio + 1}–${inicio + paginaResultados.length} de ${resultados.length} monstruo(s) (${todos.length} en total)`
    : `0 de ${todos.length} monstruo(s)`;

  const vacios = `<div class="vacio">Ningún monstruo coincide con estos filtros.<br>
    <button class="accion fantasma" id="btn-limpiar-vacio" style="margin-top:10px;">Limpiar filtros</button></div>`;

  const html = `<h2>Resultados</h2><p class="contador">${rangoTexto}</p>
    ${resultados.length
      ? `<div class="rejilla">${tarjetasHtml}</div>${controlesPaginacion}`
      : vacios
    }`;

  return { html, pagina, totalPaginas };
}
function formatoTituloDosPuntos(texto) {
  if (typeof texto !== 'string') return texto;
  const indice = texto.indexOf('. ');
  if (indice === -1 || indice > 60) return texto;
  return `${texto.slice(0, indice)}:${texto.slice(indice + 1)}`;
}

function envolverDistancias(texto) {
  if (typeof texto !== 'string') return texto;
  return texto.replace(/(\d+)(?:\/(\d+))?\s*pies\b/g, (coincidencia, pies1, pies2) => {
    const atributoPies2 = pies2 ? ` data-pies2="${pies2}"` : '';
    return `<span class="dist" data-pies="${pies1}"${atributoPies2}>${coincidencia}</span>`;
  });
}

function envolverTextoFicha(texto, contexto = {}) {
  if (typeof texto !== 'string') return texto;
  const conDistancias = envolverDistancias(texto);
  return envolverTiradasDados(conDistancias, contexto);
}
function vistaDetalle({ monstruoBase, monstruo, varianteSeleccionada, obtenerFuenteImagen, tipoColor }) {
  if (!monstruoBase) {
    return `<div class="panel"><h2>Monstruo no encontrado</h2>
      <p>No existe ningún monstruo con ese identificador.</p>
      <button class="accion" id="btn-volver">Volver al listado</button></div>`;
  }

  const esTextoVariable = (valor) => typeof valor === 'string' && /\bvariable\b/i.test(valor);
  const valorVisible    = (valor) => {
    if (valor === null || valor === undefined || valor === '') return '—';
    return esTextoVariable(valor) ? '—' : valor;
  };

  const peligro        = nivelPeligro(typeof monstruo.cr === 'number' ? monstruo.cr : 0);
  const crVisible      = valorVisible(monstruo.cr);
  const pxVisible      = valorVisible(monstruo.px);
  const pgVisible      = valorVisible(monstruo.pg);
  const dadosPgVisible = valorVisible(monstruo.dados_pg);

  const subpartes = [
    valorVisible(monstruo['tamaño']),
    valorVisible(monstruo.tipo),
    valorVisible(monstruo.alineamiento)
  ].filter((v) => v !== '—');
  const subtituloFicha = subpartes.join(', ');

  const atributosHtml = ABIL.map((a) => `<div class="cel-atributo">
      <div class="n">${ABIL_NOMBRE[a]}</div><div class="v">${valorVisible(monstruo.atributos[a])}</div>
      <div class="m">${fmtMod(mod(monstruo.atributos[a]))}</div></div>`).join('');

  const dadosPgHtml = dadosPgVisible !== '—'
    ? ` (${envolverTiradasDados(dadosPgVisible, { tipoDano: 'pg' })})`
    : '';

  const statsRapidasHtml = `<div class="stats-rapidas">
    <div class="stat-rapida"><span class="stat-rapida-etiqueta">Clase de Armadura</span><span class="stat-rapida-valor">${valorVisible(monstruo.ca)}</span></div>
    <div class="stat-rapida"><span class="stat-rapida-etiqueta">Puntos de Golpe</span><span class="stat-rapida-valor">${pgVisible}${dadosPgHtml}</span></div>
    <div class="stat-rapida"><span class="stat-rapida-etiqueta">Velocidad</span><span class="stat-rapida-valor">${envolverDistancias(valorVisible(monstruo.velocidad))}</span></div>
  </div>`;

  const bloque = (etiqueta, valor) => {
    const visible = valorVisible(valor);
    if (visible === '—') return '';
    return `<div class="linea-stat"><b>${etiqueta}:</b> ${envolverTextoFicha(visible)}</div>`;
  };

  const listaRasgos = (titulo, arr) => (arr && arr.length)
    ? `<div class="seccion-titulo">${titulo}</div>${
        arr.map((r) =>
          `<div class="rasgo" data-nombre-accion="${r.nombre}"><b>${r.nombre}:</b> ${envolverTextoFicha(r.texto, { nombreAccion: r.nombre })}</div>`
        ).join('')
      }`
    : '';

  const varianteHtml = varianteSeleccionada
    ? `<div class="seccion-titulo">Variante seleccionada</div>
      <div class="linea-stat"><b>Variante activa:</b> ${varianteSeleccionada.nombre}</div>
      ${varianteSeleccionada.presencia   ? `<div class="linea-stat"><b>Presencia:</b> ${varianteSeleccionada.presencia}</div>` : ''}
      ${varianteSeleccionada.apariencias ? `<div class="linea-stat"><b>Apariencias:</b> ${varianteSeleccionada.apariencias}</div>` : ''}`
    : '';

  const reaccionesHtml = (monstruo.reacciones && monstruo.reacciones.length)
    ? `<div class="seccion-reacciones">${listaRasgos('Reacciones', monstruo.reacciones)}</div>`
    : '';

  const legendariasHtml = monstruo.legendarias
    ? `<div class="seccion-legendarias">
      <div class="seccion-titulo seccion-titulo-legendaria">Acciones legendarias</div>
      <div class="rasgo">Puede realizar ${monstruo.legendarias.cantidad} acciones legendarias, eligiendo entre las opciones siguientes. Solo puede usar una opción a la vez y solo al final del turno de otra criatura. Recupera las acciones gastadas al inicio de su turno.</div>
      ${monstruo.legendarias.texto.map((t) => `<div class="rasgo">${envolverTextoFicha(formatoTituloDosPuntos(t))}</div>`).join('')}
    </div>`
    : '';

  const nombreEnHtml = monstruo.nombre_en
    ? `<p class="ficha-sub" style="margin:2px 0 6px;font-style:italic;opacity:.75;">${monstruo.nombre_en}</p>`
    : '';

  const selectorVarianteHtml = (monstruoBase.variantes && monstruoBase.variantes.length)
    ? `<div class="fila" style="margin-top:10px;align-items:flex-end">
        <div style="min-width:260px"><label>Variante</label>
        <select id="selector-variante">${
          monstruoBase.variantes.map((v) =>
            `<option value="${v.id}" ${varianteSeleccionada && varianteSeleccionada.id === v.id ? 'selected' : ''}>${v.nombre}</option>`
          ).join('')
        }</select></div></div>`
    : '';

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
        ${selectorVarianteHtml}
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
    <p class="pagina-manual">${monstruo.pagina ? `Manual de Monstruos 2024, pág. ${monstruo.pagina}` : 'Página del manual sin completar — edítala en el JSON.'}</p>
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
          const estilo = obtenerEstiloHabitat(h);
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
        <input type="text" id="f-q" class="control-filtro" value="${filtros.q}" placeholder="ej. dragón, goblin, beholder, dragon...">
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
const rastreador = crearRastreadorIniciativa();

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
  if (unidad === 'metros')   return (pies * 0.3048).toFixed(1);
  if (unidad === 'casillas') return String(pies / 5);
  return String(pies);
}

function sufijoUnidad(unidad, valorUnico) {
  if (unidad === 'metros')   return 'm';
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

  const rectSpan       = span.getBoundingClientRect();
  const anchoPopover   = popover.offsetWidth;
  let izquierda        = rectSpan.left + window.scrollX;
  const limiteDerecho  = window.scrollX + document.documentElement.clientWidth - anchoPopover - 8;
  if (izquierda > limiteDerecho) izquierda = Math.max(8, limiteDerecho);
  popover.style.left = `${izquierda}px`;
  popover.style.top  = `${rectSpan.bottom + window.scrollY + 4}px`;

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
    span.onclick  = (evento) => { evento.stopPropagation(); abrirPopoverDistancia(span); };
    span.onkeydown = (evento) => {
      if (evento.key === 'Enter' || evento.key === ' ') {
        evento.preventDefault();
        abrirPopoverDistancia(span);
      }
    };
  });
  actualizarTextoDistancias(); // aplica la unidad ya elegida si no es "pies"
}

// ===================== ENLACE DE EVENTOS PARA DADOS 3D =====================
function enlazarEventosDados(nombreMonstruo) {
  document.querySelectorAll('.dado-tirable').forEach((elem) => {
    const activarTirada = (evento) => {
      evento.stopPropagation();
      try {
        const rawJson = elem.getAttribute('data-roll');
        if (!rawJson) return;
        const configTirada = JSON.parse(decodeURIComponent(rawJson));

        // Obtener nombre de la acción/rasgo contenedor si existe
        const contenedorRasgo = elem.closest('.rasgo');
        const nombreAccion = (contenedorRasgo && contenedorRasgo.getAttribute('data-nombre-accion'))
          || (contenedorRasgo && contenedorRasgo.querySelector('b') && contenedorRasgo.querySelector('b').textContent.replace(':', '').trim())
          || '';

        abrirModalDados({ configTirada, nombreMonstruo, nombreAccion });
      } catch (err) {
        console.error('Error al iniciar tirada de dados:', err);
      }
    };

    elem.onclick   = activarTirada;
    elem.onkeydown = (evento) => {
      if (evento.key === 'Enter' || evento.key === ' ') {
        evento.preventDefault();
        activarTirada(evento);
      }
    };
  });
}

function analizarHash() {
  const hash   = location.hash || '#/';
  const partes = hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  if (partes[0] === 'monstruo' && partes[1]) return { vista: 'detalle', id: decodeURIComponent(partes[1]) };
  if (partes[0] === 'iniciativa' || partes[0] === 'rastreador' || partes[0] === 'combate') return { vista: 'iniciativa' };
  return { vista: 'lista' };
}

function irA(hash) { location.hash = hash; }

// Las tarjetas son <a href="#/monstruo/..."> reales, por lo que ctrl/cmd+clic,
// clic central y clic derecho funcionan sin JS adicional.
function enlazarEventosPanelResultados() {
  const btnAnterior  = document.getElementById('btn-pag-anterior');
  const btnSiguiente = document.getElementById('btn-pag-siguiente');
  if (btnAnterior)  btnAnterior.onclick  = () => { compendio.setPaginaActual(compendio.getPaginaActual() - 1); actualizarPanelResultados(); };
  if (btnSiguiente) btnSiguiente.onclick = () => { compendio.setPaginaActual(compendio.getPaginaActual() + 1); actualizarPanelResultados(); };
  const btnLimpiarVacio = document.getElementById('btn-limpiar-vacio');
  if (btnLimpiarVacio) btnLimpiarVacio.onclick = () => { compendio.resetFiltros(); render(); };
}

function actualizarPanelResultados() {
  const panelResultados = document.querySelectorAll('.panel')[1];
  const todos      = compendio.obtenerTodosMonstruos();
  const resultados = compendio.calcularResultados();
  const panel = construirPanelResultados({
    todos,
    resultados,
    paginaActual: compendio.getPaginaActual(),
    tamPagina: TAM_PAGINA,
    obtenerFuenteImagen: compendio.obtenerFuenteImagen,
    tipoColor: TIPO_COLOR,
    obtenerVariantesConCr: compendio.obtenerVariantesConCr,
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
  enlazarDropdownSimple('f-rango',     (v) => { compendio.filtros.rango    = v; });
  enlazarDropdownSimple('f-cr-exacto', (v) => { compendio.filtros.crExacto = v; });
  enlazarDropdownSimple('f-tipo',      (v) => { compendio.filtros.tipo     = v; });
  enlazarDropdownSimple('f-tamano',    (v) => { compendio.filtros.tamano   = v; });
  enlazarDropdownSimple('f-orden',     (v) => { compendio.filtros.orden    = v; });

  document.querySelectorAll('.f-habitat-item').forEach((chk) => {
    chk.onchange = () => {
      compendio.filtros.habitat = Array.from(
        document.querySelectorAll('.f-habitat-item:checked')
      ).map((c) => c.value);
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

  const btnImportar  = byId('btn-importar');
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
        } catch (error) {
          alert(`No se pudo importar el archivo: ${error.message}`);
        }
      };
      lector.readAsText(archivo);
    };
  }
}
// ===================== ZOOM DE IMAGEN DE LA FICHA =====================
// El retrato ampliado se muestra en un overlay `position:fixed` centrado en
// pantalla, para que la imagen completa siempre entre en cualquier resolución.
// Se cierra con Escape, con clic fuera de la imagen o con el botón ×.
function manejarEscZoomImagen(evento) {
  if (evento.key === 'Escape') cerrarZoomImagen();
}

function cerrarZoomImagen() {
  const fondo = document.querySelector('.zoom-imagen-fondo');
  if (fondo) fondo.remove();
  document.removeEventListener('keydown', manejarEscZoomImagen);
}

function abrirZoomImagen(contenidoHtml, nombreMonstruo) {
  cerrarZoomImagen();
  const fondo = document.createElement('div');
  fondo.className = 'zoom-imagen-fondo';
  fondo.setAttribute('role', 'dialog');
  fondo.setAttribute('aria-modal', 'true');
  fondo.setAttribute('aria-label', `Imagen ampliada de ${nombreMonstruo}`);
  fondo.innerHTML = `
    <button type="button" class="zoom-imagen-cerrar" aria-label="Cerrar imagen ampliada">×</button>
    <div class="zoom-imagen-contenido">${contenidoHtml}</div>`;
  document.body.appendChild(fondo);
  fondo.onclick = (evento) => { if (evento.target === fondo) cerrarZoomImagen(); };
  fondo.querySelector('.zoom-imagen-cerrar').onclick = cerrarZoomImagen;
  document.addEventListener('keydown', manejarEscZoomImagen);
  fondo.querySelector('.zoom-imagen-cerrar').focus();
}

function enlazarEventosZoomImagenFicha(nombreMonstruo) {
  const imagenFicha = document.getElementById('ficha-imagen-principal');
  if (!imagenFicha) return;
  const activarZoom = () => abrirZoomImagen(imagenFicha.innerHTML, nombreMonstruo || '');
  imagenFicha.onclick   = activarZoom;
  imagenFicha.onkeydown = (evento) => {
    if (evento.key === 'Enter' || evento.key === ' ') {
      evento.preventDefault();
      activarZoom();
    }
  };
}

function enlazarEventosDetalle(id, nombreMonstruo) {
  const btnVolver = document.getElementById('btn-volver');
  if (btnVolver) btnVolver.onclick = () => irA('#/');
  const selectorVariante = document.getElementById('selector-variante');
  if (selectorVariante) selectorVariante.onchange = (e) => {
    compendio.guardarVarianteSeleccionada(id, e.target.value);
    render();
  };
  enlazarEventosZoomImagenFicha(nombreMonstruo);
  enlazarEventosDistancias();
  enlazarEventosDados(nombreMonstruo);
}
function actualizarTabsNavegacion(vista) {
  const tabCompendio = document.getElementById('nav-tab-compendio');
  const tabIniciativa = document.getElementById('nav-tab-iniciativa');
  if (!tabCompendio || !tabIniciativa) return;
  if (vista === 'iniciativa') {
    tabCompendio.classList.remove('activa');
    tabIniciativa.classList.add('activa');
  } else {
    tabCompendio.classList.add('activa');
    tabIniciativa.classList.remove('activa');
  }
}

let trackerMonstruoSeleccionado = null;
let trackerDesModActual = 0;

function actualizarVistaRoster() {
  const estado = rastreador.obtenerEstado();
  const rosterLista = document.getElementById('tracker-roster-lista');
  const emptyState = document.getElementById('tracker-empty-state');
  const rondaNum = document.getElementById('tracker-ronda-num');
  const turnoEl = document.querySelector('.tracker-turno-actual');
  const tituloRoster = document.querySelector('.tracker-roster-titulo');

  if (rondaNum) rondaNum.textContent = estado.ronda;
  if (tituloRoster) tituloRoster.textContent = `Orden de Iniciativa (${estado.combatientes.length})`;

  if (emptyState) {
    emptyState.style.display = estado.combatientes.length === 0 ? 'block' : 'none';
  }

  if (turnoEl) {
    const cActivo = estado.combatientes.length > 0 ? estado.combatientes[estado.indiceActivo] : null;
    turnoEl.innerHTML = cActivo
      ? `<span class="turno-indicador">Turno:</span> <b class="turno-nombre-activo">${escapeHtml(cActivo.nombre)}</b>`
      : '<span class="turno-vacio">Sin combatientes activos</span>';
  }

  if (rosterLista) {
    rosterLista.innerHTML = renderizarListaCombatientes(estado);
    enlazarEventosRoster();
  }
}

function enlazarEventosRoster() {
  const rosterLista = document.getElementById('tracker-roster-lista');
  if (!rosterLista) return;

  // Restar Daño (-)
  rosterLista.querySelectorAll('[data-accion="dmg"], .hp-btn.dmg').forEach((btn) => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const uid = Number(btn.dataset.uid);
      const amountInput = rosterLista.querySelector(`.tracker-hp-amount[data-uid="${uid}"]`);
      const amount = Number(amountInput ? amountInput.value : 0);
      if (amount <= 0) return;
      rastreador.aplicarDanoCuracion(uid, amount, true);
      actualizarVistaRoster();
    };
  });

  // Sumar Curación (+)
  rosterLista.querySelectorAll('[data-accion="heal"], .hp-btn.heal').forEach((btn) => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const uid = Number(btn.dataset.uid);
      const amountInput = rosterLista.querySelector(`.tracker-hp-amount[data-uid="${uid}"]`);
      const amount = Number(amountInput ? amountInput.value : 0);
      if (amount <= 0) return;
      rastreador.aplicarDanoCuracion(uid, amount, false);
      actualizarVistaRoster();
    };
  });

  // Enter en input de cantidad: siempre resta vida por defecto
  rosterLista.querySelectorAll('.tracker-hp-amount').forEach((inp) => {
    inp.onkeydown = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const uid = Number(inp.dataset.uid);
        const amount = Number(inp.value || 0);
        if (amount <= 0) return;
        rastreador.aplicarDanoCuracion(uid, amount, true);
        actualizarVistaRoster();
      }
    };
  });

  // Edición inline de campos
  rosterLista.querySelectorAll('.editable-inline').forEach((inp) => {
    const uid = Number(inp.dataset.uid);
    const campo = inp.dataset.campo;

    if (campo === 'condiciones') {
      inp.oninput = (e) => {
        rastreador.actualizarCombatiente(uid, { condiciones: e.target.value });
      };
    } else if (campo === 'iniciativa') {
      inp.onchange = (e) => {
        rastreador.actualizarCombatiente(uid, { iniciativa: Number(e.target.value) || 0 });
        actualizarVistaRoster();
      };
      inp.onkeydown = (e) => {
        if (e.key === 'Enter') inp.blur();
      };
    } else {
      inp.onchange = (e) => {
        const val = e.target.value;
        const cambios = {};
        if (campo === 'nombre') cambios.nombre = val;
        else if (campo === 'hp') cambios.hp = Number(val) || 0;
        else if (campo === 'maxHp') cambios.maxHp = Number(val) || 1;
        else if (campo === 'ca') cambios.ca = Number(val) || 0;
        rastreador.actualizarCombatiente(uid, cambios);
        actualizarVistaRoster();
      };
      inp.onkeydown = (e) => {
        if (e.key === 'Enter') inp.blur();
      };
    }
  });

  // Alternar Tipo (PJ / PNJ)
  rosterLista.querySelectorAll('[data-accion="toggle-tipo"]').forEach((btn) => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const uid = Number(btn.dataset.uid);
      const estado = rastreador.obtenerEstado();
      const c = estado.combatientes.find((item) => item.uid === uid);
      if (!c) return;
      const nuevoTipo = c.tipo === 'pc' ? 'npc' : 'pc';
      rastreador.actualizarCombatiente(uid, { tipo: nuevoTipo });
      actualizarVistaRoster();
    };
  });

  // Alternar Bando (Aliado / Enemigo)
  rosterLista.querySelectorAll('[data-accion="toggle-bando"]').forEach((btn) => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const uid = Number(btn.dataset.uid);
      const estado = rastreador.obtenerEstado();
      const c = estado.combatientes.find((item) => item.uid === uid);
      if (!c) return;
      const nuevoBando = c.bando === 'ally' ? 'enemy' : 'ally';
      rastreador.actualizarCombatiente(uid, { bando: nuevoBando });
      actualizarVistaRoster();
    };
  });

  // Relanzar iniciativa con 3D
  rosterLista.querySelectorAll('.btn-reroll-init').forEach((btn) => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const uid = Number(btn.dataset.uid);
      const nombre = btn.dataset.nombre || 'Combatiente';
      const desMod = Number(btn.dataset.desmod) || 0;
      const modStr = desMod !== 0 ? (desMod > 0 ? `+${desMod}` : `${desMod}`) : '';

      abrirModalDados({
        configTirada: {
          cantidad: 1,
          caras: 20,
          mod: desMod,
          etiqueta: `1d20${modStr}`,
          tipoDano: 'general',
          tipoTirada: 'iniciativa'
        },
        nombreMonstruo: nombre,
        nombreAccion: 'Relanzar Iniciativa',
        alTerminar: (res) => {
          rastreador.actualizarCombatiente(uid, { iniciativa: res.total });
          actualizarVistaRoster();
          setTimeout(() => {
            cerrarModalDados();
          }, 1400);
        }
      });
    };
  });

  // Eliminar combatiente
  rosterLista.querySelectorAll('[data-accion="eliminar"]').forEach((btn) => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const uid = Number(btn.dataset.uid);
      rastreador.eliminarCombatiente(uid);
      actualizarVistaRoster();
    };
  });
}

function enlazarEventosTracker() {
  const inNombre = document.getElementById('inTrackerNombre');
  const inInit = document.getElementById('inTrackerInit');
  const inHp = document.getElementById('inTrackerHp');
  const inAc = document.getElementById('inTrackerAc');
  const inTipo = document.getElementById('inTrackerTipo');
  const inBando = document.getElementById('inTrackerBando');
  const btnAgregar = document.getElementById('btn-tracker-agregar');
  const btnTirarInit = document.getElementById('btn-tirar-init-nuevo');
  const cajaSugerencias = document.getElementById('tracker-sugerencias-monstruos');

  // Dropdowns personalizados para Tipo y Bando (estilo compendio)
  const ddTipo = document.getElementById('dd-tracker-tipo');
  const resumenTipo = document.getElementById('resumen-tracker-tipo');

  function setTipoTracker(tipo) {
    if (inTipo) inTipo.value = tipo;
    if (resumenTipo) resumenTipo.textContent = tipo === 'pc' ? 'PJ' : 'PNJ';
    const radio = ddTipo?.querySelector(`input[name="tracker-tipo-radio"][value="${tipo}"]`);
    if (radio) radio.checked = true;
  }

  if (ddTipo) {
    ddTipo.querySelectorAll('input[name="tracker-tipo-radio"]').forEach((radio) => {
      radio.onchange = () => {
        setTipoTracker(radio.value);
        ddTipo.removeAttribute('open');
      };
    });
  }

  const ddBando = document.getElementById('dd-tracker-bando');
  const resumenBando = document.getElementById('resumen-tracker-bando');

  function setBandoTracker(bando) {
    if (inBando) inBando.value = bando;
    if (resumenBando) resumenBando.textContent = bando === 'ally' ? 'Aliado' : 'Enemigo';
    const radio = ddBando?.querySelector(`input[name="tracker-bando-radio"][value="${bando}"]`);
    if (radio) radio.checked = true;
  }

  if (ddBando) {
    ddBando.querySelectorAll('input[name="tracker-bando-radio"]').forEach((radio) => {
      radio.onchange = () => {
        setBandoTracker(radio.value);
        ddBando.removeAttribute('open');
      };
    });
  }

  document.addEventListener('click', (e) => {
    if (ddTipo && !ddTipo.contains(e.target)) ddTipo.removeAttribute('open');
    if (ddBando && !ddBando.contains(e.target)) ddBando.removeAttribute('open');
  });

  function cerrarSugerencias() {
    if (cajaSugerencias) {
      cajaSugerencias.style.display = 'none';
      cajaSugerencias.innerHTML = '';
    }
  }

  if (inNombre && cajaSugerencias) {
    inNombre.oninput = () => {
      const query = inNombre.value.trim();
      if (query.length < 1) {
        cerrarSugerencias();
        trackerMonstruoSeleccionado = null;
        trackerDesModActual = 0;
        return;
      }

      const qNorm = normalizar(query);
      const todos = compendio.obtenerTodosMonstruos();
      const itemsSugeridos = [];

      for (const m of todos) {
        if (itemsSugeridos.length >= 18) break;

        const nomNorm = normalizar(m.nombre || '');
        const idNorm = normalizar(m.id || '');
        const enNorm = normalizar(NOMBRES_INGLES[m.id] || '');
        const coincideBase = nomNorm.includes(qNorm) || idNorm.includes(qNorm) || enNorm.includes(qNorm);

        if (coincideBase) {
          itemsSugeridos.push({
            id: m.id,
            varianteId: null,
            nombreMostrar: m.nombre,
            monstruoRef: m,
            pg: Number(m.pg) || 10,
            ca: m.ca,
            des: m.atributos && m.atributos.des !== undefined ? m.atributos.des : 10
          });
        }

        // Revisar variantes de la criatura si tiene
        if (Array.isArray(m.variantes) && m.variantes.length > 0) {
          for (const v of m.variantes) {
            if (itemsSugeridos.length >= 18) break;
            const varNomNorm = normalizar(v.nombre || '');
            const coincideVariante = coincideBase || varNomNorm.includes(qNorm);

            if (coincideVariante) {
              const nombreConVar = `${m.nombre} (${v.nombre})`;
              if (!itemsSugeridos.some((it) => it.nombreMostrar === nombreConVar)) {
                const mVar = compendio.aplicarVariante(m, v);
                itemsSugeridos.push({
                  id: m.id,
                  varianteId: v.id,
                  nombreMostrar: nombreConVar,
                  monstruoRef: mVar,
                  pg: Number(mVar.pg) || Number(m.pg) || 10,
                  ca: mVar.ca || m.ca,
                  des: (mVar.atributos && mVar.atributos.des !== undefined) ? mVar.atributos.des : (m.atributos?.des ?? 10)
                });
              }
            }
          }
        }
      }

      if (itemsSugeridos.length === 0) {
        cerrarSugerencias();
        return;
      }

      cajaSugerencias.innerHTML = renderizarSugerenciasMonstruos(itemsSugeridos);
      cajaSugerencias.style.display = 'block';

      // Click con ratón → carga todo el monstruo directamente
      cajaSugerencias.querySelectorAll('.sugerencia-item').forEach((item) => {
        item.onclick = (e) => {
          e.stopPropagation();
          cargarMonstruoDesdeItem(item);
          cerrarSugerencias();
          if (inInit) inInit.focus();
        };
      });
    };

    // Función que carga todos los datos del monstruo al formulario
    function cargarMonstruoDesdeItem(item) {
      const nombreSel = item.dataset.nombre;
      const pg = Number(item.dataset.pg) || 10;
      const caMatch = String(item.dataset.ca || '').match(/\d+/);
      const caVal = caMatch ? Number(caMatch[0]) : 10;
      const desVal = Number(item.dataset.des) || 10;

      inNombre.value = nombreSel;
      if (inHp) inHp.value = pg;
      if (inAc) inAc.value = caVal;

      setTipoTracker('npc');
      setBandoTracker('enemy');

      trackerDesModActual = Math.floor((desVal - 10) / 2);
      if (inInit) {
        inInit.placeholder = trackerDesModActual >= 0 ? `+${trackerDesModActual}` : `${trackerDesModActual}`;
      }

      const mId = item.dataset.id;
      const base = compendio.obtenerMonstruoPorId(mId);
      const vId = item.dataset.varianteId;
      const variante = (base && Array.isArray(base.variantes)) ? base.variantes.find((v) => v.id === vId) : null;
      trackerMonstruoSeleccionado = (base && variante) ? compendio.aplicarVariante(base, variante) : base;
    }

    let indiceSugerido = -1;

    function resaltarSugerencia(items, nuevoIndice) {
      items.forEach((it, i) => {
        it.classList.toggle('sugerencia-resaltada', i === nuevoIndice);
        if (i === nuevoIndice) {
          it.scrollIntoView({ block: 'nearest' });
        }
      });
    }

    inNombre.onkeydown = (e) => {
      const items = cajaSugerencias
        ? Array.from(cajaSugerencias.querySelectorAll('.sugerencia-item'))
        : [];
      const visible = cajaSugerencias && cajaSugerencias.style.display !== 'none' && items.length > 0;

      if (e.key === 'ArrowDown') {
        if (!visible) return;
        e.preventDefault();
        indiceSugerido = (indiceSugerido + 1) % items.length;
        resaltarSugerencia(items, indiceSugerido);
      } else if (e.key === 'ArrowUp') {
        if (!visible) return;
        e.preventDefault();
        indiceSugerido = (indiceSugerido - 1 + items.length) % items.length;
        resaltarSugerencia(items, indiceSugerido);
      } else if (e.key === 'Enter') {
        if (visible && indiceSugerido >= 0 && items[indiceSugerido]) {
          // El primer Enter selecciona y carga los datos predeterminados.
          e.preventDefault();
          e.stopImmediatePropagation();
          cargarMonstruoDesdeItem(items[indiceSugerido]);
          cerrarSugerencias();
          indiceSugerido = -1;
        }
        // El segundo Enter, ya sin sugerencias visibles, añade el combatiente.
      } else if (e.key === 'Escape') {
        cerrarSugerencias();
        indiceSugerido = -1;
      } else {
        indiceSugerido = -1;
      }
    };

    document.addEventListener('click', (e) => {
      if (cajaSugerencias && !cajaSugerencias.contains(e.target) && e.target !== inNombre) {
        cerrarSugerencias();
      }
    });
  }

  // Tirar iniciativa en el formulario con 3D
  if (btnTirarInit) {
    btnTirarInit.onclick = () => {
      const nombre = (inNombre && inNombre.value.trim()) || (trackerMonstruoSeleccionado && trackerMonstruoSeleccionado.nombre) || 'Iniciativa';
      const mod = trackerDesModActual || 0;
      const modStr = mod !== 0 ? (mod > 0 ? `+${mod}` : `${mod}`) : '';

      abrirModalDados({
        configTirada: {
          cantidad: 1,
          caras: 20,
          mod: mod,
          etiqueta: `1d20${modStr}`,
          tipoDano: 'general',
          tipoTirada: 'iniciativa'
        },
        nombreMonstruo: nombre,
        nombreAccion: 'Tirada de Iniciativa',
        alTerminar: (res) => {
          if (inInit) {
            inInit.value = res.total;
          }
          setTimeout(() => {
            cerrarModalDados();
          }, 1400);
        }
      });
    };
  }

  // Agregar combatiente
  function ejecutarAgregar() {
    const nombre = inNombre ? inNombre.value.trim() : '';
    if (!nombre) {
      if (inNombre) inNombre.focus();
      return;
    }

    const iniciativa = inInit && inInit.value !== '' ? Number(inInit.value) : (trackerDesModActual || 0);
    const hp = Number(inHp ? inHp.value : 0) || 10;
    const ac = Number(inAc ? inAc.value : 0) || 10;
    const tipo = inTipo ? inTipo.value : 'npc';
    const bando = inBando ? inBando.value : 'enemy';
    const monstruoId = trackerMonstruoSeleccionado ? trackerMonstruoSeleccionado.id : null;

    rastreador.agregarCombatiente({
      nombre,
      iniciativa,
      hp,
      maxHp: hp,
      ca: ac,
      tipo,
      bando,
      monstruoId,
      desMod: trackerDesModActual
    });

    // Resetear formulario
    if (inNombre) inNombre.value = '';
    if (inInit) {
      inInit.value = '';
      inInit.placeholder = 'd20';
    }
    if (inHp) inHp.value = '';
    if (inAc) inAc.value = '';
    setTipoTracker('npc');
    setBandoTracker('enemy');
    trackerMonstruoSeleccionado = null;
    trackerDesModActual = 0;
    cerrarSugerencias();

    actualizarVistaRoster();
    if (inNombre) inNombre.focus();
  }


  if (btnAgregar) {
    btnAgregar.onclick = ejecutarAgregar;
  }

  [inNombre, inInit, inHp, inAc].forEach((input) => {
    if (input) {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          ejecutarAgregar();
        }
      });
    }
  });

  // Botones de Ronda y Turno
  const btnNext = document.getElementById('btn-tracker-next-turn');
  if (btnNext) {
    btnNext.onclick = () => {
      rastreador.siguienteTurno();
      actualizarVistaRoster();
    };
  }

  const btnPrev = document.getElementById('btn-tracker-prev-turn');
  if (btnPrev) {
    btnPrev.onclick = () => {
      rastreador.anteriorTurno();
      actualizarVistaRoster();
    };
  }

  const btnOrdenar = document.getElementById('btn-tracker-ordenar');
  if (btnOrdenar) {
    btnOrdenar.onclick = () => {
      rastreador.ordenarCombatientes();
      actualizarVistaRoster();
    };
  }

  const btnReiniciarRonda = document.getElementById('btn-tracker-reiniciar-ronda');
  if (btnReiniciarRonda) {
    btnReiniciarRonda.onclick = () => {
      if (confirm('¿Deseas reiniciar la ronda a 1?')) {
        rastreador.reiniciarRonda();
        actualizarVistaRoster();
      }
    };
  }

  const btnVaciar = document.getElementById('btn-tracker-vaciar');
  if (btnVaciar) {
    btnVaciar.onclick = () => {
      if (confirm('¿Estás seguro de que deseas vaciar todos los combatientes del encuentro?')) {
        rastreador.vaciarRegistro();
        actualizarVistaRoster();
      }
    };
  }

  enlazarEventosRoster();
}

function render() {
  cerrarZoomImagen();
  cerrarPopoverDistancia();
  cerrarModalDados();

  const ruta = analizarHash();
  const app  = document.getElementById('app');

  actualizarTabsNavegacion(ruta.vista);

  if (ruta.vista === 'iniciativa') {
    app.innerHTML = vistaTracker({ estado: rastreador.obtenerEstado() });
    enlazarEventosTracker();
  } else if (ruta.vista === 'detalle') {
    const base     = compendio.obtenerMonstruoPorId(ruta.id);
    const variante = compendio.obtenerVarianteSeleccionada(base);
    const monstruo = base ? compendio.aplicarVariante(base, variante) : null;
    app.innerHTML = vistaDetalle({
      monstruoBase: base,
      monstruo,
      varianteSeleccionada: variante,
      obtenerFuenteImagen: compendio.obtenerFuenteImagen,
      tipoColor: TIPO_COLOR,
    });
    enlazarEventosDetalle(ruta.id, monstruo && monstruo.nombre);
  } else {
    const todos      = compendio.obtenerTodosMonstruos();
    const resultados = compendio.calcularResultados();
    const panel = construirPanelResultados({
      todos,
      resultados,
      paginaActual: compendio.getPaginaActual(),
      tamPagina: TAM_PAGINA,
      obtenerFuenteImagen: compendio.obtenerFuenteImagen,
      tipoColor: TIPO_COLOR,
      obtenerVariantesConCr: compendio.obtenerVariantesConCr,
    });
    compendio.setPaginaActual(panel.pagina);
    const crsExactos = [...new Set(
      todos.flatMap((m) => compendio.obtenerCrsFiltrables(m))
    )].sort((a, b) => a - b);
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

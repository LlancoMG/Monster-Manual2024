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
export const imagenesListas = (async () => {
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

export function cargarImagenesCustom() {
  return cacheImagenes;
}

export async function guardarImagenCustom(id, dataUrl) {
  cacheImagenes = { ...cacheImagenes, [id]: dataUrl };
  const db = await abrirDB();
  await new Promise((resolve, reject) => {
    const tx = db.transaction(ALMACEN_IMAGENES, 'readwrite');
    tx.objectStore(ALMACEN_IMAGENES).put(dataUrl, id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function borrarImagenCustom(id) {
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

export function cargarVariantesSeleccionadas() {
  try {
    return JSON.parse(localStorage.getItem(CLAVE_VARIANTES)) || {};
  } catch (error) {
    return {};
  }
}

export function guardarVarianteSeleccionada(id, varianteId) {
  const variantes = cargarVariantesSeleccionadas();
  variantes[id] = varianteId;
  localStorage.setItem(CLAVE_VARIANTES, JSON.stringify(variantes));
}

export function cargarImportados() {
  try {
    return JSON.parse(localStorage.getItem(CLAVE_IMPORTADOS)) || [];
  } catch (error) {
    return [];
  }
}

export function guardarImportados(lista) {
  localStorage.setItem(CLAVE_IMPORTADOS, JSON.stringify(lista));
}

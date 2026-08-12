const fs = require('fs');
const path = require('path');
const RAIZ = path.join(__dirname, '..');
// Carga el mapa ESM sin necesidad de package.json type:module
eval(fs.readFileSync(path.join(RAIZ, 'src/features/nombres-en.js'), 'utf8').replace(/export\s+const/g, 'const'));
// Carga el legacy (define window.Monstruos)
const window = {};
eval(fs.readFileSync(path.join(RAIZ, 'monstruos.legacy.js'), 'utf8'));
let cambiados = 0;
window.Monstruos.forEach((m) => {
  if (!m.nombre_en && NOMBRES_INGLES[m.id]) { m.nombre_en = NOMBRES_INGLES[m.id]; cambiados++; }
});
const salida = '// Versión legacy completa: define `window.Monstruos` (con nombres en inglés inyectados).\n' +
  `window.Monstruos = ${JSON.stringify(window.Monstruos, null, 2)};\n`;
fs.writeFileSync(path.join(RAIZ, 'monstruos.legacy.js'), salida);
console.log(`✔ nombre_en inyectado en ${cambiados} monstruos.`);
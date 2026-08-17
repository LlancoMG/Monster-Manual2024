// scripts/crear-bundle.js
// Concatena los módulos ES de src/ en un único archivo sin imports/exports
// (src/app.bundle.js), porque index.html lo carga con <script> plano en vez
// de <script type="module">. Ejecutar con: node scripts/crear-bundle.js
//
// Para agregar un archivo nuevo al bundle, sumalo a ARCHIVOS_EN_ORDEN
// respetando el orden de dependencias (un archivo no puede usar algo
// definido en uno que aparece después de él en la lista).

const fs = require('fs');
const path = require('path');

const RAIZ = path.resolve(__dirname, '..');
const SALIDA = path.join(RAIZ, 'src', 'app.bundle.js');

const ARCHIVOS_EN_ORDEN = [
  'src/features/constants.js',
  'src/features/nombres-en.js',
  'src/features/utils.js',
  'src/features/storage.js',
  'src/features/monster-model.js',
  'src/ui/monster-views.js',
  'src/ui/filtros-views.js',
  'src/app.js'
];

// Quita las líneas "import { ... } from '...';" (una o varias líneas si el
// import viene con llaves multilínea) y les saca "export "/"export default "
// al resto de las declaraciones, dejando el cuerpo intacto.
function limpiarModulo(codigo) {
  let resultado = codigo;

  // 1) Imports de una sola línea: import { a, b } from './x.js';
  resultado = resultado.replace(/^import\s+[^;]+;\s*\n?/gm, '');

  // 2) Por si quedó algún import multilínea (con llaves en varias líneas),
  //    se limpia línea por línea como red de seguridad.
  resultado = resultado
    .split('\n')
    .filter((linea) => !/^\s*import\s/.test(linea))
    .join('\n');

  // 3) Saca "export default " y "export " al inicio de declaraciones,
  //    manteniendo el resto de la línea igual.
  resultado = resultado.replace(/^export\s+default\s+/gm, '');
  resultado = resultado.replace(/^export\s+/gm, '');

  return resultado.trim();
}

function main() {
  const partes = [
    '// Bundle generado automáticamente con: node scripts/crear-bundle.js'
  ];

  ARCHIVOS_EN_ORDEN.forEach((rutaRelativa) => {
    const rutaAbsoluta = path.join(RAIZ, rutaRelativa);
    if (!fs.existsSync(rutaAbsoluta)) {
      throw new Error(`No se encontró el archivo: ${rutaRelativa}`);
    }
    const contenidoOriginal = fs.readFileSync(rutaAbsoluta, 'utf8');
    const contenidoLimpio = limpiarModulo(contenidoOriginal);
    partes.push(`// ---- ${rutaRelativa} ----`);
    partes.push(contenidoLimpio);
  });

  const bundleFinal = partes.join('\n') + '\n';
  fs.writeFileSync(SALIDA, bundleFinal, 'utf8');
  console.log(`✔ Bundle generado en ${path.relative(RAIZ, SALIDA)} (${ARCHIVOS_EN_ORDEN.length} módulos, ${bundleFinal.length} caracteres).`);
}

main();
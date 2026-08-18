// scripts/crear-bundle.js
const fs = require('fs');
const path = require('path');

const RAIZ = path.resolve(__dirname, '..');
const SALIDA = path.join(RAIZ, 'src', 'app.bundle.js');

const ARCHIVOS_EN_ORDEN = [
  'src/features/constants.js',
  'src/features/nombres-en.js',
  'src/features/utils.js',
  'src/features/storage.js',
  'src/features/dice-audio.js',
  'src/features/dice-parser.js',
  'src/features/dice-3d.js',
  'src/features/monster-model.js',
  'src/ui/dice-modal.js',
  'src/ui/monster-views.js',
  'src/ui/filtros-views.js',
  'src/app.js'
];

function limpiarModulo(codigo) {
  let resultado = codigo;

  // 1) Imports de una o varias líneas
  resultado = resultado.replace(/^import\s+[^;]+;\s*\n?/gm, '');

  // 2) Limpieza línea por línea de imports remanentes
  resultado = resultado
    .split('\n')
    .filter((linea) => !/^\s*import\s/.test(linea))
    .join('\n');

  // 3) Saca "export default " y "export " al inicio de declaraciones
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

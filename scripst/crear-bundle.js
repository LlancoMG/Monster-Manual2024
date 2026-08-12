const fs = require('fs');
const path = require('path');
const RAIZ = path.join(__dirname, '..');
const ORDEN = [
  'src/features/constants.js', 'src/features/nombres-en.js', 'src/features/utils.js',
  'src/features/storage.js', 'src/features/monster-model.js',
  'src/ui/monster-views.js', 'src/ui/filtros-views.js', 'src/app.js'
];
let salida = '// Bundle generado automáticamente con: node scripts/crear-bundle.js\n';
for (const archivo of ORDEN) {
  let codigo = fs.readFileSync(path.join(RAIZ, archivo), 'utf8');
  codigo = codigo
    .replace(/import\s*\{[\s\S]*?\}\s*from\s*['"][^'"]+['"];?/g, '') // quita imports
    .replace(/^export\s+/gm, '');                                    // quita exports
  salida += `// ---- ${archivo} ----\n${codigo.trim()}\n`;
}
fs.writeFileSync(path.join(RAIZ, 'src', 'app.bundle.js'), salida);
console.log('✔ src/app.bundle.js regenerado.');
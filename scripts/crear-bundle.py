#!/usr/bin/env python3
import os
import re

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SALIDA = os.path.join(RAIZ, 'src', 'app.bundle.js')

ARCHIVOS_EN_ORDEN = [
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
]

def limpiar_modulo(codigo):
    # 1) Quitar imports multilínea o una línea
    lineas = codigo.split('\n')
    lineas_sin_import = []
    en_import_multilinea = False
    for linea in lineas:
        if re.match(r'^\s*import\s+', linea):
            if ';' not in linea:
                en_import_multilinea = True
            continue
        if en_import_multilinea:
            if ';' in linea:
                en_import_multilinea = False
            continue
        lineas_sin_import.append(linea)

    resultado = '\n'.join(lineas_sin_import)

    # 2) Quitar "export default " y "export " al inicio de declaraciones
    resultado = re.sub(r'^export\s+default\s+', '', resultado, flags=re.MULTILINE)
    resultado = re.sub(r'^export\s+', '', resultado, flags=re.MULTILINE)

    return resultado.strip()

def main():
    partes = [
        '// Bundle generado automáticamente con scripts/crear-bundle.py'
    ]

    for ruta_rel in ARCHIVOS_EN_ORDEN:
        ruta_abs = os.path.join(RAIZ, ruta_rel)
        if not os.path.exists(ruta_abs):
            raise FileNotFoundError(f"No se encontró el archivo: {ruta_rel}")
        with open(ruta_abs, 'r', encoding='utf-8') as f:
            contenido_orig = f.read()
        contenido_limpio = limpiar_modulo(contenido_orig)
        partes.append(f'// ---- {ruta_rel} ----')
        partes.append(contenido_limpio)

    bundle_final = '\n'.join(partes) + '\n'
    with open(SALIDA, 'w', encoding='utf-8') as f:
        f.write(bundle_final)

    print(f"✔ Bundle generado en {os.path.relpath(SALIDA, RAIZ)} ({len(ARCHIVOS_EN_ORDEN)} módulos, {len(bundle_final)} caracteres).")

if __name__ == '__main__':
    main()

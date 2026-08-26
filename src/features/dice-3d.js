// src/features/dice-3d.js
// Motor 3D con Three.js para tiradas de dados poliédricos (d4, d6, d8, d10, d12, d20)
// dentro de una canasta/bandeja octogonal de madera noble y terciopelo temático.
// Genera geometrías poliédricas con grupos de materiales y mapeo UV explícito
// por cara para que CADA número (del 1 al N) sea nítido, de alto contraste y visible.

import { reproducirImpactoDado, reproducirCritico, reproducirPifia } from './dice-audio.js';
import { DANOS_INFO } from './dice-parser.js';

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

export function inicializarEscenaDados(contenedorCanvas, ancho, alto) {
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

export function ejecutarTirada3D({
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

export function redimensionarEscenaDados(ancho, alto) {
  if (!camara || !renderizador) return;
  camara.aspect = ancho / alto;
  camara.updateProjectionMatrix();
  renderizador.setSize(ancho, alto);
}

export function limpiarEscenaDados() {
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

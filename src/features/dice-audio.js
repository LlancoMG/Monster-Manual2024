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

export function alternarSilencioSonido() {
  sonidoSilenciado = !sonidoSilenciado;
  return sonidoSilenciado;
}

export function estaSonidoSilenciado() {
  return sonidoSilenciado;
}

export function reproducirImpactoDado(intensidad = 1, esPared = false) {
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

export function reproducirCritico() {
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

export function reproducirPifia() {
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

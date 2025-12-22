"use client";

import { useEffect, useRef } from "react";
import { ASCII_WAVE_CONFIG as BASE_CONFIG } from "@/lib/constants";
import { getDeviceFingerprint } from "@/lib/utils";

const fingerprint = getDeviceFingerprint();

// Simple pseudo-random generator using the fingerprint
let seed = fingerprint - 12312;

const random = () => {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
};

const range = (min: number, max: number) => min + random() * (max - min);

const shuffledColors = [...BASE_CONFIG.colors].sort(() => random() - 0.5);

const config = {
  ...BASE_CONFIG,
  colors: shuffledColors,
  wave1: { x: BASE_CONFIG.wave1.x + range(-0.05, 0.05) },
  wave2: {
    y: BASE_CONFIG.wave2.y + range(-0.05, 0.05),
    time: BASE_CONFIG.wave2.time + range(-0.1, 0.1),
  },
  wave3: {
    mix: BASE_CONFIG.wave3.mix + range(-0.02, 0.02),
    time: BASE_CONFIG.wave3.time + range(-0.1, 0.1),
  },
  // Randomize speed slightly
  speed: BASE_CONFIG.speed * range(0.8, 1.5),
};

export function AsciiWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frameId: number;
    let time = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        const dpr = window.devicePixelRatio || 1;
        const rect = parent.getBoundingClientRect();

        canvas.width = rect.width * dpr;
        canvas.height = config.height * dpr;

        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${config.height}px`;

        ctx.scale(dpr, dpr);
      }
    };

    const draw = () => {
      if (!ctx || !canvas) return;

      const {
        colors,
        chars,
        fontSize,
        fontFamily,
        threshold,
        speed,
        colorCycleRate,
        wave1: w1,
        wave2: w2,
        wave3: w3,
      } = config;

      const width = parseFloat(canvas.style.width);
      const height = parseFloat(canvas.style.height);

      ctx.clearRect(0, 0, width, height);

      const charWidth = fontSize * 0.6;
      ctx.font = `bold ${fontSize}px ${fontFamily}`;
      ctx.textBaseline = "top";

      const cols = Math.floor(width / charWidth);
      const rows = Math.floor(height / fontSize);

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const xNorm = x / cols;
          const yNorm = y / rows;
          const wave1Val = Math.sin(x * w1.x + time);
          const wave2Val = Math.cos(y * w2.y - time * w2.time);
          const wave3Val = Math.sin((x + y) * w3.mix + time * w3.time);

          const val = (wave1Val + wave2Val + wave3Val) / 3;

          const norm = (val + 1) / 2;

          const isBorder =
            x === 0 || x === cols - 1 || y === 0 || y === rows - 1;

          if (isBorder) {
            let char = "";
            if ((x === 0 || x === cols - 1) && (y === 0 || y === rows - 1)) {
              char = "+";
            } else if (y === 0 || y === rows - 1) {
              char = "-";
            } else {
              char = "|";
            }

            const colorIndex = Math.floor(
              ((xNorm + yNorm + norm) * colorCycleRate) % colors.length
            );

            ctx.fillStyle = colors[colorIndex];
            ctx.fillText(char, x * charWidth, y * fontSize);
            continue;
          }

          if (norm > threshold) {
            const charIndex = Math.floor(norm * (chars.length - 1));
            const colorIndex = Math.floor(
              ((xNorm + yNorm + norm) * colorCycleRate) % colors.length
            );

            ctx.fillStyle = colors[colorIndex];
            ctx.fillText(chars[charIndex], x * charWidth, y * fontSize);
          }
        }
      }

      time += speed;
      frameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="block" />;
}

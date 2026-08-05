"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

interface HeroCanvasProps {
  frame: number;
  progress: number;
}

const TOTAL_FRAMES = 300;

export default function HeroCanvas({
  frame,
  progress,
}: HeroCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  /* ----------------------------------
      PRELOAD ALL IMAGES
  ----------------------------------- */

  useEffect(() => {
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();

      img.src = `/hero/ezgif-frame-${String(i).padStart(3, "0")}.jpg`;

      images.push(img);
    }

    imagesRef.current = images;
  }, []);

  /* ----------------------------------
      DRAW CURRENT FRAME
  ----------------------------------- */

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const draw = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const img = imagesRef.current[frame];

      if (!img) return;

      if (!img.complete) {
        img.onload = draw;
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Cover Scale
      const scale = Math.max(
        canvas.width / img.width,
        canvas.height / img.height
      );

      // Smooth Zoom (0% → 15%)
      const zoom = 1 + progress * 0.15;

      const drawWidth = img.width * scale * zoom;
      const drawHeight = img.height * scale * zoom;

      // Center Image
      const x = (canvas.width - drawWidth) / 2;
      const y = (canvas.height - drawHeight) / 2;

      ctx.drawImage(
        img,
        x,
        y,
        drawWidth,
        drawHeight
      );
    };

    draw();

    window.addEventListener("resize", draw);

    return () => {
      window.removeEventListener("resize", draw);
    };
  }, [frame, progress]);

  return (
    <canvas
      ref={canvasRef}
      className={styles.canvas}
    />
  );
}
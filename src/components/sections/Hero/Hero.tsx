"use client";

import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./Hero.module.css";
import HeroCanvas from "./HeroCanvas";
import useHeroAnimation from "@/hooks/useHeroAnimation";
import { heroScenes } from "@/data/heroScenes";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const frame = useHeroAnimation({
    heroRef,
  });

  // 300 Frames / 4 Scenes
  const sceneIndex = Math.min(
    Math.floor(frame / 75),
    heroScenes.length - 1
  );

  const scene = heroScenes[sceneIndex];

  return (
    <section
      ref={heroRef}
      className={styles.hero}
    >
      {/* Background Canvas */}
     <HeroCanvas
  frame={frame}
  progress={frame / 299}
/>

      {/* Overlay */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        <span className={styles.tag}>
          INDUSTRIAL DEHUMIDIFIERS
        </span>

        {/* Animated Title */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={scene.title}
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            {scene.title}
          </motion.h1>
        </AnimatePresence>

        {/* Animated Subtitle */}
        <AnimatePresence mode="wait">
          <motion.p
            key={scene.subtitle}
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            {scene.subtitle}
          </motion.p>
        </AnimatePresence>

        {/* Buttons */}
        <div className={styles.buttons}>
          <button className={styles.primary}>
            {scene.cta}
          </button>

          <button className={styles.secondary}>
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}
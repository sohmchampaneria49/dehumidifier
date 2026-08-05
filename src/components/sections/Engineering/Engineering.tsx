"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./Engineering.module.css";
import { hotspots } from "./engineeringData";
import useEngineeringAnimation from "@/hooks/useEngineeringAnimation";

export default function Engineering() {
  const sectionRef = useRef<HTMLElement>(null);

  const [active, setActive] = useState(0);

  useEngineeringAnimation({
    sectionRef,
  });

  const current = hotspots[active];

  return (
    <section
      ref={sectionRef}
      className={styles.section}
    >
      <div className={styles.container}>
        {/* ================= HEADER ================= */}

        <div
          className={`${styles.header} engineering-header`}
        >
          <h2 className={styles.title}>
            Engineered From
            <br />
            The Inside Out
          </h2>

          <p className={styles.description}>
            Every component has been engineered for
            maximum durability, efficiency and
            long-term industrial performance.
          </p>
        </div>

        {/* ================= MACHINE ================= */}

        <div className={styles.machineStage}>
          <div
            className={`${styles.machine} engineering-machine`}
          >
            <div className={styles.imageStack}>
              {hotspots.map((spot, index) => (
                <motion.div
                  key={spot.id}
                  className={styles.imageLayer}
                  animate={{
                    opacity:
                      active === index ? 1 : 0,

                    scale:
                      active === index
                        ? 1
                        : 0.985,

                    filter:
                      active === index
                        ? "brightness(1)"
                        : "brightness(.92)",
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Image
                    src={spot.image}
                    alt={spot.title}
                    width={1536}
                    height={1024}
                    priority
                    className={styles.image}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= TIMELINE ================= */}

        <div className={styles.timeline}>
          <div className={styles.timelineTrack} />

          <motion.div
            className={styles.timelineProgress}
            animate={{
              width: `${
                (active / (hotspots.length - 1)) *
                100
              }%`,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          />

          {hotspots.map((spot, index) => (
            <button
              key={spot.id}
              type="button"
              onClick={() => setActive(index)}
              className={`${styles.timelineItem} ${
                active === index
                  ? styles.timelineActive
                  : ""
              }`}
            >
              <div
                className={styles.timelineDot}
              />

              <span>{spot.title}</span>
            </button>
          ))}
        </div>

        {/* ================= INFO ================= */}

        <div
          className={`${styles.bottom} engineering-bottom`}
        >
          <div className={styles.counter}>
            {(active + 1)
              .toString()
              .padStart(2, "0")}

            <span>
              {" "}
              /{" "}
              {hotspots.length
                .toString()
                .padStart(2, "0")}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              className={styles.info}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -30,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              <span className={styles.infoLabel}>
                COMPONENT
              </span>

              <h3>{current.title}</h3>

              <span className={styles.category}>
                {current.category}
              </span>

              <div className={styles.specs}>
                {current.specs.map((spec) => (
                  <span
                    key={spec}
                    className={styles.spec}
                  >
                    {spec}
                  </span>
                ))}
              </div>

              <p>{current.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
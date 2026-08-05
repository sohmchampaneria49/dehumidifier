"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./Engineering.module.css";
import { hotspots } from "./engineeringData";
import useEngineeringAnimation from "@/hooks/useEngineeringAnimation";

export default function EngineeringV2() {
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

        <div className={styles.header}>
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

        {/* ================= MAIN LAYOUT ================= */}

        <div className={styles.layout}>
          {/* ================= LEFT PANEL ================= */}

          <div className={styles.leftPanel}>
            <motion.div
              className={styles.machine}
              animate={{
                y: [0, -8, 0, 8, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className={styles.imageStack}>
                {hotspots.map((spot, index) => (
                  <motion.div
                    key={spot.id}
                    className={styles.imageLayer}
                    initial={false}
                    animate={{
                      opacity:
                        active === index ? 1 : 0,

                      scale:
                        active === index
                          ? 1
                          : 0.97,

                      filter:
                        active === index
                          ? "brightness(1)"
                          : "brightness(.92)",
                    }}
                    transition={{
                      duration: 0.7,
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
            </motion.div>
          </div>

          {/* ================= RIGHT PANEL ================= */}

          <div className={styles.rightPanel}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                className={styles.activeCard}
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
                  duration: 0.45,
                  ease: "easeOut",
                }}
              >
                <span className={styles.cardNumber}>
                  {current.number}
                </span>

                <h3>{current.title}</h3>

                <span className={styles.category}>
                  {current.category}
                </span>

                <div className={styles.specs}>
  {current.specs.map((spec) => (
    <div
      key={spec}
      className={styles.spec}
    >
      <span className={styles.specIcon}>
        ✓
      </span>

      <span>{spec}</span>
    </div>
  ))}
</div>

                <p>{current.description}</p>
              </motion.div>
            </AnimatePresence>

            <div className={styles.componentList}>
              {hotspots.map((spot, index) => (
                <motion.button
                  key={spot.id}
                  whileHover={{
                    x: 6,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className={`${styles.componentItem} ${
                    active === index
                      ? styles.componentActive
                      : ""
                  }`}
                  onClick={() => setActive(index)}
                >
                  <span className={styles.itemNumber}>
                    {spot.number}
                  </span>

                  <div>
                    <h4>{spot.title}</h4>

                    <p>{spot.subtitle}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
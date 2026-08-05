"use client";

import { motion } from "framer-motion";

import styles from "./Performance.module.css";
import { performanceStats } from "./performanceData";

export default function Performance() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* ================= HEADER ================= */}

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className={styles.badge}>
            PERFORMANCE AT SCALE
          </span>

          <h2 className={styles.title}>
            Engineered for
            <br />
            Industrial Excellence
          </h2>

          <p className={styles.description}>
            Trusted by manufacturers, warehouses,
            pharmaceutical facilities and industrial
            plants worldwide with precision humidity
            control engineered for continuous
            operation.
          </p>
        </motion.div>

        {/* ================= STATS ================= */}

        <div className={styles.statsGrid}>
          {performanceStats.map((item, index) => (
            <motion.div
              key={item.id}
              className={styles.stat}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <div className={styles.number}>
                {item.value}
                <span>{item.suffix}</span>
              </div>

              <h3>{item.label}</h3>

              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
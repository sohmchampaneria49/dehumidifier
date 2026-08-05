"use client";
import Image from "next/image";
import styles from "./WhyHumidity.module.css";
import { humidityCards } from "./data";

export default function WhyHumidity() {
  return (
    <section className={styles.section}>

      {/* Header */}
      <div className={styles.header}>

        <span className={styles.badge}>
          WHY HUMIDITY MATTERS
        </span>

        <h2 className={styles.title}>
          Invisible Moisture
          <br />
          Causes Visible Damage
        </h2>

        <p className={styles.description}>
          Excess humidity silently damages machinery, inventory,
          production quality and operating efficiency.
          Controlling moisture means protecting your business.
        </p>

      </div>

      {/* Content */}
      <div className={styles.content}>

        {/* Left Image */}
        <div className={styles.imageContainer}>

         <Image
  src="/images/humidity-section.jpg"
  alt="Industrial Facility"
  fill
  priority
  className={styles.image}
/>

        </div>

        {/* Cards */}
        <div className={styles.cards}>

          {humidityCards.map((card) => (

            <div
              key={card.id}
              className={styles.card}
            >

              <span className={styles.number}>
                {card.id}
              </span>

              <h3>{card.title}</h3>

              <p>{card.description}</p>

              <span className={styles.arrow}>
                →
              </span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
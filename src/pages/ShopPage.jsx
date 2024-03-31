import React from "react";
import Header from "../components/Header";
import styles from "./Shop.module.css";
export default function ShopPage() {
  return (
    <>
      <Header />
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <p>Original</p>
          <h1 className={styles.heroTitle}>
            Non-tarnishing Gold Polished Earring
          </h1>
          <p className={styles.heroPrice}>#10,000</p>
          <p className={styles.heroOffer}>LIMITED TIME OFFER</p>
          <button className={styles.heroButton}>SHOP NOW</button>
        </div>
        <div className={styles.heroImageWrapper}>
          <img
            src="../../assets/ProductDisplay.svg"
            alt="Gold Polished Earring"
            className={styles.heroImage}
          />
        </div>
      </div>
    </>
  );
}

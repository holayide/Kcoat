import React from "react";
import Header from "../components/Header";
import styles from "./Shop.module.css";
import SortBy from "../pages/sort";
import ProductsCategories from "../pages/ProductCategories";
import BrandCategories from "../pages/BrandCategories";
export default function ShopPage() {
  return (
    <>
      <Header />
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <p className={styles.heroPara}>Original</p>
          <div className={styles.heroDiv}>
            <h1 className={styles.heroTitle}>
              Non-tarnishing Gold Polished Earring
            </h1>
            <p className={styles.heroPrice}>#10,000</p>
            <br />
            <br />
            <p className={styles.heroOffer}>LIMITED TIME OFFER</p>
          </div>
          <button className={styles.heroButton}>Shop Now</button>
        </div>
        <div className={styles.heroImageWrapper}>
          <img
            src="../../assets/ProductDisplay.svg"
            alt="Gold Polished Earring"
            className={styles.heroImage}
          />
        </div>
      </div>
      <SortBy />
      <ProductsCategories />
      <BrandCategories />
    </>
  );
}

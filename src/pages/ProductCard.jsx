import React from "react";
import styles from "./ProductCard.module.css";

function Product({ title, price, imageSrc, label }) {
  return (
    <div className={styles.productCard}>
      <div className="product">
        <img src="../../assets/ProductDisplay.svg" alt="Golden Earring" />
        <h3>14k Yellow-Gold Earring</h3>
        <img src="../../assets/star.svg" alt="Rating" />
        <img src="../../assets/star.svg" alt="Rating" />
        <img src="../../assets/star.svg" alt="Rating" />
        <img src="../../assets/star.svg" alt="Rating" />
        <img src="../../assets/star2.svg" alt="Rating" />

        <p>
          {" "}
          <img src="../../assets/icons/Naira.svg" alt="Naira" />
          12000
        </p>
        <div className={styles.label}>
          <span className="label">label</span>
          <button className={styles.cart}>
            <img src="../../assets/icons/cart2.svg" alt="cart" />
            ADD TO CART
          </button>
        </div>
        <div className="product">
          <img src="../../assets/Corkring.svg" alt="Cork ring" />
          <h3>Double.Band Cork RIng</h3>
          <img src="../../assets/star.svg" alt="Rating" />
          <img src="../../assets/star.svg" alt="Rating" />
          <img src="../../assets/star.svg" alt="Rating" />
          <img src="../../assets/star.svg" alt="Rating" />
          <img src="../../assets/star2.svg" alt="Rating" />

          <p>
            {" "}
            <img src="../../assets/icons/Naira.svg" alt="Naira" />
            18000
          </p>
          <div className={styles.label}>
            <span className="label">label</span>
            <button className={styles.cart}>
              <img src="../../assets/icons/cart2.svg" alt="cart" />
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="product">
          <img src="../../assets/wedding.svg" alt="Golden Earring" />
          <h3>Wedding Earrings</h3>
          <img src="../../assets/star.svg" alt="Rating" />
          <img src="../../assets/star.svg" alt="Rating" />
          <img src="../../assets/star.svg" alt="Rating" />
          <img src="../../assets/star.svg" alt="Rating" />
          <img src="../../assets/star2.svg" alt="Rating" />

          <p>
            {" "}
            <img src="../../assets/icons/Naira.svg" alt="Naira" />
            100,000
          </p>
          <div className={styles.label}>
            <span className="label">label</span>
            <button className={styles.cart}>
              <img src="../../assets/icons/cart2.svg" alt="cart" />
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

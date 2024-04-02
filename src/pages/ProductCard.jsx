import React from "react";
import styles from "./ProductCard.module.css";

function Product({ title, price, imageSrc, rating, label, heart }) {
  const ratingStars = Array(rating)
    .fill()
    .map((_, i) => (
      <img
        key={i}
        src="../../assets/star.svg"
        alt="Rating"
        className={styles.star}
      />
    ));
  const emptyStars = Array(5 - rating)
    .fill()
    .map((_, i) => (
      <img
        key={i}
        src="../../assets/star2.svg"
        alt="Rating"
        className={styles.star}
      />
    ));

  return (
    <div className={styles.container}>
      <div className={styles.product}>
        <img src={imageSrc} alt={title} className={styles.productImage} />
        <div className={styles.titleSect}>
          <h3 className={styles.title}>{title}</h3>
          <img src={heart} alt={heart} />
        </div>
        <div className={styles.ratings}>{[...ratingStars, ...emptyStars]}</div>
        <p className={styles.price}>
          <img
            src="../../assets/icons/Naira.svg"
            alt="Naira"
            className={styles.nairaIcon}
          />
          {price}
        </p>
        <div className={styles.label}>{label}</div>
        <button className={styles.cartButton}>
          <img
            src="../../assets/icons/cart2.svg"
            alt="Add to cart"
            className={styles.cartIcon}
          />
          <p>ADD TO CART</p>
        </button>
      </div>
    </div>
  );
}

export default Product;

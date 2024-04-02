import React from "react";
import styles from "./product.module.css";

const BrandCategories = () => {
  const categories = ["Fenty", "Dior", "Kylie", "Gucci"];

  return (
    <div className={styles.container}>
      <div className={styles.productCategories}>
        <h2>BRAND CATEGORIES</h2>
        <ul>
          {categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BrandCategories;

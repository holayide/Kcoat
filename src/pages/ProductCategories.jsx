import React from "react";
import styles from "./product.module.css";
const ProductCategories = () => {
  const categories = ["Women's wear", "Men's wear", "Jewelry", "Makeup"];

  return (
    <div className={styles.productCategories}>
      <h4>PRODUCT CATEGORIES</h4>
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </div>
  );
};
export default ProductCategories;

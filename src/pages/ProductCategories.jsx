import React from "react";
import styles from "./product.module.css";
import Product from "./ProductCard";

const ProductCategories = () => {
  const categories = ["Women's wear", "Men's wear", "Jewelry", "Makeup"];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.productCategories}>
          <h2>PRODUCT CATEGORIES</h2>
          <ul>
            {categories.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        </div>
        <Product />
      </div>
    </>
  );
};

export default ProductCategories;

import React from "react";
import styles from "./product.module.css";
import Product from "./ProductCard";
import products from "../pages/data";
const ProductCategories = () => {
  const categories = ["Women's wear", "Men's wear", "Jewelry", "Makeup"];

  return (
    <div className={styles.container}>
      <div className={styles.productCategories}>
        <h2>PRODUCT CATEGORIES</h2>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductCategories;

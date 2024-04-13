import React from "react";
import styles from "./product.module.css";
import Product from "./ProductCard";
import products from "../utilities/data";
export default function ProductCategories() {
  return (
    <div className={styles.container}>
      {/*PRODUCT CATEGORIES  */}
      <div className={styles.productCategories}></div>

      <div className={styles.cards}>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

function Categories({ producttitle, productCat }) {
  return (
    <div className={styles.productnames}>
      <h2>{producttitle}</h2>
      <ul>
        {productCat.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
}

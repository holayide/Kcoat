import React from "react";
import styles from "./product.module.css";
import Product from "./ProductCard";
import products from "../utilities/data";

export default function ProductCategories() {
  const productCat = ["Women's wear", "Men's wear", "Jewelry", "Makeup"];
  const brandCat = ["Fenty", "Dior", "Kylie", "Gucci"];

  return (
    <div className={styles.container}>
      {/*PRODUCT CATEGORIES  */}
      <div className={styles.productCategories}>
        <Categories productCat={productCat} producttitle="PRODUCT CATEGORIES" />
        <Categories productCat={brandCat} producttitle="BRANDS" />
        {/* <h2>PRODUCT CATEGORIES</h2>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul> */}
      </div>

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

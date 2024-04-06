import React from "react";
import styles from "./product.module.css";
import Product from "./ProductCard";
import products from "../utilities/data";
import Filter from "../components/Filter";
export default function ProductCategories() {
  const productCat = ["Women's wear", "Men's wear", "Jewelry", "Makeup"];
  const brandCat = ["Fenty", "Dior", "Kylie", "Gucci"];
  const tags = ["Body", "Neck", "Hand"];
  // const price = ["#2,000-500,000"];
  return (
    <div className={styles.container}>
      {/*PRODUCT CATEGORIES  */}
      <div className={styles.productCategories}>
        <Categories productCat={productCat} producttitle="PRODUCT CATEGORIES" />
        <Categories productCat={brandCat} producttitle="BRANDS" />
        <Categories productCat={tags} producttitle="TAGS" />
        {/* <Categories productCat={price} producttitle="BY PRICE" /> */}
        <Filter />
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

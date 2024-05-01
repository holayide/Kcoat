import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import ProductItem from "./ProductItem";
import style from "./ProductItem.module.css";

export default function ProductCategories({ category, selectedCategory }) {
  const { datas } = useContext(ShopContext);

  function filteredData(datas, selected, category) {
    let filteredProducts = datas.filter(
      ({ category: productCategory }) => productCategory === category
    );

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ color, company, price, title, label }) =>
          color === selected ||
          company === selected ||
          price === selected ||
          title === selected ||
          label === selected
      );
    }
    return filteredProducts;
  }
  const filteredProducts = filteredData(datas, selectedCategory, category);
  return (
    <div className={style.shopProduct}>
      <Result products={filteredProducts} />
    </div>
  );
}

const Result = ({ products }) => {
  return (
    <section className={style.cardContainer}>
      {products.map((data, i) => (
        <ProductItem
          key={i}
          id={data.id}
          image={data.image}
          name={data.name}
          price={data.price}
          company={data.company}
          color={data.color}
          tag={data.tag}
          heart={data.heart}
          fullstar={data.fullstar}
          halfstar={data.halfstar}
        />
      ))}
    </section>
  );
};

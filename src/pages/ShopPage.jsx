import React from "react";
import { useState } from "react";
import style from "./Shop.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SortBy from "../components/Shops/Sort";
import ProductCategories from "../components/Shops/ProductCategories";
import SideBar from "../components/Shops/SideBar";

export default function ShopPage({ banner, category }) {
  // new--- God helppp
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <Header />
      <div className={style.banner}>
        <img src={banner} alt="Banner" loading="lazy" />
      </div>
      <SortBy />

      <div className={style.shop}>
        <SideBar handleClick={handleClick} handleChange={handleChange} />
        <ProductCategories
          category={category}
          selectedCategory={selectedCategory}
        />
      </div>

      <Footer />
    </div>
  );
}

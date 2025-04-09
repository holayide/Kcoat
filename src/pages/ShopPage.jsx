import React from "react";
import { useState } from "react";
import style from "./Shop.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SortBy from "../components/Shops/Sort";
import ProductCategories from "../components/Shops/ProductCategories";
import SideBar from "../components/Shops/SideBar";
import { useLocation } from "react-router-dom";

const pathBackgroundMap = {
  "/women": "#cce4e8",
  "/men": "#f2efea",
  "/accessories": "#e4e4e4",
  "/lip": "#f2ede7",
};

export default function ShopPage({ banner, category }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const location = useLocation();

  const backgroundColor = pathBackgroundMap[location.pathname] || "#fff";

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
      <div className={style.banner} style={{ backgroundColor }}>
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

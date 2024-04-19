import dashbord from "../../ShopAssets/Admin assets/dashboard.svg";
import orders from "../../ShopAssets/Admin assets/orders.svg";
import customer from "../../ShopAssets/Admin assets/customer.svg";
import discount from "../../ShopAssets/Admin assets/Discount.svg";
import product from "../../ShopAssets/Admin assets/product.svg";
import settings from "../../ShopAssets/Admin assets/settings.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./DashboardMenus.css";

export default function DashboardMenus() {
  const [activeMenu, setActiveMenu] = useState("dashbord");

  return (
    <div className="dashbordMainMenu">
      <ul>
        <li
          onClick={() => {
            setActiveMenu("dashbord");
          }}
          className={activeMenu === "dashbord" ? "clickedMenu" : ""}
        >
          <Link to="/admin">
            <img src={dashbord} alt="dashbord" />
            <p>Dashboard</p>
          </Link>
        </li>
        <li
          onClick={() => {
            setActiveMenu("orders");
          }}
          className={activeMenu === "orders" ? "clickedMenu" : ""}
        >
          <Link to="/customerorder">
            <img src={orders} alt="orders" />
            <p>Orders</p>
          </Link>
        </li>
        <li
          onClick={() => {
            setActiveMenu("customer");
          }}
          className={activeMenu === "customer" ? "clickedMenu" : ""}
        >
          <Link>
            <img src={customer} alt="customer" />
            <p>Customer</p>
          </Link>
        </li>
        <li
          onClick={() => {
            setActiveMenu("discount");
          }}
          className={activeMenu === "discount" ? "clickedMenu" : ""}
        >
          <Link>
            <img src={discount} alt="discount" />
            <p>Discount</p>
          </Link>
        </li>
        <li
          onClick={() => {
            setActiveMenu("product");
          }}
          className={activeMenu === "product" ? "clickedMenu" : ""}
        >
          <Link>
            <img src={product} alt="product" />
            <p>Product</p>
          </Link>
        </li>
        <li
          onClick={() => {
            setActiveMenu("settings");
          }}
          className={activeMenu === "settings" ? "clickedMenu" : ""}
        >
          <Link>
            <img src={settings} alt="settings" />
            <p>Settings</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

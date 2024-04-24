import dashbord from "../../ShopAssets/Admin assets/dashboard.svg";
import orders from "../../ShopAssets/Admin assets/orders.svg";
import customer from "../../ShopAssets/Admin assets/customer.svg";
import discount from "../../ShopAssets/Admin assets/Discount.svg";
import product from "../../ShopAssets/Admin assets/product.svg";
import settings from "../../ShopAssets/Admin assets/settings.svg";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./DashboardMenus.css";

export default function DashboardMenus() {
  const [activeMenu, setActiveMenu] = useState("");
  const location = useLocation(); // Get current location

  return (
    <div className="dashbordMainMenu">
      <div className="brand_logo">
        <img src="../../../../assets/icons/kcoat-logo.svg" alt="Brand logo" />
      </div>

      <ul>
        <li
          onClick={() => {
            setActiveMenu("dashboard");
          }}
          className={
            activeMenu === "dashboard" || location.pathname === "/dashboard"
              ? "clickedMenu"
              : "unclickMenu"
          }
        >
          <Link to="/dashboard">
            <img src={dashbord} alt="dashboard" />
            <p>Dashboard</p>
          </Link>
        </li>
        <li
          onClick={() => {
            setActiveMenu("orders");
          }}
          className={
            activeMenu === "orders" || location.pathname === "/customerorder"
              ? "clickedMenu"
              : ""
          }
        >
          <Link to="/customerorder">
            <img src={orders} alt="orders" />
            <p>Orders</p>
          </Link>
        </li>
        <li
          onClick={() => {
            setActiveMenu("product");
            // navigate("/productInventory");
          }}
          className={
            activeMenu === "product" ||
            location.pathname === "/productInventory"
              ? "clickedMenu"
              : ""
          }
        >
          <Link to="/productInventory">
            <img src={product} alt="product" />
            <p>Product</p>
          </Link>
        </li>
        <li
          onClick={() => {
            setActiveMenu("customer");
          }}
          className={
            activeMenu === "customer" ||
            location.pathname === "/admincustomerpage"
              ? "clickedMenu"
              : ""
          }
        >
          <Link to="/admincustomerpage">
            <img src={customer} alt="customer" />
            <p>Customer</p>
          </Link>
        </li>
        <li
          onClick={() => {
            setActiveMenu("discount");
          }}
          className={
            activeMenu === "discount" ||
            location.pathname === "/admincustomerpage"
              ? "clickedMenu"
              : ""
          }
        >
          <Link to="/admincustomerpage">
            <img src={discount} alt="discount" />
            <p>Discount</p>
          </Link>
        </li>

        <li
          onClick={() => {
            setActiveMenu("settings");
          }}
          className={
            activeMenu === "settings" ||
            location.pathname === "/admincustomerpage"
              ? "clickedMenu"
              : ""
          }
        >
          <Link to="/admincustomerpage">
            <img src={settings} alt="settings" />
            <p>Settings</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

import DashboardMenus from "../DashBoard/DashboardMenus";
import ProductListing from "./ProductListing";
import style from "./ProductInoventory.module.css";

export default function ProductInventory() {
  return (
    <div className={style.productInventory}>
      <DashboardMenus />
      <ProductListing />
    </div>
  );
}

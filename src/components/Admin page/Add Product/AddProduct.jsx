import DashboardMenus from "../DashBoard/DashboardMenus";
import NewProduct from "./NewProduct";
import style from "./AddProduct.module.css";

export default function AddProduct() {
  return (
    <div className={style.addproducts}>
      <DashboardMenus />
      <NewProduct />
    </div>
  );
}

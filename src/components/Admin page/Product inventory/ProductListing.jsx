import AdminHeader from "../Admin Header/AdminHeader";
import style from "./ProductListing.module.css";
import dropDown from "../../ShopAssets/Admin assets/arrowDown.svg";
import addproduct from "../../ShopAssets/Admin assets/addproduct.svg";
import haute from "../../ShopAssets/Haute Couture.svg";
import { Link } from "react-router-dom";

export default function ProductListing() {
  return (
    <div className={style.productListing}>
      <AdminHeader />
      <div className={style.productlistingHeader}>
        <h2>Product inventory</h2>

        <div className={style.inventoryBoxes}>
          <div className={style.box}>
            <h4>Total Products</h4>
            <p>100</p>
          </div>
          <div className={`${style.box} ${style.boxLines}`}>
            <h4>Out of stock</h4>
            <p>6</p>
          </div>
          <div className={style.box}>
            <h4>Categories</h4>
            <p>4</p>
          </div>
        </div>

        <div className={style.inventoryDetails}>
          <div className={style.inventoryCategories}>
            <div className={style.inventoryCategoriesboxes}>
              <div className={style.inventorymenus}>
                <p>Category: All</p>
                <img src={dropDown} alt="Drop down" />
              </div>
              <div className={style.inventorymenus}>
                <p>Status: Active</p>
                <img src={dropDown} alt="Drop down" />
              </div>
              <div className={style.inventorymenus}>
                <p>Date</p>
                <img src={dropDown} alt="Drop down" />
              </div>
            </div>
            <Link to="/addProduct" className={style.addproduct}>
              <img src={addproduct} alt="Add Product" />
              <p>Add Product</p>
            </Link>
          </div>
          <div className={style.listItems}>
            <div
              className={`${style.listitemsheader} ${style.listitemsheaderitems}`}
            >
              <div className={style.smallbox}></div>
              <div>Product Name</div>
              <div>Category</div>
              <div>Price</div>
              <div>Stock</div>
              <div>Sold</div>
              <div>Revenue</div>
              <div>Status</div>
              <div>Action</div>
            </div>

            <div
              className={`${style.listInventoryProducts} ${style.listitemsheader}`}
            >
              <div className={style.listing}></div>
              <div className={style.productname}>
                <img src={haute} alt="haute" />
                <p>Haute couture</p>
              </div>
              <div className={style.inventorycategory}>Women wear</div>
              <div className={style.inventoryprice}>12,OOO</div>
              <div className={style.inventorystock}>20</div>
              <div className={style.inventorysold}>15</div>
              <div className={style.inventoryrevenue}>180,OOO</div>
              <div className={style.inventorystatus}>Status</div>
              <div className={style.inventoryaction}>Action</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

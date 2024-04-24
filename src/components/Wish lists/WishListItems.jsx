import { useContext } from "react";
import { FavoriteContext } from "../../Context/WishContext";
import cancel from "../ShopAssets/cancel.svg";
import style from "./WishListItem.module.css";
import stockStatus from "../ShopAssets/Admin assets/stockstatus.svg";

export default function WishListItems() {
  const { datas, favoriteItems, removeFromFavorites } =
    useContext(FavoriteContext);

  return (
    <div className={style.wishListItem}>
      <h2>MY WISHLIST</h2>

      <div className={`${style.wishitemsFormatMain} ${style.wishlistheader}`}>
        <p>Products</p>
        <p>Size</p>
        <p>Category</p>
        <p>Price</p>
        <p>Stock Status</p>
        <p>Action</p>
        <p>Remove</p>
      </div>

      {datas.map((e) => {
        if (favoriteItems[e.id] > 0) {
          return (
            <div>
              <div
                className={`${style.wishitemsFormat} ${style.wishitemsFormatMain}`}
              >
                <div className={style.ListProductImg}>
                  <p>{e.name}</p>
                  <img
                    src={e.image}
                    alt="person"
                    className={style.wishIconProductIcon}
                    loading="lazy"
                  />
                </div>

                <p>Medium</p>
                <p>{e.category} category</p>
                <p>₦{e.price}</p>
                <div className={style.stockStatus}>
                  <img src={stockStatus} alt="Stock Status" />
                  <p>In Stock</p>
                </div>

                <div className={style.wishItemsQuantity}>
                  <img
                    src="../../assets/icons/minicart.svg"
                    alt="mini cart"
                    loading="lazy"
                  />
                  <button>ADD TO CART</button>
                </div>

                <div className={style.wishremove}>
                  <img
                    src={cancel}
                    alt="Cancel"
                    onClick={() => {
                      removeFromFavorites(e.id);
                    }}
                  />
                </div>
              </div>
              {/* <hr /> */}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

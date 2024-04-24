import { useContext } from "react";
import style from "./CartItem.module.css";
import cancel from "../ShopAssets/cancel.svg";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";

export default function CartItem() {
  const { getTotalCartAmount, datas, cartItems, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className={style.cartitem}>
      <h1>CART</h1>
      <div className={`${style.cartitemsFormatMain} ${style.cartItemHead}`}>
        <p></p>
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
        <p></p>
      </div>

      {datas.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div
                className={`${style.cartitemsFormat} ${style.cartitemsFormatMain}`}
              >
                <img
                  src={e.image}
                  alt="person"
                  className={style.carticonProductIcon}
                />

                <p>{e.name}</p>
                <p>₦{e.price}</p>
                <button className={style.cartitemsQuantity}>
                  {cartItems[e.id]}
                </button>
                <p className={style.subtotalHeadItem}>
                  ₦{e.price * cartItems[e.id]}
                </p>

                <div>
                  <img
                    src={cancel}
                    alt="Cancel"
                    onClick={() => {
                      removeFromCart(e.id);
                    }}
                  />
                </div>
              </div>
            </div>
          );
        }
        return null;
      })}

      {/* total */}
      <div className={style.cartitemsDown}>
        <div className={style.cartitemsTotal}>
          <div className={style.cartitemspricestotal}>
            <div className={style.cartitemsTotalItem}>
              <p>Subtotal</p>
              <p>₦{getTotalCartAmount()}</p>
            </div>

            <div className={style.cartitemsTotalItem}>
              <h3>Total</h3>
              <h3>₦{getTotalCartAmount()}</h3>
            </div>
          </div>
          <Link to="/payment">PROCEED TO CHECK OUT</Link>
        </div>
      </div>

      {/* total */}
    </div>
  );
}

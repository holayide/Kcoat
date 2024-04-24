import { useContext } from "react";
import style from "./Transfer.module.css";
import ubalogo from "../ShopAssets/UBA.png";
import { ShopContext } from "../../Context/ShopContext";

export default function Transfer() {
  const { getTotalCartAmount, datas, cartItems } = useContext(ShopContext);

  return (
    <div className={style.transferWrapper}>
      <div className={style.deliverydetails}>
        <p>CLICK HERE FOR DELIVERY PRICES</p>
      </div>
      {/* product */}
      <div className={style.itemsPurchased}>
        <div className={style.productbought}>
          <h3 className={style.items}>PRODUCT</h3>
          {datas.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <div className={style.itemsbought}>
                  <p>{e.name}</p>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className={style.quantity}>
          <h3>SUBTOTAL</h3>
          <p></p>
        </div>
      </div>
      {/* total */}
      <div className={style.totalpayment}>
        <div className={style.subtotalpay}>
          <p>SUBTOTAL</p>
          <p></p>
        </div>
        <div className={style.totalpay}>
          <p>TOTAL</p>
          <p>₦ {getTotalCartAmount()}</p>
        </div>
      </div>

      {/* transfer */}
      <div className={style.banktransfer}>
        <div className={style.paymentMent}>
          <p>We Accept Bank Transfer / Ussd</p>
          <p>Kindly await confirmation</p>
        </div>
        <div className={style.ubaLogo}>
          <img src={ubalogo} alt="ubalogo" />
        </div>
        <div className={style.accountDetail}>
          <p>2230449***</p>
          <p>kotoye christiana</p>
        </div>
      </div>
    </div>
  );
}

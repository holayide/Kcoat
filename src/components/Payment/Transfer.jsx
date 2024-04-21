import style from "./Transfer.module.css";
import ubalogo from "../ShopAssets/UBA.png";

export default function Transfer() {
  return (
    <div className={style.transferWrapper}>
      <div className={style.deliverydetails}>
        <p>CLICK HERE FOR DELIVERY PRICES</p>
      </div>
      {/* product */}
      <div className={style.itemsPurchased}>
        <div className={style.productbought}>
          <h3 className={style.items}>PRODUCT</h3>
          <div className={style.itemsbought}>
            <p>ANKARA TWO PIECE</p>
            <p>14K-YELLOW GOLD EARRING</p>
          </div>
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
          <p>₦ 71,000</p>
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

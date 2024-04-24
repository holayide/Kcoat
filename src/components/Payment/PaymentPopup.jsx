import style from "../../pages/Payment.module.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import check from "../ShopAssets/paymentProcessed.svg";
import { Link } from "react-router-dom";

export default function PaymentPopup({ closeModel }) {
  return (
    <div className={style.popBackground}>
      <div className={style.popContainer}>
        <div className={style.popheader}>
          <div>
            <FaArrowLeftLong
              className={style.back}
              onClick={() => closeModel(false)}
            />
          </div>
          <h3>Order confirmed</h3>
        </div>
        <p>
          We successfully received your purchase and we’re ready to prepare your
          order!
        </p>
        <img src={check} alt="Payment Processed" />
        <h3>
          PAYMENT SUCCESSFULLY <br /> PROCESSED!
        </h3>
        <p>Thank you for your purchase</p>
        <div className={style.checkout}>
          <Link>Check Status</Link>
        </div>
        <div className={style.continueShopping}>
          <Link to="/women">Continue shopping</Link>
        </div>
      </div>
    </div>
  );
}

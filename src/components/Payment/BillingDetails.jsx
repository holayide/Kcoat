import style from "./BillingDetails.module.css";
import { Link } from "react-router-dom";

export default function BillingDetails({ onClick }) {
  return (
    <div className={style.billingdetailsContainer}>
      <div className={style.billingdetails}>Billing Details</div>
      <p>
        Please Ensure Delivery Address And Phone Number Is Correct For Adequate
        Delivery Rates.
      </p>
      <div className={style.warning}>
        <p>Please don't fill the form if the payment has not been made</p>
      </div>

      <div className={style.from}>
        <div>
          <label htmlFor="email">EMAIL</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="firstname">FIRST NAME </label>
          <input type="text" name="firstname" id="firstname" />
        </div>
        <div>
          <label htmlFor="lastname">LAST NAME</label>
          <input type="text" name="lastname" id="lastname" />
        </div>
        <div>
          <label htmlFor="phone">PHONE NUMBER </label>
          <input type="tel" name="phone" id="phone" />
        </div>
        <div>
          <label htmlFor="address">
            State Address (Please ensure you delivery address is correct)
          </label>
          <input type="text" name="address" id="address" />
        </div>
      </div>

      <div className={style.placeorder} onClick={onClick}>
        PLACE ORDER
      </div>

      <div className={style.checklogin}>
        <div></div>
        <div>
          Don’t have an account? click <Link to="/register">register</Link> to
          create an account and have access to place your orders
        </div>
      </div>
    </div>
  );
}

import Header from "../components/Header";
import style from "./Payment.module.css";
import BillingDetails from "../components/Payment/BillingDetails";
import Transfer from "../components/Payment/Transfer";
import PaymentPopup from "../components/Payment/PaymentPopup";
import { useState } from "react";
import { isUserLogin } from "../utilities/user";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const [pop, setPop] = useState(false);
  const navigate = useNavigate();

  function handlePopUp() {
    setPop(() => !pop);
  }

  return (
    <div>
      <div className={style.payementHeader}>
        <Header />
      </div>
      <div className={style.paymentmainsection}>
        <Transfer />

        {isUserLogin() ? (
          <BillingDetails onClick={handlePopUp} />
        ) : (
          <BillingDetails onClick={() => navigate("/account")} />
        )}
      </div>
      {pop && <PaymentPopup closeModel={setPop} />}
    </div>
  );
}

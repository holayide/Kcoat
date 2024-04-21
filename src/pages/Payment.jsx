import Header from "../components/Header";
import style from "./Payment.module.css";
import BillingDetails from "../components/Payment/BillingDetails";
import Transfer from "../components/Payment/Transfer";

export default function Payment() {
  return (
    <div>
      <div className={style.payementHeader}>
        <Header />
      </div>
      <div className={style.paymentmainsection}>
        <Transfer />
        <BillingDetails />
      </div>
    </div>
  );
}

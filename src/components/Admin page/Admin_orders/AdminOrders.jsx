import DashboardMenus from "../DashBoard/DashboardMenus";
import Header from "../../Header";
import "./AdminOrders.css";
import CustomerOrders from "./CustomerOrders";

export default function AdminOrders() {
  return (
    <div className="customer_orders">
      <div className="customer_order_header">
        <Header />
      </div>
      <div className="orders_main">
        <DashboardMenus />
        <CustomerOrders />
      </div>
    </div>
  );
}

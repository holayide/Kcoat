import DashboardMenus from "../DashBoard/DashboardMenus";
import "./AdminOrders.css";
import CustomerOrders from "./CustomerOrders";

export default function AdminOrders() {
  return (
    <div className="orders_main">
      <DashboardMenus />
      <CustomerOrders />
    </div>
  );
}

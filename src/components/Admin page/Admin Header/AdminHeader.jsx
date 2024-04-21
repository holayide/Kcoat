import bell from "../../ShopAssets/Admin assets/bell.svg";
import dropdown from "../../ShopAssets/Admin assets/arrowDown.svg";
import adminImg from "../../ShopAssets/Admin assets/admincustomer.svg";
import "./AdminHeader.css";

export default function AdminHeader() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <div className="order_customerInfo">
      <div className="customer_input">
        <img src="../../../../assets/icons/search.svg" alt="Search bar" />
        <input type="text" placeholder="Search ..." />
      </div>

      <div className="admin_left_header">
        <div className="current_date">{currentDate}</div>
        <div className="order_head_left">
          <img src={bell} alt="Bell" />
          <div className="admin_info">
            <img src={adminImg} alt="adminImg" />
            <p>Sarah oni</p>
            <img src={dropdown} alt="dropdown" />
          </div>
        </div>
      </div>
    </div>
  );
}

import greater from "../../ShopAssets/Admin assets/greaterthan.svg";
import "./DashAdminMain.css";

export function DashBoxes({ totalImg, totalnum, children }) {
  return (
    <div className="admin_total_box">
      <img src={totalImg} alt="Admin Info" />
      <p>{totalnum}</p>
      <p>{children}</p>
      <div className="view">
        <p>view all</p>
        <img src={greater} alt="Greater than" />
      </div>
    </div>
  );
}

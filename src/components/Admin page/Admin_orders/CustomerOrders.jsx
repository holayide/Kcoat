import adminImg from "../../ShopAssets/Admin assets/admincustomer.svg";
import calender from "../../ShopAssets/Admin assets/calendarad.svg";
// import download from "../../ShopAssets/Admin assets/download.svg";
import haute from "../../ShopAssets/Haute Couture.svg";
import AdminHeader from "../Admin Header/AdminHeader";
import "./CustomerOrders.css";

export default function CustomerOrders() {
  return (
    <div className="order__main">
      <div className="customer__header">
        <AdminHeader />
      </div>
      <div>
        <div className="admin_order_main">
          <div className="order_titles">
            <div className="ordername">
              <h2>
                Order <span>15 orders found</span>
              </h2>
            </div>
            <div className="order_download_area">
              <div className="order_date_dropdown">
                <img src={calender} alt="march" />
                <select id="order">
                  <option value="mar">Mar - April, 2024</option>
                  <option value="mar">May - June, 2024</option>
                  <option value="mar">July - Aug, 2024</option>
                  <option value="mar">Sept- October, 2024</option>
                  <option value="mar">Nov - Dec, 2024</option>
                </select>
              </div>
            </div>
          </div>

          <div className="order__proper__main">
            <div className="order__proper arrange__order">
              <div></div>
              <div>Order ID</div>
              <div>Product Name</div>
              <div>Customer</div>
              <div>Date</div>
              <div>Price</div>
              <div>status</div>
            </div>

            <div className="customer_show_order arrange__order">
              <div></div>
              <div className="order__id">#4376</div>
              <div className="product__info">
                <div className="product__img">
                  <img src={haute} alt="Haute couture" />
                </div>
                <div className="product__title">Haute couture</div>
              </div>
              <div className="customer">
                <div className="customer__img">
                  <img src={adminImg} alt="Customer" />
                </div>
                <div>
                  <div className="customer__name">Tolani Oyebanji</div>
                  <div className="customer__email">Tolani23@gmail.com</div>
                </div>
              </div>
              <div className="customer__purchased__date">22/03/2024</div>
              <div className="product__price">#12,000</div>
              <div className="order__status">Complete</div>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Sidebar from "../ProfileRequirement/SideBar";
import NewsLetter from "../../components/NewsLetter";
import Footer from "../../components/Footer";
import Styles from "./Order.module.css";

const OrderHistory = () => {
  const orders = [
    {
      id: 4376,
      date: "Feb 22, 2024",
      amount: "₦22,000",
      status: "Delivered on Feb 23, 2024",
      items: [
        {
          name: "Haute Couture",
          category: "Women's wear",
          size: "Medium",
          price: "₦12,000",
          imageUrl: "../../assets/women-cloth.svg",
        },
      ],
    },
  ];

  return (
    <div className={Styles.conatainer}>
      <div className={Styles.OrderHistory}>
        <h1>Order History</h1>
        <p>
          Check orders history, status of recent orders, and get to re-order the
          same product
        </p>
        {orders.map((order) => (
          <div key={order.id} className={Styles.order}>
            <div className={Styles.orderHeader}>
              <span>Order Number #{order.id}</span>
              <span>Date Placed {order.date}</span>
              <span>Total Amount {order.amount}</span>
            </div>
            {order.items.map((item) => (
              <div key={item.name} className={Styles.orderItem}>
                <img src={item.imageUrl} alt={item.name} />
                <div className={Styles.ItemDetails}>
                  <h3>{item.name}</h3>
                  <p>{item.category}</p>
                  <p>{item.size}</p>
                  <p>{item.price}</p>
                  <p>{order.status}</p>
                  <button>RE-ORDER</button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default OrderHistory;

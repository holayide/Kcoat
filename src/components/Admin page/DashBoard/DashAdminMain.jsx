import customerImg from "../../ShopAssets/Admin assets/customer.svg";
import revenueImg from "../../ShopAssets/Admin assets/Total_revenue.svg";
import productImg from "../../ShopAssets/Admin assets/Total_products.svg";
import orderImg from "../../ShopAssets/Admin assets/Total_orders.svg";
import "./DashAdminMain.css";
import AdminHeader from "../Admin Header/AdminHeader";
import { DashBoxes } from "./Dashboxes";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function DashAdminMain() {
  const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Jun",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Jul",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Aug",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Sep",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="admin_main">
      <div className="brand_header">
        <AdminHeader />
      </div>
      {/* brand header */}
      <div className="admin_dashboard_header">
        <h2>Welcome back, Admin</h2>
        <div className="admin_dashboard">
          {/* boxes */}
          <div className="total_transactions">
            <DashBoxes totalImg={customerImg} totalnum={127}>
              Total Customers
            </DashBoxes>
            <DashBoxes totalImg={revenueImg} totalnum={500000}>
              Total Revenue
            </DashBoxes>
            <DashBoxes totalImg={productImg} totalnum={1200}>
              Total Products
            </DashBoxes>
            <DashBoxes totalImg={orderImg} totalnum={120}>
              Total Orders
            </DashBoxes>
          </div>

          {/* barcharts */}
          <div className="sales_activity">
            <div className="admin_sales">
              <h3>Sales Activity</h3>
              <div className="sales_year">
                <div className="this_year">
                  <div></div>
                  <p>This Year Sales</p>
                </div>
                <div className="last_year">
                  <div></div>
                  <p>Last Year Sales</p>
                </div>
              </div>
            </div>

            {/* the chart */}
            <div className="barchart">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,

                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="pv"
                    fill="#3E6BE0"
                    activeBar={<Rectangle fill="pink" stroke="blue" />}
                  />
                  <Bar
                    dataKey="uv"
                    fill="#E0E0E0"
                    activeBar={<Rectangle fill="gold" stroke="purple" />}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* END OF BARCHART  */}
        </div>

        <div className="orders">
          <div className="recent_orders">
            <h3>Recent Orders</h3>
            <div className="order_table">
              {/* change table */}
              <div className="recent_orders_header items">
                <div>Product</div>
                <div>Sales</div>
                <div>Sold Items</div>
                <div>Stocks</div>
              </div>

              <div className="recent_item_1 items">
                <div>African Floral Dress</div>
                <div>₦ 500,000</div>
                <div>14</div>
                <div>50</div>
              </div>

              <div className="recent_item_2 items">
                <div>Kaftan wear for men</div>
                <div>₦ 200,000</div>
                <div>20</div>
                <div>50</div>
              </div>

              <div className="recent_item_3 items">
                <div>Jill Sander Earrings</div>
                <div>₦ 100,000</div>
                <div>15</div>
                <div>50</div>
              </div>

              <div className="recent_item_3 items">
                <div>Eyeliner</div>
                <div>₦ 100,000</div>
                <div>21</div>
                <div>50</div>
              </div>
            </div>
          </div>

          <div className="top_selling_products">
            <h3>Top Selling Product</h3>
            <div className="top_selling_table items">
              <div className="top_selling_header items">
                <div>Names</div>
                <div>Sales</div>
              </div>

              <div className="top_selling_item_1 items">
                <div>African Floral Dress</div>
                <div>₦ 500,000</div>
              </div>

              <div className="top_selling_item_2 items">
                <div>Kaftan wear for men</div>
                <div>₦ 200,000</div>
              </div>

              <div className="top_selling_item_3 items">
                <div>Jill Sander Earrings</div>
                <div>₦ 100,000</div>
              </div>

              <div className="top_selling_item_4 items">
                <div>Eyeliner</div>
                <div>₦ 100,000</div>
              </div>
              {/* end of items */}
            </div>
          </div>

          {/* end */}
        </div>
      </div>
    </div>
  );
}

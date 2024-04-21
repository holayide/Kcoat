import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ShopPage from "./pages/ShopPage";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";
import Help from "./pages/Help";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import ProductDetails from "./components/Shops/ProductDetails";
import womenbanner from "./components/ShopAssets/women_banner.png";
import menbanner from "./components/ShopAssets/men_banner.png";
import jewerybanner from "./components/ShopAssets/jewery_banner.png";
import beautybanner from "./components/ShopAssets/beauty_banner.png";
import ProfileDetails from "./pages/ProfileDetails";
import Payment from "./pages/Payment";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import AdminOrders from "./components/Admin page/Admin_orders/AdminOrders";
import WishList from "./pages/WishList";
import ProductInventory from "./components/Admin page/Product inventory/ProductInventory";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminCustomer from "./components/Admin page/DashBoard/AdminCustomer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/women"
            element={<ShopPage banner={womenbanner} category="women" />}
          />
          <Route
            path="/men"
            element={<ShopPage banner={menbanner} category="men" />}
          />
          <Route
            path="/accessories"
            element={<ShopPage banner={jewerybanner} category="accessories" />}
          />
          <Route
            path="/lip"
            element={<ShopPage banner={beautybanner} category="lip" />}
          />
          <Route path="/product" element={<ProductDetails />}>
            <Route path=":productId" element={<ProductDetails />} />
          </Route>
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/account" element={<Account />} />
          <Route path="/register" element={<Register />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/profile" element={<ProfileDetails />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/customerorder" element={<AdminOrders />} />
          <Route path="/productInventory" element={<ProductInventory />} />
          <Route path="/admincustomerpage" element={<AdminCustomer />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" theme="colored" />
    </>
  );
}

export default App;

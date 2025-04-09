import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ShopPage from "./pages/ShopPage";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";
import Help from "./pages/Help";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import womenbanner from "./components/ShopAssets/women_banner.png";
import menbanner from "./components/ShopAssets/men_banner.png";
import jewerybanner from "./components/ShopAssets/jewery_banner.png";
import beautybanner from "./components/ShopAssets/beauty_banner.png";
import UserProfile from "./components/ProfileRequirement/UserProfile";
import Address from "./components/ProfileRequirement/Address";
import Order from "./components/ProfileRequirement/Order";
import General from "./components/ProfileRequirement/General";
import Payment from "./pages/Payment";
import Register from "./pages/Register";
import AdminOrders from "./components/Admin page/Admin_orders/AdminOrders";
import WishList from "./pages/WishList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLogin from "./components/Admin page/Admin Login/AdminLogin";
import AddProduct from "./components/Admin page/Add Product/AddProduct";
import { lazy, Suspense } from "react";

const ProductDetails = lazy(() => import("./components/Shops/ProductDetails"));
const ProfileDetails = lazy(() => import("./pages/ProfileDetails"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const AdminCustomer = lazy(() =>
  import("./components/Admin page/DashBoard/AdminCustomer")
);
const ProductInventory = lazy(() =>
  import("./components/Admin page/Product inventory/ProductInventory")
);

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading page...</div>}>
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
              element={
                <ShopPage banner={jewerybanner} category="accessories" />
              }
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
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/customerorder" element={<AdminOrders />} />
            <Route path="/productInventory" element={<ProductInventory />} />
            <Route path="/addProduct" element={<AddProduct />} />
            <Route path="/admincustomerpage" element={<AdminCustomer />} />
            <Route path="/account" element={<Account />} />
            <Route path="/register" element={<Register />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/profile" element={<ProfileDetails />} />
            <Route path="/UserProfile" element={<UserProfile />} />
            <Route path="/Order" element={<Order />} />
            <Route path="/Address" element={<Address />} />
            <Route path="/General" element={<General />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer position="top-center" theme="colored" />
      </Suspense>
    </>
  );
}

export default App;

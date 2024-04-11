import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ShopPage from "./pages/ShopPage";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";
import Help from "./pages/Help";
import Account from "./pages/Account";
import Cart from "./components/Carts/Cart";
import ProductDetails from "./components/Shops/ProductDetails";
import womenbanner from "./components/ShopAssets/women_banner.png";
import menbanner from "./components/ShopAssets/men_banner.png";
import jewerybanner from "./components/ShopAssets/jewery_banner.png";
import beautybanner from "./components/ShopAssets/beauty_banner.png";

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
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

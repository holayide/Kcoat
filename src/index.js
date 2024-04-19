import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ShopContextProvider from "./Context/ShopContext";
import FavoriteContextProvider from "./Context/WishContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FavoriteContextProvider>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </FavoriteContextProvider>
  </React.StrictMode>
);

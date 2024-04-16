import React, { createContext, useEffect, useState } from "react";
import datas from "../utilities/datas";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (const data of datas) {
    cart[data.id] = 0;
  }
  return cart;
};

// parsing local storage
let initialCart = getDefaultCart();
try {
  const storedCart = JSON.parse(localStorage.getItem("cartItems"));
  if (storedCart) {
    initialCart = storedCart;
  }
} catch (error) {
  console.error("Error parsing cart from local storage:", error);
}

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(initialCart);

  // local storage implementation
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = datas.find((product) => product.id === Number(item));
        totalAmount += itemInfo ? itemInfo.price * cartItems[item] : 0;
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    datas,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartItems,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

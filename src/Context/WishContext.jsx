import React, { createContext, useEffect, useState } from "react";
import datas from "../utilities/datas";

export const FavoriteContext = createContext(null);

const getDefaultFavourite = () => {
  let favourite = {};
  for (const data of datas) {
    favourite[data.id] = 0;
  }
  return favourite;
};

// parse
let initialFavorite = getDefaultFavourite();
try {
  const storedFavorite = JSON.parse(localStorage.getItem("favoriteItems"));
  if (storedFavorite) {
    initialFavorite = storedFavorite;
  }
} catch (error) {
  console.error("Error parsing favourite from local storage:", error);
}

const FavoriteContextProvider = (props) => {
  const [favoriteItems, setFavoriteItems] = useState(initialFavorite);

  // store
  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  const addToFavorites = (itemId) => {
    setFavoriteItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(favoriteItems);
  };

  const removeFromFavorites = (itemId) => {
    setFavoriteItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = {
    datas,
    favoriteItems,
    addToFavorites,
    removeFromFavorites,
  };

  return (
    <FavoriteContext.Provider value={contextValue}>
      {props.children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;

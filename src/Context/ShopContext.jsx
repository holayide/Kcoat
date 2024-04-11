import React, { createContext } from "react";
import datas from "../utilities/datas";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { datas };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

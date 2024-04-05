import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [selectCity, setSelectCity] = useState("Ankara");

  return (
    <GlobalContext.Provider value={{ selectCity, setSelectCity }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

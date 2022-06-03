import React, { createContext, useState, useContext } from "react";
// import api

export const UserContext = createContext();

export function UserProvider ({ children }) {
  const [userData, setUserdata] = useState({});

  return (
    <UserContext.Provider value={{ userData, setUserdata }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUserInfo() {
  const context = useContext(UserContext);
  // console.log("context", context);
  return context;
};

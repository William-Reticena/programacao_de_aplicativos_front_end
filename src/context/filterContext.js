import React, { createContext, useState, useContext } from "react";
// import api

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [filter, setFilter] = useState(2);

  return (
    <FilterContext.Provider value={[filter, setFilter]}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  return context;
}

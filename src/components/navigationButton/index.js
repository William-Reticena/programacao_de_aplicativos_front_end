import React from "react";
import { RRDLink } from "./style";

export function NavigationButton ({ children, to }) {
  return (
    <RRDLink to={to}>
      {children}
    </RRDLink>
  );
};

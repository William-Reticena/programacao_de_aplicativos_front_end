import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, SignIn } from "../pages";
import { HOME, LOGIN } from "./routes";

export function AppRoutes () {
  return (
    <Routes>
      <Route exact path={HOME} element={<Home />} />
      <Route path={LOGIN} element={<SignIn />} />
    </Routes>
  );
};

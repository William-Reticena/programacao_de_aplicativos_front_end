import React from "react";
import { UserProvider } from "../context/userContext";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Register, SignIn, Applicant, Inscricao } from "../pages";
import {
  ADMIN,
  LOGIN,
  REGISTER,
  STUDENT_HOME,
  TEACHER_HOME,
  APPLICANT,
  INSCRICAO,
} from "./routes";
import { ProtectedRoutes } from "./protectedRoutes";
import { FilterProvider } from "../context/filterContext";

export function AppRoutes() {
  const location = useLocation();

  if (location.pathname === "/") return <Navigate to={LOGIN} />;

  return (
    <UserProvider>
      <FilterProvider>
        <Routes>
          <Route path={ADMIN} element={<ProtectedRoutes />} />
          <Route path={LOGIN} element={<SignIn />} />
          <Route path={REGISTER} element={<Register />} />
          <Route path={STUDENT_HOME} element={<ProtectedRoutes />} />
          <Route path={TEACHER_HOME} element={<ProtectedRoutes />} />
          <Route path={APPLICANT} element={<Applicant />} />
          <Route path={INSCRICAO} element={<Inscricao />} />
        </Routes>
      </FilterProvider>
    </UserProvider>
  );
}

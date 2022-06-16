import React from "react";
import { UserProvider } from "../context/userContext";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import {
  Admin,
  Register,
  SignIn,
  StudentHome,
  TeacherHome,
  Applicant,
  Inscricao,
} from "../pages";
import {
  ADMIN,
  LOGIN,
  REGISTER,
  STUDENT_HOME,
  TEACHER_HOME,
  APPLICANT,
  INSCRICAO,
} from "./routes";

export function AppRoutes() {
  const location = useLocation();

  if (location.pathname === "/") return <Navigate to={LOGIN} />;

  return (
    <UserProvider>
      <Routes>
        {/* <Route exact path={HOME} element={<Home />} /> */}
        <Route path={ADMIN} element={<Admin />} />
        <Route path={LOGIN} element={<SignIn />} />
        <Route path={REGISTER} element={<Register />} />
        <Route path={STUDENT_HOME} element={<StudentHome />} />
        <Route path={TEACHER_HOME} element={<TeacherHome />} />
        <Route path={APPLICANT} element={<Applicant />} />
        <Route path={INSCRICAO} element={<Inscricao />} />
      </Routes>
    </UserProvider>
  );
}

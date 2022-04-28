import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Admin, Projects, Register, SignIn, StudentHome, TeacherHome, Applicant } from "../pages";
import { ADMIN, LOGIN, PROJECTS, REGISTER, STUDENT_HOME, TEACHER_HOME, APPLICANT } from "./routes";

export function AppRoutes () {
  const location = useLocation();

  if (location.pathname === "/") return <Navigate to={LOGIN} />;

  return (
    <Routes>
      {/* <Route exact path={HOME} element={<Home />} /> */}
      <Route path={ADMIN} element={<Admin />} />
      <Route path={LOGIN} element={<SignIn />} />
      <Route path={REGISTER} element={<Register />} />
      <Route path={STUDENT_HOME} element={<StudentHome />} />
      <Route path={TEACHER_HOME} element={<TeacherHome />} />
      <Route path={PROJECTS} element={<Projects />} />
      <Route path={APPLICANT} element={<Applicant />} />
    </Routes>
  );
};

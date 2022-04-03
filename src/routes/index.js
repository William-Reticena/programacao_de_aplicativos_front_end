import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Projects, SignIn, StudentHome, TeacherHome } from "../pages";
import { LOGIN, PROJECTS, STUDENT_HOME, TEACHER_HOME } from "./routes";

export function AppRoutes () {
  const location = useLocation();

  if (location.pathname === "/") return <Navigate to={LOGIN} />;

  return (
    <Routes>
      {/* <Route exact path={HOME} element={<Home />} /> */}
      <Route path={LOGIN} element={<SignIn />} />
      <Route path={STUDENT_HOME} element={<StudentHome />} />
      <Route path={TEACHER_HOME} element={<TeacherHome />} />
      <Route path={PROJECTS} element={<Projects />} />
    </Routes>
  );
};

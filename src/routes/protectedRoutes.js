import React from "react";
import { useUserInfo } from "../context/userContext";
import { Admin, SignIn, StudentHome, TeacherHome } from "../pages";

export const ProtectedRoutes = () => {
  const [userData] = useUserInfo();

  if (userData.type === "student") return <StudentHome />;
  else if (userData.type === "teacher") return <TeacherHome />;
  else if (userData.type === "admin") return <Admin />;
  else return <SignIn />
};

// if (userData.type === "student")
//   return <Route path={STUDENT_HOME} element={<StudentHome />} />;

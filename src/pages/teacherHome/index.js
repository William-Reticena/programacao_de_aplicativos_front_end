import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { Filter, Header, TeacherCard, ProfileTeacher } from "../../components";
import api from "../../services/api";
import { UserProvider, useUserInfo } from "../../context/userContext";
import { LOGIN } from "../../routes/routes";

export function TeacherHome() {
  const [projectCards, setProjectsCard] = useState([]);
  const [userData, setUserdata] = useUserInfo();
  const navigate = useNavigate();

  const id = localStorage.getItem("id");
  useEffect(() => {
    const fetch = async () => {
      const { data } = await api.post("/ProfessorShow", {
        id,
      });
      console.log("dados estudante", data);
      setUserdata((prevState) => ({
        ...prevState,
        ...data,
      }));
    };
    fetch();
  }, [setUserdata, id]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await api.post("/ProjectProfessor", {
        id: localStorage.getItem("id"),
      });
      // console.log(data);
      setProjectsCard(data);
    };
    fetch();
  }, [setProjectsCard]);

  // console.log(userData);
  // if (userData.type !== "teacher") {
  //   return (
  //     <>
  //       <Navigate to={LOGIN} />
  //     </>
  //   );
  // }

  return (
    <>
      <Header add />

      <Grid container sx={{ marginTop: "80px" }}>
        <Grid item xs={2}></Grid>

        <Grid item xs={8}>
          <div style={{ textAlign: "center", margin: "16px" }}>
            <Typography variant="h1" sx={{ fontSize: "36px" }}>
              MEUS PROJETOS
            </Typography>
          </div>

          {projectCards.map((infos) => {
            console.log(infos);
            return <TeacherCard key={infos.id} infos={infos} />;
          })}
        </Grid>

        <Grid item xs={2}>
          <UserProvider>
            <ProfileTeacher userData={userData} typeUser={userData.type} />
          </UserProvider>
        </Grid>
      </Grid>
    </>
  );
}

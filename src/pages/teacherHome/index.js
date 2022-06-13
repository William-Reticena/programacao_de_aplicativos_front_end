import React, { useEffect, useState } from "react";
import { Filter, Header, TeacherCard, ProfileTeacher } from "../../components";
import { Grid, Typography } from "@mui/material";
import api from "../../services/api";
import { UserProvider, useUserInfo } from "../../context/userContext";

export function TeacherHome() {
  const [projectCards, setProjectsCard] = useState([]);
  const { userData, setUserdata } = useUserInfo();

  useEffect(() => {
    const fetch = async () => {
      const { data } = await api.post("/ProfessorShow", { id: 1 });
      console.log("dados estudante", data);
      setUserdata(data);
    };
    fetch();
  }, [setUserdata]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await api.get("/ProjectIndex");
      // console.log(data);
      setProjectsCard(data);
    };
    fetch();
  }, [setProjectsCard]);

  return (
    <>
      <Header add />

      <Grid container sx={{ marginTop: "80px" }}>
        <Grid item xs={2}>
          <Filter />
        </Grid>

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
            <ProfileTeacher userData={userData} />
          </UserProvider>
        </Grid>
      </Grid>
    </>
  );
}

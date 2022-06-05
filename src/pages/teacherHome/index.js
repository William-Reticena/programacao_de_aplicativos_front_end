import React, { useEffect, useState } from "react";
import { Filter, Header, TeacherCard, Profile } from "../../components";
import { Grid, Typography} from "@mui/material";
import api from "../../services/api";

export function TeacherHome () {
  const [projectCards, setProjectsCard] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await api.get("/ProjectIndex");
      // console.log(data);
      setProjectsCard(data);
    };
    fetch();
  }, [setProjectsCard])

  return (
    <>
      <Header add />

      <Grid container sx={{ marginTop: "80px" }}>
        <Grid item xs={2}>
          <Filter />
        </Grid>

        <Grid item xs={8}>
          <div style={{ textAlign: "center", margin: "16px" }}>
            <Typography
              variant="h1"
              sx={{ fontSize: "36px" }}
            >
              DESTAQUES
            </Typography>
          </div>

          {projectCards.map((infos) => {
            console.log(infos)
            return (
              <TeacherCard key={infos.id} infos={infos} />
            )
          })}
        </Grid>

        <Grid item xs={2}>
          <Profile />
        </Grid>
      </Grid>
    </>
  );
};
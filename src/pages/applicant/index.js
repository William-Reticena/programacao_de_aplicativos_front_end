import React, { useEffect, useState } from "react";
import {
  Header,
  InformationsCardApplicant,
  InformationsCardProjects,
} from "../../components";
import { Box, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import api from "../../services/api";

export function Applicant() {
  const [studentCards, setStudentCards] = useState([]);
  const [projectCard, setProjectCard] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fecth = async () => {
      const { data } = await api.post("/IndexStudents", { id });
      setStudentCards(data);
    };
    fecth();
  }, [id]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await api.post("/ProjectShow", { id });
      setProjectCard(data);
      // console.log("projetos", projectCard);
    };
    fetch();
  }, [setProjectCard, id]);

  return (
    <>
      <Header title=" " />

      <Grid container sx={{ marginTop: "80px" }}>
        <Grid item xs={2}></Grid>

        <Grid item xs={8}>
          <InformationsCardProjects projectCard={projectCard} />

          <Box
            sx={{
              display: "flex",
              marginTop: "16px",
              justifyContent: "center",
            }}
          >
            <Typography variant="h2" sx={{ fontSize: "24px" }}>
              CANDIDATOS
            </Typography>
          </Box>

          {studentCards.map((infos) => (
            <InformationsCardApplicant key={infos.id} studentInfo={infos} />
          ))}
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </>
  );
}

import React from "react";
import {
  Header,
  InformationsCardApplicant,
  InformationsCardProjects,
} from "../../components";
import { Box, Grid, Typography } from "@mui/material";

export function Applicant() {
  return (
    <>
      <Header title=" " />

      <Grid container sx={{ marginTop: "80px" }}>
        <Grid item xs={2}></Grid>

        <Grid item xs={8}>
          {[0].map((infos) => (
            <InformationsCardProjects key={infos} />
          ))}

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

          {[0, 1, 2, 3, 4, 5].map((infos) => (
            <InformationsCardApplicant key={infos} />
          ))}
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </>
  );
}

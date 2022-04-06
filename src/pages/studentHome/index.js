import React from "react";
import { Header, InformationsCard } from "../../components";
import { Grid, Typography, } from "@mui/material";

export function StudentHome () {
  return (
    <>
      <Header />

      <Grid container sx={{ marginTop: "80px" }}>

        <Grid item xs={2}>
          <div style={{ height: "200px", width: "150px", background: "red" }}></div>
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

          {[0, 1, 2, 3, 4, 5].map((infos) => (
            <InformationsCard key={infos} />
          ))}

        </Grid>

        <Grid item xs={2}>
          <div style={{ height: "200px", width: "150px", background: "red" }}></div>
        </Grid>
      </Grid>
    </>
  );
};

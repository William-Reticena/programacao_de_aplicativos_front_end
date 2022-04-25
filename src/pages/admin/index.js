import React from "react";
import { Header, InformationsCardAdm } from "../../components";
import {
  Grid,
  Typography,
} from "@mui/material";

export function Admin () {
  return (
    <>
      <Header title="Controle de Acesso" />
      <Grid container sx={{ marginTop: "80px" }}>
        <Grid item xs={2}></Grid>
        <Grid item xs={"8"}>
          <div style={{ textAlign: "center", margin: "16px" }}>
            <Typography
              variant="h1"
              sx={{ fontSize: "36px" }}
            >
              PROFESSORES
            </Typography>
          </div>

          {[0, 1, 2, 3, 4, 5].map((infos) => (
            <InformationsCardAdm key={infos} />
          ))}
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </>
  );
};

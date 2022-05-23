import React from "react";
import { Header, InformationsCardInscricao } from "../../components";
import {
  Grid,
} from "@mui/material";

export function Inscricao () {
  return (
    <>
      <Header title="Minhas Inscrições"/>
      
      <Grid container sx={{ marginTop: "80px" }}>
        <Grid item xs={2}></Grid>

        <Grid item xs={8}>
          {[0, 1, 2, 3, 4, 5].map((infos) => (
            <InformationsCardInscricao key={infos} />
          ))}
        </Grid>

        <Grid item xs={2}></Grid>
      </Grid> 
    </>
  );
};

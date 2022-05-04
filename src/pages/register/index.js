import React from "react";
import { ProfileCard } from "../../components";
import { Header } from "../../components";
import { Grid } from "@mui/material";

export function Register () {
  return (
    <>
      <Header title="CADASTRO" />

      <Grid container sx={{ marginTop: "96px" }}>
        <Grid item xs={1} />

        <Grid
          item xs={10}
          sx={{ display: "flex", justifyContent: "center"}}
        >
          <ProfileCard register />
        </Grid>

        <Grid item xs={1} />
      </Grid>
    </>
  );
};

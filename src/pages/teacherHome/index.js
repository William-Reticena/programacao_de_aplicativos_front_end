import React from "react";
import { Filter, Header, TeacherCard, Profile } from "../../components";
import { Grid, Typography} from "@mui/material";

export function TeacherHome () {
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

          {[0, 1, 2, 3, 4, 5].map((infos) => (
            <TeacherCard key={infos} />
          ))}
        </Grid>

        <Grid item xs={2}>
          <Profile />
        </Grid>
      </Grid>
    </>
  );
};
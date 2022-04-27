import React from "react";
import { Filter, Header, InformationsCard, Profile } from "../../components";
import { BoxTypo, GridContainer } from "./style";
import {
  Grid,
  Typography,
} from "@mui/material";

export function StudentHome () {
  return (
    <>
      <Header />

      <GridContainer>
        <Grid item xs={2}>
          <Filter />
        </Grid>

        <Grid item xs={8}>
          <BoxTypo>
            <Typography
              variant="h1"
              sx={{ fontSize: "36px" }}
            >
              DESTAQUES
            </Typography>
          </BoxTypo>

          {[0, 1, 2, 3, 4, 5].map((infos) => (
            <InformationsCard key={infos} />
          ))}
        </Grid>

        <Grid item xs={2}>
          <Profile />
        </Grid>
      </GridContainer>
    </>
  );
};

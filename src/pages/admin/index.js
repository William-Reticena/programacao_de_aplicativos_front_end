import React, { useEffect } from "react";
import { Header, InformationsCardAdm } from "../../components";
import { BoxTypo, GridContainer } from "./style";
import { Grid, Typography } from "@mui/material";
import api from "../../services/api";

export function Admin() {
  useEffect(() => {
    const fetch = async () => {
      const { data } = await api.get("/ProfessorIndex");

      // console.log(data);
    };
    fetch();
  });

  return (
    <>
      <Header title="Controle de Acesso" />
      <GridContainer>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <BoxTypo style={{ textAlign: "center", margin: "16px" }}>
            <Typography variant="h1" sx={{ fontSize: "36px" }}>
              PROFESSORES
            </Typography>
          </BoxTypo>

          {[0, 1, 2, 3, 4, 5].map((infos) => (
            <InformationsCardAdm key={infos} />
          ))}
        </Grid>
        <Grid item xs={2} />
      </GridContainer>
    </>
  );
}

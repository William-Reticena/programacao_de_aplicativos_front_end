import React, { useEffect, useState } from "react";
import { Header, InformationsCardInscricao } from "../../components";
import { Grid } from "@mui/material";
import api from "../../services/api";

export function Inscricao() {
  const [infosCards, setInfosCard] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await api.get("/ProjectIndex");
      console.log(data);
      setInfosCard(data);
    };
    fetch();
  }, [setInfosCard]);
  return (
    <>
      <Header title="Minhas Inscrições" />

      <Grid container sx={{ marginTop: "80px" }}>
        <Grid item xs={2}></Grid>

        <Grid item xs={8}>
          {infosCards.map((infos) => (
            <InformationsCardInscricao key={infos.id} data={infos}/>
          ))}
        </Grid>

        <Grid item xs={2}></Grid>
      </Grid>
    </>
  );
}

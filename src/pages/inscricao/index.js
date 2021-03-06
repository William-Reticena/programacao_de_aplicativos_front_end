import React, { useEffect, useState } from "react";
import { Header, InformationsCardInscricao } from "../../components";
import { Grid } from "@mui/material";
import api from "../../services/api";
import { useUserInfo } from "../../context/userContext";

export function Inscricao() {
  const [infosCards, setInfosCard] = useState([]);
  const [userData] = useUserInfo();

  console.log("id", userData.id);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await api.post("/CandidateIndex", { id: userData.id });
      console.log("data", data);
      setInfosCard(data);
    };
    fetch();
  }, [setInfosCard, userData.id]);
  return (
    <>
      <Header title="Minhas Inscrições" />

      <Grid container sx={{ marginTop: "80px" }}>
        <Grid item xs={2}></Grid>

        <Grid item xs={8}>
          {infosCards.map((infos, index) => {
            console.log("infos", infos);
            return (
              <InformationsCardInscricao
                key={infos.id}
                data={infos}
                index={index}
              />
            );
          })}
        </Grid>

        <Grid item xs={2}></Grid>
      </Grid>
    </>
  );
}

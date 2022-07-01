import React, { useEffect, useState } from "react";
import { useUserInfo } from "../../context/userContext";
import { Filter, Header, InformationsCard, Profile } from "../../components";
import { BoxTypo, GridContainer } from "./style";
import { UserProvider } from "../../context/userContext";
import api from "../../services/api";
import { Grid, Typography } from "@mui/material";
import { useFilter } from "../../context/filterContext";

export function StudentHome() {
  const [infosCards, setInfosCard] = useState([]);
  const [userData, setUserdata] = useUserInfo();
  const [filter] = useFilter();

  const id = localStorage.getItem("id");
  useEffect(() => {
    const fetch = async () => {
      const { data } = await api.post("/StudentShow", {
        id,
      });
      console.log("dados estudante", data);
      setUserdata((prevState) => ({
        ...prevState,
        ...data,
      }));
    };
    fetch();
  }, [setUserdata, id, userData.id]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await api.post("/ProjectIndex", { flag: filter });
      console.log(data);
      setInfosCard(data);
    };
    fetch();
  }, [filter]);

  return (
    <>
      <Header />

      <GridContainer>
        <Grid item xs={2}>
          <Filter />
        </Grid>

        <Grid item xs={8}>
          <BoxTypo>
            <Typography variant="h1" sx={{ fontSize: "36px" }}>
              DESTAQUES
            </Typography>
          </BoxTypo>

          {infosCards.map((infos) => (
            <InformationsCard key={infos.id} data={infos} />
          ))}
        </Grid>

        <Grid item xs={2}>
          <UserProvider>
            <Profile userData={userData} typeUser={userData.type} />
          </UserProvider>
        </Grid>
      </GridContainer>
    </>
  );
}

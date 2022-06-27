import React, { useEffect, useState } from "react";
import { useUserInfo } from "../../context/userContext";
import { Filter, Header, InformationsCard, Profile } from "../../components";
import { BoxTypo, GridContainer } from "./style";
import { UserProvider } from "../../context/userContext";
import api from "../../services/api";
import { Grid, Typography } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { LOGIN } from "../../routes/routes";

export function StudentHome() {
  const [infosCards, setInfosCard] = useState([]);
  const [userData, setUserdata] = useUserInfo();
  const navigate = useNavigate();
  const id = localStorage.getItem("id");

  useEffect(() => {
    const fetch = async () => {
      //usar no contexto um id para poder passar aqui no fetch
      const { data } = await api.post("/StudentShow", {
        id,
      });
      // console.log("dados estudante", data);
      setUserdata((prevState) => ({
        ...prevState,
        ...data,
      }));
      // console.log("dados estudante", userData); //testes
    };
    fetch();
  }, [setUserdata, id]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await api.get("/ProjectIndex");
      // console.log(data);
      setInfosCard(data);
    };
    fetch();
  }, []);

  // console.log(userData);
  // if (userData.type !== "student") {
  //   return (
  //     <>
  //       <Navigate to={LOGIN} />
  //     </>
  //   );
  // }

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

import React, { useEffect, useState } from "react";
import { useUserInfo } from "../../context/userContext";
import { Filter, Header, InformationsCard, Profile } from "../../components";
import { BoxTypo, GridContainer } from "./style";
import { UserProvider } from "../../context/userContext";
import api from "../../services/api";
import {
  Grid,
  Typography,
} from "@mui/material";

export function StudentHome () {
  const [infosCards, setInfosCard] = useState([]);
  const { userData, setUserdata } = useUserInfo();

  useEffect(() => {
    const fakeData = {
      fullName: "Paula",
      course: "BCC",
      collegePeriod: 6,
      ra: "4568703",
      shift: "integral (T/N)",
      city: "Campo Mourão",
      cellphone: "(00) 00000-0000",
      email: "paula123@gmail.com",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }

    setUserdata(fakeData);
    // console.log(userData);
  }, [setUserdata]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await api.get('/StudentIndex');
      console.log(data);
      setUserdata(data[2]);
    };
    fetch();
  }, [setUserdata]);

  useEffect(() => {
    // RECEBER A REQUISIÇÃO AQUI, TEM Q SER UM ARRAY DE OBJETOS
    const fakeData = [
      {
        id: 1,
        teacherName: "Maria Tereza",
        projectName: "Projeto 1",
        course: "BCC",
        collegePeriod: 5,
        amountHours: 30,
        shift: "manha",
        schedules: "7:30 as 13:30",
        numberVacant: 4,
        email: "tereza123@gmail.com",
        description: "Uma vaga aí 1",
        requirements: "Não necessário",
      },
      {
        id: 2,
        teacherName: "João Henrique",
        projectName: "Projeto 2",
        course: "Engenharia Química",
        collegePeriod: 4,
        amountHours: 35,
        shift: "tarde",
        schedules: "13:00 as 16:00",
        numberVacant: 8,
        email: "joaohenrique123@outlook.com",
        description: "Não tem",
        requirements: "Ser bom em química",
      }
    ];

    setInfosCard(fakeData);
    // console.log("user", userInfo);
  }, []);

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

          {infosCards.map((infos) => (
            <InformationsCard
              key={infos.id}
              data={infos}
            />
          ))}
        </Grid>

        <Grid item xs={2}>
          <UserProvider>
            <Profile userData={userData} />
          </UserProvider>
        </Grid>
      </GridContainer>
    </>
  );
};

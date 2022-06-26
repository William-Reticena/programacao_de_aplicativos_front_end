import React, { useState } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Card,
  Container,
  FormControl,
  Paper,
  RadioGroup,
  Span,
  TextField,
} from "./style";
import { CardMedia, FormControlLabel, Radio } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUserInfo } from "../../context/userContext";
import { Logo } from "../../images";
import { NavigationButton } from "../../components";
import { ChalkboardUser, GraduationCap } from "../../icons";
import { REGISTER, STUDENT_HOME, TEACHER_HOME } from "../../routes/routes";
import api from "../../services/api";
// import api from "../../services/api";

const LabelWrapper = ({ isSelected, user }) => (
  <Container
    sx={{
      background: isSelected ? "#90caf9" : "inherit",
    }}
  >
    {user === "Aluno" ? (
      <GraduationCap size="100px" />
    ) : (
      <ChalkboardUser size="100px" />
    )}
    <Span>{user}</Span>
  </Container>
);

export function SignIn() {
  const [selectedValue, setSelectedValue] = useState("student");
  const [radioStudent, setRadioStudent] = useState(true);
  const [radioTeacher, setRadioTeacher] = useState(false);
  // const [typeUser, setTypeUser] = useState();
  const [userData, setUserdata] = useUserInfo();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      type: "student",
      email: "",
      password: "",
    },
    // onSubmit: async (values) => {
    //   try {
    //     api.post("/Admin/login", {
    //       username: values.email,
    //       password: values.password,
    //     });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    onSubmit: (values) => {
      if (values.type === "student") {
        const fetch = async () => {
          // const { data } = await api.post("/Student/login", {
          //   username: values.email,
          //   password: values.password,
          // });

          // const { id, token } = data;

          // if (data.id) {
            setUserdata((prevState) => ({
              ...prevState,
              id: 1,
              type: values.type,
            }));
            // localStorage.setItem("token", token);
            navigate(STUDENT_HOME);
          // }
        };
        fetch();
      } else if (values.type === "teacher") {
        setUserdata((prevState) => ({
          ...prevState,
          id: 1,
          type: values.type,
        }));

        navigate(TEACHER_HOME);
      }
      //only just tests
      // const typeTest = "teacher";

      // localStorage.setItem("type", typeTest);
      // localStorage.setItem("id", 1);

      // // setTypeUser(userData.type)

      // console.log(userData);
    },
  });

  const handleChange = (event) => {
    setSelectedValue(event.target.value);

    setRadioStudent((prevState) => !prevState);
    setRadioTeacher((prevState) => !prevState);
  };

  return (
    <Container
      sx={{
        height: "100vh",
      }}
    >
      <Paper elevation={5}>
        <Box>
          <Card elevation={0}>
            <CardMedia component="img" image={Logo} />
          </Card>
        </Box>

        <Box
          sx={{
            padding: "0 0 24px 0",
          }}
        >
          <form onSubmit={formik.handleSubmit}>
            <FormControl>
              <RadioGroup onChange={formik.handleChange}>
                <FormControlLabel
                  control={
                    <Radio
                      name="type"
                      checked={selectedValue === "student"}
                      onChange={handleChange}
                      value="student"
                      sx={{ display: "none" }}
                    />
                  }
                  label={
                    <LabelWrapper user="Aluno" isSelected={radioStudent} />
                  }
                />

                <FormControlLabel
                  control={
                    <Radio
                      name="type"
                      checked={selectedValue === "teacher"}
                      onChange={handleChange}
                      value="teacher"
                      sx={{ display: "none" }}
                    />
                  }
                  label={
                    <LabelWrapper user="Professor" isSelected={radioTeacher} />
                  }
                />
              </RadioGroup>

              <TextField
                label="E-mail"
                name="email"
                value={formik.values.ra}
                onChange={formik.handleChange}
              />

              <TextField
                label="Senha"
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />

              <Button type="submit" size="large" variant="contained">
                Login
              </Button>

              <NavigationButton to={REGISTER}>
                <Button size="large">Cadastre-se</Button>
              </NavigationButton>
            </FormControl>
          </form>
        </Box>
      </Paper>
    </Container>
  );
}

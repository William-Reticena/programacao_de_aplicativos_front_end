import React, { useState } from "react";
import { useFormik } from "formik";
import { Logo } from "../../images";
import { NavigationButton } from "../../components";
import { ChalkboardUser, GraduationCap } from "../../icons";
import { REGISTER, STUDENT_HOME } from "../../routes/routes";
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

  const formik = useFormik({
    initialValues: {
      type: "student",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // SOMENTE PARA TESTES
  // useEffect(() => {
  //   setSelectedValue("student");
  //   console.log("effec", selectedValue);
  //   console.log("aluno:", radioStudent);
  //   console.log("professor:", radioTeacher);
  // }, [selectedValue, radioTeacher, radioStudent]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);

    setRadioStudent((prevState) => !prevState);
    setRadioTeacher((prevState) => !prevState);
  };

  return (
    <Container
      sx={{
        /*display: "flex", justifyContent: "center", alignItems: "center",*/ height:
          "100vh",
      }}
    >
      <Paper /*sx={{ width: "450px" }}*/ elevation={5}>
        <Box /*sx={{ justifyContent: "center", display: "flex", padding:"24px" }}*/
        >
          <Card /*sx={{ width: "300px" }}*/ elevation={0}>
            <CardMedia component="img" image={Logo} />
          </Card>
        </Box>

        <Box
          sx={{
            /*justifyContent: "center", display: "flex",*/ padding:
              "0 0 24px 0",
          }}
        >
          <form onSubmit={formik.handleSubmit}>
            <FormControl /*sx={{ padding: "16px", width: "350px" }}*/>
              <RadioGroup
                /*sx={{ flexDirection: "row", display: "flex", flexWrap: "nowrap", left: "32px", position: "relative" }}*/
                // value={formik.values.type}
                onChange={formik.handleChange}
              >
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
                  // value="student"
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
                  // value="teacher"
                />
              </RadioGroup>

              <TextField
                label="E-mail"
                name="email"
                value={formik.values.ra}
                onChange={formik.handleChange}
                // sx={{ margin: "8px" }}
              />

              <TextField
                label="Senha"
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                // sx={{ margin: "8px" }}
              />

              {/* <NavigationButton to={STUDENT_HOME}> */}
              <Button
                type="submit"
                size="large"
                variant="contained"
                // sx={{ margin: "8px", width: "calc(100% - 15px)" }}
              >
                Login
              </Button>
              {/* </NavigationButton> */}

              <NavigationButton to={REGISTER}>
                <Button
                  size="large"
                  // sx={{ margin: "8px", width: "calc(100% - 15px)" }}
                >
                  Cadastre-se
                </Button>
              </NavigationButton>
            </FormControl>
          </form>
        </Box>
      </Paper>
    </Container>
  );
}

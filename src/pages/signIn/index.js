import React, { useState } from "react";
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
import {
// Box,
// Button,
// Card,
CardMedia,
// Container,
// FormControl,
FormControlLabel,
// Paper,
Radio,
// RadioGroup,
// TextField,
} from "@mui/material";


const LabelWrapper = ({ isSelected, user }) => (
  <Container sx={{
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    // padding: "20px",
    background: isSelected ? "#90caf9" : "inherit",
    // borderRadius: "4px"
  }}>
    {user === "Aluno" ? <GraduationCap size="100px" /> : <ChalkboardUser size="100px" />}
    <Span>{user}</Span>
  </Container>
);

export function SignIn () {
  const [selectedValue, setSelectedValue] = useState("student");
  const [radioStudent, setRadioStudent] = useState(true);
  const [radioTeacher, setRadioTeacher] = useState(false);

  // SOMENTE PARA TESTES
  // useEffect(() => {
  //   setSelectedValue("student");
  //   console.log("effec", selectedValue);
  //   console.log("aluno:", radioStudent);
  //   console.log("professor:", radioTeacher);
  // }, [selectedValue, radioTeacher, radioStudent]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);

    setRadioStudent((prevState) => (!prevState));
    setRadioTeacher((prevState) => (!prevState));
  };

  return (
    <Container sx={{ /*display: "flex", justifyContent: "center", alignItems: "center",*/ height: "100vh"}}>
      <Paper /*sx={{ width: "450px" }}*/ elevation={5}>
        <Box /*sx={{ justifyContent: "center", display: "flex", padding:"24px" }}*/>
            <Card /*sx={{ width: "300px" }}*/ elevation={0}>
              <CardMedia component="img" image={Logo} />
            </Card>
        </Box>

        <Box sx={{ /*justifyContent: "center", display: "flex",*/ paddin: "0 0 24px 0" }}>
          <form>
              <FormControl /*sx={{ padding: "16px", width: "350px" }}*/>
                  <RadioGroup /*sx={{ flexDirection: "row", display: "flex", flexWrap: "nowrap", left: "32px", position: "relative" }}*/>
                      <FormControlLabel
                        control={
                          <Radio
                            checked={selectedValue === "student"}
                            onChange={handleChange}
                            value="student"
                            sx={{ display: "none" }}
                          />
                        }
                        label={<LabelWrapper user="Aluno" isSelected={radioStudent} />}
                        value="student"
                      />

                      <FormControlLabel
                        control={
                          <Radio
                            checked={selectedValue === "teacher"}
                            onChange={handleChange}
                            value="teacher"
                            sx={{ display: "none" }}
                          />
                        }
                        label={<LabelWrapper user="Professor" isSelected={radioTeacher} />}
                        value="teacher"
                      />
                  </RadioGroup>

                <TextField
                  label="RA"
                  name="RA"
                  // sx={{ margin: "8px" }}
                />

                <TextField
                  label="SENHA"
                  name="password"
                  type="password"
                  // sx={{ margin: "8px" }}
                />

                <NavigationButton to={STUDENT_HOME}>
                  <Button
                    size="large"
                    variant="contained"
                    // sx={{ margin: "8px", width: "calc(100% - 15px)" }}
                  >
                    Login
                  </Button>
                </NavigationButton>

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
};

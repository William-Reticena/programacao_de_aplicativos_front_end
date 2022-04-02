import React from "react";
import Logo from "../../images/Logo-UTFPR.jpg";
import { ChalkboardUser, GraduationCap } from "../../icons";
import {
Box,
Button,
Card,
CardMedia,
Container,
FormControl,
FormControlLabel,
Paper,
Radio,
RadioGroup,
TextField,
} from "@mui/material";


const LabelWrapper = ({ user }) => (
  <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
    {user === "Aluno" ? <GraduationCap size="120px" /> : <ChalkboardUser size="120px" />}
    <span style={{ fontSize: "24px" }}>{user}</span>
  </Container>
);

export function SignIn () {
  return (
    <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
      <Paper sx={{width: "450px"}} elevation={5}>
        <Box sx={{ justifyContent: "center", display: "flex", padding:"24px" }}>
            <Card sx={{ width: "300px" }} elevation={0}>
              <CardMedia component="img" image={Logo} />
            </Card>
        </Box>

        <Box sx={{ justifyContent: "center", display: "flex", paddingBottom: "24px" }}>
          <form>
              <FormControl sx={{ padding: "16px", width: "350px" }}>
                  <RadioGroup sx={{ flexDirection: "row", display: "flex", flexWrap: "nowrap" }}>
                      <FormControlLabel
                        control={<Radio sx={{ display: "none" }} />}
                        label={<LabelWrapper user="Aluno" />}
                        value="student"
                      />

                      <FormControlLabel
                        control={<Radio sx={{ display: "none" }} />}
                        label={<LabelWrapper user="Professor" />}
                        value="teacher"
                      />
                  </RadioGroup>

                <TextField label="RA" name="RA" sx={{ margin: "8px" }} />
                <TextField label="SENHA" name="password" type="password" sx={{ margin: "8px" }} />

                <Button size="large" variant="contained" sx={{ margin: "8px" }}>Login</Button>
                <Button size="large" sx={{ margin: "8px" }}>Cadastre-se</Button>
              </FormControl>
          </form>
        </Box>
      </Paper>
    </Container>
  );
};

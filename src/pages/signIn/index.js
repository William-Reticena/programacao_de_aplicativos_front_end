import React from "react";
import Logo from "../../images/Logo-UTFPR.jpg";
import { ChalkboardUser, GraduationCap } from "../../icons";
import { Box, Button, Card, CardMedia, Container, FormControl, FormControlLabel, FormGroup, FormLabel, IconButton, Paper, Radio, RadioGroup, TextField, Typography } from "@mui/material";


const LabelWrapper = ({ user }) => (
  <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
    {user === "Aluno" ? <GraduationCap size="120px" /> : <ChalkboardUser size="120px" />}
    <span style={{ fontSize: "24px" }}>{user}</span>
  </Container>
);

export function SignIn () {
  return (
    <Container sx={{ /*background: "gray",*/ display: "flex", justifyContent: "center" }}>
      <Paper sx={{width: "450px"}} elevation={5}>
        <Box sx={{ justifyContent: "center", /*background: "red",*/ display: "flex", padding:"24px" }}>
            <Card sx={{ width: "300px" }} elevation={0}>
              <CardMedia component="img" image={Logo} />
            </Card>
        </Box>

        <Box sx={{ justifyContent: "center", /*background: "red",*/ display: "flex", paddingBottom: "24px" }}>
          <form>
              <FormControl sx={{ /*background: "pink",*/ padding: "16px", width: "350px" }}>
                {/* <div style={{ marginLeft: "20px"}}> */}
                <FormGroup row>
                  <RadioGroup sx={{ flexDirection: "row", display: "flex" }}>
                    {/* <div style={{ display: "inline", }}> */}
                      <FormControlLabel
                        control={<Radio /*sx={{ display: "none" }}*/ />}
                        label={<LabelWrapper user="Aluno" />}
                        value="student"
                      />
                    {/* </div> */}

                    {/* <div style={{ display: "inline"}}> */}
                      <FormControlLabel
                        control={<Radio /*sx={{ display: "none" }}*/ />}
                        label={<LabelWrapper user="Professor" />}
                        value="teacher"
                        />
                    {/* </div> */}

                  </RadioGroup>
                </FormGroup>
                {/* </div> */}

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

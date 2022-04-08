import React from "react";
import { Header, InformationsCard } from "../../components";
import { Avatar, Button, FormControl, FormControlLabel, FormGroup, Grid, Paper, Typography, } from "@mui/material";
import { CheckBox } from "@mui/icons-material";

export function StudentHome () {
  return (
    <>
      <Header />

      <Grid container sx={{ marginTop: "80px" }}>

        <Grid item xs={2}>
          <Paper
              elevation={5}
              sx={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "24px", padding: "8px", position: "fixed", width: "12.5%" }}
            >
              <Typography component="span"
                sx={{ background: "#E3F2FD", diplay: "inline-flex", width: "100%", textAlign: "center", color: "#305FAC", borderRadius: "4px", marginBottom: "16px", height: "40px", lineHeight: "40px"}}
              >
                Filtros
              </Typography>
              <FormControl sx={{marginLeft: "8px"}}>
                <FormGroup>
                  <FormControlLabel
                    sx={{ margin: "5px 0px" }}
                    control={<CheckBox color="primary" name="all" />}
                    label="Todos"
                  />

                  <FormControlLabel
                    sx={{ margin: "5px 0px" }}
                    control={<CheckBox color="primary" name="paid" />}
                    label="Remunerados"
                  />

                  <FormControlLabel
                    sx={{ margin: "5px 0px" }}
                    control={<CheckBox color="primary" name="unpaid" />}
                    label="Não Remunerados"
                  />

                  <FormControlLabel
                    sx={{ margin: "5px 0px" }}
                    control={<CheckBox color="primary" name="others" />}
                    label="Outros Cursos"
                  />
                </FormGroup>
              </FormControl>
            </Paper>
        </Grid>

        <Grid item xs={8}>
          <div style={{ textAlign: "center", margin: "16px" }}>
            <Typography
              variant="h1"
              sx={{ fontSize: "36px" }}
            >
              DESTAQUES
            </Typography>
          </div>

          {[0, 1, 2, 3, 4, 5].map((infos) => (
            <InformationsCard key={infos} />
          ))}

        </Grid>

        <Grid item xs={2}>
          <Paper
            elevation={5}
            sx={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "24px", padding: "8px", position: "fixed", width: "12%" }}
          >
            <Avatar />

            <Typography>Nome e sobrenome</Typography>
            <Typography>RA</Typography>
            <Typography>Curso</Typography>
            <Button
              variant="contained"
            >Editar Perfil</Button>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

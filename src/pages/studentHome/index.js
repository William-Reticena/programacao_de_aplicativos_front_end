import { AppBar, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";

export function StudentHome () {
  return (
    <>
      <AppBar sx={{ height: "100px" }}>
        oskdodke
      </AppBar>

      <Grid container sx={{ marginTop: "100px" }}>
        <Grid item xs={2}>
          <div style={{ height: "200px", width: "150px", background: "red" }}></div>
        </Grid>

        <Grid item xs={8}>
          <Paper elevation={5}>
            <Grid container spacing={3}>
              <Grid item xs={2}>
                <div style={{ height: "200px", width: "150px", background: "blue" }}></div>
              </Grid>

              <Grid item xs={10}>
              <Typography>TÍTULO DA VAGA</Typography>
              <Typography>DESCRIÇÃO</Typography>

              <TextField multiline minRows={2} />

              <div style={{ display: "flex" }}>
                <div>
                  <Typography>CARGA HORÁRIA</Typography>
                  <TextField size="small" />
                </div>

                <div>
                  <Typography>RESPONSÁVEL</Typography>
                  <TextField size="small" />
                  <Button variant="contained">visualizar vaga</Button>
                </div>


              </div>

              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={2}>
          <div style={{ height: "200px", width: "150px", background: "red" }}></div>
        </Grid>
      </Grid>
    </>
  );
};

import React from "react";
import PerfilImage from "../../images/perfil-image.png"
import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  Paper,
  TextField,
  Typography
} from "@mui/material";

export function ProfileCard ({ onClose }) {
  return (
    <Paper sx={{ /*display: "flex", flexDirection: "column",*/ width: "80%", padding: "16px" }}>
      <Typography sx={{ textAlign: "center", fontSize: "2em"}}>PERFIL</Typography>

      <Grid container>
        <Grid item xs={2}>
          <Card elevation={0} sx={{ maxWidth: "180px" }}>
            <CardMedia component="img" image={PerfilImage} />
          </Card>
        </Grid>

        <Grid item xs={10}>
          <form>
            <TextField
              size="small"
              label="NOME COMPLETO"
              sx={{ width: "calc(100% - 16px)", margin: "8px" }}
            />

            <Grid container item>
              <TextField
                size="small"
                label="CURSO"
                sx={{ width: "55%", margin: "8px" }}
              />

              <TextField
                size="small"
                label="PERÍODO"
                sx={{ width: "calc(45% - 32px)", margin: "8px" }}
              />
            </Grid>

            <Grid container item>
              <TextField
                size="small"
                label="RA"
                sx={{ width: "45%", margin: "8px" }}
              />

              <TextField
                size="small"
                label="TURNO"
                sx={{ width: "calc(55% - 32px)", margin: "8px" }}
              />
            </Grid>

            <Grid container item>
              <TextField
                size="small"
                label="CIDADE"
                sx={{ width: "45%", margin: "8px" }}
              />

              <TextField
                size="small"
                label="CELULAR"
                sx={{ width: "calc(55% - 32px)", margin: "8px" }}
              />
            </Grid>

            <TextField
              size="small"
              label="E-MAIL"
              sx={{ width: "calc(100% - 16px)", margin: "8px" }}
            />
          </form>
        </Grid>
      </Grid>

      <TextField
        size="small"
        multiline
        minRows={3}
        label="DESCRIÇÃO"
        sx={{ width: "calc(100% - 16px)", margin: "8px" }}
      />

      <Box sx={{ width: "100%", display: "inline-flex", justifyContent: "center" }} >
        {/* <Box sx={{ width: "60%", display: "inline-flex", justifyContent: "right", margin: "8px" }}> */}
          <Button
            variant="contained"
            color="error"
            onClick={onClose}
            sx={{ marginRight: "16px" }}
          >
            Cancelar
          </Button>

          <Button
            variant="contained"
          >
            Concluir
          </Button>
        {/* </Box> */}
      </Box>
    </Paper>
  );
};

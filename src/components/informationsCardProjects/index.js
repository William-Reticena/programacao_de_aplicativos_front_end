import React, { useState } from "react";
import PerfilImage from "../../images/perfil-image.png"
import {
Box,
Button,
Card,
CardMedia,
Grid,
Paper,
TextField,
Typography,
} from "@mui/material";

export function InformationsCardProjects () {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Paper elevation={5} sx={{ padding: "16px", marginBottom: "24px", marginTop: "16px" }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Card elevation={0}>
            <CardMedia component="img" image={PerfilImage} sx={{ maxHeight: "216px" }} />
          </Card>
        </Grid>

        <Grid item xs={10}>
          <Box sx={{ marginBottom: "16px" }}>
            <Typography variant="h2" sx={{ fontSize: "24px" }}>TÍTULO DA VAGA</Typography>
          </Box>

            <TextField
              disabled
              multiline
              minRows={3}
              label="DESCRIÇÃO"
              value="Uma vaga muito boa"
              sx={{ width: "100%" }}
            />

          <Box sx={{ display: "flex", marginTop: "16px", justifyContent: "space-between" }}>
            <TextField
              disabled
              size="small"
              label="CARGA HORÁRIA SEMANAL"
              value="30 horas"
              sx={{ width: "31%" }}
            />

            <TextField
              disabled
              size="small"
              label="PERÍODO"
              value="* Período"
              sx={{ width: "31%" }}
            />

            <TextField
              disabled
              size="small"
              label="Valorda Bolsa"
              value="R$ 1.000,00"
              sx={{ width: "31%" }}
            />

          </Box>
        </Grid>
      </Grid>
        <Box sx={{ display: "flex", marginTop: "16px", justifyContent: "space-between" }}>
          <TextField
                disabled
                size="small"
                multiline
                minRows={3}
                label="REQUISITOS"
                value="Requisitos"
                sx={{ width: "100%" }}
              />
          </Box>
    
          <Box sx={{ display: "flex", marginTop: "16px", justifyContent: "end" }}>
            <Button
              variant="contained"
              onClick={handleOpen}
              sx={{ width: "25%"}}
            >
              Editar vaga
            </Button>
          </Box>
    </Paper>
  );
};
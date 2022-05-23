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

export function InformationsCardApplicant () {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Paper elevation={5} sx={{ padding: "16px", marginBottom: "24px" }}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Card elevation={0}>
            <CardMedia component="img" image={PerfilImage} sx={{ maxHeight: "150px" }} />
          </Card>
        </Grid>

        <Grid item xs={8}>
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
        </Grid>
        <Grid item xs={2}>
          <Box sx={{ display: "flex", marginTop: "47px", justifyContent: "space-between" }}>
            <TextField
              disabled
              size="small"
              label="PERÍODO"
              value="Nº Período"
              sx={{ width: "100%" }}
            />
          </Box>
          <Box sx={{ display: "flex", marginTop: "16px", justifyContent: "space-between" }}>
            <TextField
              disabled
              size="small"
              label="CURSO"
              value="Curso"
              sx={{ width: "100%" }}
            />
          </Box>
        </Grid>
      </Grid>
        <Box sx={{ display: "flex", marginTop: "16px", justifyContent: "space-between" }}>
            <TextField
              disabled
              size="small"
              label="E-MAIL"
              value="exemple@alunos.utfpr.edu.br"
              sx={{ width: "45%" }}
            />
            <TextField
              disabled
              size="small"
              label="CONTATO"
              value="(99) 99999-9999"
              sx={{ width: "30%" }}
            />
            <Button
                variant="contained"
                onClick={handleOpen}
                sx={{ width: "20%" }}
              >
                ACEITAR CANDIDATO
              </Button>
          </Box> 
    </Paper>
  );
};
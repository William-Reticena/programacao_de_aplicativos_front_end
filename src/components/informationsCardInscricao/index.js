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

export function InformationsCardInscricao () {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Paper elevation={5} sx={{ padding: "16px", marginBottom: "24px" }}>      
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Card elevation={0}>
            <CardMedia component="img" image={PerfilImage} sx={{ maxHeight: "216px" }} />
          </Card>
        </Grid>
        <Grid item xs={10}>
          <Box sx={{ marginBottom: "16px" }}>
            <Typography variant="h2" sx={{ fontSize: "24px" }}>Título da Vaga</Typography>
          </Box >
          
          <Box sx={{ display: "flex", marginTop: "16px", justifyContent: "space-between" }}>
          <TextField
              disabled
              multiline
              minRows={3}
              label="DESCRIÇÃO"
              value="Uma vaga muito boa"
              sx={{ width: "100%" }}
            /> 
          </Box>

          <Box sx={{ display: "flex", marginTop: "16px", justifyContent: "center" }}>
            <Button
              variant="contained"
              onClick={handleOpen}
              sx={{ width: "25%", marginRight: "16px" }}
              color="error"
            >
              Cancelar Inscrição
            </Button>

            <Button
              variant="contained"
              onClick={handleOpen}
              sx={{ width: "25%" }}
            >
              Visualizar Vaga
            </Button>

          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
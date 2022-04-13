import React, { useState } from "react";
import PerfilImage from "../../images/perfil-image.png"
import { ModalProject } from "../";
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

export function InformationsCard () {
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
              label="CARGA HORÁRIA"
              value="30 horas"
              sx={{ width: "35%" }}
            />

            <TextField
              disabled
              size="small"
              label="RESPONSÁVEL"
              value="Anônimo"
              sx={{ width: "35%" }}
            />

            <Button
              variant="contained"
              onClick={handleOpen}
              sx={{ width: "25%" }}
            >
              visualizar vaga
            </Button>

            <ModalProject
              open={open}
              onClose={handleClose}
            />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

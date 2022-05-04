import React, { useState } from "react";
import PerfilImage from "../../images/perfil-image.png";
import { TextField } from "./style";
import { ModalProject } from "../";
import {
Box,
Button,
Card,
CardMedia,
Grid,
Paper,
// TextField,
Typography,
} from "@mui/material";

export function InformationsCardAdm () {
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
            <Typography variant="h2" sx={{ fontSize: "24px" }}>Nome do Professor</Typography>
          </Box >
          
          <Box sx={{ display: "flex", marginTop: "16px", justifyContent: "space-between" }}>
            <TextField
              disabled
              size="small"
              label="ID"
              value="Nº ID"
              sx={{ width: "22%" }}
            />

            <TextField
              disabled
              size="small"
              label="CURSO"
              value="Curso"
              sx={{ width: "75%" }}
            />
          </Box>

          <Box sx={{ display: "flex", marginTop: "16px", justifyContent: "space-between" }}>
            <TextField
              disabled
              size="small"
              label="E-MAIL"
              value="exemple@utfpr.edu.br"
              sx={{ width: "100%" }}
            />
          </Box>

          <Box sx={{ display: "flex", marginTop: "16px", justifyContent: "space-between" }}>
            <TextField
              disabled
              size="small"
              label="CELULAR"
              value="(11) 99999-9999"
              sx={{ width: "40%" }}
            />

            <Button
              variant="contained"
              onClick={handleOpen}
              sx={{ width: "25%" }}
            >
              Aprovar
            </Button>

            <Button
              variant="contained"
              onClick={handleOpen}
              sx={{ width: "25%" }}
              color="error"
            >
              Excluir
            </Button>

          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

import React, { useState, useEffect } from "react";
import { TextField } from "./style";
import PerfilImage from "../../images/perfil-image.png";
import { ModalProject } from "../";
import {
Box,
Button,
Card,
CardMedia,
Grid,
Paper,
Typography,
} from "@mui/material";

export function InformationsCard ({ data }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    console.log(data);
  });

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
            <Typography
              variant="h2"
              sx={{ fontSize: "24px" }}
            >
              {data.projectName}
            </Typography>
          </Box>

            <TextField
              disabled
              multiline
              minRows={3}
              label="DESCRIÇÃO"
              value={data.description}
              sx={{ width: "100%" }}
            />

          <Box sx={{ display: "flex", marginTop: "16px", justifyContent: "space-between" }}>
            <TextField
              disabled
              size="small"
              label="CARGA HORÁRIA"
              value={data.amountHours + " horas"}
              sx={{ width: "35%" }}
            />

            <TextField
              disabled
              size="small"
              label="RESPONSÁVEL"
              value={data.teacherName}
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
              data={data}
            />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

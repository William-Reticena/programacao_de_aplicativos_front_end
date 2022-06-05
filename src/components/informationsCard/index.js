import React, { useState, useEffect } from "react";
import { TextField } from "./style";
import { ModalProject } from "../";
import {
Box,
Button,
Grid,
Paper,
Typography,
} from "@mui/material";

export function InformationsCard ({ data }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // useEffect(() => {
  //   console.log("log", data);
  // });

  return (
    <Paper elevation={5} sx={{ padding: "16px", marginBottom: "24px" }}>
        <Grid>
          <Box sx={{ marginBottom: "16px" }}>
            <Typography
              variant="h2"
              sx={{ fontSize: "24px" }}
            >
              {data.name_project}
            </Typography>
          </Box>

            <TextField
              disabled
              multiline
              minRows={3}
              label="DESCRIÇÃO"
              value={data.description_project}
              sx={{ width: "100%" }}
            />

          <Box sx={{ display: "flex", marginTop: "16px", justifyContent: "space-between" }}>
            <TextField
              disabled
              size="small"
              label="CARGA HORÁRIA"
              value={data.weekly_workload_project + " horas"}
              sx={{ width: "35%" }}
            />

            <TextField
              disabled
              size="small"
              label="RESPONSÁVEL"
              value={data.professor_responsable_project}
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
    </Paper>
  );
};

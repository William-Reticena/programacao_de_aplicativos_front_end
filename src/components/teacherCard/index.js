import React, { useState } from "react";
// import { APPLICANT } from "../../routes/routes";
import { NavigationButton } from "../../components";
import { ModalTeacher } from "../";
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

export function TeacherCard({ infos }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Paper elevation={5} sx={{ padding: "16px", marginBottom: "24px" }}>
      
        <Grid>
          <Box
            sx={{
              marginBottom: "16px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h2" sx={{ fontSize: "24px" }}>
              {infos.name_project}
            </Typography>
          </Box>

          <TextField
            disabled
            multiline
            minRows={3}
            label="Descrição"
            value={infos.description_project}
            sx={{ width: "100%" }}
          />

          <Box
            sx={{
              display: "flex",
              marginTop: "16px",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              onClick={handleOpen}
              sx={{ width: "30%", height: "50px" }}
            >
              Editar
            </Button>

            <NavigationButton to={`/applicant/${infos.id}`}>
              <Button
                variant="contained"
                sx={{ width: "110%", height: "50px" }}
              >
                Visualizar Candidatos
              </Button>
            </NavigationButton>

            <ModalTeacher open={open} onClose={handleClose} infos={infos} />
          </Box>
      </Grid>
    </Paper>
  );
}

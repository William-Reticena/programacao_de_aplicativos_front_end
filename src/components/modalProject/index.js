import React from "react";
import { Favorite, Share } from "@mui/icons-material";
import PerfilImage from "../../images/perfil-image.png"
import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  IconButton,
  Modal,
  Paper,
  TextField
} from "@mui/material";

export function ModalProject ({ onClose, open }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Paper sx={{ /*display: "flex", flexDirection: "column",*/ width: "80%", padding: "16px" }}>
        <Grid container>
          <Grid item xs={2}>
            <Card elevation={0} sx={{ width: "180px" }}>
              <CardMedia component="img" image={PerfilImage} />
            </Card>
          </Grid>

          <Grid item xs={10}>
            <form>
              <TextField
                size="small"
                label="NOME DO PROJETO"
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
                  label="PERÍODO IDEAL"
                  sx={{ width: "calc(45% - 32px)", margin: "8px" }}
                />
              </Grid>

              <Grid container item>
                <TextField
                  size="small"
                  label="CARGA HORÁRIA SEMANAL"
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
                  label="HORÁRIOS"
                  sx={{ width: "45%", margin: "8px" }}
                />

                <TextField
                  size="small"
                  label="QUANTIDADE DE VAGAS"
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
        <TextField
          size="small"
          multiline
          minRows={3}
          label="REQUISITOS"
          sx={{ width: "calc(100% - 16px)", margin: "8px" }}
        />

        <Box>
          <Box sx={{ width: "60%", display: "inline-flex", justifyContent: "right" }}>
            <Button
              variant="contained"
              sx={{ justifySelf: "center" }}
            >
              INSCREVER-SE
            </Button>
          </Box>

          <Box sx={{ width: "calc(40% - 8px)", display: "inline-flex", justifyContent: "right" }}>
            <IconButton>
              <Favorite /*color="primary"*/ />
            </IconButton>

            <IconButton>
              <Share /*color="primary"*/ />
            </IconButton>
          </Box>

        </Box>
      </Paper>
    </Modal>
  );
};

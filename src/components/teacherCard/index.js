import React, { useState } from "react";
import PerfilImage from "../../images/perfil-image.png";
import { Favorite } from "@mui/icons-material";
import { INSCRICAO } from "../../routes/routes";
import { NavigationButton } from "../../components"
import ShareIcon from '@mui/icons-material/Share';
import { ModalTeacher } from "../";
import {
IconButton,
Box,
Button,
Card,
CardMedia,
Grid,
Paper,
TextField,
Typography,
} from "@mui/material";

export function TeacherCard () {
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
          <Box sx={{ marginBottom: "16px", display:"flex", justifyContent:"space-between" }}>
            <Typography variant="h2" sx={{ fontSize: "24px" }}>TÍTULO DA VAGA</Typography>
              <div>
                <IconButton>
                  <Favorite/>
                </IconButton>

                <IconButton>
                  <ShareIcon/>
                </IconButton>
              </div>
          </Box>

            <TextField
              disabled
              multiline
              minRows={3}
              label="DESCRIÇÃO"
              value="Uma vaga muito boa"
              sx={{ width: "100%" }}
            />

          <Box sx={{ display: "flex", marginTop: "16px", justifyContent: "space-evenly", alignItems:"center" }}>
            <Button 
              variant="contained"
              onClick={handleOpen}
              sx={{ width: "30%", height:"50px"}}
            >
              Editar
            </Button>

          <NavigationButton to={INSCRICAO}>
            <Button
              variant="contained"
              sx={{ width: "110%", height:"50px"}}
            >
              Vizualizar Candidatos
            </Button>
          </NavigationButton>


            <ModalTeacher
              open={open}
              onClose={handleClose}
            />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

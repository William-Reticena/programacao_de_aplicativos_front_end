import React, { useState } from "react";
import { useFormik } from "formik";
import { LOGIN, STUDENT_HOME, INSCRICAO } from "../../routes/routes";
import Logo from "../../images/Logo-UTFPR.png";
import { NavigationButton, ModalShowProjects } from "../../components";
import { Favorite, Logout, Search, AddCircle } from "@mui/icons-material";
import { AppBar, Card } from "./style";
import {
  Box,
  CardMedia,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

export function Header({ title, add }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formik = useFormik({
    initialValues: {
      searchField: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <AppBar>
      <NavigationButton to={STUDENT_HOME}>
        <Card elevation={0}>
          <CardMedia component="img" image={Logo} />
        </Card>
      </NavigationButton>

      <Box sx={{ width: "40%" }}>
        <Typography variant="h1" sx={{ fontSize: "2em", textAlign: "center" }}>
          {title}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {!title && (
            <>
              {!add && (
                <>
                  <NavigationButton to={INSCRICAO}>
                    <Box>
                      <IconButton>
                        <Favorite />
                      </IconButton>
                    </Box>
                  </NavigationButton>

                  <Typography
                    component="span"
                    sx={{ fontSize: "12px", display: "block" }}
                  >
                    INSCRIÇÕES
                  </Typography>
                </>
              )}

              {add && (
                <>
                  <Box>
                    <IconButton onClick={handleOpen}>
                      <AddCircle />
                    </IconButton>
                  </Box>

                  <Typography
                    component="span"
                    sx={{ fontSize: "12px", display: "block" }}
                  >
                    PROJETOS
                  </Typography>

                  <ModalShowProjects open={open} onClose={handleClose} />
                </>
              )}
            </>
          )}
        </Box>

        <NavigationButton to={LOGIN}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box>
              <IconButton>
                <Logout />
              </IconButton>
            </Box>

            <Typography component="span" sx={{ fontSize: "12px" }}>
              SAIR
            </Typography>
          </Box>
        </NavigationButton>
      </Box>
    </AppBar>
  );
}

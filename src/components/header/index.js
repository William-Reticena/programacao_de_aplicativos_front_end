import React from "react";
import { useFormik } from "formik";
import { LOGIN, STUDENT_HOME } from "../../routes/routes";
import { Logo } from "../../images";
import { NavigationButton } from "../../components"
import { Favorite, Logout, Search } from "@mui/icons-material";
import {
  AppBar,
  Card,
  // Typography,
} from "./style";
import {
  // AppBar,
  Box,
  // Card,
  CardMedia,
  IconButton,
  TextField,
  Typography
} from "@mui/material";

export function Header ({ title }) {
  const formik = useFormik({
    initialValues: {
      searchField: "",
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <AppBar /*sx={{ height: "80px", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}*/>
      <NavigationButton to={STUDENT_HOME}>
        <Card /*sx={{ width: "100px", background: "inherit" }}*/ elevation={0}>
          <CardMedia component="img" image={Logo} />
        </Card>
      </NavigationButton>

      <Box sx={{ width: "40%" }}>
        {title && (
          <Typography
            variant="h1"
            sx={{ fontSize: "2em", textAlign: "center" }}
          >
            {title}
          </Typography>
        )}

        {!title && (
          <Box sx={{ background: "#88B0F1", borderRadius: "4px", display: "flex", alignItems: "center", padding: "4px 10px"}}>
            <form 
              onSubmit={formik.handleSubmit}
              style={{width: "100%", display: "flex", alignItems: "center" }}
            >
              <TextField
                name="searchField"
                size="small"
                variant="standard"
                placeholder="Pesquisar"
                sx={{ width: "calc(100% - 40px)", marginTop: "5px" }}
                onChange={formik.handleChange}
                InputProps={{
                  disableUnderline: true,
                }}
              />

              <IconButton type="submit">
                <Search />
              </IconButton>
            </form>
          </Box>
        )}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <NavigationButton to="#" style={{ textDecoration: "none" }}>
          <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            {!title && (
              <>
                <Box>
                  <IconButton>
                    <Favorite />
                  </IconButton>
                </Box>

                <Typography
                  component="span"
                  sx={{ fontSize: "12px", display: "block" }}
                >
                  FAVORITOS
                </Typography>
              </>
            )}

          </Box>
        </NavigationButton>

        <NavigationButton to={LOGIN}>
          <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <Box>
              <IconButton>
                <Logout />
              </IconButton>
            </Box>

            <Typography
              component="span"
              sx={{ fontSize: "12px" }}
            >
              SAIR
            </Typography>
          </Box>
        </NavigationButton>
      </Box>
    </AppBar>
  );
};

import React from "react";
import { LOGIN } from "../../routes/routes";
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
  return (
    <AppBar /*sx={{ height: "80px", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}*/>
      <Card /*sx={{ width: "100px", background: "inherit" }}*/ elevation={0}>
        <CardMedia component="img" image={Logo} />
      </Card>

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
            <TextField
              size="small"
              variant="standard"
              placeholder="Pesquisar"
              sx={{ width: "calc(100% - 40px)", }}
              InputProps={{
                disableUnderline: true,
              }}
            />

            <IconButton>
              <Search />
            </IconButton>
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

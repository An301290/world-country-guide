import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  Box,
} from "@mui/material";
import DarkModeToggle from "../fields/DarkModeToggle";
import { stylesNavBar } from "./stylesNavBar";

const NavBar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <AppBar>
      <Toolbar>
        <Box sx={stylesNavBar}>
          <Typography variant={isSmallScreen ? "h6" : "h4"}>
            Where in the World?
          </Typography>
          <DarkModeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

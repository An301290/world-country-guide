import React from "react";
import {
  AppBar,
  Box,
  PaletteMode,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DarkModeToggle from "../fields/DarkModeToggle";
import { stylesNavBar } from "./stylesNavBar";

type NavBarProps = {
  mode: PaletteMode;
  handleThemeChange: () => void;
};

const NavBar: React.FC<NavBarProps> = ({ mode, handleThemeChange }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <AppBar
      sx={{
        backgroundColor:
          mode === "dark" ? theme.palette.background.default : "white",
      }}
    >
      <Toolbar>
        <Box sx={stylesNavBar(isSmallScreen)}>
          <Typography
            variant={isSmallScreen ? "h6" : "h4"}
            sx={{ color: mode === "dark" ? "white" : "black" }}
          >
            Where in the World?
          </Typography>
          <DarkModeToggle mode={mode} handleThemeChange={handleThemeChange} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

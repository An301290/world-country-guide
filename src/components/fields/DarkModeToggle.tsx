import React from "react";
import { Button, CssBaseline, PaletteMode } from "@mui/material";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

type DarkModeProps = {
  mode: PaletteMode;
  handleThemeChange: () => void;
};

const DarkModeToggle: React.FC<DarkModeProps> = ({
  mode,
  handleThemeChange,
}) => {
  return (
    <>
      <CssBaseline />
      <Button
        onClick={handleThemeChange}
        sx={{ color: mode === "dark" ? "white" : "black" }}
      >
        {mode === "dark" ? (
          <WbSunnyOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
        ) : (
          <NightlightOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
        )}
        {mode === "dark" ? "Light Mode" : "Dark Mode"}
      </Button>
    </>
  );
};

export default DarkModeToggle;

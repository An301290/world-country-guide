import React, { useState } from "react";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { PaletteMode } from "@mui/material";

const DarkModeToggle: React.FC = () => {
  const [mode, setMode] = useState<PaletteMode>("light");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMode(event.target.checked ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FormControlLabel
        control={
          <Switch checked={mode === "dark"} onChange={handleThemeChange} />
        }
        label={mode === "dark" ? "Dark Mode" : "Light Mode"}
      />
    </ThemeProvider>
  );
};

export default DarkModeToggle;

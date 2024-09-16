import React, { useState } from "react";
import LayOut from "./components/layout/LayOut";
import { createTheme, PaletteMode } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  const [mode, setMode] = useState<PaletteMode>("light");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const handleThemeChange = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  return (
    <ThemeProvider theme={theme}>
      <LayOut mode={mode} handleThemeChange={handleThemeChange}>
        {}
      </LayOut>
    </ThemeProvider>
  );
}

export default App;

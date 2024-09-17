import React, { useState } from "react";
import LayOut from "./components/layout/LayOut";
import {
  createTheme,
  PaletteMode,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import SearchField from "./components/fields/SearchField";
import SelectField from "./components/fields/SelectField";
import { mainBoxLayout, stylesBoxComponents } from "./stylesApp";

function App() {
  const [mode, setMode] = useState<PaletteMode>("light");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const themeInstance = useTheme();
  const isSmallScreen = useMediaQuery(themeInstance.breakpoints.down("sm"));

  const handleThemeChange = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  return (
    <ThemeProvider theme={theme}>
      <LayOut mode={mode} handleThemeChange={handleThemeChange}>
        <Box sx={mainBoxLayout(isSmallScreen)}>
          <Box sx={stylesBoxComponents(isSmallScreen)}>
            <SearchField />
          </Box>
          <Box sx={stylesBoxComponents(isSmallScreen)}>
            <SelectField />
          </Box>
        </Box>
      </LayOut>
    </ThemeProvider>
  );
}

export default App;

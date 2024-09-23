import React, { useEffect, useState } from "react";
import {
  createTheme,
  PaletteMode,
  Box,
  useTheme,
  useMediaQuery,
  CircularProgress,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import {
  mainBoxLayout,
  styleCircularProgress,
  styleError,
  stylesBoxComponents,
} from "./stylesApp";
import {
  LayOut,
  NavBar,
  SearchField,
  SelectField,
  CountryCard,
} from "./components";
import {
  fetchAllCountries,
  fetchCountriesByRegion,
} from "./services/apiService";
import { CountryCardProps } from "./types/types";
import { mappedDataCountry } from "./utils/default";

function App() {
  const [mode, setMode] = useState<PaletteMode>("light");
  const [countryName, setCountryName] = useState("");
  const [allCountriesData, setAllCountriesData] = useState<CountryCardProps[]>(
    [],
  );
  const [countryRegion, setCountryRegion] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  const handleCountryChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const name = event.target.value;
    setCountryName(name);
  };

  const fetchAllCountriesData = async () => {
    try {
      setLoading(true);
      const data = await fetchAllCountries();
      const mappedData = data.map((country: any) => mappedDataCountry(country));
      setAllCountriesData(mappedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching all countries data:", error);
      setError("Error fetching all countries data.");
      setLoading(false);
    }
  };

  const handleRegionChange = async (region: string) => {
    setCountryRegion(region);
  };

  useEffect(() => {
    fetchAllCountriesData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {loading ? (
        <Box sx={styleCircularProgress}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Box sx={styleError}>
          <Typography variant="h6" color="error">
            {error}
          </Typography>
        </Box>
      ) : (
        <LayOut mode={mode} handleThemeChange={handleThemeChange}>
          <NavBar mode={mode} handleThemeChange={handleThemeChange} />
          <Box sx={mainBoxLayout(isSmallScreen)}>
            <Box sx={stylesBoxComponents(isSmallScreen)}>
              <SearchField
                handleCountryChange={handleCountryChange}
                countryName={countryName}
              />
            </Box>
            <Box sx={stylesBoxComponents(isSmallScreen)}>
              <SelectField handleRegionChange={handleRegionChange} />
            </Box>
          </Box>
          <CountryCard
            allCountriesData={allCountriesData}
            isSmallScreen={isSmallScreen}
            countryName={countryName}
          />
        </LayOut>
      )}
    </ThemeProvider>
  );
}

export default App;

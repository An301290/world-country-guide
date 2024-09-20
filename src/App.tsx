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
import { fetchAllCountries, fetchCountryByName } from "./services/apiService";
import { CountryCardProps } from "./types/types";
import {
  countryDataInitialState,
  getCountryDataObject,
  mappedDataCountry,
} from "./utils/default";

function App() {
  const [mode, setMode] = useState<PaletteMode>("light");
  const [countryName, setCountryName] = useState("");
  const [countryDataByName, setCountryDataByName] = useState<CountryCardProps>(
    countryDataInitialState,
  );
  const [allCountriesData, setAllCountriesData] = useState<CountryCardProps[]>(
    [],
  );
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
    if (name) {
      try {
        const data = await fetchCountryByName(name);
        const country = data[0];
        const countryDataObject = getCountryDataObject(country);
        setCountryDataByName(countryDataObject);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    } else {
      setCountryDataByName(countryDataByName);
    }
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

  useEffect(() => {
    fetchAllCountriesData();
  }, []);

  useEffect(() => {
    if (countryDataByName) {
      console.log(countryDataByName);
    }
  }, [countryDataByName]);

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
              <SelectField />
            </Box>
          </Box>
          <CountryCard
            allCountriesData={allCountriesData}
            isSmallScreen={isSmallScreen}
          />
        </LayOut>
      )}
    </ThemeProvider>
  );
}

export default App;

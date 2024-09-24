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
import { CountryCardProps, RegionType } from "./types/types";
import { mappedDataCountry } from "./utils/default";
import CountryCardDetail from "./components/cards/CountryCardDetail";

function App() {
  const [mode, setMode] = useState<PaletteMode>("light");
  const [countryName, setCountryName] = useState("");
  const [allCountriesData, setAllCountriesData] = useState<CountryCardProps[]>(
    [],
  );
  const [countryRegion, setCountryRegion] = useState<RegionType | null>(null);
  const [selectedCountry, setSelectedCountry] =
    useState<CountryCardProps | null>(null);
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

  const handleCardClick = (country: CountryCardProps) => {
    setSelectedCountry(country);
  };

  const fetchAllCountriesData = async () => {
    try {
      setLoading(true);
      const data = await fetchAllCountries();
      const mappedData = data.map((country: CountryCardProps) =>
        mappedDataCountry(country),
      );
      setAllCountriesData(mappedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching all countries data:", error);
      setError("Error fetching all countries data.");
      setLoading(false);
    }
  };

  const handleRegionChange = async (region: RegionType | null) => {
    setCountryRegion(region);
    if (region) {
      try {
        setLoading(true);
        const data = await fetchCountriesByRegion(region.label);
        const mappedData = data.map((country: any) =>
          mappedDataCountry(country),
        );
        setAllCountriesData(mappedData);
        setLoading(false);
      } catch (error) {
        console.error(
          `Error fetching countries data for region ${region.label}:`,
          error,
        );
        setError(`Error fetching countries data for region ${region.label}.`);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (countryRegion) {
      if (countryRegion.label === "All") {
        fetchAllCountriesData();
      } else {
        handleRegionChange(countryRegion);
      }
    } else {
      fetchAllCountriesData();
    }
  }, [countryRegion]);

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
              <SelectField
                countryRegion={countryRegion}
                setCountryRegion={setCountryRegion}
              />
            </Box>
          </Box>
          {selectedCountry ? (
            <CountryCardDetail
              selectedCountry={selectedCountry}
              handleBack={() => setSelectedCountry(null)}
            />
          ) : (
            <CountryCard
              allCountriesData={allCountriesData}
              isSmallScreen={isSmallScreen}
              countryName={countryName}
              handleCardClick={handleCardClick}
            />
          )}
        </LayOut>
      )}
    </ThemeProvider>
  );
}

export default App;

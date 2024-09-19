import React, { useEffect, useState } from "react";
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
import NavBar from "./components/layout/NavBar";
import CountryCard from "./components/cards/CountryCard";
import { fetchAllCountries, fetchCountryByName } from "./services/apiService";
import { CountryCardProps } from "./types/types";

function App() {
  const [mode, setMode] = useState<PaletteMode>("light");
  const [countryName, setCountryName] = useState("");
  const [countryDataByName, setCountryDataByName] = useState<CountryCardProps>({
    flagUrl: "",
    officialName: "",
    population: 0,
    region: "",
    capital: "",
    subregion: "",
    languages: {},
    area: 0,
  });
  const [allCountriesData, setAllCountriesData] = useState<CountryCardProps[]>(
    [],
  );

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
        const countryDataObject = {
          flagUrl: country.flags.png,
          officialName: country.name.official,
          population: country.population,
          region: country.region,
          capital: country.capital[0],
          subregion: country.subregion,
          languages: country.languages,
          area: country.area,
        };
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
      const data = await fetchAllCountries();
      const mappedData = data.map((country: any) => ({
        flagUrl: country.flags.png,
        officialName: country.name.official,
        population: country.population,
        region: country.region,
        capital: country.capital,
        subregion: country.subregion,
        languages: country.languages,
        area: country.area,
      }));
      setAllCountriesData(mappedData);
    } catch (error) {
      console.error("Error fetching all countries data:", error);
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
    </ThemeProvider>
  );
}

export default App;

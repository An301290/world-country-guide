import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CountryCardProps } from "../../types/types";
import { stylesMainBoxCard } from "../styles/stylesComponents";

type CountryCardPropsWithAllCountries = {
  allCountriesData: CountryCardProps[];
  isSmallScreen: boolean;
  countryName: string;
  handleCardClick: (country: CountryCardProps) => void;
};

const CountryCard: React.FC<CountryCardPropsWithAllCountries> = ({
  allCountriesData,
  isSmallScreen,
  countryName,
  handleCardClick,
}) => {
  const filteredCountries = allCountriesData.filter((country) => {
    return countryName
      ? country.officialName.toLowerCase().includes(countryName.toLowerCase())
      : true;
  });
  return (
    <Box sx={stylesMainBoxCard(isSmallScreen)}>
      {filteredCountries.map((country, index) => (
        <Card
          key={index}
          sx={{ width: 250, mt: 5 }}
          onClick={() => handleCardClick(country)}
        >
          <CardMedia
            component="img"
            height="140"
            image={country.flagUrl}
            alt={country.officialName}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {country.officialName}
            </Typography>
            <Box>
              <Typography variant="body2" color="text.secondary">
                <strong>Population:</strong>{" "}
                {country.population.toLocaleString()}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Region:</strong> {country.region}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Subregion:</strong> {country.subregion}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Capital:</strong> {country.capital}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Languages:</strong>{" "}
                {country.languages
                  ? Object.values(country.languages).join(", ")
                  : "N/A"}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default CountryCard;

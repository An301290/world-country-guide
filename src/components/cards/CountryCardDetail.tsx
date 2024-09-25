import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CountryCardProps } from "../../types/types";
import BackButton from "../buttons/BackButton";
import { stylesCardCountryDetails } from "../styles/stylesComponents";

type CountryCardDetailProps = {
  selectedCountry: CountryCardProps;
  handleBack: () => void;
};

const CountryCardDetail: React.FC<CountryCardDetailProps> = ({
  selectedCountry,
  handleBack,
}) => {
  return (
    <Box>
      <BackButton handleBack={handleBack} />
      <Card sx={stylesCardCountryDetails}>
        <CardMedia
          component="img"
          sx={{ width: { xs: "100%", md: "50%" }, ml: 3 }}
          image={selectedCountry.flagUrl}
          alt={selectedCountry.officialName}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {selectedCountry.officialName}
          </Typography>
          <Box sx={{ display: "flex", mt: 5 }}>
            <Box sx={{ mr: 2 }}>
              <Typography variant="body1" color="text.secondary">
                <strong>Population:</strong>{" "}
                {selectedCountry.population.toLocaleString()}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Region:</strong> {selectedCountry.region}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Subregion:</strong> {selectedCountry.subregion}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Capital:</strong> {selectedCountry.capital}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" color="text.secondary">
                <strong>Top Level Domain:</strong>
                {selectedCountry.tld}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Currency:</strong>
                {selectedCountry.currencies}{" "}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Languages:</strong>
                {selectedCountry.languages
                  ? Object.values(selectedCountry.languages).join(", ")
                  : "N/A"}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mt: 5 }}>
            <Typography variant="body1" color="text.secondary">
              <strong>Border Countries:</strong>
              {selectedCountry.borders ? (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
                  {Object.values(selectedCountry.borders).map(
                    (border, index) => (
                      <Box
                        key={index}
                        sx={{
                          border: "1px solid lightgray",
                          padding: "8px",
                          borderRadius: "4px",
                        }}
                      >
                        {border}
                      </Box>
                    ),
                  )}
                </Box>
              ) : (
                "N/A"
              )}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CountryCardDetail;

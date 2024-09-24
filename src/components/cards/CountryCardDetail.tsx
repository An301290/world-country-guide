import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { CountryCardProps } from "../../types/types";

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
      <Button onClick={handleBack}>Back</Button>
      <Card sx={{ width: 500, mt: 5 }}>
        <CardMedia
          component="img"
          height="300"
          image={selectedCountry.flagUrl}
          alt={selectedCountry.officialName}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {selectedCountry.officialName}
          </Typography>
          <Box>
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
          <Box>
            <Typography variant="body1" color="text.secondary">
              <strong>Border Countries:</strong>
              {selectedCountry.borders
                ? Object.values(selectedCountry.borders).join(", ")
                : "N/A"}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CountryCardDetail;

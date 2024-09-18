import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

type CountryCardProps = {
  imageUrl: string;
  title: string;
  population: number;
  region: string;
  capital: string;
};

const CountryCard = (
  {
    // imageUrl,
    // title,
    // population,
    // region,
    // capital,
  },
) => {
  return (
    <>
      <Card sx={{ maxWidth: 300, mt: 10 }}>
        <CardMedia
          component="img"
          height="140"
          // image={imageUrl} alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {/*{title}*/}
          </Typography>
          <Box>
            <Typography variant="body2" color="text.secondary">
              <strong>Population:</strong>
              {/*{population.toLocaleString()}*/}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Region:</strong>
              {/*{region}*/}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Capital:</strong>
              {/*{capital}*/}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default CountryCard;

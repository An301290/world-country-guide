import React, { useState, useEffect } from "react";
import { TextField, InputAdornment, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { fetchCountryByName } from "../../services/apiService";

const SearchField = () => {
  const [countryName, setCountryName] = useState("");
  const [countryData, setCountryData] = useState(null);

  const handleCountryChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const name = event.target.value;
    setCountryName(name);
    if (name) {
      try {
        const data = await fetchCountryByName(name);
        setCountryData(data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    } else {
      setCountryData(null);
    }
  };

  useEffect(() => {
    if (countryData) {
      console.log(countryData);
    }
  }, [countryData]);

  console.log("countryData", countryData);
  console.log("countryName", countryName);

  return (
    <>
      <TextField
        label="Search for a country..."
        variant="outlined"
        value={countryName}
        onChange={handleCountryChange}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />
    </>
  );
};

export default SearchField;

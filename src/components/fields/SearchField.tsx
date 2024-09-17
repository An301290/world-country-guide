import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchField = () => {
  const [countryName, setCountryName] = useState("");

  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountryName(event.target.value);
  };
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

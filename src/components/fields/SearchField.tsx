import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SearchFieldProps } from "../../types/types";

const SearchField: React.FC<SearchFieldProps> = ({
  handleCountryChange,
  countryName,
}) => {
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

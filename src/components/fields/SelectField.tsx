import React from "react";
import { Autocomplete, TextField } from "@mui/material";

const optionsRegions = [
  { label: "All", id: 0 },
  { label: "Africa", id: 1 },
  { label: "Americas", id: 2 },
  { label: "Asia", id: 3 },
  { label: "Europe", id: 4 },
  { label: "Oceania", id: 5 },
];

type SelectFieldProps = {
  handleRegionChange: (region: string) => void;
};

const SelectField: React.FC<SelectFieldProps> = ({ handleRegionChange }) => {
  return (
    <>
      <Autocomplete
        disablePortal
        options={optionsRegions}
        renderInput={(params) => (
          <TextField {...params} label="Filter by Region" fullWidth />
        )}
      />
    </>
  );
};

export default SelectField;

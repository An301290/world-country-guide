import React, { useCallback } from "react";
import { Autocomplete, debounce, TextField } from "@mui/material";
import { optionsRegions } from "../../utils/default";
import { RegionType } from "../../types/types";

type SelectFieldProps = {
  countryRegion: RegionType | null;
  setCountryRegion: React.Dispatch<React.SetStateAction<RegionType | null>>;
};

const SelectField: React.FC<SelectFieldProps> = ({
  countryRegion,
  setCountryRegion,
}) => {
  const debouncedHandleRegionChange = useCallback(
    debounce((region: RegionType | null) => setCountryRegion(region), 300),
    [setCountryRegion],
  );
  return (
    <>
      <Autocomplete
        disablePortal
        options={optionsRegions}
        getOptionLabel={(option) => option.label}
        value={countryRegion}
        onChange={(event, newValue) => {
          debouncedHandleRegionChange(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label="Filter by Region" fullWidth />
        )}
      />
    </>
  );
};

export default SelectField;

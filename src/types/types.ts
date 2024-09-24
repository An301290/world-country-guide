import React from "react";

export type Languages = {
  [key: string]: string;
};

export type CountryCardProps = {
  flagUrl: string;
  officialName: string;
  population: number;
  region: string;
  capital: string;
  subregion: string;
  languages: Languages;
  area: number;
  currencies: string;
  borders: string[];
  tld: string;
};
export type RegionType = {
  label: string;
  id: number;
};
export type SearchFieldProps = {
  countryName: string;
  handleCountryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

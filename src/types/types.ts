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
};

export type SearchFieldProps = {
  countryName: string;
  handleCountryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

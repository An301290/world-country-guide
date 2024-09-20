export const countryDataInitialState = {
  flagUrl: "",
  officialName: "",
  population: 0,
  region: "",
  capital: "",
  subregion: "",
  languages: {},
  area: 0,
};

export const getCountryDataObject = (country: any) => ({
  flagUrl: country.flags.png,
  officialName: country.name.official,
  population: country.population,
  region: country.region,
  capital: country.capital[0],
  subregion: country.subregion,
  languages: country.languages,
  area: country.area,
});

export const mappedDataCountry = (country: any) => ({
  flagUrl: country.flags.png,
  officialName: country.name.official,
  population: country.population,
  region: country.region,
  capital: country.capital,
  subregion: country.subregion,
  languages: country.languages,
  area: country.area,
});

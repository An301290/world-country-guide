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

export const mappedDataCountry = (country: any) => ({
  flagUrl: country.flags.png,
  officialName: country.name.official,
  population: country.population,
  region: country.region,
  capital: country.capital,
  subregion: country.subregion,
  languages: country.languages,
  area: country.area,
  borders: country.borders,
  tld: country.tld,
  currencies: country.currencies
    ? Object.values(country.currencies)
        .map((currency: any) => currency.name)
        .join(", ")
    : "N/A",
});

export const optionsRegions = [
  { label: "All", id: 0 },
  { label: "Africa", id: 1 },
  { label: "Americas", id: 2 },
  { label: "Asia", id: 3 },
  { label: "Europe", id: 4 },
  { label: "Oceania", id: 5 },
];

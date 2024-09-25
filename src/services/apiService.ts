import axios from "axios";

const API_BASE_URL = "https://restcountries.com/v3.1";

export const fetchAllCountries = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/all`);
    return response.data;
  } catch (error) {
    console.error("Error fetching countries data:", error);
    throw error;
  }
};

export const fetchCountriesByRegion = async (region: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/region/${region}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching countries data for region ${region}:`, error);
    throw error;
  }
};

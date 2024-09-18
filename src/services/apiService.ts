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

export const fetchCountryByName = async (name: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/name/${name}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching country data for ${name}:`, error);
    throw error;
  }
};

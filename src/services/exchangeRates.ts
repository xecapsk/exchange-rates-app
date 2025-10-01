import axios from "axios";
import { ExchangeRate, HistoricalRate } from "../types/exchangeRates";
import { CurrencyInfo } from "../types/currencies";

const API_URL = "http://localhost:5000";

export const fetchExchangeRates = async (): Promise<ExchangeRate[] | null> => {
  try {
    const response = await axios.get<ExchangeRate[]>(
      `${API_URL}/exchange-rates`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (
      axios.isAxiosError(error) &&
      (error.response?.status === 401 || error.response?.status === 403)
    ) {
      console.error("Unauthorized access");
      window.location.href = "/login";
    } else {
      console.error("Error fetching exchange rates:", error);
    }
    return null;
  }
};

export const fetchCurrencies = async (): Promise<CurrencyInfo[] | null> => {
  try {
    const response = await axios.get<CurrencyInfo[]>(`${API_URL}/currencies`);
    return response.data;
  } catch (error) {
    console.error("Error fetching currencies:", error);
    return null;
  }
};

export const fetchHistoricalRates = async (
  base: string,
  target: string
): Promise<HistoricalRate[] | null> => {
  try {
    const response = await axios.get<HistoricalRate[]>(
      `${API_URL}/exchange-rates?base=${base}&target=${target}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching historical rates:", error);
    return null;
  }
};

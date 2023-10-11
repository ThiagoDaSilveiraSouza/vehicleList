import axios from "axios";
import { ICar } from "../interface";

const instance = axios.create({
  baseURL: "https://wswork.com.br/",
  timeout: 5000,
  headers: {
    "X-Custom-Header": "foobar",
    "Access-Control-Allow-Origin": "*",
    Accept: "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    Connection: "keep-alive",
  },
});

const fetchCarsData = async (): Promise<ICar[]> => {
  try {
    const response = await instance.get("cars.json");
    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchCarsByBrandData = async (): Promise<ICar[]> => {
  try {
    const response = await instance.get("cars_by_brand.json");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const carsApi = async () => {
  try {
    const [carsData, carsByBrandData] = await axios.all([
      fetchCarsData(),
      fetchCarsByBrandData(),
    ]);
    const carsList = [...carsData, ...carsByBrandData];

    return carsList;
  } catch (error) {
    throw error;
  }
};

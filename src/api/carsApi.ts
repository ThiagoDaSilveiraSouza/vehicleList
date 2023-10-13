import { ICar } from "../interface";


const baseURL = "https://wswork.com.br/"

const fetchCarsData = async (): Promise<ICar[]> => {
  try {
    const response = await fetch(`${baseURL}cars.json`, { mode: "no-cors", headers: { "Content-Type": "application/json", "accept-ranges": "bytes" } });
    // if (!response.ok) {
    //   throw new Error("Network response was not ok");
    // }
    const jsonResponse = await response.json()
    return jsonResponse
  } catch (error) {
    throw error;
  }
};

const fetchCarsByBrandData = async (): Promise<ICar[]> => {
  try {
    const response = await fetch(`${baseURL}cars_by_brand.json`, { mode: "no-cors" });
    const jsonResponse = await response.json()
    return jsonResponse
  } catch (error) {
    throw error;
  }
};

export const carsApi = async () => {
  try {
    // const [carsData, carsByBrandData] = await Promise.all([
    //   fetchCarsData(),
    //   fetchCarsByBrandData(),
    // ]);
    // const carsList = [...carsData, ...carsByBrandData];
    // return carsList;

    const carsData = await fetchCarsData()
    return carsData

  } catch (error) {
    throw error;
  }
};

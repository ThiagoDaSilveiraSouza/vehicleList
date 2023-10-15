import axios from "axios";
import { ICar } from "../interface";


const baseURL = "http://localhost:3333/"

const carsParamsList = ["cars.json", "cars_by_brand.json"]

type CarListResponseProps = {
  cars: ICar[]
}

const fetchdDataByParam = async (param: string) => {
  const url = baseURL + param
  try {
    const response = await axios.get<CarListResponseProps>(url);
    const data = response.data
    if (response.status !== 200) {
      throw new Error("Network response was not ok");
    }
    return data
  } catch (error) {
    throw error;
  }
};

export const carsApi = async () => {
  try {
    const promiseList = carsParamsList.map((currentUrl) => fetchdDataByParam(currentUrl))

    const listOfCarList = await Promise.all(promiseList);
    const joinListOfCarList = listOfCarList.reduce((joinList, currentCarList) => {
      return [...joinList, ...currentCarList.cars]
    }, [] as ICar[])

    return joinListOfCarList;
  } catch (error) {
    throw error;
  }
};

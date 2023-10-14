import { useEffect, useState } from "react";
import { ICar } from "./interface";
import { carsApi } from "./api";

function App() {
  const [carsList, setCarslist] = useState<ICar[]>([]);

  const updateCarList = async () => {
    try {
      const apiCarList = await carsApi();
      setCarslist(apiCarList);
    } catch (Error) {
      throw Error;
    }
  };

  useEffect(() => {
    updateCarList();
  }, []);

  useEffect(() => {
    console.log(carsList);
  }, [carsList]);

  return <></>;
}

export default App;

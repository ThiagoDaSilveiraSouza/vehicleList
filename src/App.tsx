import { useEffect, useState } from "react";
import "./App.css";
import { ICar } from "./interface";
import { carsApi } from "./api";

function App() {
  const [carsList, setCarslist] = useState<ICar[]>([]);

  const updateCarList = async () => {
    const apiCarList = await carsApi();

    setCarslist(apiCarList);
  };

  useEffect(() => {
    updateCarList();
  }, []);

  useEffect(()=>{
    console.log(carsList)
  },[carsList])

  return <></>;
}

export default App;

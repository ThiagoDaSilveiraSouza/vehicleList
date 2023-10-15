import { useEffect, useState } from "react";
import { ICar } from "./interface";
import { carsApi } from "./api";
import { CarList } from "./Components";
import { Heading } from "@radix-ui/themes";
import { Modal } from "./Components/Modal";

function App() {
  const [carsList, setCarslist] = useState<ICar[]>([]);
  const useAddProductModalIsOpen = useState(true);

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
    // console.log(carsList);
  }, [carsList]);

  return (
    <>
      <Heading align={"center"} size={"8"} style={{ margin: "25px 0" }}>
        Listas de carros
      </Heading>
      <CarList carList={carsList} />
      <Modal useModal={useAddProductModalIsOpen}></Modal>
    </>
  );
}

export default App;

import { useState } from "react";
import { CarList } from "../../Components";
import { Button, Flex, Heading } from "@radix-ui/themes";
import { AddCarModal } from "./components";
import { UseApiDataHook } from "../../hooks";
import { PlusIcon } from "@radix-ui/react-icons";

export const Home = () => {
  const { useCarList } = UseApiDataHook();
  const { data: carsList } = useCarList;
  const useAddProductModalIsOpen = useState(false);
  const [_, setProductModalIsOpen] = useAddProductModalIsOpen;
  return (
    <>
      <Heading align={"center"} size={"8"} style={{ margin: "25px 0" }}>
        Listas de carros
      </Heading>
      <Flex
        justify={"end"}
        style={{ padding: "30px 10px", boxSizing: "border-box" }}
      >
        <Button onClick={() => setProductModalIsOpen(true)}>
          <PlusIcon width={20} height={20} />
          Adicionar novo carro
        </Button>
      </Flex>
      <CarList carList={carsList} />
      <AddCarModal useModal={useAddProductModalIsOpen} />
    </>
  );
};

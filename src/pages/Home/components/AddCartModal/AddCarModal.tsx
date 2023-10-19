import { Dispatch, SetStateAction, useState } from "react";
import { Modal } from "../../../../Components/Modal";
import { UseApiDataHook } from "../../../../hooks";
import { ICar } from "../../../../interface";
import { Heading, Button, Flex, ScrollArea } from "@radix-ui/themes";
import * as Form from "@radix-ui/react-form";
import "./style.css";
import {
  formatToBRL,
  getTimestampOfNow,
  getYearList,
  updatePropStateValue,
} from "../../../../utils";
import { getInputsHandlerChangeFunctions } from "./utils";

interface AddCarModalProps {
  useModal: [boolean, Dispatch<SetStateAction<boolean>>];
}

const defaultValue = {
  id: 0,
  ano: new Date().getFullYear(),
  combustivel: "",
  brand: 0,
  modelo_id: 0,
  num_portas: 2,
  cor: "",
  nome_modelo: "",
  timestamp_cadastro: 0,
  valor: 0.01,
} as ICar;

export const AddCarModal = ({ useModal }: AddCarModalProps) => {
  const [_, setModalIsOpen] = useModal;
  const [currentCar, setCurrentCar] = useState<ICar>(defaultValue);
  const { useCarList } = UseApiDataHook();
  const { addData: addNewCar } = useCarList;
  const yearList = getYearList();
  const {
    colorInputHandlerChange,
    doorNumberInputHandlerChange,
    fuelSelectHandlerChange,
    nameInputHandlerChange,
    valueInputHandlerChange,
    yearSelectHandlerChange,
  } = getInputsHandlerChangeFunctions(setCurrentCar);

  const formHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const timeStamp = getTimestampOfNow();
    updatePropStateValue<ICar>("timestamp_cadastro", timeStamp, setCurrentCar);
    addNewCar(currentCar);
    setCurrentCar(defaultValue);
    setModalIsOpen(false);
  };

  return (
    <Modal useModal={useModal}>
      <Flex
        direction={"column"}
        height={"100%"}
        style={{ padding: "10px 0", boxSizing: "border-box" }}
      >
        <Heading align={"center"} size={"5"} style={{ padding: "10px 0" }}>
          Adicionar novo carro
        </Heading>
        <ScrollArea
          type="always"
          scrollbars="vertical"
          style={{
            height: "calc(100% - 30px)",
            flex: "1 1 auto",
            padding: "5px",
            boxSizing: "border-box",
          }}
        >
          <Form.Root style={{ padding: "0 10px" }} onSubmit={formHandleSubmit}>
            <Form.Field className="FormField" name="nome_modelo">
              <Flex direction={"column"}>
                <Form.Label className="FormLabel">Nome</Form.Label>
                <Form.Message className="FormMessage" match="valueMissing">
                  Por favor introduza o nome do carro
                </Form.Message>
              </Flex>
              <Form.Control asChild>
                <input
                  className="Input"
                  type="text"
                  required
                  value={currentCar.nome_modelo}
                  onChange={nameInputHandlerChange}
                />
              </Form.Control>
            </Form.Field>
            <Form.Field className="FormField" name="ano">
              <Flex direction={"column"}>
                <Form.Label className="FormLabel">Ano</Form.Label>
                <Form.Message className="FormMessage" match="valueMissing">
                  Por favor introduza o ano
                </Form.Message>
              </Flex>
              <Form.Control asChild>
                <select
                  className="Input"
                  required
                  onChange={yearSelectHandlerChange}
                >
                  {yearList.map((currentYear) => {
                    return (
                      <option key={"year-" + currentYear} value={currentYear}>
                        {currentYear}
                      </option>
                    );
                  })}
                </select>
              </Form.Control>
            </Form.Field>
            <Form.Field className="FormField" name="ano">
              <Flex direction={"column"}>
                <Form.Label className="FormLabel">Combustível</Form.Label>
                <Form.Message className="FormMessage" match="valueMissing">
                  Por favor introduza o combusível
                </Form.Message>
              </Flex>
              <Form.Control asChild>
                <select
                  className="Input"
                  onChange={fuelSelectHandlerChange}
                  required
                >
                  <option>Gasolina</option>
                  <option>Álcool</option>
                  <option>Flex</option>
                </select>
              </Form.Control>
            </Form.Field>
            <Form.Field className="FormField" name="nome_modelo">
              <Flex direction={"column"}>
                <Form.Label className="FormLabel">Cor</Form.Label>
                <Form.Message className="FormMessage" match="valueMissing">
                  Por favor introduza a cor
                </Form.Message>
              </Flex>
              <Form.Control asChild>
                <input
                  className="Input"
                  type="text"
                  required
                  value={currentCar.cor}
                  onChange={colorInputHandlerChange}
                />
              </Form.Control>
            </Form.Field>
            <Form.Field className="FormField" name="nome_modelo">
              <Flex direction={"column"}>
                <Form.Label className="FormLabel">Número de portas</Form.Label>
                <Form.Message className="FormMessage" match="valueMissing">
                  Por favor introduza o número de portas
                </Form.Message>
              </Flex>
              <Form.Control asChild>
                <input
                  className="Input"
                  type="number"
                  required
                  value={currentCar.num_portas}
                  onChange={doorNumberInputHandlerChange}
                  max={6}
                  min={2}
                />
              </Form.Control>
            </Form.Field>
            <Form.Field className="FormField" name="nome_modelo">
              <Flex direction={"column"}>
                <Form.Label className="FormLabel">Valor</Form.Label>
                <Form.Message className="FormMessage" match="valueMissing">
                  Por favor introduza o valor
                </Form.Message>
              </Flex>
              <Form.Control asChild>
                <input
                  className="Input"
                  required
                  onChange={valueInputHandlerChange}
                  value={formatToBRL(currentCar.valor)}
                />
              </Form.Control>
            </Form.Field>
            <Form.Submit asChild>
              <Button className="Button" style={{ marginTop: 10 }}>
                Adicionar
              </Button>
            </Form.Submit>
          </Form.Root>
        </ScrollArea>
      </Flex>
    </Modal>
  );
};

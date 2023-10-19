import { Flex } from "@radix-ui/themes";
import * as Tabs from "@radix-ui/react-tabs";
import { ICar } from "../../interface";
import { CarCard } from "./components";
import { orderCarsByBrand } from "./utils";
import { brandList } from "./data";
import "./style.css";

interface CartListProps {
  carList: ICar[];
}

/**
 * Componente CarList
 *
 * O componente `CarList` é uma lista de carros organizados por marca. Ele exibe uma lista de carros, agrupados por suas marcas correspondentes, em um layout de guias.
 *
 * @component
 *
 * @param {Object} props - As propriedades do componente.
 * @param {ICar[]} props.carList - Uma lista de carros que deseja exibir, onde cada carro deve ter uma propriedade `marca`.
 *
 * @example
 * // Importe o componente
 * import { CarList } from "./Components";
 *
 * // Crie uma lista de carros
 * const carList = [
 *   { nome_modelo: "Carro A", marca: "Marca A" },
 *   { nome_modelo: "Carro B", marca: "Marca B" },
 *   { nome_modelo: "Carro C", marca: "Marca A" },
 *   // ...
 * ];
 *
 * // Renderize o componente
 * <CarList carList={carList} />
 *
 * @returns {JSX.Element} Um componente React que exibe uma lista de carros organizados por marca.
 */

export const CarList = ({ carList }: CartListProps) => {
  const carsOrderedByBrand = orderCarsByBrand(carList, brandList);
  const brandsNamesList = Object.keys(carsOrderedByBrand).sort();

  return (
    <Flex wrap={"wrap"} gap={"3"} justify={"center"}>
      <Tabs.Root className="TabsRoot" defaultValue={"sem marca"}>
        <Tabs.List className="TabsList" aria-label="Manage your account">
          {brandsNamesList.map((currentBrandName) => {
            return (
              <Tabs.Trigger
                className="TabsTrigger"
                value={currentBrandName}
                key={currentBrandName}
              >
                {currentBrandName}
              </Tabs.Trigger>
            );
          })}
        </Tabs.List>
        {brandsNamesList.map((currentBrandName) => {
          return (
            <Tabs.Content
              className="TabsContent"
              value={currentBrandName}
              key={currentBrandName + "-content"}
            >
              <Flex direction={"column"} gap={"3"}>
                {carsOrderedByBrand[currentBrandName].map(
                  (currentCar, index) => {
                    return (
                      <CarCard
                        car={currentCar}
                        key={currentCar.nome_modelo + index}
                      />
                    );
                  }
                )}
              </Flex>
            </Tabs.Content>
          );
        })}
      </Tabs.Root>
    </Flex>
  );
};

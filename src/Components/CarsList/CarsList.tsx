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

import { useState } from "react";
import { Card, Text, Flex, Button } from "@radix-ui/themes";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { ICar } from "../../../../interface";

interface CartCardProps {
  car: ICar;
}

export const CarCard = ({ car }: CartCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card>
      <Flex gap={"3"} justify={"between"} align={"center"}>
        <Text as="div" size="3" style={{ textTransform: "capitalize" }}>
          {car.nome_modelo.toLowerCase()}
        </Text>
        <Button
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          style={{ cursor: "pointer" }}
          size={"1"}
        >
          <ChevronDownIcon
            width={"20px"}
            height={"20px"}
            style={{
              transform: isOpen ? "rotate(180deg)" : "none",
              transition: "0.3s",
            }}
          />
        </Button>
      </Flex>
      <Flex
        direction={"column"}
        style={{
          height: isOpen ? "150px" : "0px",
          overflow: "hidden",
          transition: "0.3s",
        }}
        gap={"1"}
      >
        <div
          style={{
            width: "100%",
            height: "1px",
            background: "gray",
            margin: "8px 0",
          }}
        />
        <Flex gap={"1"}>
          <Text size={"2"} weight={"bold"}>
            Ano:{" "}
          </Text>
          <Text size={"2"}>{car.ano}</Text>
        </Flex>
        <Flex gap={"1"}>
          <Text size={"2"} weight={"bold"}>
            Combustível:{" "}
          </Text>
          <Text size={"2"}>{car.combustivel.toLocaleLowerCase()}</Text>
        </Flex>
        <Flex gap={"1"}>
          <Text size={"2"} weight={"bold"}>
            Cor:{" "}
          </Text>
          <Text size={"2"}>{car.cor.toLocaleLowerCase()}</Text>
        </Flex>
        <Flex gap={"1"}>
          <Text size={"2"} weight={"bold"}>
            Número de portas:{" "}
          </Text>
          <Text size={"2"}>{car.num_portas}</Text>
        </Flex>
      </Flex>
    </Card>
  );
};

import { Dispatch, SetStateAction } from "react"
import { ICar } from "../../../../../interface";
import { parseFromBRL, updatePropStateValue } from "../../../../../utils";


export const getInputsHandlerChangeFunctions = (setCurrentCar: Dispatch<SetStateAction<ICar>>) => {
  return {

    nameInputHandlerChange: (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      const value = event.target.value;
      updatePropStateValue<ICar>("nome_modelo", value, setCurrentCar);
    },

    yearSelectHandlerChange: (
      event: React.ChangeEvent<HTMLSelectElement>
    ) => {
      const value = event.target.value;
      updatePropStateValue<ICar>("ano", value, setCurrentCar);
    },

    fuelSelectHandlerChange: (
      event: React.ChangeEvent<HTMLSelectElement>
    ) => {
      const value = event.target.value;
      updatePropStateValue<ICar>("combustivel", value, setCurrentCar);
    },

    colorInputHandlerChange: (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      const value = event.target.value;
      updatePropStateValue<ICar>("cor", value, setCurrentCar);
    },

    doorNumberInputHandlerChange: (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      const value = event.target.value;
      updatePropStateValue<ICar>("num_portas", value, setCurrentCar);
    },

    valueInputHandlerChange: (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      const currentValue = event.target.value;
      const floatValue = parseFromBRL(currentValue);

      updatePropStateValue<ICar>("valor", floatValue, setCurrentCar);
    }
  }
}
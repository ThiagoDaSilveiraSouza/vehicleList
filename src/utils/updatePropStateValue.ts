import { Dispatch, SetStateAction } from "react";

export const updatePropStateValue = <T>(value: string, propName: keyof T, setStateAction: Dispatch<SetStateAction<T>>) => {
  const typeIsANumber = typeof propName === "number"
  setStateAction((prevState) => {
    return {
      ...prevState,
      [propName]: typeIsANumber ? parseInt(value) : value
    }
  })
}


import { Dispatch, SetStateAction } from "react";

export const updatePropStateValue = <T extends {}>(propName: keyof T, value: T[keyof T], setStateAction: Dispatch<SetStateAction<T>>) => {
  setStateAction((prevState) => {
    return {
      ...prevState,
      [propName]: value
    }
  })
}


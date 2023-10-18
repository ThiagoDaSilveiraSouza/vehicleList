import {
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
  useState,
} from "react";
import { ICar } from "../interface";

type ApiDataPropsValues<T> = [T, Dispatch<SetStateAction<T>>];

export interface ApiDataProps {
  useCarList: ApiDataPropsValues<ICar[]>;
}

const defaultApiData: ApiDataProps = {
  useCarList: [[], () => {}],
};

export const ApiDataContext = createContext<ApiDataProps>(defaultApiData);

interface ApiDataProviderProps {
  children: ReactNode;
}

export const ApiDataProvider = ({ children }: ApiDataProviderProps) => {
  const statesValues = Object.entries(defaultApiData).reduce(
    (statesValues, [currentApiDataKey, currentApiDataValue]) => {
      type currentPropType = typeof currentApiDataValue;
      return {
        ...statesValues,
        [currentApiDataKey]: useState<currentPropType>([]),
      };
    },
    {} as ApiDataProps
  );

  return (
    <ApiDataContext.Provider value={statesValues}>
      {children}
    </ApiDataContext.Provider>
  );
};

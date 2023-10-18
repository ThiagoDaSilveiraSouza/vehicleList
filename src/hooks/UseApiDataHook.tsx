import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import { ApiDataContext } from "../contexts";
import * as api from "../api";

export const UseApiDataHook = () => {
  const context = useContext(ApiDataContext);

  type useStateProps<T> = [T[], Dispatch<SetStateAction<T[]>>];

  const updateDataByApi = async () => {
    try {
      const apiPromiseList = Object.values(api).map((currentApiUpdate) =>
        currentApiUpdate(context)
      );
      await Promise.all(apiPromiseList);
    } catch (Error) {
      throw Error;
    }
  };

  const addData = <T extends {}>(useState: useStateProps<T>) => {
    const [_, setState] = useState;
    return (newData: T) =>
      setState((prevState) => {
        const updatedState = [...prevState];
        updatedState.push(newData);
        return updatedState;
      });
  };

  const removeData = <T extends { id?: string }>(
    useState: useStateProps<T>
  ) => {
    const [_, setState] = useState;
    return (dataId: string) => {
      setState((prevState) => {
        return prevState.filter((currentData) => currentData?.id !== dataId);
      });
    };
  };

  const udpateData = <T extends { id?: string }>(
    useState: useStateProps<T>
  ) => {
    const [_, setState] = useState;
    return (data: T) => {
      setState((prevState) => {
        return prevState.map((currentData) => {
          const isSameData = currentData?.id === data.id;
          return isSameData ? data : currentData;
        });
      });
    };
  };

  type payLoadProps = {
    [key in keyof typeof context]: {
      data: (typeof context)[key][0];
      addData: (newData: (typeof context)[key][0][0]) => void;
      removeData: (dataId: string) => void;
      updateData: (data: (typeof context)[key][0][0]) => void;
    };
  };

  const payLoad = Object.entries(context).reduce<payLoadProps>(
    (payLoad, [key, useState]) => {
      return {
        ...payLoad,
        [key]: {
          data: context[key as keyof typeof context][0],
          addData: addData(useState),
          removeData: removeData(useState),
          udpateData: udpateData(useState),
        },
      };
    },
    {} as payLoadProps
  );

  useEffect(() => {
    updateDataByApi();
  }, []);

  return payLoad;
};

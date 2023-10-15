import { ICar, Ibrand } from "../../../interface";



export const orderCarsByBrand = (carList: ICar[], brandList: Ibrand[]) => carList.reduce((orderByBrand, currentCar) => {
  const { brand } = currentCar;

  const currentBrandName =
    brandList.find((currentBrand) => currentBrand.id === brand)?.name || "sem marca";

  orderByBrand[currentBrandName as keyof typeof orderByBrand] =
    orderByBrand[currentBrandName as keyof typeof orderByBrand] || [];

  orderByBrand[currentBrandName as keyof typeof orderByBrand].push(
    currentCar
  );
  return orderByBrand;
}, {} as { [key: string]: ICar[] });
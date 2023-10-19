export const formatToBRL = (value: number): string => {
  return value.toLocaleString("pt-BR", { currency: "BRL", style: "currency", minimumFractionDigits: 2, minimumIntegerDigits: 2 })
};
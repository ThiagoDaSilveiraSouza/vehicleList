export const parseFromBRL = (brlValue: string): number => {
  const numericValue = parseFloat(brlValue.replace(/[^\d,.-]/g, '').padStart(2, "0").replace(',', '.'));
  return numericValue;
}
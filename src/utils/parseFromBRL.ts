export const parseFromBRL = (brlValue: string): number => {
  const formatedValue = brlValue
    .replace(/[^\d]/g, "")
    .replace(/(\d)(?=\d{2}$)/g, "$1.");
  const floatvalue = parseFloat(formatedValue || "0");

  return floatvalue
}
export const getYearList = (firstYear = 1900, lastYear?: number, returnType: "string" | "number" = "number") => {
  const yearList = []
  const targetLastYear = lastYear || new Date().getFullYear()

  for (let currentYear = firstYear; currentYear <= targetLastYear; currentYear++) {
    const updateTypeYear = returnType === "number" ? currentYear : currentYear.toString()
    yearList.push(updateTypeYear)
  }

  return yearList.reverse()
}
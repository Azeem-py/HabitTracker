export const getMaxDate = (monthIndex) => {
  const date = new Date()
  const year = date.getFullYear()

  const month = !monthIndex ? date.getMonth() + 1 : monthIndex + 1
  const lastDate = new Date(year, month, 0).getDate()

  return lastDate
}

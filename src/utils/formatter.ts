export const formatDate = (d: string | number | Date) => {
  const date = new Date(d)
  return date.toLocaleDateString()
}

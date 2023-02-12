export const formatDate = (date: Date) => {
  return date.toLocaleString("es-CO", {
    timeZone: "America/Bogota",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  })
}

export default async function IndexPage() {
  const todayDate = new Date()
  const formtDate = formatDate(todayDate)

  return <>Esta la hora que es en el servidor: {formtDate}</>
}

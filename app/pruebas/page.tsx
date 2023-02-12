const formatDate = (date: Date) => {
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

export default function Pruebas() {
  const todayDateLocal = new Date()
  const todayDateServer = new Date()
  const formatedDate = formatDate(todayDateLocal)

  return (
    <div>
      <p>{`Esta la hora que es en local: ${formatedDate}`}</p>
      <p>{`Esta la hora que es en server: ${todayDateServer}`}</p>
    </div>
  )
}

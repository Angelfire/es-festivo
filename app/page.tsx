"use client"

import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Home() {
  const { data, error } = useSWR("/api/colidays", fetcher)

  if (error)
    return (
      <main className="mx-4 flex flex-1 items-center justify-center sm:container">
        <section className="self-center">Failed to load</section>
      </main>
    )

  if (!data)
    return (
      <main className="mx-4 flex flex-1 items-center justify-center sm:container">
        <section className="self-center">Loading holidays...</section>
      </main>
    )

  const {
    isHolidayToday,
    nextHoliday: { holidayCountNext, holidayLocaleDate, holidayName },
  } = data

  const pluralizeFalta = holidayCountNext > 1 ? "faltan" : "falta"
  const pluralizeDia = holidayCountNext > 1 ? "días" : "día"

  return (
    <main className="mx-4 flex flex-1 items-center justify-center sm:container">
      <section className="self-center">
        <div className="text-center">
          <h1 className="mb-8 text-5xl font-bold">¿Es festivo en Colombia?</h1>
          {isHolidayToday ? (
            <>
              <p className="text-4xl">¡Sí!</p>
              <p className="text-3xl">
                ¡Hoy es festivo y celebramos: {holidayName}!
              </p>
            </>
          ) : (
            <>
              <p className="mb-4 text-4xl">¡No!</p>
              <p className="mb-4 text-3xl">
                Aún {pluralizeFalta} {holidayCountNext} {pluralizeDia}
              </p>
              <p className="text-2xl">
                El próximo festivo es el día {holidayLocaleDate} y celebramos:{" "}
                {holidayName}
              </p>
            </>
          )}
        </div>
      </section>
    </main>
  )
}

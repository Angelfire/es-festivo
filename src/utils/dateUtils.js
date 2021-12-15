import colombianHolidays from 'colombia-holiday'

const formatDate = (date) => {
  return date.toLocaleString('es-CO', {
    timeZone: 'America/Bogota',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const getColombianHolidays = (year = new Date().getFullYear()) => {
  const currentDate = new Date()
  const sumYears = [...colombianHolidays(year), ...colombianHolidays(year + 1)]
  const fullHolidays = sumYears.map((holiday, index) => {
    const holidayDateT = new Date(`${holiday.holiday.replace(/\//g, '-')}T00:00:00.000-05:00`)
    const daysCountNextHoliday = Math.ceil((new Date(holiday.holiday).getTime() - new Date(currentDate).getTime()) / (1000 * 60 * 60 * 24))

    return {
      index,
      diff: new Date(currentDate).getTime() - holidayDateT.getTime(),
      holidayDate: holiday.holiday,
      holidayCountNext: daysCountNextHoliday,
      holidayName: holiday.holidayName,
      holidayLocaleDate: formatDate(holidayDateT)
    }
  })

  const [nextHoliday] = fullHolidays.filter(nh => (nh.diff) <= 0)

  return {
    count: fullHolidays.length,
    holidays: fullHolidays.map(h => ({ ...h, diff: undefined })),
    isHolidayToday: nextHoliday.holidayCountNext === 0,
    nextHoliday: nextHoliday ? { ...nextHoliday, diff: undefined } : null
  }
}

export default getColombianHolidays

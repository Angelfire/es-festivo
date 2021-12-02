import colombianHolidays from 'colombia-holiday'

const formatDate = (date) => {
  const holyDate = new Date(date)

  return holyDate.toLocaleString('es-CO', {
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
  const clearCurrentDate = currentDate.setHours(0, 0, 0, 0)
  const fullHolidays = sumYears.map((holiday, index) => {
    const holidayDate = new Date(holiday.holiday)
    const daysCountNextHoliday = (new Date(holiday.holiday).getTime() - new Date(clearCurrentDate)) / (1000 * 60 * 60 * 24)

    return {
      index,
      diff: new Date(clearCurrentDate).getTime() - holidayDate.getTime(),
      holidayDate: holiday.holiday,
      holidayCountNext: daysCountNextHoliday,
      holidayName: holiday.holidayName,
      holidayLocaleDate: formatDate(holidayDate),
      holidayDateN: formatDate(holiday.holiday)
    }
  })

  const [nextHoliday] = fullHolidays.filter(nh => (nh.diff) <= 0)

  return {
    count: fullHolidays.length,
    holidays: fullHolidays.map(h => ({ ...h, diff: undefined })),
    isHolidayToday: nextHoliday.daysCountNextHoliday === 0,
    nextHoliday: nextHoliday ? { ...nextHoliday, diff: undefined } : null
  }
}

export default getColombianHolidays

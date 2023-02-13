import colombianHolidays from 'colombia-holiday'

export const formatDate = (date: string) => {
  return new Date(date).toLocaleString('es-CO', {
    timeZone: 'America/Bogota',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

type Holidays = {
  holiday: string
  celebrationDay: string
  holidayName: string
}

export const getHolidays = () => {
  const currentYear = new Date().getFullYear()
  const currentDate = new Date()
  const now = Date.now()
  const currentYearHolidays = colombianHolidays(currentYear) as Holidays[]
  const nextYeartHolidays = colombianHolidays(currentYear + 1) as Holidays[]

  const sumYears: Holidays[] = [...currentYearHolidays, ...nextYeartHolidays]
  
  const fullHolidays = sumYears.map((holiday, index) => {
    const daysCountNextHoliday = Math.ceil(((new Date(holiday.holiday).getTime() - new Date(currentDate).getTime()) - new Date(now - 5 * 60 * 60 * 1000).getTime()) / (1000 * 60 * 60 * 24))

    // Subtract 5 hours (in milliseconds) to get Colombia time
    // const colombiaTime = new Date(now - 5 * 60 * 60 * 1000);

    return {
      index,
      diff: new Date(currentDate).getTime() - new Date(holiday.holiday).getTime(),
      holidayDate: holiday.holiday,
      holidayCountNext: daysCountNextHoliday - 1,
      holidayName: holiday.holidayName,
      holidayLocaleDate: formatDate(holiday.holiday)
    }
  })

  const [nextHoliday] = fullHolidays.filter(nh => (nh.diff) <= 0)

  return {
    count: fullHolidays.length,
    holidays: fullHolidays.map(h => ({ ...h })),
    nextHoliday: nextHoliday ? { ...nextHoliday } : null,
    isHolidayToday: nextHoliday.holidayCountNext === 0
  }
}

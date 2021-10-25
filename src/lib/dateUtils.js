import colombianHolidaysByYear from 'colombia-holiday'

const holidays = colombianHolidaysByYear()
const currentDate = new Date()
const cleanCurrentDate = currentDate?.setHours(0, 0, 0, 0)
const offset = currentDate?.getTimezoneOffset() * 60 * 1000
const currentDateWithOffset = (new Date(currentDate?.getTime() - offset))
  .toISOString()
  .split('T')[0]
  .replaceAll('-', '/')
const nearestHoliday = holidays.filter((date) => date.holiday >= currentDateWithOffset).sort()[0]
const { holiday, holidayName } = nearestHoliday
const isHolidayToday = cleanCurrentDate === new Date(holiday).getTime()
const fullHoliday = new Date(holiday).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
const daysCountNextHoliday = (new Date(holiday).getTime() - currentDate) / (1000 * 60 * 60 * 24);

export {
  daysCountNextHoliday,
  fullHoliday,
  holidayName,
  isHolidayToday
}

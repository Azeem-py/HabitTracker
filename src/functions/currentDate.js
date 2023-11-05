export default function getTodayDateFormatted() {
  const today = new Date()
  const dayOfWeek = today.toLocaleDateString('en-US', { weekday: 'short' })
  const day = today.getDate()
  const month = today.toLocaleDateString('en-US', { month: 'short' })
  const year = today.getFullYear()

  return `${dayOfWeek}, ${day} ${month} ${year}`
}

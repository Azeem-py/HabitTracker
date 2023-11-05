import { useContext, useState } from 'react'
import { currentMonth } from '../functions/globalData'
import { PiCaretLeftLight, PiCaretRightLight } from 'react-icons/pi'

const MonthControl = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const { activeMonth, setActiveMonth } = useContext(currentMonth)
  const date = new Date()
  date.setMonth(activeMonth)

  const handleChange = (e) => {
    setActiveMonth(months.indexOf(e.target.value))
  }

  return (
    <div className='flex items-center justify-around mt-5 text-2xl font-bold text-defaultColor'>
      <PiCaretLeftLight />
      {/* {monthName} */}
      <select
        value={months[activeMonth]}
        className='select-month text-center outline-none '
        onChange={handleChange}
      >
        {months.map((month, index) => {
          return (
            <option key={index} className='month-option'>
              {month}
            </option>
          )
        })}
      </select>
      <PiCaretRightLight />
    </div>
  )
}

export default MonthControl

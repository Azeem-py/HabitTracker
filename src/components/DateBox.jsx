import { useContext, useState, useMemo } from 'react'
import { currentMonth, activeBox } from '../functions/globalData'
import { getMaxDate } from '../functions/MaxDate'

const DateBox = ({ date }) => {
  const month = useContext(currentMonth)['activeMonth']
  const { activeDateBox, setActiveDateBox } = useContext(activeBox)

  const MonthShortName = () => {
    const date = new Date()
    date.setMonth(month)
    return date.toLocaleString('en-US', { month: 'short' })
  }

  const checkActiveDate = () => {
    const date = new Date()
    const monthIn = date.getMonth()

    if (monthIn !== month) {
      return getMaxDate(month)
    } else return date.getDate()
  }

  setActiveDateBox(checkActiveDate)
  console.log(activeDateBox)

  const inActiveStyle =
    'flex flex-col items-center justify-center border py-2 px-5 text-2xl font-bold text-[#2F2F2F]  rounded'

  const activeStyle =
    'flex flex-col items-center justify-center border py-2 px-5 text-2xl font-bold text-defaultColor bg-[#FFEDDC] border-[#FFD9B6] rounded'

  return (
    <div className={date === activeDateBox ? activeStyle : inActiveStyle}>
      <p className=''>{date}</p>
      <p className='text-base font-normal'>{MonthShortName()}</p>
    </div>
  )
}

export default DateBox

import { useState, useRef, useContext } from 'react'

import TodayHabit from '../components/TodayHabit'
import { getMaxDate } from '../functions/MaxDate'
import DateBox from '../components/DateBox'
import { BsArrowLeftShort } from 'react-icons/bs'
import MonthControl from '../components/MonthControl'

import { currentMonth, activeBox } from '../functions/globalData'

const AllHabit = () => {
  const [activeMonth, setActiveMonth] = useState(useContext(currentMonth))
  const [activeDateBox, setActiveDateBox] = useState(useContext(activeBox))
  const [activeDate, setActiveDate] = useState(new Date().getDate())
  console.log(activeDate)
  const dateBoxtoRender = Array.from(
    { length: getMaxDate(activeMonth) },
    (_, index) => index + 1
  )
  return (
    <currentMonth.Provider value={{ activeMonth, setActiveMonth }}>
      <activeBox.Provider value={{ activeDateBox, setActiveDateBox }}>
        <div className='p-5 '>
          <header className='flex gap-3 items-center text-2xl font-semibold mt-7'>
            <span className='text-3xl'>
              <BsArrowLeftShort />
            </span>
            <h3>Your Habits</h3>
          </header>
          <section className='mt-10'>
            <MonthControl />
          </section>
          <section className='w-full  flex overflow-x-auto gap-2 mt-7 px-1'>
            {dateBoxtoRender.map((index) => {
              return (
                <div key={index}>
                  <DateBox date={index} />
                </div>
              )
            })}
          </section>

          <TodayHabit />
        </div>
      </activeBox.Provider>
    </currentMonth.Provider>
  )
}

export default AllHabit

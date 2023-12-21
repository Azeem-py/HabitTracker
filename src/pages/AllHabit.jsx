import { useState, useContext } from 'react'
import TodayHabit from '../components/TodayHabit'
import DateBox from '../components/DateBox'
import { BsArrowLeftShort } from 'react-icons/bs'
import MonthControl from '../components/MonthControl'
import { currentMonth, activeBox } from '../data/globalData'
import { useNavigate } from 'react-router-dom'

const AllHabit = () => {
  const navigate = useNavigate()
  const [activeMonth, setActiveMonth] = useState(useContext(currentMonth))
  const [activeDateBox, setActiveDateBox] = useState(useContext(activeBox))

  return (
    <currentMonth.Provider value={{ activeMonth, setActiveMonth }}>
      <activeBox.Provider value={{ activeDateBox, setActiveDateBox }}>
        <div className='p-5 '>
          <header className='flex gap-3 items-center text-2xl font-semibold mt-7'>
            <span className='text-3xl' onClick={() => navigate('/')}>
              <BsArrowLeftShort />
            </span>
            <h3>Your Habits</h3>
          </header>
          <section className='mt-10'>
            <MonthControl />
          </section>

          <DateBox />
          <TodayHabit />
        </div>
      </activeBox.Provider>
    </currentMonth.Provider>
  )
}

export default AllHabit

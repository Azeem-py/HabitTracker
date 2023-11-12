import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ModPopOver from './ModPopOver'
const TodayHabit = () => {
  const navigate = useNavigate()

  const habitData = [
    { name: 'Read Philosophy' },
    { name: 'Study Math' },
    { name: 'Code' },
  ]

  const Habit = ({ name, index }) => {
    return (
      <div className='flex justify-between items-center bg-[#EDFFF4] p-4 mb-2'>
        <p className='text-[#37C871] text-lg font-bold'>{name}</p>
        <aside className='flex gap-2'>
          <input type='checkbox' className='w-5 accent-[#37C871]' />

          <ModPopOver />
        </aside>
      </div>
    )
  }

  return (
    <div className='mt-5 shadow-card p-3'>
      <header className='flex justify-between font-bold'>
        <p className=' text-xl'>Today Habits</p>
        <aside
          className='font-bold text-lg text-defaultColor'
          onClick={() => navigate('/all-habits')}
        >
          See all
        </aside>
      </header>

      <section>
        <ul className='mt-2'>
          {habitData.map((data, index) => {
            return (
              <li key={index}>
                <Habit name={data['name']} index={index} />
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}

export default TodayHabit

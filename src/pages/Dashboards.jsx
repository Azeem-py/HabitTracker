import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import TodayHabit from '../components/TodayHabit'
import YourGoals from '../components/YourGoals'

import NewHabitModal from '../components/NewHabitModal'

import { FaPlus } from 'react-icons/fa'
import { useState } from 'react'

const Dashboards = () => {
  const [showModal, setShowModal] = useState(false)
  const percentage = 66

  const HabitModalBtn = () => {
    return (
      <div className='fixed bottom-16 right-2'>
        <button
          className='aspect-square w-[3.875rem]  rounded-full shadow-md flex items-center justify-center'
          type='button'
          onClick={() => setShowModal(true)}
        >
          <div className='flex justify-center items-center bg-modalBtn w-[90%] aspect-square rounded-full shadow-card text-white text-2xl'>
            <FaPlus />
          </div>
        </button>
      </div>
    )
  }
  return (
    <div className=' w-full p-3 overflow-y-scroll'>
      <section className='habit-summary h-48 rounded p-3 flex items-center justify-around'>
        <div className='w-28 h-28   '>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={12}
            styles={buildStyles({
              strokeLinecap: 'butt',
              textColor: '#fff',
              pathColor: 'rgba(255, 255, 255, 0.7)',
              trailColor: 'rgba(225, 225, 225, 0.2)',
            })}
          />
        </div>
        <div className='text-white font-bold text-xl'>
          <p>3 out of 5</p>
          <p className='font-semibold'>Completed today!</p>
        </div>
      </section>

      <HabitModalBtn />
      <TodayHabit />
      <YourGoals />
      <NewHabitModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  )
}

export default Dashboards

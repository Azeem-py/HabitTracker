import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import TodayHabit from '../micro_components/TodayHabit'
import YourGoals from '../micro_components/YourGoals'

import NewHabitModal from '../micro_components/NewHabitModal'

const Dashboards = () => {
  const percentage = 66
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

      <TodayHabit />
      <YourGoals />
      <NewHabitModal />
    </div>
  )
}

export default Dashboards

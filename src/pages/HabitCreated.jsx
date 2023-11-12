import DoneSVG from '../assets/Notes_Outline 1.svg'
import { useNavigate } from 'react-router-dom'

const HabitCreated = () => {
  const navigate = useNavigate()
  return (
    <div className='w-screen h-screen flex flex-col py-3 px-7'>
      <img src={DoneSVG} alt='Habit Created' />
      <section className='text-center'>
        <h2 className='font-bold text-3xl mb-3'>Done!</h2>
        <p className='text-[#666] text-lg'>
          New Habit Goal has added Let’s do the best to achieve your goal!
        </p>
        <button
          className='linearOrange h-12 w-full mt-5 rounded-md text-white font-bold'
          onClick={() => navigate('/')}
        >
          OK
        </button>
      </section>
    </div>
  )
}

export default HabitCreated

import { BsThreeDotsVertical } from 'react-icons/bs'

const TodayHabit = () => {
  return (
    <div className='mt-5 shadow-card p-3'>
      <header className='flex justify-between font-bold'>
        <p className=' text-xl'>Today Habits</p>
        <aside className='font-bold text-lg text-defaultColor'>See all</aside>
      </header>

      <section>
        <ul className='mt-2'>
          <li className='flex justify-between items-center bg-[#EDFFF4] p-4 mb-2'>
            <p className='text-[#37C871] text-lg font-bold'>Meditating</p>
            <span className='flex gap-1'>
              <input type='checkbox' className='w-5 accent-[#37C871]' />
              <BsThreeDotsVertical />
            </span>
          </li>
          <li className='flex justify-between items-center bg-[#EDFFF4] p-4 mb-2'>
            <p className='text-[#37C871] text-lg font-bold'>Read Philosophy</p>
            <span className='flex gap-1'>
              <input type='checkbox' className='w-5 accent-[#37C871] ' />
              <BsThreeDotsVertical />
            </span>
          </li>
          <li className='flex justify-between items-center p-4 mb-2 bg-[#FBFBFB]'>
            <p className=' text-lg font-bold'>Study Mathematics</p>
            <span className='flex gap-1'>
              <input type='checkbox' className='w-5 accent-[#37C871] ' />
              <BsThreeDotsVertical />
            </span>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default TodayHabit

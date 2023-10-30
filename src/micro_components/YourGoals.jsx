import { BsThreeDotsVertical } from 'react-icons/bs'
import ProgressBar from './ProgressBar'

const YourGoals = () => {
  return (
    <div className='mt-5 shadow-card p-3'>
      <header className='flex justify-between font-bold'>
        <p className=' text-xl'>Your Goals</p>
        <aside className='font-bold text-lg text-defaultColor'>See all</aside>
      </header>

      <main className='mt-5'>
        <div className='bg-[#FBFBFB] text-[#2F2F2F] p-2 flex flex-col gap-1'>
          <span className='flex justify-between'>
            <p className=' font-bold text-lg'>Finish 5 Philosophy books</p>
            <BsThreeDotsVertical />
          </span>
          <ProgressBar />
          <p className='font-medium text-sm'>5 from 7 days target</p>
          <p className='font-semibold text-defaultColor'>Everyday</p>
        </div>
        <div className='bg-[#FBFBFB] text-[#2F2F2F] p-2 flex flex-col gap-1'>
          <span className='flex justify-between'>
            <p className=' font-bold text-lg'>Sleep before 11pm</p>
            <BsThreeDotsVertical />
          </span>
          <ProgressBar />
          <p className='font-medium text-sm'>5 from 7 days target</p>
          <p className='font-semibold text-defaultColor'>Everyday</p>
        </div>
      </main>
    </div>
  )
}

export default YourGoals

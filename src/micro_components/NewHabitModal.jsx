// Modal.js

import { useState } from 'react'
import { FaTimes, FaPlus } from 'react-icons/fa'
import DropDown from './DropDown'

const NewHabitModal = () => {
  const [showModal, setShowModal] = useState(false)

  // these states are for the habit period
  const [period, setPeriod] = useState(30)

  const period_data = [
    { value: 90, name: '3 months (90 days)' },
    { value: 30, name: '1 month (30 days)' },
    { value: 14, name: '2 weeks (14 days)' },
    { value: 7, name: '1 week (7 days)' },
  ]

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

      {showModal ? (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='bg-white w-[90vw] max-w-md p-6 rounded-lg shadow-lg'>
            <header className='flex justify-between items-center border-b p-2'>
              <h3 className='text-xl font-semibold '>Create New Habit Goal</h3>
              <button
                className='text-red-500 font-semibold hover:text-red-700'
                onClick={() => setShowModal(false)}
              >
                <FaTimes /> {/* Cancel icon */}
              </button>
            </header>
            <main className='mt-5'>
              <div className='flex flex-wrap flex-col gap-3'>
                <section className='flex flex-col gap-2'>
                  <label
                    htmlFor='habit-name'
                    className='text-[#2F2F2F] font-semibold text-lg'
                  >
                    Habit Name
                  </label>
                  <input
                    id='habit-name'
                    className='h-[2.625rem] outline-none border rounded py-6 px-3'
                  />
                </section>
                <section className='flex flex-col gap-2'>
                  <label
                    htmlFor='your-goal'
                    className='text-[#2F2F2F] font-semibold text-lg'
                  >
                    Your Goal
                  </label>
                  <input
                    id='your-goal'
                    className='h-[2.625rem] outline-none border rounded py-6 px-3'
                  />
                </section>
                <section className='space-y-3'>
                  <div className='flex items-center justify-between '>
                    <p className='text-lg font-semibold '>Period</p>
                    <DropDown
                      data={period_data}
                      stateFunc={setPeriod}
                      state={period}
                    />
                  </div>
                </section>
              </div>
              <button className='linearOrange h-12 w-full mt-5 rounded-md text-white font-bold'>
                Create New
              </button>
            </main>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default NewHabitModal

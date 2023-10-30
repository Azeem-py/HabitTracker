// Modal.js

import { useState } from 'react'
import { FaTimes, FaPlus } from 'react-icons/fa'

const NewHabitModal = () => {
  const [showModal, setShowModal] = useState(false)

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
            <header className='flex justify-between items-center border'>
              <h3 className='text-xl font-semibold mb-4'>
                Create New Habit Goal
              </h3>
              <button
                className='text-red-500 font-semibold hover:text-red-700'
                onClick={() => setShowModal(false)}
              >
                <FaTimes /> {/* Cancel icon */}
              </button>
            </header>

            {/* Your form or other content goes here */}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default NewHabitModal

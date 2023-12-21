import { useEffect, useState } from 'react'
import getTodayDateFormatted from '../functions/currentDate'

const Top = () => {
  const [name, setName] = useState('')

  useEffect(() => {
    setName(localStorage.getItem('name'))
  }, [])
  return (
    <header className='text-[#2F2F2F] mt-1'>
      {name && (
        <div>
          <p className='text-xl font-bold mb-1 '>{getTodayDateFormatted()}</p>
          <p className='text-3xl font-extrabold tracking-wider'>
            Hello, <span className='text-defaultColor'>{name}!</span>
          </p>
        </div>
      )}
    </header>
  )
}

export default Top

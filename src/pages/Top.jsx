import getTodayDateFormatted from '../functions/currentDate'

const Top = () => {
  return (
    <header className='text-[#2F2F2F] mt-1'>
      <p className='text-xl font-bold mb-1 '>{getTodayDateFormatted()}</p>
      <p className='text-3xl font-extrabold tracking-wider'>
        Hello, <span className='text-defaultColor'>Azeem!</span>
      </p>
    </header>
  )
}

export default Top

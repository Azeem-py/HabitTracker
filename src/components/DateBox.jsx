import { useContext, useEffect, useMemo, useRef } from 'react'
import { currentMonth, activeBox } from '../data/globalData'
import { getMaxDate } from '../functions/MaxDate'

const DateBox = ({ date }) => {
  const month = useContext(currentMonth)['activeMonth']
  const { activeDateBox, setActiveDateBox } = useContext(activeBox)

  const dateBoxtoRender = Array.from(
    { length: getMaxDate(month) },
    (_, index) => index + 1
  )

  const MonthShortName = useMemo(() => {
    const date = new Date()
    date.setMonth(month)
    return date.toLocaleString('en-US', { month: 'short' })
  }, [month])

  const checkActiveDate = () => {
    const date = new Date()
    const monthIn = date.getMonth()

    if (monthIn !== month) {
      return getMaxDate(month)
    } else return date.getDate()
  }

  setActiveDateBox(checkActiveDate)

  const inActiveStyle =
    'flex flex-col items-center justify-center border py-2 px-5 text-2xl font-bold text-[#2F2F2F]  rounded'

  const activeStyle =
    'flex flex-col items-center justify-center border py-2 px-5 text-2xl font-bold text-defaultColor bg-[#FFEDDC] border-[#FFD9B6] rounded'

  const activeBoxRef = useRef(null)

  useEffect(() => {
    console.log('finished')
    activeBoxRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [activeDateBox])

  return (
    <section className='w-full  flex overflow-x-auto gap-2 mt-7 px-1'>
      {dateBoxtoRender.map((index) => {
        return (
          <div key={index} ref={activeDateBox === index ? activeBoxRef : null}>
            {/* <div key={index}> */}
            <div
              className={index === activeDateBox ? activeStyle : inActiveStyle}
            >
              <p className=''>{index}</p>
              <p className='text-base font-normal'>{MonthShortName}</p>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default DateBox

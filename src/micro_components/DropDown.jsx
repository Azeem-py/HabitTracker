import { useState } from 'react'
import { PiCaretDownBold } from 'react-icons/pi'

const DropDown = ({ data, stateFunc, state }) => {
  const [drop, setDrop] = useState(false)

  // const [value, setValue] = useState(30)

  // this function is for name the paragraph tag that display the name of the current value
  const getCurrentName = (value) => {
    const obj = data.find((obj) => obj.value == value)

    return obj?.name
  }

  const activeValueStyle = 'bg-[#E7E7E7]'
  const handleChange = (e) => {
    const id = e.target.id
    setDrop(!drop)
    stateFunc(id)
  }
  return (
    <div className='  rounded text-lg'>
      <div
        className='bg-[#E7E7E7] flex justify-between items-center p-2'
        onClick={() => setDrop(!drop)}
      >
        <p>{getCurrentName(state)}</p>
        <PiCaretDownBold className='text-2xl' />
      </div>
      {drop && (
        <ul className=' text-right mt-1 p-2 z-10'>
          {data.map((item, index) => {
            return (
              <li
                key={index}
                id={item['value']}
                className={`border-b p-1 ${
                  item['value'] == state && activeValueStyle
                }`}
                onClick={handleChange}
              >
                {item['name']}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default DropDown

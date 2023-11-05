import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const DropDown = ({ data, stateFunc, state }) => {
  // this function is for name the paragraph tag that display the name of the current value
  const getCurrentName = (value) => {
    const obj = data.find((obj) => obj.value == value)
    return obj?.name
  }
  const [optionName, setOptionName] = useState(getCurrentName(state))

  const handleChange = (e) => {
    const value = e.target.value
    stateFunc(value)
  }

  useEffect(() => setOptionName(state), [state])
  return (
    <div>
      <select
        value={optionName}
        onChange={handleChange}
        className='bg-[#E7E7E7] p-2 text-lg font-semibold'
      >
        {data.map((item, index) => {
          return (
            <option key={index} value={item['value']} className=''>
              {item['name']}
            </option>
          )
        })}
      </select>
    </div>
  )
}

DropDown.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  state: PropTypes.any,
  stateFunc: PropTypes.func,
}

export default DropDown

import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const InputGroup = ({ inputData, login = false }) => {
  const [loadComponent, setLoadComponent] = useState(false)
  const [inputValues, setInputValues] = useState()

  const authText = login ? 'Login' : 'Sign Up'

  const initiateFormValue = async () => {
    const obj = Object.fromEntries(
      inputData.map((input) => [input['name'], ''])
    )
    return obj
  }

  useEffect(() => {
    initiateFormValue()
      .then((obj) => setInputValues({ ...obj }))
      .finally(() => setLoadComponent(true))
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    const initialValues = { ...inputValues }
    setInputValues({ ...initialValues, [name]: value })
  }

  return (
    <div className='flex flex-col gap-[1.38rem]'>
      {loadComponent &&
        inputData.map((input, index) => {
          return (
            <span key={index} className='flex flex-col gap-2'>
              <label className='text-[#666] text-lg font-semibold'>
                {input['label'].toUpperCase()}
              </label>
              <input
                name={input['name']}
                type={input['type']}
                value={inputValues[input['name']]}
                onChange={handleChange}
                className='h-[2.625rem] outline-none border rounded py-6 px-3'
              />
            </span>
          )
        })}
      <footer>
        {login && (
          <aside className='flex justify-between text-lg font-bold  items-center my-4'>
            <span className='flex gap-1'>
              <input type='checkbox' name='remember-me' />
              <label htmlFor='remember-me' className='text-[#666]'>
                Remember me
              </label>
            </span>
            <span>
              <p className='text-[#FF5C00]  '>Forgotten Password?</p>
            </span>
          </aside>
        )}
        <button className='btn w-full rounded text-center text-lg text-white font-semibold h-12'>
          {authText}
        </button>
      </footer>
    </div>
  )
}

InputGroup.propTypes = {
  inputData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  login: PropTypes.bool,
}
export default InputGroup

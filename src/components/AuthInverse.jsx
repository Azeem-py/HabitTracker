import { PiCaretRightBold } from 'react-icons/pi'

const AuthInverse = ({ auth }) => {
  return (
    <span className='text-[#FF5C00] text-lg font-extrabold flex items-center justify-center '>
      {auth}
      <PiCaretRightBold />
    </span>
  )
}

export default AuthInverse

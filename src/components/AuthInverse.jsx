import { PiCaretRightBold } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const AuthInverse = ({ auth }) => {
  const navigate = useNavigate()
  const handleAuthInverse = () => navigate(`/${auth.toLowerCase()}`)
  return (
    <span
      className='text-[#FF5C00] text-lg font-extrabold flex items-center justify-center'
      onClick={handleAuthInverse}
    >
      {auth}
      <PiCaretRightBold />
    </span>
  )
}

AuthInverse.propTypes = {
  auth: PropTypes.string,
}

export default AuthInverse

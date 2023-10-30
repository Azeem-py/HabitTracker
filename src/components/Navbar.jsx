import { FiHome, FiActivity, FiSettings } from 'react-icons/fi'

const Navbar = () => {
  return (
    <div className='h-[6rem] flex justify-around items-center text-defaultColor text-2xl'>
      <FiHome />
      <FiActivity />
      <FiSettings />
    </div>
  )
}

export default Navbar

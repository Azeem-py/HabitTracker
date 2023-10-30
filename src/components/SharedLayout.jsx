import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Top from './Top'

const SharedLayout = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-between pt-2 px-2'>
      <Top />
      <Outlet />
      <Navbar />
    </div>
  )
}

export default SharedLayout

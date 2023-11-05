import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SignUp from './pages/SignUp'
import Login from './pages/Login'

import SharedLayout from './pages/SharedLayout'
import Dashboards from './pages/Dashboards'
import HabitCreated from './pages/HabitCreated'
import AllHabit from './pages/AllHabit'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<div>home page</div>} />  */}
        <Route path='signup' element={<SignUp />} />
        <Route path='login' element={<Login />} />
      </Routes>

      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Dashboards />} />
        </Route>
        <Route path='/habit-created' element={<HabitCreated />} />
        <Route path='/all-habits' element={<AllHabit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

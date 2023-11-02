import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SignUp from './components/SignUp'
import Login from './components/Login'

import SharedLayout from './components/SharedLayout'
import Dashboards from './components/Dashboards'
import HabitCreated from './components/HabitCreated'
import AllHabit from './components/AllHabit'

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

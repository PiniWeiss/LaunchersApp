import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import AddLauncher from './pages/AddLauncher'
import Home from './pages/Home'
import LauncherDetails from './pages/launcherDetails'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import PrivateComponent from './components/PrivateComponent'

import UserDetails from './pages/UserDetails'
import MenageUsers from './pages/MenageUsers'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Navigate to={"/login"} replace />} />

        <Route path='/' element={<PrivateComponent userTypes={["admin", "airSoldier", "intelligenceSoldier"]}><Home /></PrivateComponent>} />

        <Route path='/users' element={<PrivateComponent userTypes={["admin"]}><MenageUsers /></PrivateComponent>} />
        <Route path='/user' element={<PrivateComponent userTypes={["admin"]}><UserDetails /></PrivateComponent>} />
        <Route path='/addlauncher' element={<PrivateComponent userTypes={["admin", "intelligenceSoldier"]}><AddLauncher /></PrivateComponent>} />
        <Route path='/launcherdetails/:id' element={<PrivateComponent userTypes={["admin", "airSoldier", "intelligenceSoldier"]}><LauncherDetails /></PrivateComponent>} />
      </Routes>
    </>
  )
}

export default App

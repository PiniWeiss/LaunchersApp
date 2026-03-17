import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import AddLauncher from './pages/AddLauncher'
import Home from './pages/Home'
import LauncherDetails from './pages/launcherDetails'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import PrivateComponent from './components/PrivateComponent'
import Admin from './pages/Admin'
import AirSoldier from './pages/AirSoldier'
import IntelligenceSoldier from './pages/IntelligenceSoldier'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Navigate to={"/login"} replace />} />

        <Route path='/admin' element={<PrivateComponent userTypes={["admin"]}><Admin /></PrivateComponent>} />
        <Route path='/airSoldier' element={<PrivateComponent userTypes={['airSoldier']}><AirSoldier /></PrivateComponent>} />
        <Route path='/intelligenceSoldier' element={<PrivateComponent userTypes={["intelligenceSoldier"]}><IntelligenceSoldier /></PrivateComponent>} />

        <Route path='/' element={<PrivateComponent userTypes={["admin", "airSoldier", "intelligenceSoldier"]}><Home /></PrivateComponent>} />
        <Route path='/addlauncher' element={<PrivateComponent userTypes={["admin", "intelligenceSoldier"]}><AddLauncher /></PrivateComponent>} />
        <Route path='/launcherdetails/:id' element={<PrivateComponent userTypes={["admin", "airSoldier", "intelligenceSoldier"]}><LauncherDetails /></PrivateComponent>} />
      </Routes>
    </>
  )
}

export default App

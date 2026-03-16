import { Route, Routes } from 'react-router'
import './App.css'
import AddLauncher from './pages/AddLauncher'
import Home from './pages/Home'
import LauncherDetails from './pages/launcherDetails'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/addlauncher' element={<AddLauncher />}/>
      <Route path='/launcherdetails/:id' element={<LauncherDetails />}/>
    </Routes>
    </>
  )
}

export default App

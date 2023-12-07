
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Verify from './pages/Verify'
import DashBoard from './pages/DashBoard'

function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/otp-verify" element={<Verify />} />
        <Route path="/songs-dashboard" element={<DashBoard />} />
    </Routes>
    </>
  )
}

export default App

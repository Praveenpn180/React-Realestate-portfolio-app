import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ForgotPassword from './pages/ForgotPassword'
import Home from './pages/Home'
import Login from './pages/Login'
import Offers from './pages/Offers'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      
        <Route  path='/' element={<Home/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
        <Route path='/offers' element={<Offers/>} />
      </Routes>
    </Router>
    
    
    </>
  )
}

export default App

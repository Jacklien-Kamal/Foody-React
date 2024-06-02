import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Welcom from './components/welcome/welcome'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import AppStore from './components/AppStore/AppStore'
import Menu from './components/menu/Menu'
import Cart from './components/Cart/Cart'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



export default function App() {

  return (
    <>

     <Router>
     <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
  
      </Routes>
      <AppStore/>
    </Router>
    </>
  )
}

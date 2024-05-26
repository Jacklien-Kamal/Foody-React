import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Welcom from './components/welcome/welcome'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import AppStore from './components/AppStore/AppStore'

export default function App() {
  return (
    <>
    <Navbar/>
    <Welcom/>
    <Services/>
    <Banner/>
    <AppStore/>
    </>
  )
}

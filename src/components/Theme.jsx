import React, { useEffect, useState } from 'react'
import darkImg from '../assets/website/dark-mode-button.png'
import lightImg from '../assets/website/light-mode-button.png'


export default function Theme() {

    const [theme,setTheme]=useState(
        localStorage.getItem('theme')?localStorage.getItem('theme'):'light')
    const ele=document.documentElement

    useEffect(()=>{
        if(theme==='dark'){
            ele.classList.add("dark");
            localStorage.setItem('theme','dark')
        }else{
            ele.classList.remove("dark");
            localStorage.setItem('theme','light')


        }

    },[theme])

    const changeTheme=()=>{
        setTheme((data) => (data === "dark" ? "light" : "dark"))

    }
  return (
    <>
    <div className='relative'>

        <img src={darkImg} onClick={changeTheme} className={`w-12 absolute cursor-pointer ${theme!='dark'?"opacity-0":'opacity-100'}`}/>
        <img src={lightImg} className='w-12 '/>

    </div>
    </>
  )
}

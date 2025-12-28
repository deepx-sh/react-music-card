import React, { useState } from 'react'
import Card from './components/Card';
import { Moon, Sun } from 'lucide-react';


const App = () => {

  const [theme,setTheme]=useState(false)
  return (
    <div className={`h-screen w-full dark:bg-black bg-neutral-100 flex flex-col justify-center items-center  ${theme?'dark bg-neutral-950':'bg-neutral-100'} transition-colors duration-500 bg-[linear(ellipse_at_top,var(--tw-gradient-stops))] from-neutral-200 via-neutral-100 to-neutral-100 dark:from-neutral-900 dark:via-black dark:to-black`}>
      <Card />
      <button onClick={() => setTheme(!theme)} className='mt-8 rounded-full p-2 bg-white dark:bg-neutral-900
      dark:text-white border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md hover:scale-105 active:scale-95  cursor-pointer transition-all duration-300'> {theme ? <Sun size={20} fill='currentColor'/> : <Moon size={20}/>} </button>
    </div>
  )
}

export default App
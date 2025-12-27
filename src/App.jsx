import React, { useState } from 'react'
import Card from './components/Card';
import { Moon, Sun } from 'lucide-react';


const App = () => {

  const [theme,setTheme]=useState(false)
  return (
    <div className={`h-screen dark:bg-black bg-neutral-100 flex flex-col justify-center items-center  ${theme?'dark':''} transition duration-200`}>
      <Card theme={ theme} />
      <button onClick={()=> setTheme(!theme)} className='mt-4 rounded-full p-2 dark:bg-neutral-300 hover:bg-neutral-400 cursor-pointer transition-all duration-200'> {theme?<Sun/>: <Moon/>} </button>
    </div>
  )
}

export default App
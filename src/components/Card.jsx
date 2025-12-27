import { Heart, ThumbsDown, ThumbsUp } from 'lucide-react';
import React, { useState } from 'react'

const Card = ({ theme }) => {
    
    const [upColor, setUpColor] = useState(false)
    const [thumbUp, setThumbUp] = useState(false);
    const [thumbDown, setThumbDown] = useState(false);
  return (
      <div className='h-80 w-50 border-4 border-neutral-800 p-4 rounded-lg group shadow-2xl dark:shadow-white/10 dark:hover:shadow-white/20 '>
          <div className='h-40 w-full mb-4 perspective-distant border-4 border-neutral-800'>
              <img src="https://i.scdn.co/image/ab67616d0000b273da5d5aeeabacacc1263c0f4b
" alt="taylor-image" className='h-full w-full transition-transform duration-300 object-cover transform rotate-x-25 rotate-z-25 -rotate-y-25 translate-z-15 group-hover:rotate-x-0 group-hover:rotate-y-0 group-hover:rotate-z-0 group-hover:scale-90'/>
          </div>

          <div className='flex flex-col gap-9'>
              <div>
                  <h3 className='text-2xl font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-950 to-neutral-600 dark:text-white'>End Game</h3>
                  <p className='text-xs text-gray-500 font-semibold'>Taylor Swift</p>
              </div>

              <div className='flex justify-between items-center'>
                  <div className='flex items-center gap-1'>
                      <button onClick={() => setThumbUp(!thumbUp)}><ThumbsUp color={theme ? '#ffffff' : '#000000'} fill={`${thumbUp?'black':'transparent'}`} className={`dark:${thumbUp ? 'fill-white' : 'fill-transparent'}`}/></button>
                      <ThumbsDown color={ theme?'#ffffff':'#000000'}/>
                  </div>

                  <div>
                      <button onClick={() => setUpColor(!upColor)} className='cursor-pointer transition-all duration-200 hover:-translate-y-0.5 active:scale-75'><Heart color={theme ? '#ffffff' : '#000000'} fill={`${upColor?'red':'transparent'}`} className='transition-all duration-150' /></button>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Card
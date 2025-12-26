import { Heart, ThumbsDown, ThumbsUp } from 'lucide-react';
import React, { useState } from 'react'

const Card = ({ theme }) => {
    
    const [upColor,setUpColor]=useState(false)
  return (
      <div className='h-80 w-50 border border-neutral-800 p-4 rounded-lg'>
          <div className='h-40 w-full bg-red-400 mb-4 overflow-hidden'>
              <img src="https://i.scdn.co/image/ab67616d0000b273da5d5aeeabacacc1263c0f4b
" alt="taylor-image" className='h-full w-full '/>
          </div>

          <div className='flex flex-col gap-9'>
              <div>
                  <h3 className='text-2xl font-bold dark:text-white'>End Game</h3>
                  <p className='text-xs text-gray-500 font-semibold'>Taylor Swift</p>
              </div>

              <div className='flex justify-between items-center'>
                  <div className='flex items-center gap-1'>
                      <ThumbsUp color={ theme?'#ffffff':'#000000'} />
                      <ThumbsDown color={ theme?'#ffffff':'#000000'}/>
                  </div>

                  <div>
                      <button onClick={() => setUpColor(!upColor)}><Heart color={theme ? '#ffffff' : '#000000'} fill={`${upColor?'red':'transparent'}`} /></button>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Card
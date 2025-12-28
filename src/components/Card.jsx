import { Heart, Pause, Play, SkipBack, SkipForward, ThumbsDown, ThumbsUp } from 'lucide-react';
import React, { useState } from 'react'

const Card = () => {
    
    const [isLiked, setIsLiked] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [thumbState,setThumbState]=useState(null)
    
  return (
      <div className='w-64  p-5 rounded-2xl transition-all duration-300 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200 dark:border-white/10 group shadow-xl dark:shadow-black/50 hover:scale-105'>
          <div className='h-48 w-full mb-5 perspective-distant'>
              <div className='relative h-full w-full transition-all duration-500 preserve-3d transform rotate-x-12 rotate-y-12 rotate-z-2 group-hover:rotate-x-0 group-hover:rotate-y-0 group-hover:rotate-z-0'>
                  <img src="https://i.scdn.co/image/ab67616d0000b273da5d5aeeabacacc1263c0f4b
" alt="album-art" className='h-full w-full  object-cover  shadow-lg dark:shadow-black/60'/>
                  <div className='absolute inset-0 rounded-xl bg-linear-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'></div>
              </div>
          </div>

          <div className='flex flex-col gap-4'>
              <div className='flex justify-between items-end'>
                  <div>
                      <h3 className='text-xl font-bold  text-neutral-800 bg-linear-to-b  leading-tight dark:text-white'>End Game</h3>
                  <p className='text-sm text-neutral-500 font-medium dark:text-neutral-400'>Taylor Swift</p>
                  </div>

                  <button onClick={() => setIsLiked(!isLiked)} className='transition-transform active:scale-75 focus:outline-none '>
                      <Heart size={20} className={`transition-colors duration-300 ${isLiked ? 'fill-red-500 text-red-500' : 'text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300'}`} />
                   </button>
                    
              </div>

              <div className='w-full group/bar cursor-pointer'>
                  <div className='h-1.5 w-full bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden'>
                      <div className='h-full bg-neutral-800 dark:bg-white w-1/3 rounded-full relative'>
                          <div className='absolute right-0 top-1/2 -translate-y-1/2 h-2 w-2 bg-neutral-800 dark:bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] opacity-0 group-hover/bar:opacity-100 transition-opacity'></div>
                      </div>
                  </div>
                  
                  <div className='flex justify-between text-[10px] text-neutral-400 mt-1 font-mono'>
                      <span>1:25</span>
                      <span>4:05</span>
                  </div>
              </div>

              <div className='flex justify-between items-center px-2'>
                  
                  <div className='flex gap-3'>
                      <button onClick={() => setThumbState(thumbState === 'down' ? null : 'down')} className='transition-transform active:scale-90 focus:outline-none'>
                          <ThumbsDown size={18} className={`transition-colors ${thumbState=== 'down' ? 'text-black dark:text-white fill-black dark:fill-white':'text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300'}`}/>
                      </button>

                      <button onClick={() => setThumbState(thumbState === 'up' ? null : 'up')} className='transition-transform active:scale-90 focus:outline-none'>
                          <ThumbsUp size={18} className={`transition-colors ${thumbState=== 'up' ? 'text-black dark:text-white fill-black dark:fill-white':'text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300'}`}/>
                      </button>
                  </div>

                  <div className='flex items-center gap-3'>
                      <SkipBack size={20} className='text-neutral-800 dark:text-white cursor-pointer hover:opacity-70 transition-opacity' />
                      
                      <button onClick={() => setIsPlaying(!isPlaying)} className='h-10 w-10 flex items-center justify-center rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black shadow-lg hover:scale-105 active:scale-95 transition-all'>
                          {isPlaying? <Pause size={18} fill='currentColor'/>:<Play size={18} fill='currentColor' className='ml-0.5'/>}
                      </button>
                    <SkipForward size={20} className='text-neutral-800 dark:text-white cursor-pointer hover:opacity-70 transition-opacity' />

                  </div>
              </div>
              
          </div>
    </div>
  )
}

export default Card
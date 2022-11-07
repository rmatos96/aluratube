import React from 'react'
/* import * as Switch from '@radix-ui/react-switch'; */
import { MagnifyingGlass } from 'phosphor-react'
import Switch from '@mui/material/Switch';

export default function Menu() {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
    <div className='flex p-4 justify-between items-center'>
      <img className='w-32' src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png" alt="" />
      <div className='flex w-[425px] h-10'>
        <input type="text" placeholder='Vídeo' className='flex w-[425px] h-[42px] bg-#f9f9f9 border-[1px] border-r-0 border-#e5e5e5 rounded-sm py-3 px-[10px]' />
        <div className='flex items-center justify-center w-[64px] h-[42px] bg-#F0F0F0 border-[1px] border-#e5e5e5  rounded-r-sm'>
          <MagnifyingGlass size={24} weight="bold" />
        </div>
      </div>
      <Switch {...label} size={'medium'} color={'warning'} />
      {/* <Switch.Root id='s1' className='bg-black w-[50px] h-6 rounded-full shadow-md'>
        <Switch.Thumb className='block w-5 h-5 ml-[1px] bg-white shadow-md rounded-full transition' />
      </Switch.Root> */}
    </div>
  )
}

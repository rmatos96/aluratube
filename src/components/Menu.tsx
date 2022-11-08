import React, { useState } from 'react'
import { MagnifyingGlass } from 'phosphor-react'
import Switch from '@mui/material/Switch';

export default function Menu({ filterValue, setFilterValue }: any) {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const searchValue = filterValue;
  const setSearchValue = setFilterValue;

  return (
    <div className='flex p-4 justify-between items-center'>
      <img className='w-32' src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png" alt="" />
      <div className='flex w-[425px] h-10'>
        <input type="text" placeholder='Vídeo' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className='flex w-[425px] h-[42px] bg-#f9f9f9 border-[1px] border-r-0 border-#e5e5e5 rounded-sm py-3 px-[10px] outline-none' />
        <div className='flex items-center justify-center w-[64px] h-[42px] bg-#F0F0F0 border-[1px] border-#e5e5e5  rounded-r-sm'>
          <MagnifyingGlass size={24} weight="bold" />
        </div>
      </div>
      <Switch {...label} size={'medium'} color={'warning'} />
    </div>
  )
}

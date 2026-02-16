
import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer classname="w-full border-t px-8" >
      <div className="flex items-center justify-between">
        <div className='flex items-center gap-3'>
        <img className='hidden md:block w-10' src={assets.jmp} alt='logo'/>
      
        <p className="py-4 text-center text-xs md:text-sm text-gray-500">
          Copyright 2026 GreatStack. All Right Reserved.
        </p>
        </div>
        <div className='flex items-center gap-3 max-md:mt-2'>
          <a href='#'>
            <img src={assets.facebook} alt='facebook' className='w-8 h-8'/>
          </a>
          <a href='#'>
            <img src={assets.instagram} alt='insta' className='w-8 h-8'/>
          </a>
          <a href='#'>
            <img src={assets.twitter} alt='twitter' className='w-8 h-8'/>
          </a>

        </div>
        </div>
        
      
    </footer>
  )
}

export default Footer

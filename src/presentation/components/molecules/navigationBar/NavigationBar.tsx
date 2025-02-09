import React from 'react'
import NetflixLogo from '../../atoms/netflixLogo/NetflixLogo'
import { Bell, ChevronDown, Search, Tv } from 'lucide-react'
import NavigationMenu from '../../atoms/navigationMenu/NavigationMenu'

const NavigationBar = () => {
  return (
    <nav className='sticky top-0 flex justify-between px-5 lg:px-10 py-4 bg-gradient-to-b from-black to-black/0'>
      <div className='flex items-center'>
        <NetflixLogo />
        <NavigationMenu/>
      </div>
      <div className='flex items-center gap-4 text-white'>
        <Search size={20} className='hidden md:block'/>
        <p className='hidden md:block'>Kids</p>
        <Bell size={20} className='hidden md:block'/>
        <Tv className='md:hidden'/>
        <div className='flex items-center gap-1'>
          <div className='w-8 aspect-square rounded-md bg-gray-200'></div>
          <ChevronDown size={14} className='hidden md:block'/>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar
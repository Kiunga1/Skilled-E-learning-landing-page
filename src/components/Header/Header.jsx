// import React from 'react'
import Logo from '../../assets/logo-dark.svg'

const Header = () => {
  return (
    <header className='flex justify-between items-center p-4 top-0 left-0 w-full z-50 py-6 px-6 md:px-8 lg:px-20'>
        <img className='h-6 px-2' src={Logo} alt="Logo" />
        <button className='bg-black hover:bg-gray-500 text-white px-6 py-2 text-lg rounded-full hover:bg-grey-400 transition duration-300'>Get Started</button>
    </header>
  )
}

export default Header


// import React from 'react'
import FooterLogo from '../../../public/assets/logo-light.svg'

const Footer = () => {
  return (
    <footer className='flex justify-between items-center p-4 bottom-0 left-0 w-full z-50 py-6 px-6 md:px-8 lg:px-20 pt-8 bg-black'>
        <img className='h-6' src={FooterLogo} alt="Logo" />
        <button className='bg-gradient-to-b from-blue-600 to-pink-500 hover:from-blue-400 hover:to-pink-300 text-white px-6 py-2 text-lg rounded-full hover:bg-grey-400 transition duration-300'>Get Started</button>
    </footer>
  )
}

export default Footer

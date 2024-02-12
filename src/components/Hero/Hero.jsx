// import React from 'react';
import HeroimageMobile from '../../assets/image-hero-mobile.webp';
import HeroimageDesktop from '../../assets/image-hero-desktop.png';

const Hero = () => {
    return (
        <section className="bg-white md:flex items-center gap-5 py-4 px-6 md:px-4 lg:px-20">
          
          {/* Hero content */}
          <div className="md:w-1/2 md:px-4 ">
            <h1 className="text-4xl font-extrabold mb-4">Maximize skill, minimize budget</h1>
            <p className="text-lg mb-8">Our modern courses across a range of in-demand skills will give you the 
knowledge you need to live the life you want.</p>
            <button className="bg-gradient-to-b from-orange-500 to-pink-500 hover:from-orange-300 hover:to-pink-300 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600 transition duration-300 font-bold">Get Started</button>
          </div>



          {/* Image for mobile */}
          <div className="md:hidden my-6">
            <img src={HeroimageMobile} alt="Hero" className="rounded-lg "/>
          </div>

          {/* Image for desktop */}
          <div className="hidden md:block md:w-1/2 p-0 ">
          <img src={HeroimageDesktop} alt="Hero" className="rounded-lg w-full "/>

          </div>
        </section>
    );
}

export default Hero;


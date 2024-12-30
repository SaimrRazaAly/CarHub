"use client"

import React from 'react'
import Image from 'next/image'
import CustomBtn from './CustomBtn'
const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (

    
    <div className="hero overflow-hidden">
      <div className="flex-1 pt-36 px-6">
        <h1 className=" 2xl:text-[70px] sm:text-[65px] text-[30px] font-extrabold">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomBtn
        title="Explore Cars"
        containerStyles="bg-primary-blue px-[3rem] py-2 text-white rounded-full mt-10"
        handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  )
}

export default Hero
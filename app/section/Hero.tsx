import React from 'react'
import image from '../../public/images/slider5.jpg'

const Hero = () => {
  return (
    <div>
        <img src={image.src} alt="Hero Image" className="w-full h-auto object-cover  inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        <div className="absolute top-0 left-0  flex ">
            <div className="text-center text-white bg-opacity-50 p-6 justify-center items-center">
                <h1 className="text-6xl font-bold mb-4 mt-10 justify-center indeterminate:">Discover Sri Lanka</h1>
                <p className="text-lg">Your ultimate travel guide to the wonders of Sri Lanka.</p>
            </div>
        </div>
    </div>
  )
}

export default Hero

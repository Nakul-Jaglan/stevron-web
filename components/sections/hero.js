"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { useState, useEffect } from "react";

const slides = [
  {
    text: (
      <>
        <h2 className="text-3xl font-bold mb-2">Welcome to Stevron</h2>
        <p className="mb-4">Innovative tools for professionals.</p>
        <button className="bg-green-600 text-white px-4 py-2 rounded">Get Started</button>
      </>
    ),
    image: "/ac-tools/350W-Trimmer.png",
  },
  {
    text: (
      <>
        <h2 className="text-3xl font-bold mb-2">Discover Our Range</h2>
        <p className="mb-4">AC, DC, Hand Tools & Accessories.</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">View Products</button>
      </>
    ),
    image: "/dc-tools/45Nm Compact.png",
  },
  // Add more slides as needed
];

export function Slider() {
  const [index, setIndex] = useState(0);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Manual navigation
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative w-full h-screen mx-auto flex items-center rounded-2xl shadow-lg overflow-hidden">
      {/* Left: Text & CTA */}
      <div className="w-1/2 p-8 flex flex-col justify-center text-white ">
        {slides[index].text}
      </div>
      {/* Right: Image */}
      <div className="w-1/2 flex items-center justify-center ">
        <img src={slides[index].image} alt="" className="max-h-72 object-contain transition-all duration-500" />
      </div>
      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 z-10"
        aria-label="Previous"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 z-10"
        aria-label="Next"
      >
        &#8594;
      </button>
    </div>
  );
}

function Hero() {
  return (
    <section className='w-full h-screen relative overflow-hidden'>
      <div>
        {/* <img src="/sample-hero-banner.jpg" alt="Hero Banner" className='' /> */}
        {/* <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='text-5xl md:text-9xl font-bold text-center mt-20 bg-gradient-to-b from-white  to-black bg-clip-text text-transparent drop-shadow-lg'
        >
          STEVRON TOOLS
        </motion.h1> */}
        <Slider/>
      </div>
      {/* <div className='absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none z-0' /> */}
    </section>
  )
}

export default Hero
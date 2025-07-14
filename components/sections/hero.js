"use client"
import React from 'react'
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className='w-full h-screen relative overflow-hidden bg-[#989b2e]'>
      <div>
        {/* <img src="/sample-hero-banner.jpg" alt="Hero Banner" className='' /> */}
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='text-5xl md:text-9xl font-bold text-center text-white mt-20'
        >
          STEVRON TOOLS
        </motion.h1>
      </div>
      {/* <div className='absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none z-0' /> */}
    </section>
  )
}

export default Hero
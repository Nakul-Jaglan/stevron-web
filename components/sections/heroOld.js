"use client";
import { motion } from 'framer-motion'
import Dither from '../../ui/dither.js';
import Balatro from '../../ui/balatro.js';
import CurveLoop from './curveLoop.js';



function HeroSection() {
  return (
    <section className="w-full h-screen relative">
        {/* <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
            <Dither
                waveColor={[0.3, 0.3, 0.3]}
                disableAnimation={false}
                enableMouseInteraction={true}
                mouseRadius={0.3}
                colorNum={4}
                waveAmplitude={0.5}
                waveFrequency={3}
                waveSpeed={0.05}
            />
        </div> */}
          
        <Balatro
            isRotate={true}
            mouseInteraction={false}
            pixelFilter={900}
        />
        <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="absolute inset-50 flex items-center justify-center text-white z-20">
            <h1 className="text-8xl font-bold">Welcome to Stevron</h1>
        </motion.div>
        <div className="absolute -bottom-35 left-0 w-full z-30 ">
            <CurveLoop />
        </div>
    </section>
  )
}

export default HeroSection
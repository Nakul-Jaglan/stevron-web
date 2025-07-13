'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../layouts/header.js';
import Footer from '../layouts/footer.js';

// Product image arrays
const acTools = [
  "/ac-tools/950W-Angle-Grinder.png",
  "/ac-tools/Router.png",
  "/ac-tools/850W-Impact-Drill.png",
  "/ac-tools/1400W Polisher.png",
  "/ac-tools/240W-Palm-Sander.png",
  "/ac-tools/350W-Trimmer.png",
  "/ac-tools/1400W-185mm-Circular-Saw.png",
  "/ac-tools/1500W Rotary Hammer.png",
  "/ac-tools/1100W-Impact-Drill.png",
  "/ac-tools/2200W Angle Grinder.png",
  "/ac-tools/800W-Rotary-Hammer.png",
  "/ac-tools/800W-SDS-Rotary-Hammer.png",
  // "/ac-tools/600W-Jigsaw.jpg",
  "/ac-tools/750W-Angle-Grinder.png",
  "/ac-tools/1400W Marble Cutter.png",
  "/ac-tools/710W-Impact-Drill.png",
  "/ac-tools/2400W Cut Off Saw.png",
  "/ac-tools/2400W Angle Grinder.png",
  "/ac-tools/500W-Drill.png",
];
const dcTools = [
  "/dc-tools/45Nm Compact.png",
  "/dc-tools/DC_Dual Charger.png",
  "/dc-tools/DC_Circular Saw.png",
  "/dc-tools/125mm Palm Sander.png",
  "/dc-tools/5Ah Battery.png",
  "/dc-tools/DC_Single Charger.png",
  "/dc-tools/DC_Angular Grinder.png",
  "/dc-tools/20J Rotary Hammer.png",
  "/dc-tools/2Ah Battery.png",
  "/dc-tools/800nm Impact Wrench_PNG.png",
  // "/dc-tools/600Nm.jpg",
  // "/dc-tools/800Nm Impact Wrench.jpg",
  "/dc-tools/60Nm.png",
  "/dc-tools/4Ah Battery.png",
  "/dc-tools/DC Blower.png",
  "/dc-tools/45Nm.png",
  // "/dc-tools/400Nm.jpg",
];
const allProducts = [...acTools, ...dcTools];

// Centralized Global Particle System (consistent across all pages)
const GlobalParticles = React.memo(function GlobalParticles() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  // Create particles with product images
  const particles = Array.from({ length: 20 }, (_, i) => {
    const gridX = (i % 5) * 20 + Math.random() * 15;
    const gridY = Math.floor(i / 5) * 25 + Math.random() * 20;
    const img = allProducts[Math.floor(Math.random() * allProducts.length)];
    return {
      id: i,
      initialX: gridX,
      initialY: gridY,
      size: Math.random() * 24 + 36, // 36-60px
      duration: Math.random() * 4 + 6,
      delay: Math.random() * 8,
      img,
    };
  });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((particle) => (
        <motion.img
          key={particle.id}
          src={particle.img}
          alt="tool"
          className="absolute object-contain select-none opacity-80"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
            filter: 'drop-shadow(0 2px 8px #0008)',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
          initial={{
            opacity: 0,
            scale: 0,
            rotate: Math.random() * 360,
          }}
          animate={{
            opacity: [0, 0.8, 0.6, 0.8, 0],
            scale: [0, 1, 1.3, 1, 0],
            y: [0, -50, -100, -50, 0],
            x: [0, Math.random() * 30 - 15, Math.random() * 30 - 15, 0],
            rotate: [0, Math.random() * 360],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
});

function BgLayout({ children, className = "" }) {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Global Background Overlay - Black to Transparent to Black */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-0" />
      
      {/* Centralized Particle System */}
      <GlobalParticles />
      
      <header className="relative z-50">
        <Header />
      </header>

      <main className={`relative z-20 ${className}`}>
        {children}
      </main>

      <footer className="relative z-20">
        <Footer />
      </footer>
    </div>
  );
}

export default BgLayout;
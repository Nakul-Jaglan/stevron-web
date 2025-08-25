"use client";
import React, { useMemo } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import * as THREE from "three";
import Link from "next/link";
import { motion } from "framer-motion";

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

function ProductSprite({ url, position, scale = 0.7 }) {
  const texture = useLoader(THREE.TextureLoader, url);
  return (
    <Float speed={5} rotationIntensity={1.2} floatIntensity={2}>
      <mesh position={position}>
        <planeGeometry args={[scale, scale]} />
        <meshBasicMaterial map={texture} transparent />
      </mesh>
    </Float>
  );
}

function Centerpiece() {
  return (
    <Float speed={9.5} rotationIntensity={5.5} floatIntensity={5.5}>
      <mesh position={[0, 0, 0]}>
        <Html center>
          <div style={{
            background: "radial-gradient(circle, #fff 0%, #989b2e 60%, #989b2e 100%)",
            borderRadius: "50%",
            width: 180,
            height: 180,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 60px #989b2e, 0 0 0 8px #989b2e",
            fontWeight: 900,
            fontSize: 36,
            color: "#fff",
            letterSpacing: 2,
            textShadow: "0 1px 8px #989b2e, 0 0 2px #989b2e"
          }}>
            STEVRON
          </div>
        </Html>
      </mesh>
    </Float>
  );
}

function Hero() {
  // Randomly distribute products in a sphere shell
  const productPositions = useMemo(() => {
    const positions = [];
    const radius = 3.5;
    for (let i = 0; i < allProducts.length; i++) {
      const phi = Math.acos(-1 + (2 * i) / allProducts.length);
      const theta = Math.sqrt(allProducts.length * Math.PI) * phi;
      positions.push([
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi),
      ]);
    }
    return positions;
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full h-screen relative overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center h-full">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col justify-center items-start text-left p-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="text-4xl md:text-7xl text-white font-bold mt-20"
          >
            STEVRON <span className="text-[#989b2e]">TOOLS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-300 mt-4"
          >
            Tools That Work as Hard as You Do.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="text-lg md:text-xl max-w-lg text-gray-300 mt-4"
          >
            Stevron delivers high-performance power and hand tools built for the pros who work hard every day. Durable, ergonomic, and designed to last—this is power, simplified.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            className="mt-6 flex flex-col md:flex-row gap-4"
          >
            <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }}>
              <Link href="/productos" className="inline-block bg-[#989b2e] text-white px-6 py-3 text-xl font-semibold rounded-lg hover:bg-[#7a7c23] transition-colors">
                Explore Products
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }}>
              <Link href="tel:+919667515523" className="inline-block bg-[#989b2e] text-white px-6 py-3 text-xl font-semibold rounded-lg hover:bg-[#7a7c23] transition-colors">
                Call Us 
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="w-full h-full flex items-center justify-center"
        >
          <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
            {/* Products floating all over */}
            {allProducts.map((url, i) => (
              <ProductSprite key={url} url={url} position={productPositions[i]}/>
            ))}
            {/* Centerpiece */}
            <Centerpiece />
            {/* Controls for demo, can be removed for production */}
            {/* <OrbitControls enablePan={false} enableZoom={false} /> */}
          </Canvas>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;
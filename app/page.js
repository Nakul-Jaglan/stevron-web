"use client";
import { motion } from "framer-motion";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white relative overflow-hidden">
        {/* Subtle floating icon animation */}
      <motion.img
        src="/logo.png"
        alt="Stevron Logo"
        initial={{ y: -20 }}
        animate={{ y: [ -20, 20, -20 ] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-100 h-20  opacity-70 z-0 pointer-events-none"
      />
      {/* Animated background circles */}
      {/* <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 2.5, opacity: 0.08 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 flex items-center justify-center z-0"
      >
        <div className="w-96 h-96 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 blur-3xl opacity-80"></div>
      </motion.div> */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="z-10 flex flex-col items-center"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="text-6xl md:text-9xl font-extrabold mb-6 text-center bg-gradient-to-r from-[#6db636] via-[#36b689] to-[#6db636] bg-clip-text text-transparent drop-shadow-lg"
        >
          ¡Próximamente!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-2xl md:text-4xl mb-10 text-center max-w-5xl text-white/80"
        >
          Estamos trabajando en algo increíble para ti. ¡Mantente atento!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl flex flex-col items-center space-y-2"
        >
          <span className="text-4xl font-semibold text-white">Contacto:</span>
          <span className="text-xl">Ashwin Tharoor</span>
          <span className="text-xl">Tel: <a href="tel:+918595817577" className="underline hover:text-yellow-400">+91 8595817577</a></span>
          <span className="text-xl">Email: <a href="mailto:ashwin@stevrontools.com" className="underline hover:text-pink-400">ashwin@stevrontools.com</a></span>
        </motion.div>
      </motion.div>
    </div>
  );
}

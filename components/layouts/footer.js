"use client";
import Link from 'next/link'
import { motion } from 'framer-motion'

function Footer() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="w-full border-t border-white/20 bg-black text-white py-8 px-4 flex flex-col md:flex-row items-center justify-between rounded-t-2xl mt-12"
    >
      <Link href="/">
        <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex items-center space-x-3 mb-4 md:mb-0">
            <img src="/letter.png" alt="Logo" className="w-7 h-7" />
            <span className="text-xl font-bold tracking-wide select-none">STEVRON</span>
        </motion.div>
      </Link>
      <motion.div 
       initial={{ opacity: 0, x: 40 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, ease: 'easeOut' }}
       className="text-base opacity-70 mb-4 md:mb-0">© {new Date().getFullYear()} Stevron. All rights reserved.</motion.div>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }} 
        className="flex space-x-4 text-xl">
            <Link href={"https://wa.me/919667515523"} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <i className="fab fa-whatsapp"></i>
            </Link>
            <Link href={"https://instagram.com/stevron_tech"} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <i className="fab fa-instagram"></i>
            </Link>
            <Link href={"https://facebook.com/stevron_tech"} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <i className="fab fa-facebook"></i>
            </Link>
      </motion.div>
    </motion.section>
  )
}

export default Footer
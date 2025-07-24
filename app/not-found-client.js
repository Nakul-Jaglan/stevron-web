'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import BgLayout from '../components/templates/bgLayout';

export default function NotFoundClient() {
  return (
    <BgLayout>
      <div className="min-h-screen flex flex-col justify-center mt-15 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-[#e8ef0b] to-[#979b2e] bg-clip-text text-transparent"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              404
            </motion.h1>
            <motion.h2 
              className="mt-4 text-3xl font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Page Not Found
            </motion.h2>
            <motion.p 
              className="mt-2 text-lg text-white/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Sorry, we couldn&apos;t find the page you&apos;re looking for.
            </motion.p>
          </motion.div>

          <motion.div 
            className="mt-8 bg-black/70 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-white mb-4">
                  What you can do:
                </h3>
                <div className="space-y-3 text-xl">
                  <Link
                    href="/"
                    className="block w-full bg-[#989b2e] text-white font-medium py-3 px-4 rounded-xl hover:from-yellow-300 hover:to-pink-400 transition-all duration-300 text-center transform hover:scale-105"
                  >
                    Go to Homepage
                  </Link>
                  <Link
                    href="/products"
                    className="block w-full border border-white/20 text-white py-3 px-4 rounded-xl hover:bg-white/10 transition-all duration-300 text-center backdrop-blur-sm"
                  >
                    Browse Products
                  </Link>
                  <Link
                    href="/contact"
                    className="block w-full border border-white/10 text-white/90 py-3 px-4 rounded-xl hover:bg-white/5 transition-all duration-300 text-center"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h4 className="font-medium text-white mb-3">Popular Categories</h4>
                <div className="grid grid-cols-1 gap-2">
                  <Link 
                    href="/products/ac-tools" 
                    className="text-white/80 hover:text-white hover:bg-white/5 p-2 rounded-lg transition-all duration-300"
                  >
                    <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className='inline-block mr-2'
                    > 
                        →
                    </motion.span>
                    AC Tools & HVAC Equipment
                  </Link>
                  <Link 
                    href="/products/hand-tools" 
                    className="text-white/80 hover:text-white hover:bg-white/5 p-2 rounded-lg transition-all duration-300"
                  >
                    <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className='inline-block mr-2'
                    > 
                        →
                    </motion.span>
                    Hand Tools & Manual Equipment
                  </Link>
                  <Link 
                    href="/about" 
                    className="text-white/80 hover:text-white hover:bg-white/5 p-2 rounded-lg transition-all duration-300"
                  >
                    <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className='inline-block mr-2'
                    > 
                        →
                    </motion.span>
                    About Stevron Tools
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="mt-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p className="text-sm text-white/60">
              Need help? <Link href="/contact" className="text-yellow-400 hover:text-yellow-300 transition-colors">Contact our support team</Link>
            </p>
          </motion.div>
        </div>
      </div>
    </BgLayout>
  );
}

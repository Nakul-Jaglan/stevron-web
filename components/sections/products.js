"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import products from "../../data/homeProducts.json"; 

function HomeProducts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Convert imported products object to array
  const productsArr = Object.values(products);
  // For true infinite, clone before and after
  const CLONE_COUNT = 1; // how many times to clone before/after (1 is enough for smooth infinite)
  const infiniteProducts = [
    ...productsArr.slice(-CLONE_COUNT * productsArr.length),
    ...productsArr,
    ...productsArr.slice(0, CLONE_COUNT * productsArr.length)
  ];
  const realLength = productsArr.length;
  const totalLength = infiniteProducts.length;
  // Start at the first real slide (after the clones)
  const initialIndex = realLength * CLONE_COUNT;
  const [trackIndex, setTrackIndex] = useState(initialIndex);
  const [isAnimating, setIsAnimating] = useState(true);
//     {
//       code: "STV-002",
//       name: "Angle Grinder",
//       image: "/dc-tools/angle-grinder.jpg"
//     },
//     {
//       code: "STV-003",
//       name: "Impact Drill",
//       image: "/dc-tools/impact-drill.jpg"
//     },
//     {
//       code: "STV-004",
//       name: "Rotary Hammer",
//       image: "/dc-tools/rotary-hammer.jpg"
//     },
//     {
//       code: "STV-005",
//       name: "Jigsaw",
//       image: "/dc-tools/jigsaw.jpg"
//     },
//     {
//       code: "STV-006",
//       name: "Circular Saw",
//       image: "/dc-tools/circular-saw.jpg"
//     },
//     {
//       code: "STV-007",
//       name: "Reciprocating Saw",
//       image: "/dc-tools/reciprocating-saw.jpg"
//     },
//     {
//       code: "STV-008",
//       name: "Sander",
//       image: "/dc-tools/sander.jpg"
//     },
//     {
//       code: "STV-009",
//       name: "Planer",
//       image: "/dc-tools/planer.jpg"
//     },
//     {
//       code: "STV-010",
//       name: "Heat Gun",
//       image: "/dc-tools/heat-gun.jpg"
//     }
//   ];

  // (removed duplicate declaration, now handled above)

  // Auto-scroll functionality
  // Auto-scroll functionality (true infinite)
  useEffect(() => {
    const interval = setInterval(() => {
      setTrackIndex((prev) => prev + 1);
      setIsAnimating(true);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // When trackIndex reaches the clones, jump instantly to the real slide
  useEffect(() => {
    if (trackIndex === totalLength - realLength) {
      // Jump to the same slide in the real set (at the start)
      setTimeout(() => {
        setIsAnimating(false);
        setTrackIndex(initialIndex);
      }, 800); // match transition duration
    } else if (trackIndex === 0) {
      // Jump to the same slide in the real set (at the end)
      setTimeout(() => {
        setIsAnimating(false);
        setTrackIndex(totalLength - 2 * realLength);
      }, 800);
    } else {
      setIsAnimating(true);
    }
  }, [trackIndex, totalLength, realLength, initialIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="relative py-10 px-4 overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-[100%] mx-auto">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 rounded-full px-6 py-3 mb-6"
          >
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-yellow-400 text-sm font-semibold tracking-wider uppercase">
              Our Products
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Professional{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Power Tools
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Discover our comprehensive range of professional-grade tools designed for demanding projects. 
            Built with precision, engineered for performance.
          </motion.p>
        </motion.div>

        {/* Infinite Product Slider */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Gradient Overlays for Infinite Effect */}
          {/* <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-900 via-gray-900/50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-900 via-gray-900/50 to-transparent z-10 pointer-events-none"></div> */}

          {/* Slider Container */}
          <div className="overflow-hidden">
            <motion.div
              animate={{
                x: -trackIndex * 320
              }}
              transition={isAnimating ? {
                duration: 0.8,
                ease: "easeInOut"
              } : { duration: 0 }}
              className="flex space-x-10"
              style={{
                width: `${infiniteProducts.length * 320}px`
              }}
              onTransitionEnd={() => {
                // After instant jump, re-enable animation
                if (!isAnimating) setIsAnimating(true);
              }}
            >
              {infiniteProducts.map((product, index) => (
                <motion.div
                  key={`${product.code}-${index}`}
                  className="flex-shrink-0 w-70 group"
                  whileHover={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl  hover:bg-white/10 transition-all duration-300 h-full">
                    {/* Product Image */}
                    <div className="relative mb-6 overflow-hidden rounded-xl bg-white/5 p-4 flex items-center justify-center">
                      <motion.img
                        src={product.image}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 5 }}
                      />
                      
                      {/* Hover Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl flex items-end justify-center pb-4"
                      >
                        <Link href={`/products/${product.category}#${product.code}`}>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            // className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold px-4 py-2 rounded-full text-sm shadow-lg"
                            className="bg-[#989b2e] text-white cursor-pointer font-semibold px-4 py-2 rounded-full text-sm shadow-lg"
                          >
                            View Details
                          </motion.button>
                        </Link>
                      </motion.div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-3 px-6 pb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-yellow-400 text-base font-semibold">
                          {product.code}
                        </span>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-2 h-2 bg-green-400 rounded-full animate-ping"
                        ></motion.div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white group-hover:text-[#989b2e] transition-colors">
                        {product.name}
                      </h3>
                      
                      {/* <div className="flex items-center space-x-2 text-white/60 text-sm">
                        <div className="flex items-center space-x-1">
                          <span>⚡</span>
                          <span>DC Powered</span>
                        </div>
                        <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                        <div className="flex items-center space-x-1">
                          <span>🔋</span>
                          <span>ONE Battery</span>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Dots */}
          {/* <div className="flex justify-center mt-8 space-x-2">
            {productsArr.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setTrackIndex(initialIndex + index);
                  setIsAnimating(true);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  (trackIndex - initialIndex + realLength) % realLength === index
                    ? 'bg-yellow-400 shadow-lg shadow-yellow-400/50'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div> */}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <Link href="/products">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px #989b2e" }}
              whileTap={{ scale: 0.95 }}
            //   className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              className="bg-[#989b2e] text-white text-xl font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              Explore All Products
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default HomeProducts;
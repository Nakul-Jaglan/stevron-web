"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

function One() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: "🔥",
      title: "Flame-Resistant Excellence",
      description: "Flame-resistant shell that withstands up to 850°C because safety matters.",
      stat: "850°C",
      statLabel: "Heat Resistance"
    },
    {
      icon: "🔋",
      title: "Precision Engineering",
      description: "Durable PCB and sturdy cell rack with precision-welded 18650 cells for unmatched reliability.",
      stat: "18650",
      statLabel: "Premium Cells"
    },
    {
      icon: "⚡",
      title: "Superior Performance",
      description: "Delivers 2x more power and 2x longer run time, redefining performance for DC tools.",
      stat: "2x",
      statLabel: "More Power"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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
      className="relative py-20 px-4 overflow-hidden "
    >
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            {/* ONE Logo */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-4 mb-8"
            >
              <motion.img
                src="/one-logo.png"
                alt="ONE Technology Logo"
                className="h-16 w-auto"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <div className="text-yellow-400 text-sm font-semibold tracking-wider uppercase">
                Trademarked Technology
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  ONE
                </span>{" "}
                Battery Platform
              </h2>
              <div className="space-y-2">
                <motion.p
                  variants={itemVariants}
                  className="text-xl text-yellow-400 font-medium"
                >
                  Powered it down to one.
                </motion.p>
                {/* <motion.p
                  variants={itemVariants}
                  className="text-lg text-white/80"
                >
                  The 1ne battery isn't just power—it's protection.
                </motion.p>
                <motion.p
                  variants={itemVariants}
                  className="text-lg text-white/80 font-semibold"
                >
                  Built to Outlast, Engineered to Dominate.
                </motion.p> */}
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-xl text-white/90 leading-relaxed"
            >
              Revolutionary single battery platform that powers all your DC tools. 
              One battery, endless possibilities. Never buy separate batteries again.
            </motion.p>

            {/* Features */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 group"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{feature.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white group-hover:text-[#989b2e] transition-colors">
                          {feature.title}
                        </h3>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-[#989b2e]">{feature.stat}</div>
                          <div className="text-xs text-white/60">{feature.statLabel}</div>
                        </div>
                      </div>
                      <p className="text-white/80 text-base leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-6"
            >
              <Link href="/products/dc-tools">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,196,0,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                //   className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  className="bg-[#989b2e] text-white text-xl font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  Shop DC Tools
                </motion.button>
              </Link>
              <Link href="/technology/one-battery">
                <motion.button
                  whileHover={{ scale: 1.05, borderColor: "rgba(255,196,0,0.8)" }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white text-xl font-bold px-8 py-4 rounded-full hover:bg-yellow-400/10 transition-all duration-300 cursor-pointer"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Battery Showcase */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            {/* Central Battery Image */}
            <motion.div
            animate={{
              y: [0, 30, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative z-10"
            >
              <motion.img
                src="/battery/2AH-Battery-front.png"
                alt="ONE Battery System"
                className="w-auto object-contain drop-shadow-2xl"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              
              {/* Glowing effect around battery */}
              <motion.div
              animate={{
                scale: 1.15
              }}
              transition={{
                duration: 0.5
              }}
              className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-orange-500/30 rounded-full blur-3xl -z-10"
              />
            </motion.div>

            {/* Orbiting Tool Icons */}
            {/* {[
              { image: "/battery/5Ah Battery.png", angle: 0, delay: 0 },
              { image: "/battery/2Ah Battery.png", angle: 120, delay: 0.5 },
              { image: "/battery/4Ah Battery.png", angle: 240, delay: 1 }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="absolute"
                animate={{
                  rotate: [item.angle, item.angle + 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  delay: item.delay
                }}
                style={{
                  transformOrigin: "0 0",
                  left: "50%",
                  top: "50%",
                  width: "200px",
                  height: "200px"
                }}
              >
                <motion.img
                  src={item.image}
                  alt={`Battery ${index + 1}`}
                  className="w-16 h-16 object-contain"
                  animate={{
                    rotate: [0, -360]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    delay: item.delay
                  }}
                  whileHover={{ scale: 1.2 }}
                />
              </motion.div>
            ))} */}

            {/* Power Indicators */}
            {/* <motion.div
              className="absolute -top-8 -right-8 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: ["0 0 20px rgba(34,197,94,0.5)", "0 0 30px rgba(34,197,94,0.8)", "0 0 20px rgba(34,197,94,0.5)"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              100% Compatible
            </motion.div> */}

            {/* <motion.div
              className="absolute -bottom-8 -left-8 bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: ["0 0 20px rgba(168,85,247,0.5)", "0 0 30px rgba(168,85,247,0.8)", "0 0 20px rgba(168,85,247,0.5)"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              Universal Fit
            </motion.div> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default One;
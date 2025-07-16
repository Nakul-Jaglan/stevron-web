"use client"
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

function AboutSec() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const stats = [
    {
      number: "21+",
      label: "Countries",
      description: "Global reach and presence"
    },
    {
      number: "5 Mn+",
      label: "Clients Worldwide",
      description: "Trusted by professionals worldwide"
    },
    {
      number: "4500+",
      label: "Product Range",
      description: "Comprehensive tool solutions"
    },
    {
      number: "15000+",
      label: "Retail Points",
      description: "Decades of innovation in power tools"
    }
  ];

  const features = [
    {
      icon: "⚡",
      title: "ONE Battery Platform",
      description: "Revolutionary single battery system powering all your DC tools"
    },
    {
      icon: "🔧",
      title: "Professional Grade",
      description: "Built for demanding professionals who need reliability"
    },
    {
      icon: "🛡️",
      title: "Built to Last",
      description: "Engineered for durability, comfort, and consistent results"
    },
    {
      icon: "🚀",
      title: "Innovation Driven",
      description: "Cutting-edge technology meets practical performance"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="relative py-10 px-4  overflow-hidden "
    >
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 90, 180, 270, 360],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 270, 180, 90, 0],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center mb-20"
        >

          {/* Right Content - Visual Elements */}
          <motion.div
            variants={floatingVariants}
            className="relative flex items-center justify-center"
          >
            {/* Main Professional Image */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 1, -1, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Professional using Stevron tools"
                  className="w-96 h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl"></div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg"
              >
                Professional Grade
              </motion.div>
              
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
              >
                Built to Last
              </motion.div>
            </motion.div>

            {/* Orbiting Tool Icons */}
            {[
              { image: "/ac-tools/Router.png", angle: 0, delay: 0 },
              { image: "/dc-tools/20J Rotary Hammer.png", angle: 90, delay: 0.5 },
              { image: "/ac-tools/350W-Trimmer.png", angle: 180, delay: 1 },
              { image: "/dc-tools/60Nm.png", angle: 270, delay: 1.5 }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="absolute"
                animate={{
                  rotate: [item.angle, item.angle + 360]
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                  delay: item.delay
                }}
                style={{
                  transformOrigin: "0 0",
                  left: "50%",
                  top: "50%",
                  width: "250px",
                  height: "250px"
                }}
              >
                <motion.img
                  src={item.image}
                  alt={`Tool ${index + 1}`}
                  className="w-12 h-12 object-contain opacity-60"
                  animate={{
                    rotate: [0, -360]
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                    delay: item.delay
                  }}
                  whileHover={{ scale: 1.5, opacity: 1 }}
                />
              </motion.div>
            ))}
          </motion.div>

        {/* Left Content */}
        <div className="space-y-8">
          {/* Section Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 rounded-full px-4 py-2"
          >
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-yellow-400 text-sm font-semibold tracking-wider uppercase">
              About Stevron
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Where{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Power
              </span>{" "}
              Meets{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Purpose
              </span>
            </h2>
            
            <div className="space-y-4">
              <motion.p
                variants={itemVariants}
                className="text-xl text-white/90 leading-relaxed"
              >
                Stevron builds powerful, reliable tools for professionals who demand performance.
              </motion.p>
              
              <motion.p
                variants={itemVariants}
                className="text-lg text-white/80 leading-relaxed"
              >
                From corded and cordless machines to precision hand tools, we design for durability, comfort, and results—every time.
              </motion.p>
              
              <motion.p
                variants={itemVariants}
                className="text-lg text-yellow-400 font-semibold"
              >
                Powered by our 1ne Battery Platform, Stevron is where power meets purpose.
              </motion.p>
              
              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-4 pt-4"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-semibold">Built to last.</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-semibold">Ready to work.</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-6"
          >
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,196,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                // className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                className="bg-[#989b2e] text-white text-xl font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                Our Story
              </motion.button>
            </Link>
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05, borderColor: "rgba(255,196,0,0.8)" }}
                whileTap={{ scale: 0.95 }}
                // className="border-2 border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
                className="border border-white text-white text-xl font-bold px-8 py-4 rounded-full hover:bg-yellow-400/10 transition-all duration-300 cursor-pointer"
              >
                View Products
              </motion.button>
            </Link>
          </motion.div>
        </div>
        </motion.div>

        {/* Stats Section */}
        {/* <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-10"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-4xl font-bold text-yellow-400 mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
              <div className="text-sm text-white/70">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div> */}

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-white/80 text-base leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
    </section>
  );
}

export default AboutSec
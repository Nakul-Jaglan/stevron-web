"use client";
import BgLayout from "../../components/templates/bgLayout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

function AboutPageClient() {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const achievementsRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, amount: 0.2 });
  const isStoryInView = useInView(storyRef, { once: true, amount: 0.2 });
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.2 });
  const isTeamInView = useInView(teamRef, { once: true, amount: 0.2 });
  const isAchievementsInView = useInView(achievementsRef, { once: true, amount: 0.2 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.2 });

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

  const values = [
    {
      icon: "🎯",
      title: "Precision Engineering",
      description: "Every Stevron tool is meticulously crafted with precision engineering to deliver consistent, reliable performance in the most demanding environments."
    },
    {
      icon: "🛡️",
      title: "Uncompromising Quality",
      description: "We never compromise on quality. From premium materials to rigorous testing, every tool meets our exacting standards before it reaches your hands."
    },
    {
      icon: "🔋",
      title: "Innovation First",
      description: "Our revolutionary ONE Battery Platform showcases our commitment to innovative solutions that simplify your workflow and maximize efficiency."
    },
    {
      icon: "🤝",
      title: "Professional Partnership",
      description: "We're more than a tool manufacturer—we're your trusted partner, understanding the challenges you face and engineering solutions that work."
    }
  ];

  const achievements = [
    {
      number: "21+",
      label: "Countries",
      description: "Global reach and distribution network"
    },
    {
      number: "5 Mn+",
      label: "Clients Worldwide",
      description: "Trusted by professionals worldwide"
    },
    {
      number: "4500+",
      label: "Products",
      description: "Diverse range of tools and accessories"
    },
    {
      number: "15000+",
      label: "Retail Partners",
      description: "Customer satisfaction and loyalty"
    }
  ];

  return (
    <BgLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            className="max-w-6xl mx-auto text-center"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8"
            >
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-yellow-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
                About Stevron
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight"
            >
              Built for{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Those
              </span> Who Build the {" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                World
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4"
            >
              At Stevron, we craft powerful, precision-engineered tools for professionals who rely on performance every single day. From workshops to jobsites, we&apos;re here to simplify power and amplify results.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            >
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 30px #989b2e" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#989b2e] text-white text-lg sm:text-xl font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer w-full sm:w-auto"
                >
                  Explore Our Tools
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, borderColor: "#989b2e" }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white text-lg sm:text-xl font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#989b2e]/10 transition-all duration-300 cursor-pointer w-full sm:w-auto"
                >
                  Get In Touch
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Floating Elements - Hidden on small screens */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 right-4 sm:right-10 lg:right-20 opacity-20 hidden md:block"
          >
            <img src="/ac-tools/Router.png" alt="Tool" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-34 lg:h-34 object-contain" />
          </motion.div>
          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, -3, 3, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-40 left-4 sm:left-10 lg:left-20 opacity-20 hidden md:block"
          >
            <img src="/dc-tools/20J Rotary Hammer.png" alt="Tool" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-30 lg:h-30 object-contain" />
          </motion.div>
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-4 sm:left-10 lg:left-20 opacity-20 hidden lg:block"
          >
            <img src="/dc-tools/60Nm.png" alt="Tool" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-34 lg:h-34 object-contain" />
          </motion.div>
          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, -3, 3, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-40 right-4 sm:right-10 lg:right-20 opacity-20 hidden lg:block"
          >
            <img src="/ac-tools/1100W-Impact-Drill.png" alt="Tool" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-30 lg:h-30 object-contain" />
          </motion.div>
        </section>

        {/* Our Story Section */}
        <section 
          ref={storyRef}
          className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
          id="story"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isStoryInView ? "visible" : "hidden"}
            className="max-w-7xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                  Our{" "}
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    Story
                  </span>
                </h2>
                <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-white/80 leading-relaxed">
                    <motion.p
                        variants={itemVariants}
                    >
                        At Stevron, we don&apos;t just make tools—we build trust.
                    </motion.p>
                    <motion.p
                        variants={itemVariants}
                    >
                        Born from Bonhoeffer&apos;s legacy of industrial precision, Stevron was created to serve a new generation of professionals and makers who demand more from their tools. Whether it&apos;s a contractor powering through a 12-hour shift or a workshop owner perfecting every detail, we design with one goal: to deliver power, simplified.

                    </motion.p>
                    <motion.p
                        variants={itemVariants}
                    >
                        We started with a question: What if tools weren&apos;t just powerful, but smarter, tougher, and built for real-world work? From that question came our AC and DC power tool lines, our signature 1ne Battery platform, and a full range of ergonomic hand tools and accessories—each built to perform under pressure.
                    </motion.p>
                    <motion.p
                        variants={itemVariants}
                    >
                        Every Stevron product reflects the grit of the people who use it. We believe in durable designs, honest pricing, and tools that stand up to years of use, not just a few jobs.
                    </motion.p>
                    <motion.h2
                        variants={itemVariants}
                        className="text-2xl sm:text-3xl font-bold text-white mt-6 sm:mt-8"
                    >
                        This isn&apos;t hype. This is hardware.
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-lg sm:text-xl text-white/80 mt-4"
                    >
                        Because when your tools work harder, you work smarter.
                    </motion.p>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="relative order-first lg:order-last"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative"
                >
                  <img
                    src="https://www.mechnovamachines.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1552664730-d307ca884978&w=1080&q=75"
                    alt="Stevron Workshop"
                    className="rounded-2xl shadow-2xl w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl"></div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Values Section */}
        <section 
          ref={valuesRef}
          className="py-5 sm:py-10 px-4 sm:px-2 lg:px-4"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isValuesInView ? "visible" : "hidden"}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Our{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Values
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                The principles that guide everything we do and drive our commitment to excellence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 group text-center"
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-[#989b2e] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-base sm:text-lg">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Achievements Section */}
        <section 
          ref={achievementsRef}
          className="py-5 sm:py-10 px-4 sm:px-2 lg:px-4"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isAchievementsInView ? "visible" : "hidden"}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Our{" "}
                <span className="bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
                  Achievements
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Numbers that reflect our commitment to excellence and customer satisfaction.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 group text-center"
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold group-hover:text-yellow-400 mb-3 sm:mb-4 text-[#989b2e] transition-colors duration-300"
                  >
                    {achievement.number}
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {achievement.label}
                  </h3>
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section 
          ref={ctaRef}
          className="py-5 sm:py-01 px-4 sm:px-2 lg:px-4"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isCtaInView ? "visible" : "hidden"}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              variants={itemVariants}
              className="relative overflow-hidden"
            >
              <div className="relative z-10">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-5xl sm:text-6xl lg:text-8xl mb-6 sm:mb-8"
                >
                  🚀
                </motion.div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  Ready to Experience{" "}
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    Stevron Quality?
                  </span>
                </h2>

                <p className="text-lg sm:text-xl text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                  Join thousands of professionals who trust Stevron for their most demanding projects. 
                  Discover the difference that true innovation and quality can make.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                  <Link href="/products">
                    <motion.button
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: "0 20px 30px #989b2e",
                        y: -3
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#989b2e] text-white text-lg sm:text-xl font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer w-full sm:w-auto"
                    >
                      Shop Now
                    </motion.button>
                  </Link>
                  
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ 
                        scale: 1.05, 
                        borderColor: "#989b2e",
                        y: -3
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-white text-white text-lg sm:text-xl font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#989b2e]/10 transition-all duration-300 cursor-pointer w-full sm:w-auto"
                    >
                      Contact Us
                    </motion.button>
                  </Link>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-white/60 text-xs sm:text-sm"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Professional Grade</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span>12+ Countries</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    <span>Global Warranty</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span>ONE Battery Platform</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </BgLayout>
  );
}

export default AboutPageClient;

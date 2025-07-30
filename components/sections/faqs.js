"use client";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef } from "react";
import Link from "next/link";

function Faqs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What makes Stevron tools different from other brands?",
      answer: "From our AC to cordless DC tools, every handle, motor, and battery platform is engineered for real-world chaos—gritty worksites, long hours, relentless jobs—where shortcuts aren’t allowed and second chances are rare. We sweat the details others overlook: comfort that actually makes a 12-hour day bearable, quality you can literally feel in the grip, and resilience that doesn't fade after a single tough week."
    },
    {
      question: "Are Stevron cordless tools compatible with the same battery?",
      answer: "Yes. All Stevron DC tools run on the 1ne Battery Platform, ensuring seamless compatibility, extended runtime, and enhanced safety across devices."
    },
    {
      question: "Can I buy Stevron tools online?",
      answer: "Yes. Stevron tools are available through select online platforms and authorized professional distributors. Check our Where to Buy section for more."
    },
    {
      question: "Do Stevron tools come with a warranty?",
      answer: "Absolutely. All power tools and batteries come with a warranty covering manufacturing defects. Warranty terms vary by product—please refer to individual listings."
    },
    {
      question: "Who are Stevron tools designed for?",
      answer: "Our tools are crafted for skilled tradespeople, workshop pros, and serious DIYers who demand reliable performance in tough environments."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 120, 240, 360],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 240, 120, 0],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-4xl mx-auto">
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
              Frequently Asked Questions
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Got{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Questions?
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Find answers to common questions about our professional-grade tools, warranties, and support.
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-4 mb-16"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-4 cursor-pointer">
                  <div 
                    // className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-black font-bold text-sm"
                    className="flex-shrink-0 w-8 h-8 bg-[#989b2e] rounded-full flex items-center justify-center text-white font-bold text-lg"
                >
                    {index + 1}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-[#989b2e] transition-colors">
                    {faq.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <svg className="w-6 h-6 text-white/70 group-hover:text-yellow-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="md:pl-12 md:pr-10">
                        <motion.p
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ duration: 0.2, delay: 0.1 }}
                          className="text-white/80 leading-relaxed text-lg"
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Warranty Registration CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden"
          >
            {/* Background Animation */}
            {/* <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-3xl blur-xl"
            /> */}

            <div className="relative z-10">
              <motion.div
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-6xl mb-6"
              >
                🛡️
              </motion.div>

              <h3 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Register Your{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Warranty
                </span>
              </h3>

              <p className="text-2xl text-white/80 mb-8 max-w-5xl mx-auto leading-relaxed">
                Protect your investment and ensure full warranty coverage. Register your Stevron tools today for peace of mind and professional support.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/warranty/register">
                  <motion.button
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 20px 30px #989b2e",
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                    // className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg min-w-[200px]"
                    className="bg-[#989b2e] text-white text-xl font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  >
                    Register Now
                  </motion.button>
                </Link>
                
                <Link href="/warranty/info">
                  <motion.button
                    whileHover={{ 
                      scale: 1.05, 
                      borderColor: "#989b2e",
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                    // className="border-2 border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 text-lg min-w-[200px]"
                    className="border-2 border-white text-white text-xl font-bold px-8 py-4 rounded-full hover:bg-[#989b2e]/10 transition-all duration-300 cursor-pointer"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8 flex flex-col space-y-6 md:space-y-0 md:flex-row items-center justify-center space-x-6 text-white/60 text-sm"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Quick Registration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span>Professional Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span>Extended Coverage</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Faqs;

"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function useCountUp(end, duration = 2, decimals = 0) {
  const [count, setCount] = useState(0);
  const start = 0;
  useEffect(() => {
    let startTimestamp = null;
    function step(timestamp) {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const value = start + (end - start) * progress;
      setCount(Number(value.toFixed(decimals)));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
    requestAnimationFrame(step);
    // eslint-disable-next-line
  }, [end, duration]);
  return count;
}

function Stat({ label, value, suffix = "", duration = 2, decimals = 0 }) {
  const count = useCountUp(value, duration, decimals);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center p-4"
    >
      <span className="text-4xl md:text-6xl font-bold text-[#989b2e] drop-shadow-lg">
        {count}{suffix}
      </span>
      <span className="text-lg md:text-xl text-gray-200 mt-2 text-center font-medium">
        {label}
      </span>
    </motion.div>
  );
}

function Brand() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full py-20 text-white relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mx-auto text-center mb-12"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          From the house of <span className="text-[#989b2e]">Bonhoeffer Machines</span>
        </h2>
        <p className="text-lg md:text-2xl text-gray-300 font-medium">
          A legacy of innovation, trust, and global leadership in the world of tools and machinery.
        </p>
      </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto">
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
                }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto lg:pl-10"
            >
                <Stat label="Countries" value={21} suffix="+" />
                <Stat label="Clients" value={5.27} suffix="M+" duration={2.5} decimals={2} />
                <Stat label="Distributors" value={5000} suffix="+" duration={2.2} />
                <Stat label="Retail Points" value={11000} suffix="+" duration={2.3} />
                <Stat label="Workforce" value={200} suffix="+" duration={2.1} />
                <Stat label="Nationalities" value={7} suffix="" duration={1.8} />
                {/* <Stat label="Offices" value={6} suffix="" duration={1.7} />
                <Stat label="Countries with Offices" value={3} suffix="" duration={1.7} /> */}
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto text-center lg:pr-10"
            >
                <video 
                    className='lg:w-full w-[75%] mx-auto object-cover rounded-2xl shadow-xl' 
                    autoPlay 
                    loop 
                    muted
                >
                    <source src="https://bonhoeffermachines.com/en/public/images/Brand_Video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </motion.div>
        </div>
      {/* <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center mt-16"
      >
        <p className="text-xl md:text-2xl text-gray-300 font-medium">
          Bonhoeffer Machines is trusted by millions, with a presence in every corner of the globe. Our commitment to quality and service has made us a leader in the industry.
        </p>
      </motion.div> */}
    </motion.section>
  );
}

export default Brand;
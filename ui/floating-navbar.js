"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";


export const FloatingNav = ({
  navItems,
  className
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState("ES");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const languages = [
    { code: "ES", name: "ES" },
    { code: "EN", name: "EN" }
  ];

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language.name);
    setIsDropdownOpen(false);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-5 inset-x-0 mx-auto border border-white/25 rounded-full bg-black backdrop-blur-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-8",
          className
        )}>
        {/* Logo and Brand Name */}
        <Link href="/" >
          <div className="flex items-center space-x-3 mr-10">
            <img src="/letter.png" alt="Logo" className="w-8 h-8" />
            <span className="text-white text-2xl font-bold select-none">STEVRON</span>
          </div>
        </Link>
        {navItems.map((navItem, idx) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative text-gray-100 items-center flex space-x-1 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}>
            {/* <span className="block sm:hidden">{navItem.icon}</span> */}
            <span className="hidden sm:block text-lg">{navItem.name}</span>
          </a>
        ))}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="border text-lg font-medium relative border-white/25 text-white px-3 py-2 cursor-pointer rounded-full flex items-center space-x-2 hover:bg-white/10 transition-colors">
            <span>{selectedLanguage}</span>
            <svg 
              className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full mt-2 right-0 bg-black border border-white/25 rounded-lg shadow-lg min-w-[12px] z-10"
              >
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageChange(language)}
                    className={`w-full text-left cursor-pointer px-4 py-2 text-lg hover:bg-white/10 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                      selectedLanguage === language.code ? 'text-blue-400' : 'text-white'
                    }`}
                  >
                    {language.name}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

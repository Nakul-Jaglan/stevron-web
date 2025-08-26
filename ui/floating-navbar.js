"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
// import { cn } from "@/lib/utils";
import Link from "next/link";


export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState("ES");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languages = [
    { code: "ES", name: "ES" },
    { code: "EN", name: "EN" }
  ];

  const productDropdownItems = [
    {
      name: "AC Tools",
      image: "/ac-tools/Router.png",
      link: "/productos/herramientas-electricas"
    },
    {
      name: "DC Tools",
      image: "/dc-tools/20J Rotary Hammer.png",
      link: "/productos/herramientas-baterias"
    },
    {
      name: "Hand Tools",
      image: "/ac-tools/350W-Trimmer.png",
      link: "/productos/herramientas-manuales"
    },
    {
      name: "Accessories",
      image: "/dc-tools/60Nm.png",
      link: "/productos/abrasivos-y-accessorios"
    }
  ];

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language.name);
    setIsDropdownOpen(false);
  };

  // Close mobile menu on resize above 810px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 810) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          "flex max-w-fit fixed top-5 inset-x-0 bg-black mx-auto border border-white/25 rounded-full backdrop-blur-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-8",
          className
        )}>
        {/* Logo and Brand Name (always visible) */}
        <Link href="/" >
          <div className="flex items-center space-x-3 mr-4">
            <img src="/letter.png" alt="Logo" className="w-8 h-8" />
            <span className="text-white text-2xl font-bold select-none">STEVRON</span>
          </div>
        </Link>
        {/* Hamburger for <810px */}
        <button
          className="flex md:hidden absolute left-1/2 -translate-x-1/2 z-50 bg-black/70 border border-white/20 rounded-full p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label="Open menu"
        >
          <span className="block w-6 h-0.5 bg-white mb-1 rounded transition-all" style={{ transform: mobileMenuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }}></span>
          <span className={`block w-6 h-0.5 bg-white mb-1 rounded transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className="block w-6 h-0.5 bg-white rounded transition-all" style={{ transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }}></span>
        </button>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((navItem, idx) => (
            <div
              key={`navitem-${idx}`}
              className="relative"
              onMouseEnter={() => navItem.name === "Products" && setProductsDropdownOpen(true)}
              onMouseLeave={() => navItem.name === "Products" && setProductsDropdownOpen(false)}
            >
              {navItem.name === "Products" ? (
                <>
                  <button
                    type="button"
                    onClick={() => setProductsDropdownOpen((open) => !open)}
                    className={cn(
                      "relative text-gray-100 items-center space-x-1 dark:hover:text-neutral-300 hover:text-neutral-500 text-lg hidden sm:flex px-2 py-1 rounded-lg transition-colors ",
                      productsDropdownOpen && "bg-white/10"
                    )}
                    tabIndex={0}
                    aria-haspopup="true"
                    aria-expanded={productsDropdownOpen}
                  >
                    <span>{navItem.name}</span>
                    <svg className={`w-4 h-4 ml-1 transition-transform ${productsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <AnimatePresence>
                    {productsDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-black/90 backdrop-blur-xl border border-white/25 rounded-2xl shadow-xl p-4 z-50 w-[35vw] md:w-[50vw] lg:w-[65vw] min-w-[320px]"
                      >
                        {productDropdownItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.link}
                            className="flex flex-col items-center justify-end w-32 h-32 md:w-50 md:h-50 bg-[#181818] rounded-xl border border-white/10 shadow-md hover:bg-[#23240e] transition-colors group relative overflow-hidden"
                          >
                            <img src={item.image} alt={item.name} className="h-full object-contain mt-6 mb-2 drop-shadow-lg group-hover:scale-105 transition-transform" />
                            <span className=" md:absolute md:bottom-3 md:left-1/2 md:-translate-x-1/2 text-white text-base font-semibold tracking-wide bg-black/60 px-2 py-1 rounded-md">
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <a
                  href={navItem.link}
                  className={cn(
                    "relative text-gray-100 items-center space-x-1 dark:hover:text-neutral-300 hover:text-neutral-500 hidden sm:block text-lg px-2 py-1 rounded-lg transition-colors"
                  )}
                >
                  <span>{navItem.name}</span>
                </a>
              )}
            </div>
          ))}
        </div>
        {/* Language Switcher (always visible) */}
        <div className="relative ml-2">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="border text-lg font-medium relative border-white/25 text-white px-3 py-2 cursor-pointer rounded-full flex items-center space-x-2 hover:bg-white/10 transition-colors"
          >
            <span>{selectedLanguage}</span>
            <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className="absolute top-full mt-2 right-0 bg-black backdrop-blur-lg border border-white/25 rounded-lg shadow-lg min-w-[12px] z-10"
              >
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageChange(language)}
                    className={`w-full text-left cursor-pointer px-4 py-2 backdrop-blur-xl text-lg hover:bg-white/10 transition-colors first:rounded-t-lg last:rounded-b-lg ${
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
        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.25 }}
              className="fixed top-90 left-0 w-full h-full bg-black/10 z-[6000] flex flex-col items-center justify-center md:hidden"
            >
              <button
                className="absolute top-6 right-6 text-white text-3xl"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                &times;
              </button>
              <div className="flex flex-col items-center space-y-8">
                {/* Logo and Brand Name inside hamburger */}
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  <div className="flex items-center space-x-3 mb-6">
                    <img src="/letter.png" alt="Logo" className="w-10 h-10" />
                    <span className="text-white text-3xl font-bold select-none">STEVRON</span>
                  </div>
                </Link>
                {/* Nav Items */}
                {navItems.map((navItem, idx) => (
                  <div
                    key={`mobile-navitem-${idx}`}
                    className="relative w-full"
                    onMouseEnter={() => navItem.name === "Products" && setProductsDropdownOpen(true)}
                    onMouseLeave={() => navItem.name === "Products" && setProductsDropdownOpen(false)}
                  >
                    {navItem.name === "Products" ? (
                      <>
                        <button
                          type="button"
                          onClick={() => setProductsDropdownOpen((open) => !open)}
                          className={cn(
                            "relative text-gray-100 items-center space-x-1 dark:hover:text-neutral-300 hover:text-neutral-500 text-lg w-full text-left px-4 py-2 rounded-lg transition-colors ",
                            productsDropdownOpen && "bg-white/10"
                          )}
                          tabIndex={0}
                          aria-haspopup="true"
                          aria-expanded={productsDropdownOpen}
                        >
                          <span>{navItem.name}</span>
                          <svg className={`w-4 h-4 ml-1 transition-transform ${productsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </button>
                        <AnimatePresence>
                          {productsDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute left-1/2 -translate-x-1/2 top-full mt-3 grid grid-cols-1 gap-4 bg-black/90 backdrop-blur-xl border border-white/25 rounded-2xl shadow-xl p-4 z-50 w-[80vw] max-w-[400px]"
                            >
                              {productDropdownItems.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.link}
                                  className="flex flex-col items-center justify-end w-full bg-[#181818] rounded-xl border border-white/10 shadow-md hover:bg-[#23240e] transition-colors group relative overflow-hidden"
                                >
                                  <img src={item.image} alt={item.name} className="h-full object-contain mt-6 mb-2 drop-shadow-lg group-hover:scale-105 transition-transform" />
                                  <span className=" md:absolute md:bottom-3 md:left-1/2 md:-translate-x-1/2 text-white text-base font-semibold tracking-wide bg-black/60 px-2 py-1 rounded-md">
                                    {item.name}
                                  </span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a
                        href={navItem.link}
                        className={cn(
                          "relative text-gray-100 items-center space-x-1 dark:hover:text-neutral-300 hover:text-neutral-500 w-full text-left text-lg px-4 py-2 rounded-lg transition-colors"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span>{navItem.name}</span>
                      </a>
                    )}
                  </div>
                ))}
                {/* Language Switcher inside hamburger */}
                <div className="relative mt-8">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="border text-lg font-medium relative border-white/25 text-white px-4 py-2 cursor-pointer rounded-full flex items-center space-x-2 hover:bg-white/10 transition-colors"
                  >
                    <span>{selectedLanguage}</span>
                    <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                        className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-black backdrop-blur-lg border border-white/25 rounded-lg shadow-lg min-w-[12px] z-10"
                      >
                        {languages.map((language) => (
                          <button
                            key={language.code}
                            onClick={() => handleLanguageChange(language)}
                            className={`w-full text-left cursor-pointer px-4 py-2 backdrop-blur-xl text-lg hover:bg-white/10 transition-colors first:rounded-t-lg last:rounded-b-lg ${selectedLanguage === language.code ? 'text-blue-400' : 'text-white'}`}
                          >
                            {language.name}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

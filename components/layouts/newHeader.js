"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

function NewHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("ES");
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  const languages = [
    { code: "ES", name: "ES" },
    { code: "EN", name: "EN" }
  ];

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products", hasDropdown: true },
    // { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" }
  ];

  const productCategories = [
    { 
      name: "AC Tools", 
      href: "/products/ac-tools", 
      image: "/ac-tools/BNIMD710.webp",
      description: "Alternating current power tools"
    },
    { 
      name: "DC Tools", 
      href: "/products/dc-tools", 
      image: "/dc-tools/20J Rotary Hammer.png",
      description: "Direct current power tools"
    },
    { 
      name: "Hand Tools", 
      href: "/products/hand-tools", 
      image: "/hand-tools/BCP7X180.webp",
      description: "Manual hand tools"
    },
    { 
      name: "Accessories", 
      href: "/products/accessories", 
      image: "/accessories/BWCB125M.webp",
      description: "Tool accessories & parts"
    }
  ];

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang.code);
    setIsLangDropdownOpen(false);
  };

  const handleProductsDropdown = (isOpen) => {
    setIsProductsDropdownOpen(isOpen);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className="fixed top-0.5 lg:top-2.5 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl"
      role="banner"
    >
      <motion.nav
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-black/70 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4 shadow-2xl"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <Link href="/" aria-label="Stevron Tools - Home">
              <motion.img
                src="/logo.png"
                alt="Stevron Tools Logo"
                className="h-5 sm:h-10 w-auto"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.ul
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:flex items-center space-x-8"
            role="menubar"
          >
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                role="none"
                className="relative"
                onMouseEnter={() => item.hasDropdown && handleProductsDropdown(true)}
                onMouseLeave={() => item.hasDropdown && handleProductsDropdown(false)}
              >
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                      className="text-white/90 hover:text-white text-xl font-medium transition-all duration-300 relative group flex items-center space-x-1"
                      role="menuitem"
                      aria-expanded={isProductsDropdownOpen}
                      aria-haspopup="true"
                    >
                      <motion.span
                        className="relative z-10"
                        whileHover={{ y: -2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {item.name}
                      </motion.span>
                      <motion.svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotate: isProductsDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                      <motion.div
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-pink-500 group-hover:w-full transition-all duration-300"
                        layoutId="navbar-underline"
                      />
                    </button>

                    {/* Products Dropdown */}
                    <AnimatePresence>
                      {isProductsDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-xl border border-white/20 rounded-xl shadow-xl min-w-[320px] overflow-hidden z-50"
                          role="menu"
                          aria-label="Products submenu"
                        >
                          <div className="grid grid-cols-2 gap-2 p-4">
                            {productCategories.map((category, idx) => (
                              <motion.div
                                key={category.name}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                              >
                                <Link
                                  href={category.href}
                                  className="block p-3 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                                  role="menuitem"
                                  onClick={() => setIsProductsDropdownOpen(false)}
                                >
                                  <div className="flex flex-col items-center space-y-2">
                                    <div className="w-30 h-30 bg-white/5 rounded-lg flex items-center justify-center overflow-hidden">
                                      <img 
                                        src={category.image} 
                                        alt={category.name}
                                        className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-300"
                                      />
                                    </div>
                                    <div className="text-center">
                                      <h3 className="text-white font-medium text-base">{category.name}</h3>
                                      {/* <p className="text-white/60 text-xs mt-1">{category.description}</p> */}
                                    </div>
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-white/90 hover:text-white text-xl font-medium transition-all duration-300 relative group"
                    role="menuitem"
                  >
                    <motion.span
                      className="relative z-10"
                      whileHover={{ y: -2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.name}
                    </motion.span>
                    <motion.div
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-pink-500 group-hover:w-full transition-all duration-300"
                      layoutId="navbar-underline"
                    />
                  </Link>
                )}
              </motion.li>
            ))}
          </motion.ul>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative"
            >
              <motion.button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-3 py-1 text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Language selector"
                aria-expanded={isLangDropdownOpen}
                aria-haspopup="true"
              >
                <span className="text-base lg:text-lg font-medium">{selectedLanguage}</span>
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: isLangDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>

              <AnimatePresence>
                {isLangDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 right-0 bg-black/90 backdrop-blur-xl border border-white/20 rounded-xl shadow-xl min-w-[10px] overflow-hidden"
                    role="menu"
                    aria-label="Language options"
                  >
                    {languages.map((lang) => (
                      <motion.button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang)}
                        className={`w-20 text-left px-4 py-3 text-lg transition-all duration-200 ${
                          selectedLanguage === lang.code
                            ? 'bg-white/20 text-white'
                            : 'text-white/80 hover:bg-white/10 hover:text-white'
                        }`}
                        whileHover={{ x: 4 }}
                        role="menuitem"
                      >
                        {lang.name}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex flex-col space-y-1 rounded-lg hover:bg-white/10 transition-colors duration-300"
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <motion.span
                className="block w-6 h-0.5 bg-white rounded-full"
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 8 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-white rounded-full"
                animate={{
                  opacity: isMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-white rounded-full"
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -8 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-6 pt-6 border-t border-white/20"
            >
              <motion.ul
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="space-y-4"
                role="menu"
              >
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                    role="none"
                  >
                    {item.hasDropdown ? (
                      <div className="">
                        <Link href={item.href}>
                          <div className="text-white/90 text-lg hover:text-white hover:bg-white/10 rounded-lg font-medium py-1 px-4 transition-all duration-300">
                            {item.name}
                          </div>
                        </Link>
                        <div className="pl-4 space-y-2">
                          {productCategories.map((category) => (
                            <Link
                              key={category.name}
                              href={category.href}
                              className="flex items-center space-x-3 text-white/70 hover:text-white text-base py-1 px-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                              onClick={() => setIsMenuOpen(false)}
                              role="menuitem"
                            >
                              {/* <div className="w-8 h-8 bg-white/5 rounded-md flex items-center justify-center overflow-hidden flex-shrink-0">
                                <img 
                                  src={category.image} 
                                  alt={category.name}
                                  className="w-6 h-6 object-contain"
                                />
                              </div> */}
                              <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              >
                                →
                              </motion.span>
                              <motion.span
                                whileHover={{ x: 4 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                {category.name}
                              </motion.span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block text-white/90 hover:text-white text-lg font-medium  px-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                        onClick={() => setIsMenuOpen(false)}
                        role="menuitem"
                      >
                        <motion.span
                          whileHover={{ x: 4 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {item.name}
                        </motion.span>
                      </Link>
                    )}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.header>
  );
}

export default NewHeader;

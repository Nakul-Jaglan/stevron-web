"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

function NewFooter() {
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("ES");
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const languages = [
    { code: "ES", name: "Español" },
    { code: "EN", name: "English" }
  ];

  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "AC Tools", href: "/products/ac-tools" },
        { name: "DC Tools", href: "/products/dc-tools" },
        { name: "Hand Tools", href: "/products/hand-tools" },
        { name: "Accessories", href: "/products/accessories" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Story", href: "/about#story" },
        // { name: "Careers", href: "/careers" },
        // { name: "Press", href: "/press" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/contact" },
        // { name: "Help Center", href: "/help" },
        { name: "Warranty", href: "https://bonhoeffermachines.com/en/warranty-registration" },
        // { name: "Returns", href: "/returns" }
      ]
    },
    // {
    //   title: "Legal",
    //   links: [
    //     { name: "Privacy Policy", href: "/privacy" },
    //     { name: "Terms of Service", href: "/terms" },
    //     { name: "Cookie Policy", href: "/cookies" },
    //     { name: "Disclaimer", href: "/disclaimer" }
    //   ]
    // }
  ];

  const socialLinks = [
    { 
        name: "Facebook", 
        href: "https://facebook.com/stevrontools",
        icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
    },
    { 
        name: "Instagram", 
        href: "https://instagram.com/stevrontools",
        icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
    },
    {
        name: "WhatsApp",
        href: "https://wa.me/918595817577",
        icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374A9.86 9.86 0 012.13 12.04c0-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.979c-.003 5.45-4.437 9.884-9.887 9.884zm8.413-18.297A11.815 11.815 0 0012.018 0C5.406 0 .13 5.273.13 11.877c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.678a11.87 11.87 0 005.701 1.453h.005c6.611 0 11.987-5.273 11.987-11.877a11.82 11.82 0 00-3.488-8.463z"
    },
    // { 
    //     name: "YouTube", 
    //     href: "https://youtube.com/@stevrontools",
    //     icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
    // }
  ];

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang.code);
    setIsLangDropdownOpen(false);
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className="relative bg-black/70 backdrop-blur-xl border-t border-white/20 mt-20"
      role="contentinfo"
    >
      {/* Animated background gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20 pointer-events-none" /> */}
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-2">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 text-left"
          >
            <Link href="/" className="inline-block mb-4">
              <motion.img
                src="/logo.png"
                alt="Stevron Tools Logo"
                className="h-12 w-auto"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              />
            </Link>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/70 text-base leading-relaxed mb-6 max-w-sm"
            >
              Stevron Tools - Your trusted partner for professional power tools, hand tools, and accessories. Quality craftsmanship for every project.
            </motion.p>
            
           
          </motion.div>
            
          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + sectionIndex * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-white font-semibold text-lg mb-4 relative">
                {section.title}
                <motion.div
                  className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-pink-500"
                  initial={{ width: 0 }}
                  animate={{ width: 32 }}
                  transition={{ duration: 0.8, delay: 0.8 + sectionIndex * 0.1 }}
                />
              </h3>
              <ul className="space-y-3" role="list">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + sectionIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-all duration-300 text-base block relative group"
                    >
                      <motion.span
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {link.name}
                      </motion.span>
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-pink-500 group-hover:w-15 transition-all duration-300" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          <div className="flex flex-col items-start space-y-6">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-2 text-base"
            >
              <p className="text-white/70">
                <span className="text-white font-semibold">Contact:</span> Ashwin Tharoor
              </p>
              <p className="text-white/70">
                <span className="text-white font-semibold">Phone:</span> 
                <Link href="tel:+918595817577" className="hover:text-[#989b2e] transition-colors ml-1">
                  +91 8595817577
                </Link>
              </p>
              <p className="text-white/70">
                <span className="text-white font-semibold">Email:</span> 
                <Link href="mailto:ashwin@stevrontools.com" className="hover:text-[#989b2e] transition-colors ml-1 wrap-anywhere xl:wrap-normal">
                  ashwin@stevrontools.com
                </Link>
              </p>
            </motion.div>
            
            {/* Social Media Links */}
            <motion.div className="flex items-center space-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <span className="text-white/80 text-base font-semibold">Follow Us:</span>
                <motion.div className="flex space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    {socialLinks.map((social, index) => (
                        <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white transition-all duration-300 group"
                        onMouseEnter={() => setHoveredSocial(index)}
                        onMouseLeave={() => setHoveredSocial(null)}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`Follow us on ${social.name}`}
                        >
                            <motion.svg
                                className="w-6 h-6 hover:scale-150 hover:text-[#989b2e] transition-all duration-300"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d={social.icon} />
                            </motion.svg>
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Social Links & Language Switcher */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20 space-y-6 md:space-y-0"
        >
          <div className="flex items-center space-x-6">
            <span className="text-white/70 text-sm font-medium">Follow Us:</span>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-all duration-300 group"
                  onMouseEnter={() => setHoveredSocial(index)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <motion.svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    animate={{
                      rotate: hoveredSocial === index ? 360 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <path d={social.icon} />
                  </motion.svg>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-4 py-2 text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Language selector"
              aria-expanded={isLangDropdownOpen}
              aria-haspopup="true"
            >
              <span className="text-sm font-medium">{selectedLanguage}</span>
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

            <LinknimatePresence>
              {isLangDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full mb-2 right-0 bg-black/90 backdrop-blur-xl border border-white/20 rounded-xl shadow-xl min-w-[120px] overflow-hidden"
                  role="menu"
                  aria-label="Language options"
                >
                  {languages.map((lang) => (
                    <motion.button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang)}
                      className={`w-full text-left px-4 py-3 text-sm transition-all duration-200 ${
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
          </div>
        </motion.div>  */}

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center pt-8 border-t border-white/10 mt-8"
        >
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Stevron Tools. All rights reserved.
            {/* <motion.span
              className="ml-1 text-white/70 hover:text-white transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
               | Crafted with ❤️ for professionals
            </motion.span> */}
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default NewFooter;
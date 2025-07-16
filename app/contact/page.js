"use client";
import BgLayout from '@/components/templates/bgLayout'
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function ContactPage() {
  const router = useRouter();
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const contactRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isFormInView = useInView(formRef, { once: true, amount: 0.2 });
  const isContactInView = useInView(contactRef, { once: true, amount: 0.3 });

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    requirement: '',
    quantity: '',
    city: '',
    country: '',
    designation: '',
    subject: '',
    message: ''
  });

  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const requirements = [
    { value: 'buyer', label: 'Buyer' },
    { value: 'dealer', label: 'Dealer' },
    { value: 'general', label: 'General Query' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      requirement: '',
      quantity: '',
      city: '',
      country: '',
      designation: '',
      subject: '',
      message: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ashwin@stevrontools.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _next: window.location.href,
          _captcha: false,
          _template: 'table'
        })
      });

      if (response.ok) {
        resetForm();
        setShowModal(true);
        
        // Auto close modal after 5 seconds
        setTimeout(() => {
          setShowModal(false);
          router.push('/');
        }, 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    router.push('/');
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

  const contactInfo = [
    {
      icon: "📧",
      title: "Email Us",
      content: "ashwin@stevrontools.com",
      link: "mailto:ashwin@stevrontools.com",
      description: "For business inquiries and support"
    },
    {
      icon: "📱",
      title: "Call Us",
      content: "+91 85958 17577",
      link: "tel:+918595817577",
      description: "Monday to Friday, 9:00 AM - 6:00 PM"
    },
    {
      icon: "🏢",
      title: "Visit Us",
      content: "Stevron Headquarters",
      link: "https://maps.app.goo.gl/gg82gZni3djiT9b29",
      description: "2nd Floor, Plot No. 756, Udyog Vihar Phase V, Gurugram, Haryana 122015"
    },
    {
      icon: "🌐",
      title: "Follow Us",
      content: "Social Media",
      link: "https://www.instagram.com/stevrontools/",
      description: "Stay updated with latest news"
    }
  ];

  return (
    <BgLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center px-4 pt-20"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-400/20 to-purple-500/20 border border-blue-400/30 rounded-full px-6 py-3 mb-8"
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">
                Contact Us
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight"
            >
              Get In{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Touch
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Ready to experience the Stevron difference? We&apos;re here to help you find the perfect tools for your needs.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59,130,246,0.3)" }}
                whileTap={{ scale: 0.95 }}
                // className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                className="bg-[#989b2e] text-white text-xl font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                Send Message
              </motion.button>
              <motion.button
                onClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05, borderColor: "rgba(59,130,246,0.8)" }}
                whileTap={{ scale: 0.95 }}
                // className="border-2 border-white/30 text-white font-bold px-12 py-4 rounded-full hover:bg-white/10 transition-all duration-300 text-lg"
                className="border-2 border-white/30 text-white text-xl font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                Contact Info
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Floating Elements */}
          {/* <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 right-20 opacity-20"
          >
            <div className="text-6xl">📧</div>
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
            className="absolute bottom-40 left-20 opacity-20"
          >
            <div className="text-6xl">📱</div>
          </motion.div> */} 

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
            className="absolute top-20 right-20 opacity-20"
          >
            <img src="/ac-tools/Router.png" alt="Tool" className="w-34 h-34 object-contain" />
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
            className="absolute bottom-40 left-20 opacity-20"
          >
            <img src="/dc-tools/20J Rotary Hammer.png" alt="Tool" className="w-30 h-30 object-contain" />
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
            className="absolute top-20 left-20 opacity-20"
          >
            <img src="/dc-tools/60Nm.png" alt="Tool" className="w-34 h-34 object-contain" />
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
            className="absolute bottom-40 right-20 opacity-20"
          >
            <img src="/ac-tools/1100W-Impact-Drill.png" alt="Tool" className="w-30 h-30 object-contain" />
          </motion.div>
        </section>

        {/* Contact Form Section */}
        <section 
          ref={formRef}
          className="py-10 px-4"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isFormInView ? "visible" : "hidden"}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                Send Us A{" "}
                <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  Message
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
            </motion.div>

            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-white font-semibold text-sm tracking-wider">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-white font-semibold text-sm tracking-wider">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-white font-semibold text-sm tracking-wider">
                    PHONE NUMBER *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-white font-semibold text-sm tracking-wider">
                    COMPANY
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all duration-300"
                    placeholder="Enter your company name"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-white font-semibold text-sm tracking-wider">
                    REQUIREMENT *
                  </label>
                  <select
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all duration-300"
                  >
                    <option value="" className="bg-gray-800">Select requirement</option>
                    {requirements.map((req) => (
                      <option key={req.value} value={req.value} className="bg-gray-800">
                        {req.label}
                      </option>
                    ))}
                  </select>
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-white font-semibold text-sm tracking-wider">
                    QUANTITY
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all duration-300"
                    placeholder="Enter quantity"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-white font-semibold text-sm tracking-wider">
                    CITY 
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all duration-300"
                    placeholder="Enter your city"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-white font-semibold text-sm tracking-wider">
                    COUNTRY *
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all duration-300"
                    placeholder="Enter your country"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-white font-semibold text-sm tracking-wider">
                    DESIGNATION
                  </label>
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all duration-300"
                    placeholder="Enter your designation"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-white font-semibold text-sm tracking-wider">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all duration-300"
                    placeholder="Enter message subject"
                  />
                </motion.div>
              </div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="space-y-2 mb-8"
              >
                <label className="text-white font-semibold text-sm tracking-wider">
                  MESSAGE *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all duration-300 resize-none"
                  placeholder="Enter your message"
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59,130,246,0.3)" }}
                whileTap={{ scale: 0.95 }}
                // className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                className="w-full bg-[#989b2e] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </section>

        {/* Contact Information Section */}
        <section 
          ref={contactRef}
          className="py-10 px-4"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isContactInView ? "visible" : "hidden"}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                Other Ways To{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Reach Us
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Choose the method that works best for you to get in touch with our team.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center"
                    whileHover={{ scale: 1.1, y: -10 }}
                >
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                        {info.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {info.title}
                    </h3>
                    <Link href={info.link} target="_blank" rel="noopener noreferrer">
                        <p className="text-blue-400 hover:text-[#989b2e] font-semibold text-lg mb-4">
                            {info.content}
                        </p>
                    </Link>
                    <p className="text-white/80 text-sm leading-relaxed">
                        {info.description}
                    </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Thank You Modal */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 max-w-md w-full text-center relative"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-6xl mb-6"
                >
                  ✅
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  Thank You!
                </h3>
                
                <p className="text-white/80 mb-6 leading-relaxed">
                  Your message has been sent successfully. We will get back to you shortly.
                </p>
                
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6">
                  <p className="text-sm text-white/70">
                    For urgent matters, you can also reach us directly at:
                  </p>
                  <p className="text-blue-400 font-semibold">
                    ashwin@stevrontools.com
                  </p>
                </div>

                <div className="flex gap-4">
                  <motion.button
                    onClick={handleModalClose}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 rounded-xl transition-all duration-300"
                  >
                    Close
                  </motion.button>
                </div>

                <motion.button
                  onClick={handleModalClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </BgLayout>
  );
}

export default ContactPage;
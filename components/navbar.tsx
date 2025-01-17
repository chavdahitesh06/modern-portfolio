'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Instagram, Menu, X, Sun, Moon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const socialLinks = [
    { href: "https://github.com/chavdahitesh06", icon: Github },
    { href: "https://www.linkedin.com/in/hiteshchavda06/", icon: Linkedin },
    { href: "mailto:chavdahitesh06@gmail.com", icon: Mail },
    { href: "https://instagram.com", icon: Instagram },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed w-full z-50 ${
        isDarkMode ? 'bg-gradient-to-r from-black to-gray-800' : 'bg-gradient-to-r from-white to-gray-200'
      } backdrop-blur-sm`}
      
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >

            <Link
              href="/"
              className={`text-3xl font-extrabold tracking-wider ${
                isDarkMode ? 'text-white' : 'text-black'
              } hover:text-blue-500 transition-colors`}
            >
              Innovate<span className="text-blue-500">Hitt</span>.in
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[ 'About', 'Projects', 'Experience', 'Contact'].map((item, index) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={`/${item.toLowerCase()}`}
                  className={`text-lg font-medium transition-all ${
                    isActive(`/${item.toLowerCase()}`)
                      ? isDarkMode
                        ? 'text-white underline decoration-blue-500'
                        : 'text-black underline decoration-blue-600'
                      : isDarkMode
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Icons & Theme Toggle */}
          <motion.div
            className="hidden md:flex items-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {socialLinks.map(({ href, icon: Icon }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className={`transition-transform ${
                  isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'
                }`}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
            <motion.button
              whileHover={{ rotate: 360 }}
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full ${
                isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'
              }`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden"
          >
            <div
              className={`px-2 pt-2 pb-3 space-y-1 ${
                isDarkMode ? 'bg-black/90' : 'bg-white/90'
              } rounded-lg mt-2`}
            >
              {[ 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
                <motion.div key={item} whileHover={{ scale: 1.05 }}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className={`block px-3 py-2 text-xl font-semibold ${
                      isActive(`/${item.toLowerCase()}`)
                        ? isDarkMode
                          ? 'text-white underline decoration-blue-500'
                          : 'text-black underline decoration-blue-600'
                        : isDarkMode
                        ? 'text-gray-300 hover:text-white'
                        : 'text-gray-600 hover:text-black'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

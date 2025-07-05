// src/components/NavBar.tsx  :contentReference[oaicite:0]{index=0}
import React from 'react'
import { Github, Menu } from 'lucide-react'
import { motion } from 'framer-motion'

interface Props {
  name: string
  label: string
  website: string
}

const linkVariants = {
  hover: { scale: 1.1, color: '#3B82F6' },
}

export default function NavBar({ name, label, website }: Props) {
  return (
    <motion.nav
      className="flex flex-wrap items-center justify-between py-6 px-4 bg-white shadow-md hover:shadow-2xl"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
    >
      <div className="flex items-center space-x-3">
        <motion.h1
          className="text-3xl font-extrabold"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1, transition: { type: 'spring', stiffness: 120 } }}
        >
          {name}
        </motion.h1>
        <motion.span
          className="text-sm text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.3 } }}
        >
          {label}
        </motion.span>
      </div>

      <div className="hidden md:flex items-center space-x-12 pt-6">
        {['about','education','experience','projects','tech-stack','extra'].map((id) => (
          <motion.a
            key={id}
            href={`#${id}`}
            className="capitalize text-gray-700 hover:text-blue-500 transition"
            variants={linkVariants}
            whileHover="hover"
          >
            {id.replace('-', ' ')}
          </motion.a>
        ))}
        <motion.a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 hover:text-gray-800 transition"
          whileHover={{ scale: 1.1 }}
        >
          <Github /> <span>GitHub</span>
        </motion.a>
      </div>

      {/* Mobile menu icon */}
      <div className="md:hidden">
        <Menu className="w-6 h-6 text-gray-700" />
      </div>
    </motion.nav>
  )
}

// src/components/About.tsx
import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  text: string
}

export default function About({ text }: Props) {
  return (
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      <p className="text-gray-800 leading-relaxed">{text}</p>
    </motion.div>
  )
}

// src/components/Extras.tsx  :contentReference[oaicite:6]{index=6}
import React from 'react'
import { motion } from 'framer-motion'

interface Props { items: string[] }

export default function Extras({ items }: Props) {
  return (
    <motion.ul
      className="list-disc list-inside space-y-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
    >
      {items.map((item, idx) => (
        <motion.li
          key={idx}
          className="text-gray-700 hover:text-blue-600 cursor-default transition"
          initial={{ x: -10 }}
          animate={{ x: 0, transition: { delay: idx * 0.1 } }}
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  )
}

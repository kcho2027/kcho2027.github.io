// src/components/TechStack.tsx  :contentReference[oaicite:5]{index=5}
import React from 'react'
import { motion } from 'framer-motion'

interface Props { items: string[] }

export default function TechStack({ items }: Props) {
  return (
    <div className="flex flex-wrap gap-4">
      {items.map((tech, idx) => (
        <motion.span
          key={tech}
          className="px-4 py-2 bg-blue-100 rounded-full font-medium text-sm cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: idx * 0.05 } }}
          whileHover={{ scale: 1.1, backgroundColor: '#DBEAFE' }}
        >
          {tech}
        </motion.span>
      ))}
    </div>
  )
}

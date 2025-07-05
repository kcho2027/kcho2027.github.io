// src/components/Projects.tsx  :contentReference[oaicite:4]{index=4}
import React from 'react'
import { ProjectItem } from '../types'
import { motion } from 'framer-motion'

interface Props { items: ProjectItem[] }

export default function Projects({ items }: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((proj, idx) => (
        <motion.a
          key={idx}
          href={proj.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { delay: idx * 0.1 } }}
          whileHover={{ scale: 1.03 }}
        >
          <h3 className="text-lg font-semibold mb-2">{proj.name}</h3>
          <p className="text-gray-700">{proj.description}</p>
        </motion.a>
      ))}
    </div>
  )
}

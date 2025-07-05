// src/components/Experience.tsx
import React from 'react'
import { ExperienceItem } from '../types'
import { motion } from 'framer-motion'

interface Props {
  items: ExperienceItem[]
}

export default function Experience({ items }: Props) {
  return (
    <div className="space-y-6 px-4">
      {items.map((exp, idx) => (
        <motion.div
          key={idx}
          className="bg-white rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer p-6"
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <h3 className="text-xl font-semibold mb-1">
            {exp.position}
          </h3>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span>{exp.company}</span>
            <span className="mx-2">•</span>
            <span>
              {exp.startDate} – {exp.endDate}
            </span>
          </div>
          <p className="text-gray-700">{exp.summary}</p>
          <p className="mt-2 text-gray-700">{exp.description}</p>
        </motion.div>
      ))}
    </div>
  )
}

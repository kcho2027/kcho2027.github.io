// src/components/Education.tsx  :contentReference[oaicite:2]{index=2}
import React from 'react'
import { EducationItem } from '../types'
import { motion } from 'framer-motion'

interface Props { items: EducationItem[] }
// src/components/Education.tsx  :contentReference[oaicite:2]{index=2}
export default function Education({ items }: Props) {
  return (
    <div className="grid grid-cols-1 gap-6">
      {items.map((edu, idx) => {
        // split sentences into list items
        const bullets = edu.details
          .split(/\. +/)
          .filter(Boolean)
          .map(s => s.replace(/\.$/, '').trim())

        return (
          <motion.div
            key={idx}
            className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: idx * 0.2 } }}
          >
            <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
            <span className="block text-sm text-gray-500 mb-4">
              {edu.institution} • {edu.startDate} – {edu.endDate}
            </span>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        )
      })}
    </div>
  )
}

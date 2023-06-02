import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

export default function ExperienceCard({ }: Props) {
  return (
    <article>
      <motion.img         //  needs to be Image component wrapped in <motion.div>
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}

        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='https://placehold.co/400x600/png'
        alt='ExperienceCard image'
      />

      <div>
        <h4>title</h4>
        <p>job</p>
        <div>
          {/* tech used (icon) */}
          {/* tech used (icon) */}
          {/* tech used (icon) */}
          {/* tech used (icon) */}
        </div>
        <p>started... ended...</p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
        </ul>

      </div>

    </article>
  )
}
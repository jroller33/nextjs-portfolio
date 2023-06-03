import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div className='min-h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>

      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for proficiency</h3>
    </motion.div>
  )
}
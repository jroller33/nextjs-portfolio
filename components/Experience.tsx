import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function Experience({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Experience
        </h3>

        <div>
            {/* Experience Card */}
            {/* Experience Card */}
            {/* Experience Card */}
        </div>

    </motion.div>
  )
}
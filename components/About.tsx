// trfc

import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({ }: Props) {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>

      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}

        transition={{ duration: 1.2 }}

        whileInView={{
          opacity: 1,
          x: 0,
        }}

        viewport={{ once: true }}

        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'

        src='/AboutAlt.jpg' alt='About Image'
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          A{" "}
          <span className='underline decoration-[#ffea00]/50'>little</span>{" "}
          background about me
        </h4>

        <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta tincidunt elit vitae vulputate. Duis faucibus enim est, ac elementum dolor placerat at. Nunc sit amet orci erat. Quisque eu ex ac nulla vulputate sagittis quis et erat. Duis ante eros, tempor et mauris vitae, interdum consectetur diam. Donec id augue mollis tortor facilisis accumsan ac non ante. Aliquam imperdiet quis eros a commodo. Ut venenatis diam et sollicitudin condimentum. Cras vel odio vel ex scelerisque mattis. Morbi pulvinar tristique dui a sodales. Nullam vitae nulla non tellus pulvinar maximus. Praesent fringilla volutpat velit id congue. Sed rhoncus condimentum tincidunt. Curabitur nisl eros, pellentesque non metus ut, tempus condimentum felis.</p>

      </div>

    </div>
  )
}
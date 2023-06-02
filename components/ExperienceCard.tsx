import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

export default function ExperienceCard({ }: Props) {
  return (
    <article 
    className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100'
    >
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

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>title</h4>
        <p className='font-bold text-2xl mt-1'>job</p>
        <div className='flex space-x-2 my-2'>
          <img                                           // these need to be Image components
            className='h-10 w-10 rounded-full'
            src='https://placehold.co/20x20/png'
            alt='Tech used'
          />
          <img                                           // these need to be Image components
            className='h-10 w-10 rounded-full'
            src='https://placehold.co/20x20/png'
            alt='Tech used'
          />
          <img                                           // these need to be Image components
            className='h-10 w-10 rounded-full'
            src='https://placehold.co/20x20/png'
            alt='Tech used'
          />

        </div>
        <p className='uppercase py-5 text-gray-300'>started... ended...</p>

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
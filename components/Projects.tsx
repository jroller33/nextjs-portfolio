import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'


type Props = {}

export default function Projects({ }: Props) {
    const projects = [1, 2, 3, 4, 5]


    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>

            <div className='relative w-full flex overflow-y-hidden snap-x snap-mandatory z-20
            scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
            '>
                {projects.map((project, i) => (
                    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen' key={i}>

                        <motion.div
                        initial={{
                            y: -300,
                            opacity: 0,
                        }}
                        transition={{ duration: 1.5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        >
                            <Image
                                className='h-10 w-10'
                                src='https://placehold.co/20x20/png'
                                alt='project'
                                width={20}
                                height={20}

                            />
                        </motion.div>


                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#ffea00]/50'>
                                    Project {i + 1} of {projects.length}
                                </span>
                            </h4>

                            <p className='text-lg text-center md:text-left'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id purus dui. Vivamus eleifend, ligula ac pretium scelerisque, urna sapien venenatis quam, in congue dolor felis quis mi. Nullam dignissim fermentum dolor nec iaculis. Integer tempus nisl dolor, sed tempor magna ultricies sit amet. Pellentesque eget pulvinar ex. Praesent lacinia ipsum ut erat pellentesque ullamcorper. Praesent sit amet euismod erat. Suspendisse pulvinar, turpis at rutrum laoreet, risus nisi vehicula leo, in posuere odio orci vitae lacus.
                            </p>
                        </div>
                    </div>


                ))}

            </div>




            <div className='w-full absolute top-[30%] bg-[#ffea00]/40 left-0 h-[500px] -skew-y-12' />
        </motion.div>
    )
}
import React from 'react';
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from 'next/link';

type Props = {}

export default function Header({ }: Props) {
    return (

        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 2,
                }}
                className='flex flex-row items-center'>


                {/* left-side */}

                <SocialIcon
                    url='https://www.youtube.com/@johnr8729/videos'
                    network='youtube'
                    fgColor='currentColor'
                    bgColor='transparent'
                    className='text-gray-500 hover:text-[#ffea00]/60 hover:animate-pulse'
                />
                <SocialIcon
                    url='https://www.github.com/jroller33'
                    network='github'
                    fgColor='currentColor'
                    bgColor='transparent'
                    className='text-gray-500 hover:text-[#ffea00]/60 hover:animate-pulse'
                />

            </motion.div>


            {/* right side */}

            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 2
                }}
                className='group flex flex-row items-center text-gray-500 cursor-pointer hover:text-[#ffea00]/60 hover:animate-pulse'>

                <Link href="#contact">
                    <SocialIcon
                        network='email'
                        fgColor='currentColor'
                        bgColor='transparent'
                        className='cursor-pointer text-gray-500 group-hover:text-[#ffea00]/60 group-hover:animate-pulse'
                    />
                    <p className='uppercase hidden md:inline-flex text-sm text-gray-500 group-hover:text-[#ffea00]/60 group-hover:animate-pulse'>Contact Me</p>

                </Link>
            </motion.div>
        </header>
    )
}
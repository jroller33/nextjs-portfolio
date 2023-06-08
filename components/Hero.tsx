import React, { useState } from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from '@/components/BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'

// import HeroImage from '../public/HeroImage.png'

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, my name's John Roller 😁",
            "I use TypeScript and Python,",
            "to build web apps 🔥🔥🔥",
            "✨ Welcome to my portfolio! ✨",
        ],
        loop: true,
        delaySpeed: 2000,
    });

    const [effect, setEffect] = useState(false);            // for click effects on buttons

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>

            <BackgroundCircles />

            {/* Hero Image */}
            <div className='relative rounded-full h-32 w-32 mx-auto object-contain'>
                <Image priority src='https://placehold.co/400x600/png' alt='Hero Image' fill={true} />
            </div>


            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px]'>Full-Stack Developer</h2>

                {/* Typewriter Text */}
                <h1 className='text-xl lg:text-5xl font-semibold px-10'>
                    <span className='mr-1'>{text}</span>
                    <Cursor cursorColor="#ffea00" />
                </h1>

                <div className='pt-5'>

                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>

                    <Link href="#spotlight">
                        <button className='heroButton'>Spotlight</button>
                    </Link>

                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>

                    <Link href="#projects">
                        <button className='heroButton'>Projects</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}
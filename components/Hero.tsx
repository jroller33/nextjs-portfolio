import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from '@/components/BackgroundCircles'
import Image from 'next/image'
// import HeroImage from '../public/HeroImage.png'

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, my name's John Roller.",
            "I use Python and TypeScript,",
            "to build web applications.",
            "Scroll down to see my projects!",
        ],
        loop: true,
        delaySpeed: 2000,
    });


    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>

            <BackgroundCircles />

                {/* Hero Image */}
            <div className='relative rounded-full h-32 w-32 mx-auto object-contain'>
                <Image priority src='/HeroImageTransparent.png' alt='Hero Image' fill={true} />
            </div>


                {/* Typewriter Text */}
            <div>
                <h2 className='text-sm uppercase text-gray-400 pb-2 tracking-[12px]'>Full-Stack Developer</h2>
                <h1>
                    <span>{text}</span>
                    <Cursor cursorColor="#ffea00" />
                </h1>
            </div>
        </div>
    )
}
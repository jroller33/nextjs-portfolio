import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from '@/components/BackgroundCircles'

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
        "Hi, my name's John Roller.",
        "I use Python and JavaScript",
        "to build web applications.",
        "Scroll down to see my projects!",
        ],
        loop: true,
        delaySpeed: 2000,
    });


    return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <h1>
        <span>{text}</span>
        <Cursor cursorColor="#16DE00" />
        </h1>
    </div>
    )
}
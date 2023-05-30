import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from '@/components/BackgroundCircles'

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
        "Hi, my name's John Roller",
        "I build web apps",
        "Using Python and JavaScript.",
        "Scroll down to see my projects!",
        ],
        loop: true,
        delaySpeed: 2000,
    });


    return (
    <div>
        <BackgroundCircles />
        <h1>
        <span>{text}</span>
        <Cursor cursorColor="#16DE00" />
        </h1>
    </div>
    )
}
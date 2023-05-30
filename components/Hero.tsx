import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
        "Hi, my name's John Roller",
        "I use a lot of JavaScript,",
        "But I like Python more.",
        "Scroll down to see my projects!",
        ],
        loop: true,
        delaySpeed: 2000,
    });


    return (
    <div>
        <p>{text}</p>
    </div>
    )
}
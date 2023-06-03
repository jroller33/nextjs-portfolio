import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean;
}

export default function Skill({ directionLeft }: Props) {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img                 // This needs to be an Image component wrapped in <motion.div>
                initial={{
                    x: directionLeft ? -200 : 200,
                }}
            />
        </div>
    )
}
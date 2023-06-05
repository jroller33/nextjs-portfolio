import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean;
}

export default function Skill({ directionLeft }: Props) {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.div                 // This needs to be an Image component wrapped in <motion.div>
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0,
                }}

                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, x: 0 }}
            />  
        </div>
    )
}

// 1:50
import React from 'react'
import { motion } from 'framer-motion'
import JsIcon from './icons/JsIcon'

type Props = {
    directionLeft?: boolean;
}

function Skill({ directionLeft }: Props) {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.div
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0,
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}>



            </motion.div>

        </div>
    )
}

export default Skill;
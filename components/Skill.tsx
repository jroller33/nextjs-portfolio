import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import JsIcon from "../public/icons/JsIcon.svg"

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

                    <Image
                        priority
                        src={JsIcon}
                        alt="JavaScript"
                    />

            </motion.div>

        </div>
    )
}

export default Skill;
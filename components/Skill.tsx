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
                whileInView={{ opacity: 1, x: 0 }}
                className="rounded-full object-cover w-24 h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
                >
                    <Image
                        priority
                        src={JsIcon}
                        alt="JavaScript"
                    />
                {/* <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 rounded-full'>
                    <div className='flex items-center justify-center h-full'>
                        <p className='text-3xl font-bold text-black opacity-100'>100%</p>
                    </div>
                </div> */}
                

            </motion.div>

        </div>
    )
}

export default Skill;
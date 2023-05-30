import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

function BackgroundCircles({}: Props) {
    return (
    <div className='relative flex justify-center items-center'>
        <div className='absolute border [#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div />
        <div />
        <div />
        <div />
    </div>
    )
}

export default BackgroundCircles
import React from 'react';
import { SocialIcon } from "react-social-icons";

type Props = {}

export default function Header({}: Props) {
  return (
    <header>
        <div className='flex flex-row items-center'>
            {/* Social icons */}

            <SocialIcon 
                url='https://www.youtube.com/@johnr8729/videos'
                network='youtube'
                fgColor='gray'
                bgColor='transparent'
            />
            <SocialIcon 
                url='www.github.com/jroller33'
                network='github'
                fgColor='gray'
                bgColor='transparent'
            />
            <SocialIcon 
                url='www.youtube.com/sonnysangha'
                fgColor='gray'
                bgColor='transparent'
            />
        </div>

        <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
            <SocialIcon 
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
            />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Contact Me</p>
        </div>
    </header>
  )
}
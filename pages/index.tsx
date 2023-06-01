import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'

const inter = Inter({ subsets: ['latin'] })     // This does something with the font, not sure yet

export default function Home() {
  return (
    <div className='bg-[#000C18] text-[#f5f5f5c1] h-screen snap-y snap-mandatory overflow-scroll z-0 scroll-smooth'>
      <Head>
        <title>John Roller Portfolio</title> 
      </Head>

      <Header />
 
      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='experience' className='snap-center'>
        <Experience />
      </section>

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  )
}

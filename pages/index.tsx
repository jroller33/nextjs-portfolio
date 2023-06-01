import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'


const inter = Inter({ subsets: ['latin'] })     // This does something with the font, not sure yet

export default function Home() {
  return (
    <div className='bg-[#000C18] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>John Roller Portfolio</title> 
      </Head>


      <Header />
 

      {/* Hero */}
      <section id="hero" className='snap-center'>
        <Hero />
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  )
}

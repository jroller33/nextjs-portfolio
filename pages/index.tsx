import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
// import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'

const inter = Inter({ subsets: ['latin'] })     // This does something with the font, not sure yet

export default function Home() {
  return (
    <div className='bg-[#000C18] text-[#f5f5f5c1] h-screen snap-y snap-mandatory overflow-scroll z-0 scroll-smooth'>
      <Head>
        <title>John Roller Portfolio</title> 
      </Head>

      <Header />
 
      <section id="hero" className='snap-start scroll-smooth'>
        <Hero />
      </section>

      <section id='about' className='snap-center scroll-smooth'>
        <About />
      </section>

      {/*       this Experience section has page layout issues. i'll add it back later once it's fixed. */}
      {/* <section id='experience' className='snap-center scroll-smooth'>
        <Experience />
      </section> */}


      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      <section>
        <ContactMe />
      </section>

    </div>
  )
}

import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

const inter = Inter({ subsets: ['latin'] })     // I'm not sure what this does, but I don't want to delete it yet

export default function Home() {
  return (
    <div>
      <Head>
        <title>John Roller Portfolio</title> 
      </Head>


      <Header />


      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  )
}

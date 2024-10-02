/* eslint-disable no-unused-vars */
import React from 'react'
import About from '../components/About'
import Skills from '../components/Skills'
import Experiences from '../components/Experiences'
import Projects from '../components/Projects'
import ContactForm from '../components/Contact'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <div className='container mx-auto pt-10 px-6 bg-white md:container md:mx-auto md:px-20 space-y-10'>
                <div id='about' className='pt-24'>
                    <About />
                </div>
                <div id='skills' className='pt-24'>
                    <Skills />
                </div>
                <div id='projects' className='pt-24'>
                    <Projects />
                </div>
                <div id='experience' className='pt-24'>
                    <Experiences />
                </div>
                <div id='contact' className='pt-24'>
                    <ContactForm />
                </div> 
            </div>
        </>
        
    )
}

export default Home
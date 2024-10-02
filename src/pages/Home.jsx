/* eslint-disable no-unused-vars */
import React from 'react'
import About from '../components/About'
import Skills from '../components/Skills'
import Experiences from '../components/Experiences'
import Projects from '../components/Projects'
import ContactForm from '../components/Contact'

const Home = () => {
    return (
        <div className='container mx-auto px-6 bg-white md:container md:mx-auto md:px-20 space-y-10'>
            <About />
            <Skills />
            <Projects />
            <Experiences />
            <ContactForm />
        </div>
    )
}

export default Home
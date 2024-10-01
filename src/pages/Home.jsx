/* eslint-disable no-unused-vars */
import React from 'react'
import About from '../components/About'
import Skills from '../components/Skills'
import Experiences from '../components/Experiences'

const Home = () => {
    return (
        <div className='container mx-auto px-4 bg-white md:container md:mx-auto md:px-20'>
            <About />
            <Skills />
            <Experiences />
        </div>
    )
}

export default Home
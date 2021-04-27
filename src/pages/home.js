import React from 'react'
//import styled from 'styled-components';
import Nav from '../components/nav/nav';
import Hero from '../components/hero/hero';
import Stats from '../components/stats/stats';
import Cloud from '../components/cloud/cloud';
import Languages from '../components/languages/languages';
import Footer from '../components/footer/footer'


const Home = () => {
    return (
        <div>
            <Nav />
            <Hero />
            <Stats />
            <Cloud />
            <Languages />
            <Footer/>
        </div>
    )
}

export default Home;
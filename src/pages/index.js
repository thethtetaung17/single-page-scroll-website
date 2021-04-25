import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Sections/Footer';
import HeroSection from '../components/Sections/HeroSections';
import InfoSection from '../components/Sections/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/Sections/InfoSection/Data';
import Services from '../components/Sections/Services';
import Sidebar from '../components/Sidebar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggleNav} />
            <Navbar toggle={toggleNav} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <InfoSection {...homeObjThree} />
            <Footer />
        </>
    )
}

export default Home;

import React from 'react';
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactBanner from "../components/ContactBanner";
import Footer from "../components/Footer";

const Home = ({ setSectionIsVisible } ) => {

    return (
        <div>
            <HeroSection />
            <AboutSection setSectionIsVisible={(isVisible) => setSectionIsVisible(isVisible)} />
            <ServiceSection />
            <ProjectsSection />
            <ContactBanner />
        </div>
    );
};

export default Home;
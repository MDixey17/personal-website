import React from "react";
import Hero from "../components/Hero";
import HomeHero from "../assets/hero-images/hero-home-black.png";

const Home = () => {
    return (
        <Hero img={HomeHero} hText="Matthew B. Dixey" pText="Software Engineer | Esports Enthusiast | Tech Geek"></Hero>
    )
};

export default Home;
import React from "react";
import Hero from "../components/Hero";
import EsportsHero from "../assets/hero-images/hero-esports-black.png";

const Esports = () => {
    return (
        <Hero img={EsportsHero} hText="Esports Experience" pText="Commentary | Broadcasting | Graphic Design | Video Editing"></Hero>
    )
};

export default Esports;
import React from "react";
import Hero from "../components/Hero";
import DeveloperHero from "../assets/hero-images/hero-dev-black.png";

const Developer = () => {
    return (
        <Hero img={DeveloperHero} hText="Developer Experience" pText="Full-Stack Engineering | Game Development | Web Developer"></Hero>
    )
};

export default Developer;
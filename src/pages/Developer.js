import React from "react";
import Hero from "../components/Hero";
import DeveloperHero from "../assets/hero-images/hero-dev-black.png";
import Carousel from "../components/Carousel";

// Carousel Images
import DystopianDefier from "../assets/project-cards/dystopian-defier.png";
import GoldyRL from "../assets/project-cards/goldyrl.png";
import HypeChamber from "../assets/project-cards/hype-chamber.png";
import ScrimBot from "../assets/project-cards/scrimbot.png";
import StrelkaImg from "../assets/project-cards/strelka.png";

const Developer = () => {
    const devSlides = [
        { imgPath: DystopianDefier, url: "https://boschybee.itch.io/dystopian-defiers", title: "Dystopian Defier"},
        { imgPath: GoldyRL, url: 'https://github.com/MDixey17/goldyrl', title: 'GoldyRL - Discord Bot'},
        { imgPath: HypeChamber, url: 'https://www.youtube.com/watch?v=HwYxx8k3Fyc', title: 'Rocket League Hype Chamber'},
        { imgPath: ScrimBot, url: 'https://github.com/MDixey17/scrimbot', title: 'ScrimBot - Discord Bot'},
        { imgPath: StrelkaImg, url: 'https://github.com/MDixey17/strelka-umn-2022', title: 'Strelka Scanner'},
    ]
    return (
        <>
            <Hero img={DeveloperHero} hText="Developer Experience" pText="Full-Stack Engineering | Game Development | Web Developer"></Hero>
            <Carousel slides={devSlides}></Carousel>
        </>  
    )
};

export default Developer;
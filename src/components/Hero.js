import React from "react";
import { HeroImage, HeroText, HeroWrapper } from "../style/Hero.style";

const Hero = ({img, hText, pText}) => {
    return (
        <HeroWrapper>
            <HeroImage imgPath={img}>
            </HeroImage>
            <HeroText>
                <h1>{hText}</h1>
                <p>{pText}</p>
            </HeroText>
        </HeroWrapper>
    );
}

export default Hero;
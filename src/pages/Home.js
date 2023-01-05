import React from "react";
import Hero from "../components/Hero";
import HomeHero from "../assets/hero-images/hero-home-black.png";
import { ContentHeader, ContentImage, ContentLeft, ContentLogoContainer, ContentMobileWrapper, ContentRight, ContentText, ContentWrapper } from "../style/Content.style";

// Picture of me
import ProHeadshot from "../assets/me/headshot-square.png";

// Carousel
import ScrimBot from "../assets/project-cards/scrimbot.png";
import GoldyRL from "../assets/project-cards/goldyrl.png";
import AffiliateWebsite from "../assets/project-cards/affiliatemarketing.png";
import Carousel from "../components/Carousel";

const Home = () => {
    const homeSlides = [
        { imgPath: AffiliateWebsite, url: 'https://mdixey17.github.io/tech-finds/', title: 'Affiliate Marketing Website' },
        { imgPath: ScrimBot, url: 'https://github.com/MDixey17/scrimbot', title: 'ScrimBot - Discord Bot'},
        { imgPath: GoldyRL, url: 'https://github.com/MDixey17/goldyrl', title: 'GoldyRL - Discord Bot'},
    ];

    const customMargin = {
        'margin-top': '120px'
    };

    return (
        <>
            <Hero img={HomeHero} hText="Matthew B Dixey" pText="Software Engineer | Esports Enthusiast | Tech Geek"></Hero>
            <ContentWrapper isBlue>
                <ContentLeft>
                    <ContentImage src={ProHeadshot}/>
                </ContentLeft>
                <ContentRight>
                    <ContentHeader>About Me</ContentHeader>
                    <ContentText>
                        I have a B.S. in Computer Science from the University of Minnesota's 
                        College of Science and Engineering with a background in full-stack software 
                        engineering, algorithms, and data structures. 
                        <br/>
                        <br/>
                        Some of my past positions include a Software Engineering Intern for Major League Baseball, 
                        the Director of Content for University of Minnesota Gopher Esports, and the 
                        Social Media Manager for the Esports Club at the University of Minnesota.
                        <br/>
                        <br/>
                        I am a hard working, determined, respectful individual with a constant drive 
                        to learn and grow my skillset.
                    </ContentText>
                </ContentRight>
            </ContentWrapper>
            <ContentWrapper>
                <ContentLeft style={customMargin}>
                    <ContentHeader>Recent Projects</ContentHeader>
                    <ContentText>
                        Check out my latest projects by scrolling through the image 
                        gallery! Each is linked to the GitHub repository to provide more 
                        information!
                    </ContentText>
                </ContentLeft>
                <ContentRight>
                    <Carousel slides={homeSlides}/>
                </ContentRight>
            </ContentWrapper>
            <ContentMobileWrapper isBlue>
                <ContentHeader>About Me</ContentHeader>
                <ContentText>
                    I have a B.S. in Computer Science from the University of Minnesota's 
                    College of Science and Engineering with a background in full-stack software 
                    engineering, algorithms, and data structures. 
                    <br/>
                    <br/>
                    Some of my past positions include a Software Engineering Intern for Major League Baseball, 
                    the Director of Content for University of Minnesota Gopher Esports, and the 
                    Social Media Manager for the Esports Club at the University of Minnesota.
                    <br/>
                    <br/>
                    I am a hard working, determined, respectful individual with a constant drive 
                    to learn and grow my skillset.
                </ContentText>
                <ContentLogoContainer>
                    <ContentImage src={ProHeadshot}/>
                </ContentLogoContainer>
            </ContentMobileWrapper>
            <ContentMobileWrapper>
                <ContentHeader>Recent Projects</ContentHeader>
                <ContentText>
                    Check out my latest projects by scrolling through the image 
                    gallery! Each is linked to the GitHub repository to provide more 
                    information!
                </ContentText>
                <Carousel slides={homeSlides}/>
            </ContentMobileWrapper>
        </>
    )
};

export default Home;
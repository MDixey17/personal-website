import React from "react";
import Hero from "../components/Hero";
import DeveloperHero from "../assets/hero-images/hero-dev-black.png";
import Carousel from "../components/Carousel";
import { ContentHeader, ContentImage, ContentItalics, ContentLeft, ContentLogo, ContentLogoContainer, ContentMobileWrapper, ContentRight, ContentText, ContentWrapper } from "../style/Content.style";

// Carousel Images
import DystopianDefier from "../assets/project-cards/dystopian-defier.png";
import GoldyRL from "../assets/project-cards/goldyrl.png";
import HypeChamber from "../assets/project-cards/hype-chamber.png";
import ScrimBot from "../assets/project-cards/scrimbot.png";
import StrelkaImg from "../assets/project-cards/strelka.png";
import AffiliateWebsite from "../assets/project-cards/affiliatemarketing.png";

// Misc Images
import MLBLogo from "../assets/logos/mlb.png";
import TargetLogo from "../assets/logos/target.png";

const Developer = () => {
    const devSlides = [
        { imgPath: AffiliateWebsite, url: 'https://mdixey17.github.io/tech-finds/', title: 'Affiliate Marketing Website' },
        { imgPath: DystopianDefier, url: "https://boschybee.itch.io/dystopian-defiers", title: "Dystopian Defier"},
        { imgPath: GoldyRL, url: 'https://github.com/MDixey17/goldyrl', title: 'GoldyRL - Discord Bot'},
        { imgPath: HypeChamber, url: 'https://www.youtube.com/watch?v=HwYxx8k3Fyc', title: 'Rocket League Hype Chamber'},
        { imgPath: ScrimBot, url: 'https://github.com/MDixey17/scrimbot', title: 'ScrimBot - Discord Bot'},
        { imgPath: StrelkaImg, url: 'https://github.com/MDixey17/strelka-umn-2022', title: 'Strelka Scanner'},
    ]

    const customMargin = {
        'margin-top': '120px'
    }
    return (
        <>
            <Hero img={DeveloperHero} hText="Developer Experience" pText="Full-Stack Engineering | Gameplay Programmer"></Hero>
            <ContentWrapper isBlue>
                <ContentLeft>
                    <ContentLogoContainer>
                        <ContentLogo src={MLBLogo} alt="Major League Baseball"/>
                        <ContentLogo src={TargetLogo} alt="Target"/>
                    </ContentLogoContainer>
                </ContentLeft>
                <ContentRight>
                    <ContentHeader>Relevant Employment</ContentHeader>
                    <ContentText><ContentItalics>January 2023 - Present:</ContentItalics> Technology Leadership Program @ Target<br/><br/><ContentItalics>June 2022 - August 2022:</ContentItalics> Software Engineer Intern @ Major League Baseball</ContentText>
                </ContentRight>
            </ContentWrapper>
            <ContentWrapper>
                <ContentLeft>
                    <ContentHeader>GoldyRL</ContentHeader>
                    <ContentText>
                        Through multiple APIs, GoldyRL is the first Discord bot to store 
                        and maintain match history and rosters from start.gg, the current most popular 
                        tournament hosting platform for competitive esports.
                        <br/>
                        <br/>
                        <ContentItalics>Skills Learned: </ContentItalics>
                        JavaScript, SQLite, GraphQL, APIs
                    </ContentText>
                </ContentLeft>
                <ContentRight>
                    <ContentImage src={GoldyRL}/>
                </ContentRight>
            </ContentWrapper>
            <ContentWrapper isBlue>
                <ContentLeft>
                    <ContentImage src={HypeChamber}/>
                </ContentLeft>
                <ContentRight>
                    <ContentHeader>Hype Chamber</ContentHeader>
                    <ContentText>
                        Developed and rendered using Unreal Engine 5, the Hype Chamber is a
                        high-end sports motion graphic package to enhance digital productions.
                        <br></br>
                        <br></br>
                        <ContentItalics>Skills Learned: </ContentItalics>
                        Unreal Engine, Blueprints, Graphics Rendering, Animation
                    </ContentText>
                </ContentRight>
            </ContentWrapper>
            <ContentWrapper>
                <ContentLeft>
                    <ContentHeader>Dystopian Defier</ContentHeader>
                    <ContentText>
                        Over one semester with the University of Minnesota's Video Game 
                        Development Club, a fully functional computer game was born. This 
                        is a birds-eye view, survival shooter packed with hidden skills and 
                        abilities for players to master!
                        <br/>
                        <br/>
                        <ContentItalics>Skills Learned: </ContentItalics>
                        Unity, C#, Trello, Gameplay Programming
                    </ContentText>
                </ContentLeft>
                <ContentRight>
                    <ContentImage src={DystopianDefier}/>
                </ContentRight>
            </ContentWrapper>
            <ContentWrapper isBlue>
                <ContentLeft>
                    <Carousel slides={devSlides}></Carousel>
                </ContentLeft>
                <ContentRight style={customMargin}>
                    <ContentHeader>Full Project Directory</ContentHeader>
                    <ContentText>
                        All my projects can be viewed via the image carousel! Click the cards to 
                        learn more about each project!
                    </ContentText>
                </ContentRight>
            </ContentWrapper>
            <ContentMobileWrapper isBlue>
                <ContentHeader>Relevant Employment</ContentHeader>
                <ContentText><ContentItalics>January 2023 - Present:</ContentItalics> Technology Leadership Program @ Target<br/><br/><ContentItalics>June 2022 - August 2022:</ContentItalics> Software Engineer Intern @ Major League Baseball</ContentText>
                <ContentLogoContainer>
                    <ContentLogo src={MLBLogo} alt="Major League Baseball"/>
                    <ContentLogo src={TargetLogo} alt="Target"/>
                </ContentLogoContainer>
            </ContentMobileWrapper>
            <ContentMobileWrapper>
                <ContentHeader>GoldyRL</ContentHeader>
                <ContentText>
                    Through multiple APIs, GoldyRL is the first Discord bot to store 
                    and maintain match history and rosters from start.gg, the current most popular 
                    tournament hosting platform for competitive esports.
                    <br/>
                    <br/>
                    <ContentItalics>Skills Learned: </ContentItalics>
                    JavaScript, SQLite, GraphQL, APIs
                </ContentText>
                <ContentLogoContainer>
                    <ContentImage src={GoldyRL}/>
                </ContentLogoContainer>
            </ContentMobileWrapper>
            <ContentMobileWrapper isBlue>
                <ContentHeader>Hype Chamber</ContentHeader>
                <ContentText>
                    Developed and rendered using Unreal Engine 5, the Hype Chamber is a
                    high-end sports motion graphic package to enhance digital productions.
                    <br></br>
                    <br></br>
                    <ContentItalics>Skills Learned: </ContentItalics>
                    Unreal Engine, Blueprints, Graphics Rendering, Animation
                </ContentText>
                <ContentLogoContainer>
                    <ContentImage src={HypeChamber}/>
                </ContentLogoContainer>
            </ContentMobileWrapper>
            <ContentMobileWrapper>
                <ContentHeader>Dystopian Defier</ContentHeader>
                <ContentText>
                    Over one semester with the University of Minnesota's Video Game 
                    Development Club, a fully functional computer game was born. This 
                    is a birds-eye view, survival shooter packed with hidden skills and 
                    abilities for players to master!
                    <br/>
                    <br/>
                    <ContentItalics>Skills Learned: </ContentItalics>
                    Unity, C#, Trello, Gameplay Programming
                </ContentText>
                <ContentLogoContainer>
                    <ContentImage src={DystopianDefier}/>
                </ContentLogoContainer>
            </ContentMobileWrapper>
            <ContentMobileWrapper isBlue>
                <ContentHeader>Full Project Directory</ContentHeader>
                <ContentText>
                    All my projects can be viewed via the image carousel! Click the cards to 
                    learn more about each project!
                </ContentText>
                <ContentLogoContainer>
                    <Carousel slides={devSlides}></Carousel>
                </ContentLogoContainer>
            </ContentMobileWrapper>
        </>  
    )
};

export default Developer;
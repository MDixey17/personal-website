import React from "react";
import Hero from "../components/Hero";
import EsportsHero from "../assets/hero-images/hero-esports-black.png";
import { ContentHeader, ContentItalics, ContentLeft, ContentLogo, ContentLogoContainer, ContentMobileWrapper, ContentRight, ContentText, ContentWrapper } from "../style/Content.style";

// Images
import GopherEsportsLogo from "../assets/logos/gopheresports.png";
import EsportsUMNLogo from "../assets/logos/esports-at-umn.png"
import CRLLogo from "../assets/logos/CRL.png";
import RLCSLogo from "../assets/logos/RLCS.png";

// Carousel
import GEStartingLineup from "../assets/graphics-cards/RL-StartingLineup-Gold.png";
import SMUGameday from "../assets/graphics-cards/Gameday-SMU.png";
import UMNPlacements from "../assets/graphics-cards/Placements.png";
import GEThumbnail from "../assets/graphics-cards/F22Hype-Thumbnail.png";
import HypeChamberMatchup from "../assets/graphics-cards/HC-Matchup.png";
import DecalTutorial from "../assets/graphics-cards/DecalHowTo.png";
import GEPlayer from "../assets/graphics-cards/RL-PlayerIntro.png";
import GEStreamIntro from "../assets/graphics-cards/GE-StreamIntro.png";
import Carousel from "../components/Carousel";

const Esports = () => {
    const esportsSlides = [
        { imgPath: GEStartingLineup, url: "https://drive.google.com/file/d/1cgMYQ0_mZ6Q7dpkU12YC0hYkwvzPcPd-/view?usp=share_link", title: "UMN Gold Fall 2022 Starting Lineup"},
        { imgPath: SMUGameday, url: "https://drive.google.com/file/d/1T9yHct4GRYamWCdDrlK1AELuxZA0A6qK/view?usp=sharing", title: "UMN Gold vs SMU - Fall 2022"},
        { imgPath: UMNPlacements, url: "https://drive.google.com/file/d/1l28XHDjdg87FtfNUUoGKMqVxfnwt8Bks/view?usp=share_link", title: "UMN Rocket League - CRL Placements Example"},
        { imgPath: GEThumbnail, url: "https://www.youtube.com/@universityofminnesotagolde8332", title: "UMN Rocket League - Fall 2022 Roster Reveal Thumbnail"},
        { imgPath: HypeChamberMatchup, url: 'https://drive.google.com/file/d/1bxfazJeLmp-CDCHa0LhLyOku7mMFoPII/view?usp=share_link', title: 'UMN Hype Chamber Matchup'},
        { imgPath: DecalTutorial, url: 'https://www.youtube.com/watch?v=DaUxX7PfA60&t=2s', title: 'UMN Custom Decal YouTube Video'},
        { imgPath: GEPlayer, url: 'https://drive.google.com/file/d/1oEAtIu9GUiMyzfjW400NhTpsHGHtEab6/view?usp=share_link', title: 'UMN Player Intro'},
        { imgPath: GEStreamIntro, url: 'https://drive.google.com/file/d/1YgUD5EgI_t-TTbSZ81lEYsnDlZq5nv-Q/view?usp=share_link', title: 'UMN Broadcast Intro'},
    ];

    const customMargin = {
        'margin-top': '120px'
    };

    return (
        <>
            <Hero img={EsportsHero} hText="Esports Experience" pText="Commentary | Broadcasting | Graphic Design | Video Editing"></Hero>
            <ContentWrapper isBlue>
                <ContentLeft>
                    <ContentLogoContainer>
                        <ContentLogo src={GopherEsportsLogo} alt="University of Minnesota Golden Gopher Esports"/>
                        <ContentLogo src={EsportsUMNLogo} alt="Esports at University of Minnesota"/>
                    </ContentLogoContainer>
                </ContentLeft>
                <ContentRight>
                    <ContentHeader>Accolades</ContentHeader>
                    <ContentText>
                        Raised over $12,500 for Esports at the University of Minnesota 
                        <br/>
                        <br/>
                        First organization to implement the <ContentItalics>RLCS Hype Chamber</ContentItalics> into broadcasts
                        <br/>
                        <br/>
                        Held two high level positions (Social Media Manager & Director of Content) for over a year
                        <br/>
                        <br/>
                        Contributed to growth of Esports at University of Minnesota with the Assistant Athletic Director for Information Technology
                    </ContentText>
                </ContentRight>
            </ContentWrapper>
            <ContentWrapper>
                <ContentLeft>
                    <ContentHeader>Broadcasting Experience</ContentHeader>
                    <ContentText>
                        <ContentItalics>Gopher Esports:</ContentItalics><br/>
                        2+ years of casting
                        <br/>
                        1+ years of broadcasting via OBS
                        <br/>
                        <br/>
                        <ContentItalics>Collegiate Rocket League:</ContentItalics><br/>
                        Casted 3 events alongside talented professionals
                        <br/>
                        <br/>
                        <ContentItalics>Rocket League Championship Series</ContentItalics><br/>
                        Casted 2 professional tournaments hosted for the Asia Pacific region
                        <br/>
                    </ContentText>
                </ContentLeft>
                <ContentRight>
                    <ContentLogoContainer>
                        <ContentLogo src={CRLLogo} alt="Collegiate Rocket League"/>
                        <ContentLogo src={RLCSLogo} alt="Rocket League Championship Series"/>
                    </ContentLogoContainer>
                </ContentRight>
            </ContentWrapper>
            <ContentWrapper isBlue>
                <ContentLeft>
                    <Carousel slides={esportsSlides}/>
                </ContentLeft>
                <ContentRight style={customMargin}>
                    <ContentHeader>Graphics & Videos</ContentHeader>
                    <ContentText>
                        Navigate through the gallery to see notable graphics and videos I 
                        composed throughout my time in the esports community.
                    </ContentText>
                </ContentRight>
            </ContentWrapper>
            <ContentMobileWrapper isBlue>
                <ContentHeader>Accolades</ContentHeader>
                <ContentText>
                    Raised over $12,500 for Esports at the University of Minnesota 
                    <br/>
                    <br/>
                    First organization to implement the <ContentItalics>RLCS Hype Chamber</ContentItalics> into broadcasts
                    <br/>
                    <br/>
                    Held two high level positions (Social Media Manager & Director of Content) for over a year
                    <br/>
                    <br/>
                    Contributed to growth of Esports at University of Minnesota with the Assistant Athletic Director for Information Technology
                </ContentText>
                <ContentLogoContainer>
                    <ContentLogo src={GopherEsportsLogo} alt="University of Minnesota Golden Gopher Esports"/>
                    <ContentLogo src={EsportsUMNLogo} alt="Esports at University of Minnesota"/>
                </ContentLogoContainer>
            </ContentMobileWrapper>
            <ContentMobileWrapper>
                <ContentHeader>Broadcasting Experience</ContentHeader>
                <ContentText>
                    <ContentItalics>Gopher Esports:</ContentItalics><br/>
                    2+ years of casting
                    <br/>
                    1+ years of broadcasting via OBS
                    <br/>
                    <br/>
                    <ContentItalics>Collegiate Rocket League:</ContentItalics><br/>
                    Casted 3 events alongside talented professionals
                    <br/>
                    <br/>
                    <ContentItalics>Rocket League Championship Series</ContentItalics><br/>
                    Casted 2 professional tournaments hosted for the Asia Pacific region
                    <br/>
                </ContentText>
                <ContentLogoContainer>
                    <ContentLogo src={CRLLogo} alt="Collegiate Rocket League"/>
                    <ContentLogo src={RLCSLogo} alt="Rocket League Championship Series"/>
                </ContentLogoContainer>
            </ContentMobileWrapper>
            <ContentMobileWrapper isBlue>
                <ContentHeader>Graphics & Videos</ContentHeader>
                <ContentText>
                    Navigate through the gallery to see notable graphics and videos I 
                    composed throughout my time in the esports community.
                </ContentText>
                <Carousel slides={esportsSlides}/>
            </ContentMobileWrapper>
        </>
    )
};

export default Esports;
import React from "react";
import { FooterContainer, FooterHeader, FooterLargeWrapper, FooterLgImage } from "../style/Footer.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faTwitch, faGithub, faYoutube, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <FooterLargeWrapper>
            <FooterHeader>Connect with me on all my socials!</FooterHeader>
            <FooterContainer>
                <FooterLgImage href="https://github.com/MDixey17">
                    <FontAwesomeIcon icon={faGithub} size="2x" color="#FFFFFF"></FontAwesomeIcon>
                </FooterLgImage>
                <FooterLgImage href="https://www.instagram.com/mdixey17/">
                    <FontAwesomeIcon icon={faInstagram} size="2x" color="#fbad50"></FontAwesomeIcon>
                </FooterLgImage>
                <FooterLgImage href="https://www.linkedin.com/in/matt-dixey/">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" color="#0072b1"></FontAwesomeIcon>
                </FooterLgImage>
                <FooterLgImage href="https://www.tiktok.com/@titanhawk17">
                    <FontAwesomeIcon icon={faTiktok} size="2x" color="#ff0050"></FontAwesomeIcon>
                </FooterLgImage>
                <FooterLgImage href="https://twitch.tv/titanhawk17">
                    <FontAwesomeIcon icon={faTwitch} size="2x" color="#6441a5"></FontAwesomeIcon>
                </FooterLgImage>
                <FooterLgImage href="https://twitter.com/mdixey17">
                    <FontAwesomeIcon icon={faTwitter} size="2x" color="#49a1eb"></FontAwesomeIcon>
                </FooterLgImage>
                <FooterLgImage href="https://www.youtube.com/channel/UCglLpH58CRfi660yU4wpe8w">
                    <FontAwesomeIcon icon={faYoutube} size="2x" color="#e62117"></FontAwesomeIcon>
                </FooterLgImage>
            </FooterContainer>
        </FooterLargeWrapper>
    )
}

export default Footer;
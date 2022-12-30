import React, {useState} from "react";
import { NavbarHeadshot, NavbarInner, NavbarLink, NavbarLinkMobile, NavbarMenuButton, NavbarOuter, NavbarSocialLink, NavbarWrapper, NavCenterContainer, NavLeftContainer, NavLinkWrapper, NavRightContainer, NavbarMobileSocialLink } from "../style/Navbar.style";
import ProHeadshot from '../assets/me/headshot-square.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faTwitch } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
    const [mobileNav, setMobileNav] = useState(false);
    return (
        <NavbarWrapper extendNav={mobileNav}>
            <NavbarInner>
                <NavLeftContainer>
                    <NavbarHeadshot src={ProHeadshot} alt='Matt Dixey'></NavbarHeadshot>
                </NavLeftContainer>
                <NavCenterContainer>
                    <NavLinkWrapper>
                        <NavbarLink to="/">Home</NavbarLink>
                        <NavbarLink to="/developer">Developer</NavbarLink>
                        <NavbarLink to="/esports">Esports</NavbarLink>
                        <NavbarLink to="/contact">Contact</NavbarLink>
                    </NavLinkWrapper>
                </NavCenterContainer>
                <NavRightContainer>
                    <NavbarSocialLink className='twitter social' href='https://twitter.com/mdixey17'>
                        <FontAwesomeIcon icon={faTwitter} size="2x" color="#49a1eb"></FontAwesomeIcon>
                    </NavbarSocialLink>
                    <NavbarSocialLink className='twitch social' href='https://twitch.tv/titanhawk17'>
                        <FontAwesomeIcon icon={faTwitch} size="2x"></FontAwesomeIcon>
                    </NavbarSocialLink>
                    <NavbarSocialLink className='github social' href='https://github.com/MDixey17'>
                        <FontAwesomeIcon icon={faGithub} size="2x" color="#FFFFFF"></FontAwesomeIcon>
                    </NavbarSocialLink>
                    <NavbarMenuButton onClick={() => {
                        setMobileNav((c) => !c)
                    }}>{mobileNav ? <>&#10005;</> : <> &#8801;</>}
                    </NavbarMenuButton>
                </NavRightContainer>
            </NavbarInner>
            {mobileNav && (
                <NavbarOuter>
                    <NavbarLinkMobile to="/">Home</NavbarLinkMobile>
                    <NavbarLinkMobile to="/developer">Developer</NavbarLinkMobile>
                    <NavbarLinkMobile to="/esports">Esports</NavbarLinkMobile>
                    <NavbarLinkMobile to="/contact">Contact</NavbarLinkMobile>
                    <NavbarMobileSocialLink className='twitter social' href='https://twitter.com/mdixey17'>
                        <FontAwesomeIcon icon={faTwitter} size="2x" color="#49a1eb"></FontAwesomeIcon>
                    </NavbarMobileSocialLink>
                    <NavbarMobileSocialLink className='twitch social' href='https://twitch.tv/titanhawk17'>
                        <FontAwesomeIcon icon={faTwitch} size="2x"></FontAwesomeIcon>
                    </NavbarMobileSocialLink>
                    <NavbarMobileSocialLink className='github social' href='https://github.com/MDixey17'>
                        <FontAwesomeIcon icon={faGithub} size="2x" color="#FFFFFF"></FontAwesomeIcon>
                    </NavbarMobileSocialLink>
                </NavbarOuter>
            )}
        </NavbarWrapper>
    )
};

export default Navbar;
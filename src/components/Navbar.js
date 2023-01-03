import React, {useState} from "react";
import { NavbarHeadshot, NavbarInner, NavbarLink, NavbarLinkMobile, NavbarMenuButton, NavbarOuter, NavbarSocialLink, NavbarWrapper, NavCenterContainer, NavLeftContainer, NavLinkWrapper, NavRightContainer, NavbarMobileSocialLink } from "../style/Navbar.style";
import ProHeadshot from '../assets/me/headshot-square.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useResolvedPath, useMatch } from "react-router-dom";

const Navbar = () => {
    const [mobileNav, setMobileNav] = useState(false);

    const homePath = "/";
    const devPath = "/developer";
    const esportsPath = "/esports";
    const contactPath = "/contact";

    const homeResPath = useResolvedPath(homePath);
    const devResPath = useResolvedPath(devPath);
    const esportsResPath = useResolvedPath(esportsPath);
    const contactResPath = useResolvedPath(contactPath);

    const homeMatch = useMatch( {path: homeResPath.pathname, end: true} );
    const devMatch = useMatch( {path: devResPath.pathname, end: true} );
    const esportsMatch = useMatch( {path: esportsResPath.pathname, end: true} );
    const contactMatch = useMatch( {path: contactResPath.pathname, end: true} );

    return (
        <NavbarWrapper extendNav={mobileNav}>
            <NavbarInner>
                <NavLeftContainer>
                    <NavbarHeadshot src={ProHeadshot} alt='Matt Dixey'></NavbarHeadshot>
                </NavLeftContainer>
                <NavCenterContainer>
                    <NavLinkWrapper>
                        <NavbarLink to="/" className={homeMatch ? "active" : ""}>Home</NavbarLink>
                        <NavbarLink to="/developer" className={devMatch ? "active" : ""}>Developer</NavbarLink>
                        <NavbarLink to="/esports" className={esportsMatch ? "active" : ""}>Esports</NavbarLink>
                        <NavbarLink to="/contact" className={contactMatch ? "active" : ""}>Contact</NavbarLink>
                    </NavLinkWrapper>
                </NavCenterContainer>
                <NavRightContainer>
                    <NavbarSocialLink className='twitter social' href='https://twitter.com/mdixey17'>
                        <FontAwesomeIcon icon={faTwitter} size="2x" color="#49a1eb"></FontAwesomeIcon>
                    </NavbarSocialLink>
                    <NavbarSocialLink className='linkedin social' href='https://www.linkedin.com/in/matt-dixey/'>
                        <FontAwesomeIcon icon={faLinkedin} size="2x" color="#0072b1"></FontAwesomeIcon>
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
                    <NavbarMobileSocialLink className='linkedin social' href='https://www.linkedin.com/in/matt-dixey/'>
                        <FontAwesomeIcon icon={faLinkedin} size="2x" color="#0072b1"></FontAwesomeIcon>
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
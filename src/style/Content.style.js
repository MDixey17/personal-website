import styled from "styled-components";

export const ContentWrapper = styled.div`
    background-color: ${(props) => (props.isBlue ? '#5cd0fd' : '#0a1115')};
    color: ${(props) => (props.isBlue ? '#0a1115' : '#f9f9f9')};
    width: 100%;
    max-height: 600px;
    display: flex;
    @media (max-width: 706px) {
        display: none;
    }
`;

export const ContentHeader = styled.h1`
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 36px;
    text-align: center;
    @media (max-width: 706px) {
        font-size: 24px;
    }
`;

export const ContentText = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    margin: 16px;
    @media (max-width: 706px) {
        margin: 12px;
        font-size: 12px;
        text-align: center;
    }
`;

export const ContentImage = styled.img`
    max-width: 450px;
    height: auto;
    border-radius: 12px;
    margin: 16px;
    @media (max-width: 706px) {
        max-width: 200px;   
    }
`;

export const ContentLeft = styled.div`
    flex: ${(props) => (props.isLarge ? "60%" : "40%")};
    justify-content: center;
    align-items: center;
    margin: 16px;
`;

export const ContentRight = styled.div`
    flex: ${(props) => (props.isLarge ? "60%" : "40%")};
    justify-content: center;
    align-items: center;
    margin: 16px;
`;

export const ContentItalics = styled.p`
    font-style: italic;
    margin: 0;
    display: inline;
`;

export const ContentLogoContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const ContentLogo = styled.img`
    max-width: 140px;
    height: auto;
    margin: 8px;
    @media (max-width: 706px) {
        max-width: 48px;
    }
`;

export const ContentMobileWrapper = styled.div`
    width: 100%;
    background-color: ${(props) => (props.isBlue ? '#5cd0fd' : '#0a1115')};
    color: ${(props) => (props.isBlue ? '#0a1115' : '#f9f9f9')};
    display: grid;
    @media (min-width: 706px) {
        display: none;
    }
`;
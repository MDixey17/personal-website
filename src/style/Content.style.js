import styled from "styled-components";

export const ContentWrapper = styled.div`
    background-color: ${(props) => (props.isBlue ? '#5cd0fd' : '#0a1115')};
    color: ${(props) => (props.isBlue ? '#0a1115' : '#f9f9f9')};
    width: 100%;
    max-height: 600px;
    display: flex;
`;

export const ContentHeader = styled.h1`
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 40px;
    text-align: center;
`;

export const ContentText = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    margin: 16px;
`;

export const ContentImage = styled.img`
    max-width: 400px;
    height: auto;
    border-radius: 12px;
    margin: 16px;
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
`;

export const ContentLogoContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const ContentLogo = styled.img`
    max-width: 140px;
    height: auto;
    margin: 8px;
`;
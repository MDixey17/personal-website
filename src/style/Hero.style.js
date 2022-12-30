import styled from "styled-components";

export const HeroWrapper = styled.div`
    width: 100%;
    height: 400px;
    background-color: #0a1115;
`;

export const HeroImage = styled.div`
    background-image: ${(props) => (props.imgPath ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.imgPath}))` : "")};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`;

export const HeroText = styled.div`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #f9f9f9;
`;
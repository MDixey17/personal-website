import styled from "styled-components";

export const CarouselWrapper = styled.div`
    width: 500px;
    height: 280px;
    margin: 0 auto;
`;

export const CarouselSlider = styled.div`
    position: relative;
    height: 100%;
`;

export const CarouselLeftArrow = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: 32px;
    font-size: 24px;
    color: #0a1115;
    z-index: 1;
    cursor: pointer;
    background-color: rgba(249, 249, 249, 0.8);
    &:hover {
        background-color: rgba(249, 249, 249, 0.4);
    }
`;

export const CarouselRightArrow = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: 32px;
    font-size: 24px;
    color: #0a1115;
    z-index: 1;
    cursor: pointer;
    background-color: rgba(249, 249, 249, 0.8);
    &:hover {
        background-color: rgba(249, 249, 249, 0.4);
    }
`;

export const CarouselImage = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: ${(props) => (props.imgPath ? `url(${props.imgPath})` : '')};
    background-size: cover;
    background-position: center;
`;

export const CarouselDotContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const CarouselDot = styled.div`
    margin: 0 4px;
    cursor: pointer;
    font-size: 20px;
`;
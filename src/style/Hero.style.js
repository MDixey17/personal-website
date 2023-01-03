import styled from "styled-components";

export const HeroWrapper = styled.div`
    overflow: hidden;
`;

export const HeroImage = styled.div`
    background: ${(props) => (props.imgPath ? `url(${props.imgPath}) repeat-x` : '')};
    height: 400px;
    width: 8000px;
    animation: slide 90s linear infinite;
    margin-top: 80px;

    @keyframes slide {
        0% {
            transform: translate3d(0, 0, 0);
        }

        100% {
            transform: translate3d(-4000px, 0, 0);
        }
    }
`;

export const HeroText = styled.div`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h1 {
        color: #f9f9f9;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 40px;
    }

    p {
        color: #dee0e1;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
    }

    @media (max-width: 706px) {
        h1 {
            font-size: 32px;
        }
        p {
            font-size: 16px;
        }
    }
`;
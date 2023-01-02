import React, { useState } from "react";
import { CarouselDot, CarouselDotContainer, CarouselImage, CarouselLeftArrow, CarouselRightArrow, CarouselSlider, CarouselWrapper } from "../style/Carousel.style";

const Carousel = ({slides}) => {
    const [cIndex, setCIndex] = useState(0);
    const getPrev = () => {
        const newIndex = cIndex === 0 ? slides.length - 1 : cIndex - 1;
        setCIndex(newIndex);
    };

    const getNext = () => {
        const newIndex = cIndex === slides.length - 1 ? 0 : cIndex + 1;
        setCIndex(newIndex);
    };

    const getSlide = (sIndex) => {
        setCIndex(sIndex);
    }
    return (
        <CarouselWrapper>
            <CarouselSlider>
                <div>
                    <CarouselLeftArrow onClick={getPrev}>❰</CarouselLeftArrow>
                    <CarouselRightArrow onClick={getNext}>❱</CarouselRightArrow>
                </div>
                <a href={slides[cIndex].url}>
                    <CarouselImage imgPath={slides[cIndex].imgPath}></CarouselImage>
                </a>
                <CarouselDotContainer>
                    {slides.map((slide, slideIndex) => (
                        <CarouselDot key={slideIndex} onClick={() => getSlide(slideIndex)}>●</CarouselDot>
                    ))}
                </CarouselDotContainer>
            </CarouselSlider>
        </CarouselWrapper>
    )
};

export default Carousel;
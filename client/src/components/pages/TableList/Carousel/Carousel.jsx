import React from "react";
import {default as LocalCarousel } from 'react-material-ui-carousel'
import CarouselItem from "./CarouselItem";

const Carousel = ({data}) => {
    return (
        <LocalCarousel duration={1000} interval={10000}>
            {data.map((elem, i) => <CarouselItem data={elem} key={"carousel-item-key-"+i}/>)}
        </LocalCarousel>
    )
}

export default Carousel
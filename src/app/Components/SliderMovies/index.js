'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Modal from "react-modal";
import ReactPlayer from "react-player";

// import component
import { slidesData } from '../../Data/SlideData';
import CardSlider from '../Card/Slider';

export default function SliderMovies({movies}) {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        initialSlide: 0,
        autoplay: true
    };

    return (
        <div className="container pl-10">
            <Slider {...settings}>
                {movies.map((slide) => (
                <div className="relative" key={slide.id}>
                    <CardSlider id={slide.id} imageCover={`https://image.tmdb.org/t/p/original/${slide.poster_path}`} title={slide.title} rating={Math.round(slide.vote_average * 10) / 10} duration={formatDuration(slide.runtime)} ageRating={slide.ageRating} />  
                    <div className="absolute top-0 right-0 z-[-10] opacity-50">
                        <Image src={`https://image.tmdb.org/t/p/original/${slide.backdrop_path}`} alt="cover-slider" width={770} height={500} />
                        <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-l from-transparent to-black"></div>    
                        <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-r from-transparent to-black"></div>
                        <div className="absolute top-0 right-0 bg-gradient-to-t from-transparent to-black w-full h-1/5"></div>    
                        <div className="absolute bottom-0 w-full h-1/5 bg-gradient-to-b from-transparent to-black"></div>
                    </div>    
                </div>     
                ))}
            </Slider>
        </div>
    );
}

// format duration
const formatDuration = (totalMinutes) => {
    if (!totalMinutes) return 'N/A';
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h ${minutes}m`;
};
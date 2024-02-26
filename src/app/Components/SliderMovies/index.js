'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Modal from "react-modal";
import ReactPlayer from "react-player";

// import component
import { slidesData } from '../../Data/SlideData';
import CardSlider from '../Card/Slider';

export default function SliderMovies() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectMovies, setSelectMovie] = useState(null);

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
    
    const openModal = (m) => {
        setIsOpen(true);
        setSelectMovie(m);
    }

    const closeModal = () => {
        setIsOpen(false);
        setSelectMovie(null);
    }

    return (
        <div className="container pl-10">
            <Slider {...settings}>
                {slidesData.map((slide, index) => (
                <div className="relative" key={index}>
                    <CardSlider imageCover={slide.cover} title={slide.title} rating={slide.rating} duration={slide.duration} ageRating={slide.ageRating} click={() => openModal(slide.link)} />  
                    <div className="absolute top-0 right-0 z-[-10] opacity-50">
                        <Image src={slide.bg} alt="cover-slider" width={770} />
                        <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-l from-transparent to-black"></div>    
                        <div  className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-r from-transparent to-black"></div>
                        <div className="absolute top-0 right-0 bg-gradient-to-t from-transparent to-black w-full h-1/5"></div>    
                        <div className="absolute bottom-0 w-full h-1/5 bg-gradient-to-b from-transparent to-black"></div>
                    </div>    
                </div>     
                ))}
            </Slider>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Modal Trailer slider"
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.7)"
                    },
                    content: {
                        width: "850px",
                        height: "85vh",
                        margin: "auto",
                        padding: 0,
                        border: "none",
                        borderRadius: "none",
                        position: "relative"
                    }
                }}
            >
                {selectMovies && <ReactPlayer
                    url={selectMovies}
                    width='100%'
                    height='100%'
                    controls={true}
                />}
            </Modal>
        </div>
    );
}
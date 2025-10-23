/* import React, { useEffect, useState } from 'react';
import CardCarrosel from "../../components/CardCarrosel"
import styles from "./Carousel.module.css";

function Carrossel({ startAtIndex = 5, interval= 2500 }) {

    const [ autoPlay, setAutoPlay] = useState(true)
    const [ currentSlide, setCurrentSlide] = useState(startAtIndex)
    const [ timeInterval, setTimeInterval] = useState(interval)
    const [ savedPosition, setSavedPosition ] = useState(0)
    const [ move, setMove] = useState(0)

    let slideItems = document.querySelectorAll('[data-slide="item"]')
    let slideInterval

    function handleNext() {
        setCurrentSlide(() =>{
            return currentSlide < slides.length - 1 ? currentSlide + 1 : 0
        });
    }
    function handlePrevious(){
        setCurrentSlide(() =>{
            return currentSlide > 0 ? currentSlide - 1 : slides.length - 1
        });
    }
    function getCenterPosition({ index }) {
        const slideItem = slideItems[index]
        const slideWidth = slideItem.clientWidth
        const windowWidth = document.body.clientWidth
        const margin = (windowWidth - slideWidth) / 2
        const position = margin - (index * slideWidth)
    
        return position
    }

    function setVisibleSlide({ index, animate }) {
        if(index === 0 || index === slides.length -1){
            index = currentSlide
        }
        const position = getCenterPosition({ index })
        setCurrentSlide(index);
        slides.style.transition = animate === true? 'transform .5s': 'none'
    
        translateSlide({ position: position })
    }

    function nextSlide(){
        setVisibleSlide({ index: currentSlide + 3, animate: true })
    }
    
    function previousSlide(){
        setVisibleSlide({ index: currentSlide - 3, animate: true })
    }

    function translateSlide({ position }) {
        setSavedPosition(position);
        slides.style.transform = `translateX(${position}px)`
    }

    function onMouseUp(event){

        const pointsToMove = event.type.includes('touch') ? 50 : 150
    
        if(move < -pointsToMove){
            nextSlide()
        } else if(move > pointsToMove){
            previousSlide()
        } else {
            setVisibleSlide({ index: currentSlide, animate: true })
        } 
    }

    const slides = [
        { index: 0, title: "Direito Civil" },
        { index: 1, title: "Direito do Trabalho" },
        { index: 2, title: "Direito de Família" },
        { index: 3, title: "Direito Imobiliário" },
        { index: 4, title: "Direito Penal" },
        { index: 5, title: "Direito Previdenciário" },
        { index: 6, title: "Direito Sucessório" },
        { index: 7, title: "Direito Tributário" },
        { index: 8, title: "Direito Empresarial" },
        { index: 9, title: "LGPD" },
        { index: 10, title: "Negociações e Contratos" },
    ];

    useEffect(() => {
        setAutoPlay(setVisibleSlide({ index: currentSlide + 1, animate: true }));
    })

    return(
        <section className={styles.container} data-slide="container">
            <span class={styles.arrow} data-slide="previous-button"></span>
            <div className={styles.carrossel}>
                <div className={styles.card_list} data-slide="list">
                {slides.map((slide, index) => (
                    <CardCarrosel key={index} index={slide.index} title={slide.title} data-slide="item" />
                ))}
                </div>
            </div>
            <span class={styles.arrow} data-slide="next-button"></span>
        </section>
    );
}

export default Carrossel;*/

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carrossel.module.css"

import CardCarrosel from "../../components/CardCarrosel"
import { Link } from "react-router-dom";

function Carrossel(){

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4.3,
        slidesToScroll: 1,
        initialSlide: 4,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                slidesToShow: 3.5,
                slidesToScroll: 1,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                slidesToShow: 4.6,
                slidesToScroll: 3,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3.6,
                slidesToScroll: 3,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                slidesToShow: 3.6,
                slidesToScroll: 3,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 750,
                settings: {
                slidesToShow: 3.2,
                slidesToScroll: 3,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 695,
                settings: {
                slidesToShow: 3.2,
                slidesToScroll: 3,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 650,
                settings: {
                slidesToShow: 2.3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2.3,
                slidesToScroll: 2,
                initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 2.3,
                slidesToScroll: 1
                }
            }
        ]
    };

    const Slides = [
        { index: 0, title: "Direito Civil" },
        { index: 1, title: "Direito do Trabalho" },
        { index: 2, title: "Direito de Família" },
        { index: 3, title: "Direito Imobiliário" },
        { index: 4, title: "Direito Penal" },
        { index: 5, title: "Direito Previdenciário" },
        { index: 6, title: "Direito Sucessório" },
        { index: 7, title: "Direito Tributário" },
        { index: 8, title: "Direito Empresarial" },
        { index: 9, title: "LGPD" },
        { index: 10, title: "Negociações e Contratos" },
        { index: 11, title: "Direito Bancário" },
        { index: 12, title: "Direito Médico" },
        { index: 13, title: "Direito do Consumidor" },
        { index: 14, title: "Direito Agronegócio" },
    ];

    return(
        <section className={styles.container}>
            <div>
                <Slider {...settings} infinite={true} autoplay={true} arrows={true} autoplaySpeed={2000} dots={false}>
                    {Slides.map((slide) => (
                        <Link to="/areas-de-atuaçao"><CardCarrosel key={slide.index} index={slide.index} title={slide.title} className={styles.card} /></Link> 
                    ))}
                </Slider>
            </div>

        </section>
    );
}

export default Carrossel;
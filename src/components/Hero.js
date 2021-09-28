import React, {useState, useRef, useEffect} from 'react'
import '../styles/Hero.css';
import sliderdata from '../data/sliderdata';
import { Link } from "react-router-dom";


const Hero = () => {

    const [current, setCurrent] = useState(0)
    const length = sliderdata.length
    const timeout = useRef(null)

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }
        timeout.current = setTimeout(nextSlide, 4000)

        return function () {
            if(timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    }, [current, length]) 

    const nextSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === length - 1 ? 0 : current + 1);
        console.log(current)
        };

    const prevSilde = () => {
        if(timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === 0 ? length - 1 : current -1);
        console.log(current)
    }
    
     return (
        <div>
            <div className='hero--section'>
                <div className='hero--wrapper'>
                    {sliderdata.map((slide, index) => {
                        return (
                            <div className='hero--slide' key={index}>
                                {index === current && (
                                    <div className='hero--slider'>
                                    <img className='hero--image' src={slide.image} alt={slide.alt} />
                                    <div className='nav--button--left'>
                                        <i class="fab fa-instagram fa-2x"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                                        <i class="fab fa-facebook-square fa-2x"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                                        <i class="fab fa-twitter-square fa-2x"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                                    </div>
                                    <div className='nav--button'>
                                        <i class="fas fa-bars fa-2x"></i>
                                    </div>
                                    <div className='home--button'>
                                        <i class="fas fa-h-square fa-4x"></i> 
                                    </div>
                                        <div className='hero--overlay'>
                                            <div className='hero--content'> 
                                                <h1 className='title'>{slide.title}</h1>
                                                <h3>List Price: ${slide.price}</h3>
                                                <br></br>
                                                <button className='hero--button'>view property</button>
                                                <br></br>
                                                <Link to='#'>
                                                    <button className='hero--button'>more listings</button>
                                                </Link>
                                                
                                            </div>
                                        </div>
                                </div>
                                )}
                            </div>
                        )
                    })}
                    <div className='hero--buttons'>
                        <small>more listings</small>
                        <br></br>
                        <button className='next--button' onClick={prevSilde}><i class="fas fa-arrow-circle-left fa-3x"></i></button>
                        <button className='next--button' onClick={nextSlide}><i class="fas fa-arrow-circle-right fa-3x"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero

import React from 'react';
import { Link } from 'react-router-dom';
import laptop1 from '../../../assets/laptops/laptop-1.jpg';
import laptop2 from '../../../assets/laptops/laptop-3.jpg';
import laptop3 from '../../../assets/laptops/laptop-5.jpg';
import laptop4 from '../../../assets/laptops/laptop-9.jpg';


const Carousol = () => {
    return (

        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" alt='' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <Link href="#slide4" className="btn btn-circle">❮</Link>
                        <Link href="#slide2" className="btn btn-circle">❯</Link>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" alt='' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <Link href="#slide1" className="btn btn-circle">❮</Link>
                        <Link href="#slide3" className="btn btn-circle">❯</Link>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" alt='' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <Link href="#slide2" className="btn btn-circle">❮</Link>
                        <Link href="#slide4" className="btn btn-circle">❯</Link>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" alt='' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <Link href="#slide3" className="btn btn-circle">❮</Link>
                        <Link href="#slide1" className="btn btn-circle">❯</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousol;
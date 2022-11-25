import React from 'react';
import { Link } from 'react-router-dom';

const CarousolItem = ({ slide }) => {
    const { id, image, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">

            <div className='carousel-img mx-auto '>
                <img src={image} className="w-full rounded-xl" />
            </div>
            {/* <div className="absolute lg: ml-60  top-2/3">
                <h1 className=' text-6xl  font-bold text-white'>
                    Easy Marketing any <br /> kinds of Laptop <br />
                </h1>
            </div> */}

            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle to-transparent border-none">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle ml-5 bg-orange-700 border-none">❯</a>
            </div>
        </div>
    );
};

export default CarousolItem;
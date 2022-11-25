import React from 'react';
import { Link } from 'react-router-dom';
import laptop1 from '../../../assets/laptops/laptop-1.jpg';
import laptop2 from '../../../assets/laptops/laptop-2.jpg';
import laptop3 from '../../../assets/laptops/laptop-3.jpg';
import laptop4 from '../../../assets/laptops/laptop-4.jpg';
import laptop5 from '../../../assets/laptops/laptop-5.jpg';
import laptop6 from '../../../assets/laptops/laptop-6.jpg';
import CarousolItem from './CarousolItem';
import './Carousol.css'

const carousolData = [
    {
        image: laptop1,
        prev: 6,
        id: 1,
        next: 2,
    },
    {
        image: laptop2,
        prev: 1,
        id: 2,
        next: 3,
    },
    {
        image: laptop3,
        prev: 2,
        id: 3,
        next: 4,
    },
    {
        image: laptop4,
        prev: 3,
        id: 4,
        next: 5,
    },
    {
        image: laptop5,
        prev: 4,
        id: 5,
        next: 6,
    },
    {
        image: laptop6,
        prev: 5,
        id: 6,
        next: 1,
    },
]

const Carousol = () => {
    return (

        <div className='carousol-bg carousel w-full mt-24'>
            {
                carousolData.map(slide =>
                    <CarousolItem
                        key={slide.id}
                        slide={slide}
                    ></CarousolItem>
                )
            }



        </div>
    );
};

export default Carousol;
import React from 'react';
import { Link } from 'react-router-dom';
import HeroImg from '../../../assets/laptops/hero-image.jpg';

const Hero = () => {
    return (
        <div>
            <div className="hero  bg-base-200 mt-24">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={HeroImg} className="max-w-sm rounded-lg shadow-2xl w-1/2" alt='' />
                    <div className=' w-1/2'>
                        <h1 className="text-5xl font-bold">Best Laptop Resale Market</h1>
                        <p className="py-6">Here you can very easily buy or sell  a used laptop in a reasonable price within a short time. We will provide good support for this. </p>
                        <Link to='/'><button className="btn btn-primary">Get Started</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

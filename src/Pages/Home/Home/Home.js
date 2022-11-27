import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Categories from '../../Categories/Categories';
import AllProduct from '../../Products/AllProduct';
import Carousol from '../Carousol/Carousol';
import Hero from '../Hero/Hero';

const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            <h2 className=' text-center text-4xl font-bold lg:mt-16 '>Products Category</h2>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 lg:gap-16 '>
                {
                    categories.map(category =>
                        <Categories
                            key={category._id}
                            category={category}
                        ></Categories>)
                }
            </div>
            <AllProduct></AllProduct>
            <Carousol></Carousol>
            <Hero></Hero>
        </div>
    );
};

export default Home;
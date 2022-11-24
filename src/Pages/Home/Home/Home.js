import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Categories from '../../Categories/Categories';

const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mt-28'>
                {
                    categories.map(category =>
                        <Categories
                            key={category._id}
                            category={category}
                        ></Categories>)
                }
            </div>
        </div>
    );
};

export default Home;
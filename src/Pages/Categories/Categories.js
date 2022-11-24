import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css'

const Categories = ({ category }) => {
    const { title, img, description } = category;

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <Link to='/products/:id'> <button className="btn btn-primary">Show Products</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
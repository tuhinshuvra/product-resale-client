import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <h2>This is Blog Section</h2>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    <b> Question-1 : </b>   What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box lg:my-4">
                <div className="collapse-title text-xl font-medium">
                    <b> Question-2 : </b> How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>tabIndex={1} attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    <b> Question-3 : </b>What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p>tabIndex={2} attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box lg:my-4">
                <div className="collapse-title text-xl font-medium">
                    <b> Question-4 : </b>React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p>tabIndex={3} attribute is necessary to make the div focusable</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
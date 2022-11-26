import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className=' lg:mx-32 md:mx-16'  >
            <h2 className='text-center font-bold text-3xl my-6'>Easy Market Blog</h2>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    <b> Question-1 : </b>What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p>
                        I’ll like to explain about how to understand state in a way that helps you make more informed decisions about managing it. <br /> <br />

                        State in reactive programming is data that dictates the configuration of the application in any moment in time. <br /> <br />

                        In simpler words, any part of the application that is subject to change has some associated data that changes it; that data is called a state. Now, this is where people stop, learn about state, and then after learning redux put everything inside redux global state. In order to understand how to better manage state, we need to know how many types of state there can be. I like to classify state in two ways and then choose the technologies that are best suited for managing those kinds of state. <br /> <br />

                        Classification based on origin
                        Wherefrom the state originates is an important thing to consider and can be classified into: <br /> <br />

                        Client-side state: Any data that is generated and consumed on the client-side like UI state can be put into this category. The general rule of thumb while managing this sort of state is to see how far the components consuming it are in the component tree. We will talk about this sort of classification a bit later. A good practice to follow if you are unsure of managing this is start with local state and you if other components need it too, you can start lifting the state up the tree. Note: Never put UI state in the cache. <br /> <br />

                        Server-side state: This is not be confused by the state that is managed between the server and the database. This state is essentially any data that is requested by the client from the server via REST/GraphQL APIs. This kind of data is not originated in the client and hence requires special treatment. We would not like to re-fetch this data from the server continuously and would like to cache it. Now if you are an expert you can certainly do it yourself with Redux/Mobx/Recoil and your own caching mechanism. But there are libraries out there that are better suited for this job, like ReactQuery/SWR if you are using REST, or Apollo if you are using GraphQL. These libraries are specialized to handle these kinds of state and optimally caches it.</p>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box lg:my-4">
                <div className="collapse-title text-xl font-medium">
                    <b> Question-2 : </b> How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>Everything in Javascript is an object. Even when creating a Class is an Object via an Object Literal or Constructor Function. This is how Javascript does class-based programming as to other traditional Object-Oriented Programming languages where they use the keyword ‘class’ and ‘inheritance’. <br /><br />

                        Javascript’s version of class-based programming and other traditional class-based programming languages work with the same concept but does not work exactly similar. There are differences in its keyword, syntax, and how it works. There are also debates regarding pros and cons of Javascript’s version of class-based programming, but for simplicity’s sake and learning purposes, I do not want to go over those issues. See details here</p>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    <b> Question-3 : </b>What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p> <b> What is Unit Testing?</b> <br />
                        Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object. <br /> <br />

                        In SDLC, STLC, V Model, Unit testing is first level of testing done before integration testing. Unit testing is a WhiteBox testing technique that is usually performed by the developer. Though, in a practical world due to time crunch or reluctance of developers to tests, QA engineers also do unit testing. <br /> <br />

                        <b>Why perform Unit Testing?</b> <br />
                        Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end. <br /> <br />

                        Here, are the key reasons to perform unit testing in software engineering:</p>
                </div>
            </div>
            <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box lg:my-4">
                <div className="collapse-title text-xl font-medium">
                    <b> Question-4 : </b>React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p> <b> There are three frameworks for building web applications that every frontend developer has heard about: React, Vue.js, and Angular.</b> <br /><br />

                        React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.<br /><br />

                        They can be used almost interchangeably to build front-end applications, but they’re not 100 percent the same, so it makes sense to compare them and understand their differences. <br /><br />

                        Each framework is component-based and allows the rapid creation of UI features. <br /><br />

                        However, they all have a different structure and architecture — so first, we’ll look into their architectural differences to understand the philosophy behind them. <br /><br />

                        Architecture <br /><br />
                        React
                        React doesn’t enforce a specific project structure, and as you can see from the official “Hello World” example below, you can start using React with just a few lines of code.

                        ReactDOM.render( <br />
                        <h1>Hello, world!</h1>, <br />
                        document.getElementById('root') <br />
                        ); <br /><br />
                        React can be used as a UI library to render elements, without enforcing a specific project structure, and that’s why it’s not strictly a framework. <br /><br />

                        React Elements are the smallest building blocks of React apps. They are more powerful than DOM elements because the React DOM makes sure to update them efficiently whenever something changes. <br /><br />

                        Components are larger building blocks that define independent and reusable pieces to be used throughout the application. They accept inputs called props and produce elements that are then displayed to the user.<br /><br />

                        React is based on JavaScript, but it’s mostly combined with JSX (JavaScript XML), a syntax extension that allows you to create elements that contain HTML and JavaScript at the same time.<br /><br />

                        Anything you create with JSX could also be created with the React JavaScript API, but most developers prefer JSX because it’s more intuitive. <br /><br />

                        Vue
                        The Vue.js core library focuses on the View layer only. It’s called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework.<br /><br />

                        Although Vue is not strictly associated with the MVVM (Model-View-ViewModel) pattern, its design was partly inspired by it. With Vue, you’ll be working mostly on the ViewModel layer, to make sure that the application data is processed in a way that allows the framework to render an up-to-date View.<br /><br />

                        Vue’s templating syntax lets you create View components, and it combines familiar HTML with special directives and features. This templating syntax is preferred, even though raw JavaScript and JSX are also supported.<br /><br />

                        Components in Vue are small, self-contained, and can be reused throughout the application. Single File Components (SFCs) with the .vue extension contain HTML, CSS, and JavaScript so that all relevant code resides in one file.<br /><br />

                        SFCs are the recommended way to organize code in Vue.js projects, especially larger ones. Tools such as Webpack or Browserify are required to transpile SFCs into working JavaScript code.<br /><br />

                        Angular
                        In this article, I’m discussing Angular 2, and not the first version of the framework which is now known as AngularJS.<br /><br />

                        AngularJS, the original framework, is an MVC (Model-View-Controller) framework. But in Angular 2, there’s no strict association with MV*-patterns as it is also component-based.

                        Projects in Angular are structured into Modules, Components, and Services. Each Angular application has at least one root component and one root module. <br /><br />

                        Each component in Angular contains a Template, a Class that defines the application logic, and MetaData (Decorators). The metadata for a component tells Angular where to find the building blocks that it needs to create and present its view. <br /><br />

                        Angular templates are written in HTML but can also include Angular template syntax with special directives to output reactive data and render multiple elements, among other things.<br /><br />

                        Services in Angular are used by Components to delegate business-logic tasks such as fetching data or validating input. They are a distinct part of Angular applications. While Angular doesn’t enforce their use, it’s highly suggested to structure apps as a set of distinct services that can be reused.<br /><br />

                        Angular is built in TypeScript, so its use is recommended to get the most seamless experience, but plain JavaScript is also supported.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
import React from 'react';
import Genres from "../Genres";
import NewBooks from "../NewBooks";
import Books from "../Books";
import About from "../About";


const Hero = () => {
    return (
        <>
            <div id="hero">
                <div className="container">
                    <div className="hero">
                        <h1 className="hero--tittle">Welcome to our Bookshops</h1>
                        <h4 className="hero--text">A place where you can get all the books you want!</h4>
                    </div>
                </div>
            </div>
            <Genres/>
            <NewBooks/>
            <Books/>
            <About/>
        </>
    );
};

export default Hero;
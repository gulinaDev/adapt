import React, {useState} from 'react';
import pro from "../../img/image4.png"

import {Link} from "react-router-dom";
import {MdFavoriteBorder} from "react-icons/md";
import {FaShareAlt} from "react-icons/fa";
import {data} from "../../data/product";


const Detail = () => {
    return (
        <div id="detail">
            <div className="container">
                <div className="detail">
                    <img src={pro} width="300" alt=""/>
                    <div className="detail--texts">
                        <div className="detail--texts__title">
                            <div className="detail--texts__title--block">
                                <h1 className="detail--texts__title--block__span">THE BOY, THE MOLE, THE FOX AND THE HORSE</h1>
                                <Link to={"/"} className="detail--texts__title--block__icon"><MdFavoriteBorder  className="detail--texts__title--block__icon"/>
                                </Link>
                                <p><FaShareAlt className="icon"/></p>
                            </div>
                        </div>
                        <p className="p1">by Charlie Mackesy</p>
                        <p className="p2">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                        <p className="p3"></p>

                        <div className="add">
                            <Link to="/allbooks">
                                <button>Add to Cart</button>
                            </Link>

                            <div className="addCard">
                                <h2>-</h2>
                                <h3>1</h3>
                                <h2>+</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
import React from 'react';
import {data} from "../../data/product";
import {Link} from "react-router-dom";
import {IoIosArrowDropdown} from "react-icons/io";

const YourCart = () => {
    return (<div id="card">
        <div className="container">
            <div className="card">
                <div className="card--title">
                    <h1 className="card--title__text">Your cart</h1>
                    <div className="card--title__desc">
                        <h3 className="card--title__desc--span">Not ready to checkout ?</h3>
                        <Link to={"/allbooks"}>Continue Shopping</Link>
                    </div>
                    <div className="line"></div>
                </div>

                <div className="card--block">

                    <div className="card--block__group">
                        {data.filter(el => {
                            if (el.type === "For kids") {
                                return el
                            } else if (el.type === "Detective") {
                                return el
                            } else if (el.type === "Romantic") {
                                return el
                            }
                        }).map(el => {
                            return <div className="card--block__group">
                                <div className="card--block__group--text">

                                    <div className="card--block__group--text__image">
                                        <img src={el.image} alt=""/>
                                    </div>

                                    <div className="card--block__group--text__about">
                                        <div className="card--block__group--text__about--base">
                                            <h1 className="card--block__group--text__about--base__total">{el.title}</h1>
                                            <p className="card--block__group--text__about--base__frame">by {el.author}</p>
                                            <div className="card--block__group--text__about--base__cart">
                                                <p className="card--block__group--text__about--base__cart--text"> Quantity: {el.quantity}</p>
                                                <p className="card--block__group--text__about--base__cart--span">${el.price}</p>
                                            </div>
                                        </div>
                                        <h2 className="card--block__group--text__about--remove">Remove</h2>
                                    </div>
                                </div>
                                <div className="card--block__group--line"></div>

                            </div>
                        })

                        }
                    </div>



                    <div className="card--block__frame">
                        <h1 className="card--block__frame--text">Order Summary</h1>
                        <div className="card--block__frame--desc">
                            <div className="card--block__frame--desc__base">
                                <p className="card--block__group--desc__base--title">Shipping</p>
                            <p className="card--block__frame--desc__base--span">payment<IoIosArrowDropdown className="card--block__frame--desc__base--span__icon"/></p>
                            </div>
                            <div className="card--block__frame--desc__base">
                                <p className="card--block__group--desc__base--title">Shipping</p>
                            <p className="card--block__frame--desc__base--span">payment

                                <IoIosArrowDropdown className="card--block__frame--desc__base--span__icon"/></p>
                            </div>











                            <div className="card--block__frame--desc__line"></div>
                            <div className="card--block__frame--desc__total">
                                <p className="card--block__frame--desc__total--span">Total</p>
                                <p className="card--block__frame--desc__total--title">$188</p>
                            </div>
                          <Link to={"/allbooks"}>  <button className="card--block__frame--desc__btn">Continue to checkout</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

export default YourCart;
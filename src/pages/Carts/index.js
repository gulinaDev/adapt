import React from 'react';
import {data} from "../../data/product";

const Cart = () => {
    return (
        <div id="card">
            <div className="container">
                <div className="flex">
                    <div className="cards">
                        <h1>Your cart</h1>
                        <h3>Not ready to checkout ?<a> Continue Shopping</a></h3>
                        <div className="card">
                            {
                                data.filter(el =>{
                                    if (el.type === "For teenagers"){
                                        return el
                                    }else if (el.type === "Psychology"){
                                        return el
                                    }else if (el.type === "Finance"){
                                        return el
                                    }
                                }).map(el =>{
                                    return  <div className="card--texts">
                                        <div className="card--texts__title">

                                            <div className="title">
                                                <div>

                                                </div>
                                                <img src={el.image} alt=""/>
                                                <h1 className="h1">{el.title}</h1>
                                                <div className="detail--texts__titles">
                                                    <h2><a href="">Remove</a></h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })

                            }
                        </div>
                        <div className="line"></div>
                    </div>

                    <div className="summary">
                        <h1>Order Summary</h1>
                        <div className="order">
                            <h3>Shipping</h3>
                            <select>
                                <option value=""></option>
                            </select>


                        </div>
                        <div className="order">
                            <h3>Payment</h3>

                        </div>
                        <div className="order">
                            <h3 className="orTitle">Total</h3>
                            <h3 className="h3">$188</h3>
                        </div>
                        <button className="btn">Continue to checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
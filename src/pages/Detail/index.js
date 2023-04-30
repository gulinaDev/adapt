import React from 'react';
import pro from "../../img/image4.png"

// import vector  from "../../img/image4.png"
import {Link} from "react-router-dom";

const Detail = () => {
    return (
        <div id="detail">
            <div className="container">
                <div className="detail">
                    <img src={pro} width="300" alt=""/>
                    <div className="detail--texts">
                        <div className="detail--texts__title">
                            <h1>THE BOY, THE MOLE, THE FOX AND THE HORSE</h1>
                            <div className="detail--texts__titles">
                                {/*<img className={vector} src=""/>*/}
                                {/*<img src{} alt=""/>*/}
                            </div>

                        </div>
                        <p className="p1">by Charlie Mackesy</p>
                        <p className="p2">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                        <p className="p3">$99</p>

                        <div className="add">
                            <Link to="/allbooks"><button>Add to Cart </button></Link>

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
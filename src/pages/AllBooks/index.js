
import {data} from "../../data/product";
import {useEffect, useState} from "react";

const AllBooks = () => {
    const [tab,setTab] = useState('first')

    useEffect(()=>{
        setTab('first')
    },[])
    return (
        <div id="allBooks">
            <div className="container">
                <div className="allbooks">
                    <div className="all">
                        <div className="allBooks--title">
                            <h1>All Books</h1>
                            <p>Here you can find all the books you need</p>
                        </div>
                        <div className="allBooks--title__select">
                            <div className="allBooks--title__select--filter">
                                <h3>Filters  </h3>
                                <a>Clear filters</a>
                            </div>
                            <div className="allBooks--title__select--select">
                                <select>
                                    <option value=""> <span>Sort By</span>Popular</option>
                                    <option value=""> <span>Sort By</span>Top</option>
                                    <option value=""> <span>Sort By</span>Top</option>
                                </select>
                            </div>




                        </div>
                        <div className="">
                            <h3>Genres</h3>
                            <div className="allBooks">
                                <div className="allBooks--title__right--input">
                                    <input type="radio" id="autographed" name="autographed"/>
                                    <label htmlFor="autographed" onClick={() =>setTab("first")}
                                    style={{
                                       borderBottom: tab !== "first" && "none"
                                    }}
                                    >Autographed Books</label> <br/>



                                    <input type="radio" id="autographed" name="autographed"/>
                                    <label htmlFor="autographed" onClick={() =>setTab("second")}
                                           style={{
                                               color: tab !== "second" && "none"
                                           }}>Sci-Fi</label> <br/>


                                    <input type="radio" id="autographed" name="autographed"/>
                                    <label htmlFor="autographed" onClick={() =>setTab("third")}
                                           style={{
                                               color: tab !== "first" && "none"
                                           }}>For kids</label> <br/>



                                    <input type="radio" id="autographed" name="autographed"/>
                                    <label htmlFor="autographed">For teenagers</label> <br/>
                                    <input type="radio" id="autographed" name="autographed"/>
                                    <label htmlFor="autographed">Finance</label> <br/>
                                    <input type="radio" id="autographed" name="autographed"/>
                                    <label htmlFor="autographed">Detective</label> <br/>
                                    <input type="radio" id="autographed" name="autographed"/>
                                    <label htmlFor="autographed">Romantic</label> <br/>
                                    <input type="radio" id="autographed" name="autographed"/>
                                    <label htmlFor="autographed">Psychology</label> <br/>
                                    <input type="radio" id="autographed" name="autographed"/>
                                    <label htmlFor="autographed">Self-Improvement</label> <br/>
                                    <input type="radio" id="autographed" name="autographed"/>
                                    <label htmlFor="autographed">Educational</label> <br/>
                                    <input type="radio" id="autographed" name="autographed"/>
                                    <label htmlFor="autographed">Literature</label> <br/>
                                    <input type="radio" id="autographed" name="autographed"/>
                                    <label htmlFor="autographed">Religion</label> <br/>
                                </div>
                                <div className="allBooks--img">
                                    {
                                        data.filter(el =>{
                                        if (el.type === "Religion"){
                                            return el
                                        }else if (el.type === "Sci-Fi"){
                                            return el
                                        }else if (el.type === "For kids"){
                                            return el
                                        }else if (el.type === "For teenagers"){

                                            return el
                                        }else if (el.type === "Finance"){
                                            return el
                                        }else if (el.type === "Detective"){
                                            return el
                                        }else if (el.type === "Romantic"){
                                            return el
                                        }else if (el.type === "Educational"){
                                            return  el
                                        }else if (el.type === "Self-Improvement"){
                                            return el
                                        }else{
                                            return ""
                                        }
                                    }).map(el =>{
                                        return <div className="images">
                                            <img width="150px" src={el.image} alt=""/>
                                            <h1>{el.title}</h1>
                                            <p>{el.desc}</p>
                                        </div>
                                    })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBooks;


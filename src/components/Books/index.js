import {Link} from "react-router-dom";
import Slider from "react-slick"
import {data} from "../../data/product";


const Books = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div id="books">
            <div className="container">
                <div className="books">
                    <div className="books--text">
                        <h1 className="books--text__title">Books</h1>
                        <div className="books--text__view">
                            <Link onClick={() => window.scroll(0, 0)} to="/allbooks"> View all</Link>
                        </div>
                    </div>
                    <div className="books--slider">
                        <Slider {...settings}>
                            {
                                data.filter(el =>{
                                    if (el.type === "Author Books"){
                                        return el
                                    }
                                }).map(el =>{
                                    return  <div className="books--slider__title">
                                        <Link to={"detail"}><img src={el.image} alt="" className="books--slider__title--image"/></Link>
                                        <h5 className="books--slider__title--text">{el.title}</h5>
                                        <h5 className="books--slider__title--span">by {el.author}</h5>
                                    </div>
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;
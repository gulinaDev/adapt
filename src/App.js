import './App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Genres from "./components/Genres";
import NewBooks from "./components/NewBooks";
import AllBooks from "./pages/AllBooks";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from "./pages/Detail";
import Tabs from "./components/Tabs";
import YourCart from "./pages/YourCart";



function App() {
    return (
        <div className="App">
           <Header/>
            {/*<Tabs/>*/}
            <Routes>
                <Route path={"/"} element={<Hero/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/books"} element={<AllBooks/>}/>
                <Route path={"/genres"} element={<Genres/>}/>
                <Route path={"/newbooks"} element={<NewBooks/>}/>
                <Route path={"/allbooks"} element={<AllBooks/>}/>
                {/*<Route path={"/cart"} element={<Cart/>}/>*/}
                <Route path={"/detail"} element={<Detail/>}/>
                <Route path={"/yourcart"} element={<YourCart/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;

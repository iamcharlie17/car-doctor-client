import About from "../About/About";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Services from "../Services/Services";
import Location from '../Location/Location';
import Teams from "../Teams/Teams";
import Choose from "../Choose/Choose";
import Reviews from "../Reviews/Reviews";

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Services/>
            <Location/>
            <Products/>
            <Teams/>
            <Choose/>
            <Reviews/>
        </div>
    );
};

export default Home;
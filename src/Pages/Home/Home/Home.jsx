import About from "../About/About";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Services from "../Services/Services";
import Location from '../Location/Location';
import Teams from "../Teams/Teams";
import Choose from "../Choose/Choose";

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
        </div>
    );
};

export default Home;
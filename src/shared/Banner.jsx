import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Banner = () => {
   
        useEffect(() => {
          AOS.init(); // Initialize AOS
        }, []);
        
    return (
        <div className="banner-section">
            <div className="text-center text-white font-rajdhani banner-section font-bold" data-aos="fade-up" data-aos-duration="1000">
                <h1>Explore the World of</h1>
                <h2>Smart Gadgets</h2>
                <h3>Here</h3>
                <Link to={"/login"}><button className="btn font-roboto">Shop Now</button></Link>
            </div>


        </div>
    );
};

export default Banner;
import { ToastContainer } from "react-toastify";
import Banner from "../shared/Banner";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServiceSection from "../shared/ServiceSection";
import LocationSection from "../shared/LocationSection";
import Brands from "../shared/brands";

const Home = () => {

    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);

    return (
        <div>
            <div className="top-section">
                <div className="top-section-2">
                    <div className="max-w-6xl mx-auto">
                        
                        <Banner></Banner>
                        
                    </div>
                </div>                      
            </div>
            <div className="max-w-6xl mx-auto "  data-aos="fade-up" data-aos-duration="1000">
                <Brands></Brands>
            </div>
            <div className="diff-bg"  data-aos="fade-up" data-aos-duration="1000">
                <div className="max-w-6xl mx-auto ">
                    <ServiceSection></ServiceSection>
                </div>
                
            </div>
            <div className="">
                <div className="max-w-6xl mx-auto "  data-aos="fade-up" data-aos-duration="1000">
                    <LocationSection></LocationSection>
                </div>
            </div>
            
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            
        </div>
        
        
    );
};

export default Home;
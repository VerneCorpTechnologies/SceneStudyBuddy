import React from 'react';
import './Home.css';
import BannerText from './../BannerText/BannerText';
import Banner from './../Banner/Banner';
import AboutUs from './../AboutUs/AboutUs';
import Testimonial from './../Testimonial/Testimonial';
import CallToAction from './../CallToAction/CallToAction';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <BannerText />
            <Banner />
            <AboutUs />
            <Testimonial />
            <CallToAction />
            <Footer />
        </div>
    );
};

export default Home;








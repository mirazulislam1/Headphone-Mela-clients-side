import React from 'react';
import Carousel from '../../Carousel/Carousel';
import Categories from '../../Categories/Categories';
import Banner from './Banner/Banner';
import SoundSystems from './SoundSystems/SoundSystems';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Banner></Banner>
            <Categories></Categories>
            <SoundSystems></SoundSystems>
            
        </div>
    );
};

export default Home;
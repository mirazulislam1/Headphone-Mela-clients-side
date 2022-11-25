import React from 'react';
import Categories from '../../Categories/Categories';
import Banner from './Banner/Banner';
import SoundSystems from './SoundSystems/SoundSystems';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <SoundSystems></SoundSystems>
            
        </div>
    );
};

export default Home;
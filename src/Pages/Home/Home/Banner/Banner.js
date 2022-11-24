import React from 'react';
import banner from '../../../../photo/banner/banner.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="w-1/2 rounded-lg shadow-2xl" alt=''/>
                <div>
                    <h4 className="font-semibold text-orange-500">Listen Alone, Feel the Rhythm</h4>
                    <h1 className='text-4xl font-bold text-orange-800 mt-2'>Spark Up Your <br /> Passion With <br /> Good Music</h1>
                    <p className="py-6">The best headphones are a must if you love listening to music, podcasts and movies. They’re essential if you travel regularly, have a lot of video calls, need music to focus while you’re working or to keep you motivated while you’re working out. </p>
                    <button className="btn bg-rose-500">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import carousel1 from '../../photo/carousel/carousel1.png'
import carousel2 from '../../photo/carousel/carousel2.jpg'
import carousel3 from '../../photo/carousel/carousel3.jpg'
import carousel4 from '../../photo/carousel/carousel4.jpg'


const Carousel = () => {
    return (
        <div className='mb-10 mt-4'>
            <div className="carousel w-full h-96 rounded-xl">
                <div id="item1" className="carousel-item w-full">
                    <img src={carousel1}  className="w-full" alt=''/>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={carousel2} className="w-full" alt=''/>
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={carousel3} className="w-full" alt='' />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={carousel4} className="w-full" alt=''/>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>

        </div>
    );
};

export default Carousel;
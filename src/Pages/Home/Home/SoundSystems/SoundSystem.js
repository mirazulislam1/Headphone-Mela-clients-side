import React from 'react';

const SoundSystem = ({sound}) => {
    const {description, img} = sound;
    return (
        <div className='bg-red-400 text-white rounded-xl'>
            <figure className="px-10 pt-10">
                <img src={img} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{description}</h2>
              
            </div>
        </div>
    );
};

export default SoundSystem;
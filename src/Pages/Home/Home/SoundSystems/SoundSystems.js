import React from 'react';
import sound1 from '../../../../photo/sound/sound1.jpg'
import sound2 from '../../../../photo/sound/sound2.png'
import sound3 from '../../../../photo/sound/sounded3.jpg'
import sound4 from '../../../../photo/sound/sound4.png'
import SoundSystem from './SoundSystem';

const SoundSystems = () => {

    const Sounds = [
        {
            id: 1,
            img: sound1,
            description: 'Virtual Surround Sound'
        },
        {
            id: 1,
            img: sound2,
            description: 'Sound Position Control'
        },
        {
            id: 1,
            img: sound3,
            description: 'Easy Hands Free Calling'
        },
        {
            id: 1,
            img: sound4,
            description: 'Smarter Voice Assistant'
        },
    ]
    return (
        <div>
            <h1 className='text-center text-4xl text-red-400 font-bold mt-16'>More Sound <br /> Even Less Noise</h1>
            <div className="grid mt-8 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

                {
                    Sounds.map(sound => <SoundSystem key={sound.id} sound={sound}></SoundSystem>)
                }
            </div>
        </div>
    );
};

export default SoundSystems;
import React from 'react';

const CategoriesName = ({category}) => {
    const {name} = category;
    return (
        <div className='mt-2'>
            <h1>{name}</h1>
        </div>
    );
};

export default CategoriesName;
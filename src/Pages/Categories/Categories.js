import React, { useEffect, useState } from 'react';
import CategoriesName from './CategoriesName';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res =>res.json())
        .then(data=> setCategories(data))

    }, [])

    return (
        <div class="text-center mt-16">
            <h2 className='text-3xl font-semibold mb-4'>All catagories</h2>
            {
                categories.map(category => <CategoriesName key={category._id} category={category}></CategoriesName>)
            }
        </div>
    );
};

export default Categories;
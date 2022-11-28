import React, { useState } from 'react';
import Product from './Product';

const Category = () => {
    const products = JSON.parse(localStorage.getItem('product'));
    const [product, setProduct] = useState(null);
    return (
        <div>
            <h1>this category</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    products.map(product => <Product 
                        key={product._id}
                        product={product}
                        setProduct={setProduct}
                        ></Product>)
                }
            </div>
        </div>
    );
};

export default Category;
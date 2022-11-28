import React, { useState } from 'react';
import BookingModal from './BookingModal/BookingModal';
import Product from './Product';

const Category = () => {
    const products = JSON.parse(localStorage.getItem('product'));
    const [product, setProduct] = useState(null);
    return (
        <div>
            <h1 className='text-center text-3xl fo p-4'>Category length : {products.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        setProduct={setProduct}
                    ></Product>)
                }
            </div>
           { 
            product &&
            <BookingModal
                product={product}
            ></BookingModal>
        }
        </div>
    );
};

export default Category;
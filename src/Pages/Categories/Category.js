import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import Product from './Product';

const Category = () => {
    const [products, setProducts] = useState([]);
    const [eachProduct, setEachProduct] = useState(null);
    const n = useParams();

    useEffect(() => {
        fetch(`https://b612-used-products-resale-server-side-mirazulislam1.vercel.app/categories/${n.id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }, [])
    return (
        <div>
            <h1 className='text-center text-3xl fo p-4'>Category length : {products?.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    products?.map(product => <Product
                        key={product._id}
                        product={product}
                        setEachProduct={setEachProduct}
                    ></Product>)
                }
            </div>
            {
                eachProduct &&
                <BookingModal
                    eachProduct={eachProduct}
                    setEachProduct={setEachProduct}
                ></BookingModal>
            }
        </div>
    );
};

export default Category;
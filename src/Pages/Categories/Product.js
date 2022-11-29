import React from 'react';

const Product = ({ product, setEachProduct }) => {
    const { img, name, location, OriginalPrice, ResellPrice, UseOfYears, PostedTime, SellerName } = product;
   
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Location: {location}</p>
                <p>Original Price : {OriginalPrice}</p>
                <p>Resale Price : {ResellPrice}</p>
                <p>Use of Years : {UseOfYears}</p>
                <p>Posted Time : {PostedTime}</p>
                <p>Seller Name : {SellerName}</p>
                <div className="card-actions justify-end">
                    <label
                        onClick={() => setEachProduct(product)}
                        htmlFor="booking-modal"
                        className="btn btn-accent text-white"
                    >Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default Product;
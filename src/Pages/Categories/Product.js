import React from 'react';

const Product = ({ product }) => {
    const { img, name, location, OriginalPrice, ResellPrice, UseOfYears, PostedTime, SellersName } = product;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Location: {location}</p>
                <p>Original Price : {OriginalPrice} tk</p>
                <p>Resale Price : {ResellPrice} tk</p>
                <p>Use of Years : {UseOfYears}</p>
                <p>Posted Time : {PostedTime}</p>
                <p>Seller's Name : {SellersName}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
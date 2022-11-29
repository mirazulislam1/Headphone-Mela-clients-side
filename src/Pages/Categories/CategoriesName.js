import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesName = ({ category }) => {
    const { name, image} = category;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-4">
            <figure><img src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-semibold">{name}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-accent text-white"><Link to={`/categories/${category.Category_id}`}>See All products</Link></button>
                </div>
            </div>
        </div>
    );
};

export default CategoriesName;
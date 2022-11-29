import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import {useQuery} from '@tanstack/react-query';
import Loading from '../../../Shared/Loading/Loading'



const MyProducts = () => {
    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const {data : bookings = [], isLoading} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () =>{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data); 
            return data;
        }
    })
    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='mt-4'>
            <h1 className='text-3xl font-semibold'>My Products</h1>
            <div className="overflow-x-auto">
                <table className="table  w-full">
                   
                    <thead>
                        <tr>
                            <th></th>
                            <th>Buyer Name</th>
                            <th>Product Name</th>
                            <th>Resale Price</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, i) =>  <tr key={booking._id}>
                                <th>{i+1}</th>
                                <td>{booking.name}</td>
                                <td>{booking.productsName}</td>
                                <td>{booking.ResalePrice}</td>
                                <td>{booking.location}</td>
                            </tr>)
                        }        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;
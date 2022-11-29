import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://b612-used-products-resale-server-side-mirazulislam1.vercel.app/users');
            const data = await res.json();
            console.log(data)
            return data;
        }
    })
    return (
        <div className='mt-4'>
            <h1 className='text-3xl font-semibold'>My Users</h1>
            <div className="overflow-x-auto">
                <table className="table  w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        users &&
                        users?.map((user, i)=>
                        <tr key={user._id}>
                        <th>{i+1}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>
                            <button className='btn'>Make Admin</button>
                        </td>
                        <td>
                            <button className='btn'>Delete</button>
                        </td>
                       </tr> 
                       )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState('');

    return (
        <div className='h-[500px] flex justify-center items-center '>
            <div className='w-96 p-7 '>
                <h1 className='text-2xl text-center mb-5'>Login</h1>
                <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type='text' {...register("email")} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password' {...register("password")} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <label className="label">
                        <span className="label-text">Forget Password</span>
                    </label>
                    <input className='btn w-full' value='Login' type="submit" />
                </form>
                <p className='text-sm text-center font-semibold mt-2'>New to Resell Headphone ? <Link className='text-success' to='/signup'>Create new account</Link></p>
                <div className="flex flex-col w-full border-opacity-50">  
                    <div className="divider">OR</div>
                </div>
                <button className='btn btn-outline w-full'>Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;
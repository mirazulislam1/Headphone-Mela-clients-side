import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signUpError, setSignUpError] = useState('');

    const handleSignUp = (data) => {
            console.log(data);
            setSignUpError('');
            createUser(data.email, data.password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                })
                .catch(error => {
                    console.error(error);
                    setSignUpError(error.message)
                })

    }
    return (
        <div className='h-[600px] flex justify-center items-center '>
            <div className='w-96 p-7 '>
                <h1 className='text-2xl text-center mb-5'>Sign Up</h1>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", {
                            required: 'Name is required'
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-green-700'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", {
                            required: "Email Address is required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-green-700'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: 'Password is required',
                            minLength: { value: 6, message: 'Password must be 6 characters' },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'password must be Strong' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-green-700'>{errors.password?.message}</p>}
                    </div>
                    <label className="label">
                        <span className="label-text">Forget Password</span>
                    </label>
                    <input className='btn w-full' value='SignUp' type="submit" />
                    <div>
                        {signUpError && <p className='text-green-700'>{signUpError}</p>}
                    </div>
                </form>
                <p className='text-sm text-center font-semibold mt-2'>All ready have an account ? <Link className='text-success' to='/login'>Please Login</Link></p>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">OR</div>
                </div>
                <button className='btn btn-outline w-full'>Continue with Google</button>
            </div>
        </div>
    );
};

export default SignUp;
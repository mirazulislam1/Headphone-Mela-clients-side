import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    


    const handleLogin = data => {
        console.log(data);
        setLoginError('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email)

            })
            .catch(error => {
                console.error(error)
                setLoginError(error.message)
            })
    }

    return (
        <div className='h-[500px] flex justify-center items-center '>
            <div className='w-96 p-7 '>
                <h1 className='text-2xl text-center mb-5'>Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type='email'
                            {...register("email",
                                { required: 'Email Address is required' })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-green-700'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password'
                            {...register("password",
                                {
                                    required: 'Password is required',
                                    minLength: { value: 6, message: 'Password must be 6 characters' }
                                })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                    </div>
                    <label className="label">
                        <span className="label-text">Forget Password</span>
                    </label>
                    <input className='btn w-full' value='Login' type="submit" />
                    <div>
                        {loginError && <p>{loginError}</p>}
                    </div>
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
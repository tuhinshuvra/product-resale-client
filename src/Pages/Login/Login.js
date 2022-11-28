import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvide';
import useToken from '../../hooks/useToken';
import './Login.css';

const Login = () => {
    const { login, googleProviderLogin } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const form = location.state?.from?.pathname || '/';

    if (token) {
        navigate(form, { replace: true })
    }

    const handleLogin = (data) => {
        setLoginError('');
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast.success('User Login Successfully.')
                console.log(user);
                setLoginUserEmail(data.email);
                navigate('/');

            })
            .catch(error => {
                setLoginError(error.message);
                toast.error(error.message);
                console.log(error);
            })
        console.log(data);
    }

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');

            })
            .then(error => console.log(error))
    }

    return (
        <div className=' flex justify-center items-center '>
            <div className=' w-96 p-4'>
                <h2 className=' text-xl font-bold  text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    {loginError && <p className=' font-bold text-red-600'>{loginError}</p>}

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Email</span> </label>
                        <input type="email"
                            name='email'
                            {...register("email", { required: "Email address is required" })}
                            placeholder="Email"
                            className="input input-bordered w-full"
                        />
                        {errors.email && <p className=' text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Password</span> </label>
                        <input
                            type="password"
                            name='password'
                            {...register("password",
                                {
                                    required: "Password is required",
                                    minLength: { value: 6, message: 'Password must be minimum 6 characters' }
                                })}
                            placeholder="Password"
                            className="input input-bordered w-full"
                        />
                        {errors.password && <p className=' text-red-600' role="alert">{errors.password?.message}</p>}
                    </div>
                    <label className="label"><span className="label-text">Forgot Password ?</span> </label>



                    <input className=' mt-3 btn btn-accent form-control w-full' type="submit" value='Login' />
                    <p className=' my-3 text-center'> <b> New to Easy Market?</b> <Link to='/signup'> <span className=' text-blue-900 font-bold'>Create new account</span></Link> </p>
                    <div className="divider">OR</div>

                </form>
                <button onClick={handleGoogleLogin} className=' btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;
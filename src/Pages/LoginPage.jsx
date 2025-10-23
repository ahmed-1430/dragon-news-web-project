import React, { use, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const LoginPage = () => {
    const {loginUser} = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation(); // Added 'const' here
    const [error, setError] = useState("")
    
    console.log(location);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setError("")
        
        console.log({email, password});
        
        loginUser(email, password)
        .then(() => {
            alert("Login Successfully");
            // Fixed navigation - use from state or default to home
            const from = location.state?.from?.pathname || '/';
            navigate(from, { replace: true });
        })
        .catch((error) => {
            const  errorCode= error.code 
            // const errorMessage = error.message
            setError(errorCode)
            ;
        });
    };

    return (
        <div className="hero bg-base-200 h-[90vh]">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>                    
                </div>
                <div className="card bg-base-100 shadow-2xl">
                    <div className="card-body lg:w-[500px]">
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <label className="label">Email Address</label>
                                <input type="email" name='email' className="input w-full" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input w-full" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                {
                                    error && <p className='text-red-500'>{error}</p>
                                }
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                        <p>Don't Have an Account?  <Link className={'text-secondary'} to="/auth/register">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
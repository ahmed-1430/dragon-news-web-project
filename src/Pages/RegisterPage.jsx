import React from 'react';
import { Link, NavLink } from 'react-router';
import { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const RegisterPage = () => {
    const { createUser, setUser } = use(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault()
        console.log("Clicked")
        const form = e.target;
        const name = form.userName.value;
        const photo = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ name, photo, email, password });
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setUser(user)
            })

    }
    return (
        <div className="hero bg-base-200 h-[90vh]">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 shadow-2xl">
                    <div className="card-body lg:w-[500px]">
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                <label className="label font-semibold">Your Name</label>
                                <input type="text" className="input w-full" name='userName' placeholder="Enter Your Name" />
                                <label className="label font-semibold">Photo URL</label>
                                <input type="text" className="input w-full" name='photoUrl' placeholder="Enter Your Photo URL" />
                                <label className="label font-semibold">Email Address</label>
                                <input type="email" className="input w-full" name='email' placeholder="Email" />
                                <label className="label font-semibold">Password</label>
                                <input type="password" className="input w-full" name='password' placeholder="Password" />
                                <label className="label">
                                    <input type="checkbox" className="checkbox" />
                                    Accept <span className='font-semibold'>Terms & Condition</span>
                                </label>
                                <button type="submit" className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </form>
                        <p>Already Have an Account?  <Link className={'text-secondary'} to="/auth/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
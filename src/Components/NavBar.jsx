import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from "../assets/user.png"
import { AuthContext } from '../Provider/AuthProvider';

const NavBar = () => {
    const {user, signOutUser} = use(AuthContext);
    const handleLogout = ()=>{
        console.log("User Trying to Logout")
        signOutUser()
        .then(()=>{
            alert("Logout Successfully")
        })
        .catch(()=>{
            alert("Error to Logged You Out")
        })
    }
    return (
        <div className='flex justify-between items-center py-5'>
            <div>{user&& user.email}</div>
            <div className='nav flex gap-5 text-accent'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='login-btn flex gap-1'>
                <img src={userIcon} alt="UserIcon" />
                {
                    user
                    ?<button onClick={handleLogout} className='btn btn-primary px-10'>Logout</button>
                    :<Link to="/auth/login" className='btn btn-primary px-10'>Login</Link>
                }
            </div>
        </div>
    );
};

export default NavBar;
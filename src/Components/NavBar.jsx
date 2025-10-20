import React from 'react';
import { NavLink } from 'react-router';
import userIcon from "../assets/user.png"

const NavBar = () => {
    return (
        <div className='flex justify-between items-center my-5'>
            <div></div>
            <div className='nav flex gap-4 text-accent'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='login-btn flex gap-1'>
                <img src={userIcon} alt="UserIcon" />
                <button className='btn btn-primary px-10'>Login</button>
            </div>
        </div>
    );
};

export default NavBar;
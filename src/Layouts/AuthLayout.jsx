import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-[#f3f3f3]'>
            <header className='w-11/12'>
                <NavBar></NavBar>
                <Outlet></Outlet>                
            </header>
        </div>
    );
};

export default AuthLayout;
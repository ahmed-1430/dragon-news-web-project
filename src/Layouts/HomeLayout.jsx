import React from 'react';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import NavBar from '../Components/NavBar';
import LeftAside from '../Components/HomeLayout/LeftAside';
import { Outlet } from 'react-router';
import RightAside from '../Components/HomeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <header>
                <Header></Header>
                <section >
                    <LatestNews></LatestNews>
                </section>
                <nav>
                    <NavBar></NavBar>
                </nav>
            </header>
            <main className='grid lg:grid-cols-12 gap-5'>
                <aside className='lg:col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='lg:col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='lg:col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;
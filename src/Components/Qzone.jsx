import React from 'react';
import swimming from '../assets/swimming.png'
import classImg from '../assets/class.png'
import playGround from '../assets/playground.png'

const Qzone = () => {
    return (
        <div className='bg-base-200 px-3 py-5'>
            <h2 className='font-semibold pb-3'>Q-Zone</h2>
            <div className='flex flex-col gap-3'>
                <img src={swimming} alt="" />
                <img src={classImg} alt="" />
                <img src={playGround} alt="" />
            </div>
        </div>
    );
};

export default Qzone;
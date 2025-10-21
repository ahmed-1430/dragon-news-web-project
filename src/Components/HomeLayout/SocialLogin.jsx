import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import Qzone from '../Qzone';
import { FaGithub } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-semibold pb-3'>Login With</h2>
            <div className='space-y-3 mb-10'>
                <button className='btn bg-base-100 btn-outline w-full'><FcGoogle size={22} /> Login With Google</button>
                <button className='btn bg-base-100 btn-outline w-full'> <FaGithub size={22} />Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;
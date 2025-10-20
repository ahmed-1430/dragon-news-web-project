import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-semibold'>Login With</h2>
            <div className='space-y-2'>
                <button className='btn bg-base-100 btn-outline w-full'><FcGoogle size={22}/> Login With Google</button>
                <button className='btn bg-base-100 btn-outline w-full'> <FaGithub size={22} />Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;
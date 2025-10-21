import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa';


const FindUs = () => {
    return (
        <div className='mb-8'>
                <h2 className='font-semibold pb-3'>Find Us On</h2>
                <div>
                    <div className="join join-vertical w-full">
                        <button className="btn join-item justify-start bg-base-100 hover:bg-base-200"><FaFacebook size={22} />Facebook</button>
                        <button className="btn join-item justify-start bg-base-100 hover:bg-base-200"><BsTwitterX size={22} /> Twitter</button>
                        <button className="btn join-item justify-start bg-base-100 hover:bg-base-200"><FaInstagramSquare size={22} /> Instagram</button>
                    </div>
                </div>
            </div>
    );
};

export default FindUs;
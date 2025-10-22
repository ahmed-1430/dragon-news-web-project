import React, { Suspense } from 'react';
import Category from '../Category';

const LeftAside = () => {
    return (
        <div className='sticky top-0'>
            <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
            <Category></Category>
            </Suspense>
        </div>
    );
};

export default LeftAside;
import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router';

const NewsDetailsCard = (news) => {
    
    return (
        <div>
            <h2 className='font-semibold pb-3'>Dragon News</h2>
            <div className='space-y-4'>
                <img className='w-full h-[350px]' src={news.news.image_url} alt="" />
                <h2 className='text-2xl lg:text-3xl font-bold'>{news.news.title}</h2>
                <p>{news.news.details}</p>
                <Link to={`/category/${news.news.category_id}`} className='btn btn-secondary'><FaArrowLeftLong /> All news in this category</Link>                
            </div>
        </div>
    );
};

export default NewsDetailsCard;
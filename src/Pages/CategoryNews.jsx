import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const [categoryNews, setCategoryNews]= useState([])

    // console.log(data)
    useEffect(()=> {
        if(id == "0"){
            setCategoryNews(data)
            // console.log(data)
            return;
        }else if(id == "1"){
            const filteredNews = data.filter(news => news.others.is_today_pick == true)
            setCategoryNews(filteredNews)
            // console.log(filteredNews)
            return;
        }else{
            const filteredNews = data.filter(news => news.category_id == id)
            // console.log(filteredNews)
            setCategoryNews(filteredNews)
        }
    },[data, id])
    return (
        <div>
            <h2 className='pb-3 font-semibold'>Total News Found <span className='text-secondary font-semibold'>{categoryNews.length}</span></h2>
            <div className='grid grid-cols-1 gap-4'>
                {
                    categoryNews.map(news=> <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;
import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/HomeLayout/RightAside';
import NewsDetailsCard from '../Components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const { id } = useParams()
    const [news, setNews] = useState({})
    useEffect(() => {
        const newsDetails = data.find(singleNews => singleNews.id == id)
        setNews(newsDetails)
    }, [data, id])


    return (
        <div className='w-11/12 mx-auto'>
            <header>
                <Header></Header>
            </header>
            <main>
                <div className='grid grid-cols-12 gap-5'>
                    <div className='col-span-9'>
                        <NewsDetailsCard news={news} ></NewsDetailsCard>
                    </div>
                    <div className='col-span-3'>
                        <aside>
                            <RightAside></RightAside>
                        </aside>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default NewsDetails;
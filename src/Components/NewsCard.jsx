import React from 'react';

const NewsCard = ({categoryNews}) => {
    return (
        <div>
            <h1>{`Total News Found${categoryNews.length}`}</h1>
            <div>
                {
                    categoryNews.map(news=> )
                }
            </div>
        </div>
    );
};

export default NewsCard;
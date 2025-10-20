import React, { use } from 'react';
import { NavLink } from 'react-router';


const categoryPromise = fetch('/categories.json').then((res)=> res.json())
const Category = () => {
    const categories = use(categoryPromise)
    return (
        <div>
            <h2 className='font-semibold pb-3'>All Categories {`(${categories.length})`}</h2>
            <div className='grid grid-cols-1 gap-2'>
                {
                    categories.map(category => <NavLink className={"btn bg-base-100 hover:bg-base-200"} to={`/category/${category.id}`} key={category.id}>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Category;
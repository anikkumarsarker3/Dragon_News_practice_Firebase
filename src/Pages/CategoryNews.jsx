import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Component/NewsCard';

const CategoryNews = () => {
    const { id } = useParams();
    const categoriNews = useLoaderData();
    const [catNews, setCatNews] = useState([]);
    useEffect(() => {
        if (id == '0') {
            setCatNews(categoriNews);
            return;

        }
        else if (id == '1') {
            const filteredNews = categoriNews.filter(news => news.others.is_today_pick === true)
            setCatNews(filteredNews)
            return;
        }
        else {

            const filteredNews = categoriNews.filter(news => news.category_id == id)

            setCatNews(filteredNews);
        }
    }, [categoriNews, id])
    return (
        <div>
            <p className='font-bold mb-3'>Total News:({catNews.length})</p>
            <div className='grid grid-cols-1 gap-7'>
                {

                    catNews.map((news) => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;
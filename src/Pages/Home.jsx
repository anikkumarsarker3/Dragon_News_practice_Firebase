import React, { useEffect, useState } from 'react';
import { useCustom } from '../hooks/useCustom';
import NewsCard from '../Component/NewsCard';
import Loader from '../Component/Loader';

const Home = () => {
    const catNews = useCustom();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000)
        return () => clearTimeout(timer);
    }, [])
    return (
        <div>
            <p className='font-bold mb-3'>Total News:({catNews.length})</p>
            {
                loading ? <div className='text-center'><Loader></Loader></div> : !catNews.length ? <div className='text-center'><span className="loading loading-spinner text-error"></span></div> : <div className='grid grid-cols-1 gap-7'>
                    {

                        catNews.map((news) => <NewsCard key={news.id} news={news}></NewsCard>)
                    }
                </div>

                //     !catNews.length ? (loading ? <div className='text-center'><span className="loading loading-spinner text-error"></span></div> : '') : <div className='grid grid-cols-1 gap-7'>
                //     {

                //         catNews.map((news) => <NewsCard key={news.id} news={news}></NewsCard>)
                //     }
                // </div>
            }

        </div>
    );
};

export default Home;
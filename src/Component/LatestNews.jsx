import React from 'react';
import Marquee from 'react-fast-marquee';
import { useCustom } from '../hooks/useCustom';

const LatestNews = () => {
    const data = useCustom()
    // console.log(data);
    const latestNews = data.filter(top => top.others.is_today_pick === true)
    const News = latestNews.map(top => top.title);
    console.log(News)


    // is_today_pick
    return (
        <div className='flex justify-center items-center py-2 px-4 bg-base-200 gap-3 rounded-sm overflow-hidden'>
            <p className='text-base-100 bg-secondary p-2 rounded-sm'>Latest</p>
            <div className="w-11/12 max-w-screen mx-auto">
                <Marquee pauseOnHover={true} speed={70} className="overflow-hidden">

                    {/* {
                        latestNews.map((news, index) => (<p key={index} className="font-semibold text-red-400 mx-5">{news.title}</p>))
                    } */}
                    {
                        <p className='text-red-600'>{News.join(',\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0')}</p>
                    }
                </Marquee>
            </div>
        </div>
    );
};

export default LatestNews;
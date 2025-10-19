import { format } from 'date-fns';
import React, { useState } from 'react';
import { BiLike } from 'react-icons/bi';
import { FaEye } from 'react-icons/fa';
import { TiMessages } from 'react-icons/ti';
import { useNavigate } from 'react-router';

const NewsCard = ({ news }) => {
    const [likebtn, setLikebtn] = useState(false);
    const { id, title, rating, total_view, author, image_url, details } = news

    const navigate = useNavigate();
    const handleReadMore = (id) => {
        navigate(`/card-details/${id}`)
    }
    return (
        <div className="flex mx-auto flex-col max-w-lg  space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800 border border-gray-200">
            <div className="flex justify-between items-center bg-base-200 py-1">
                <div className='flex space-x-4'>
                    <img alt="" src={author.img} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{author.name}</a>
                        <span className="text-xs dark:text-gray-600">
                            {format(new Date(author.published_date), "EEEE, MMMM dd, yyyy")}
                        </span>
                    </div>
                </div>
                <div className="space-x-2">
                    <button aria-label="Bookmark this post" type="button" className="p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-600">
                            <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                        </svg>
                    </button>
                    <button aria-label="Share this post" type="button" className="p-2 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-600">
                            <path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div>
                <h2 className="mb-1 text-xl font-semibold px-4">{title}</h2>
                <img src={image_url} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                <div className='px-2 '>

                    <p className="text-sm text-accent h-[65px] overflow-hidden">{details}</p>
                    <button onClick={() => handleReadMore(id)}>
                        <h4 className='text-yellow-600 cursor-pointer'>Read More..</h4>
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap justify-between">
                <div>
                    {
                        Array.from({ length: rating.number }).map((_, i) => (
                            <span key={i}>⭐</span>
                        ))
                    }

                    <span>{rating.number}</span>
                </div>
                <div className="flex space-x-2 text-sm dark:text-gray-600">
                    <button type="button" className="flex items-center p-1 space-x-1.5">
                        <FaEye></FaEye>
                        <span>{total_view}</span>
                    </button>
                    <button type="button" className="flex items-center p-1 space-x-1.5">
                        <TiMessages></TiMessages>
                        <span>30</span>
                    </button>
                    <button type="button" className="flex items-center p-1 space-x-1.5">
                        <BiLike onClick={() => setLikebtn(!likebtn)} className={`${likebtn ? 'text-blue-800' : ''}`}></BiLike>
                        <span>283</span>
                    </button>
                </div>
            </div>
        </div >
    );
};

export default NewsCard;
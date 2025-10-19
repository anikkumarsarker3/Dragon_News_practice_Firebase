import React, { useEffect, useState } from 'react';
import { useCustom } from '../hooks/useCustom';
import { useNavigate, useParams } from 'react-router';
import Header from '../Component/Header';
import RightSide from '../Component/homeComponent/RightSide';
import { FaArrowLeft } from 'react-icons/fa';

const DetailsLayout = () => {
    const navigate = useNavigate();
    const data = useCustom();
    const { id } = useParams();
    const [findData, setFindData] = useState({})

    useEffect(() => {
        const findData = data.find(news => news.id === id)

        setFindData(findData);

    }, [data, findData, id])
    // const { image_url, details } = findData;

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-5'>

                <div className="col-span-9">
                    <h2 className='font-bold mb-2.5'>Dragon News</h2>

                    {
                        findData ? <div>
                            <img className='object-cover w-full overflow-hidden' src={findData?.image_url} alt="" />
                            <h2 className='font-semibold my-2.5'>{findData?.title}</h2>
                            <p>{findData?.details}</p>
                            <button onClick={() => navigate(-1)} className='btn btn-secondary my-3'><FaArrowLeft /> All news in this category</button>

                        </div> : <p>Loading...</p>
                    }

                </div>
                <aside className='col-span-3'>
                    <RightSide></RightSide>
                </aside>
            </main>


        </div>
    );
};

export default DetailsLayout;
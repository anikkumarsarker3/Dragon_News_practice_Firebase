import React from 'react';
import { NavLink } from 'react-router';
import { useCategory } from '../hooks/useCustom';

const Catagories = () => {
    const categories = useCategory();


    return (
        <div>
            <p className='font-bold'>All Categories({categories.length})</p>
            <div className='text-center text-accent font-semibold'>

                {
                    categories.map(category => <div key={category.id} className='w-full my-2'>
                        <NavLink
                            to={`categories/${category.id}`}
                            key={category.id}
                            className={({ isActive }) => `my-4 ${isActive ? 'bg-base-300 p-2 font-bold block rounded-sm' : ''}`
                            }>{category.name}</NavLink>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Catagories;
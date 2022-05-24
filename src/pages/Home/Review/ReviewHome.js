import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReviewHome = ({ review }) => {
    const { name,comment,rating } = review;
    return (
        <div className='rounded-2xl w-[350px] bg-gray-100 shadow-lg p-4 mt-5'>
            <div className='gap-4 flex flex-col justify-between items-center'>
                <div className='flex-shrink-0'>
                </div>
                <div className=' flex flex-col justify-end'>
                    <h3 className='text-slate-800 text-2xl font-medium'>{name}</h3>
                    <span className='text-gray-600 text-xs text-left'>{comment}</span>
                    <span className='text-gray-700 mt-3 text-l'>rating :  {rating} <Rating
                        initialRating={rating}
                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                        readonly
                    ></Rating></span>
                </div>
            </div>
        </div>
    );
};

export default ReviewHome;
import React from 'react';
import { useReview } from '../../../hooks/useReview';
import ReviewHome from './ReviewHome';

const Review = () => {
    const [reviews, setReviews] = useReview([]);
    return (
        <div>
            <h2 style={{ fontFamily: "poppins" }} className='text-3xl leading-8 font-extrabold tracking-tight mb-5 text-gray-800 dark:text-white sm:text-4xl mt-5 pt-5'>Client Reviews</h2>
            <div className='grid grid-cols-1  md:grid-cols-3 gap-4 justify-items-center'>
                {
                    reviews.map((review) => (
                        <ReviewHome key={review.id} review={review}>
                        </ReviewHome>)
                    )
                }
            </div>
        </div>
    );
};

export default Review;
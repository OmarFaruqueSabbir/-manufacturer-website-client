import React from 'react';
import Banner from './Banner';
import Review from './Review/Review';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner />
            <Tools />
            <Review />
        </div>
    );
};

export default Home;
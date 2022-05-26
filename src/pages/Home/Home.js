import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import ChooseUs from './ChooseUs/ChooseUs';
import GetApp from './GetApp/GetApp';

import Review from './Review/Review';
import Tools from './Tools/Tools';


const Home = () => {
    return (
        <div>
            <Banner />
            <Tools />
            <Review />
            <BusinessSummary />
            <ChooseUs />
            <GetApp />
        </div>
    );
};

export default Home;
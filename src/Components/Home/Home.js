import React from 'react';

import '../../Style/zq-home.css';
import HomeFistHeading from './Home-FH';
import HomeSecondHeading from './Home-SH';

const Home = (props) => {
    return (
        <div className='zq-home-container'>
           <HomeFistHeading />
           <HomeSecondHeading />
        </div>
    )
}

export default Home;
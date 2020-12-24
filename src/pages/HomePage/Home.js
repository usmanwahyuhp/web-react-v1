import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjFour, homeObjOne, homeObjThree } from './Data'

const Home = () => {
    return (
        <div>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
            <Pricing />
        </div>
    )
}

export default Home

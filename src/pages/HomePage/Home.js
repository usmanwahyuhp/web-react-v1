import React from 'react';
import { InfoSection } from '../../components';
import { homeObjFour, homeObjOne, homeObjThree } from './Data'

const Home = () => {
    return (
        <div>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
        </div>
    )
}

export default Home

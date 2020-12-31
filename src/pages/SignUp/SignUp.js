import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjFour, homeObjThree } from './Data'

const SignUp = () => {
    return (
        <div>
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
            <Pricing />
        </div>
    )
}

export default SignUp

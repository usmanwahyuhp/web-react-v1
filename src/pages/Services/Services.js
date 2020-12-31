import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjFour } from './Data'

const Services = () => {
    return (
        <div>
            <InfoSection {...homeObjFour} />
            <Pricing />
        </div>
    )
}

export default Services

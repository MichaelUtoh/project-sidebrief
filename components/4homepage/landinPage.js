import React from 'react'
import PartnersComponent from './partnersComponent';
import InfoComponent from './infoProcess';
import CardsComponent from './sidebriefCards';
import SupportComponent from './supportBox';
import ArrowComponent from './arrowDown';
import HeroComponent from './heroComponent';
import StepGuide from './stepGuide';


const WelcomeBox = () => {
    return (
        <>
            <HeroComponent />
            {/* <StepGuide /> */}
            <PartnersComponent />
            <InfoComponent />
            <CardsComponent />
            <SupportComponent />
        </>
    )
}

export default WelcomeBox

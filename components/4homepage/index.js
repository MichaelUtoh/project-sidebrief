import React from 'react'
import TopNavigation from "../2navSection/TopNavigation";
import { Flex } from '@chakra-ui/layout';
import WelcomeBox from './landinPage';
import FooterComponent from '../3footerSection/Footer';


const HomepageComponent = () => {
    return (
        <Flex flexDirection="column" justifyContent="space-between">
            <TopNavigation />
            <WelcomeBox />
            <FooterComponent />
        </Flex>
    )
}

export default HomepageComponent

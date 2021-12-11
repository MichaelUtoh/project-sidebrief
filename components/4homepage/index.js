import React from 'react'
import TopNavigation from "../2navSection/TopNavigation";
import { Flex } from '@chakra-ui/layout';
import WelcomeBox from './hero';


const HomepageComponent = () => {
    return (
        <Flex flexDirection="column">
            <TopNavigation />
            <WelcomeBox />
        </Flex>
    )
}

export default HomepageComponent

import React from 'react'
import { Flex, Text } from '@chakra-ui/layout'
import Header from '../components/1headSection/Header'
import TopNavigation from '../components/2navSection/TopNavigation'
import FooterComponent from '../components/3footerSection/Footer'


const About = () => {
    return (
        <>
            <Header title="About" />
            <TopNavigation />
            <Flex alignItems="center" justifyContent="center" minH="100vh">
                <Text fontSize={30} fontWeight={700}>Something Hooge Is Coming Soon</Text>
            </Flex>
            <FooterComponent />
        </>
    )
}

export default About

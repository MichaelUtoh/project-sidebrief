import React from 'react'
import { Flex, Text } from '@chakra-ui/layout'
import Header from '../components/1headSection/Header'


const About = () => {
    return (
        <>
            <Header title="About" />
            <Flex alignItems="center" justifyContent="center" minH="100vh">
                <Text fontSize={30} fontWeight={700}>Something Hooge Is Coming Soon</Text>
            </Flex>
        </>
    )
}

export default About

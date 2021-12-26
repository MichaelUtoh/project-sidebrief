import React from 'react'
import { Flex, Divider } from '@chakra-ui/layout'
import { Image, Text } from '@chakra-ui/react'
import { SliderComponent } from '../5utils/slidesUtil'

const PartnersComponent = () => {
    return (
        <>
            <Flex bg="#f8f8f8" alignItems={{ base:"center" }} flexDirection="column" px={{ base:"15px", md:"30px", lg:90}} py={2}>
                <Text color="#5a5a5a" fontFamily="cutive" fontSize={{ base:16, md:18, lg:20 }} fontWeight={700} mt={{ base:10 }} textAlign="center">Trusted by hundreds of entrepreneurs like you.</Text>
                <Text color="#66a6ff" fontFamily="poppins" fontSize={{ base:12, md:14, lg:16 }} fontWeight={200} textAlign="center">Join companies from Africa, US, UK and Asia using Sidebrief.</Text>
                <SliderComponent />
            </Flex>
        </>
    )
}

export default PartnersComponent

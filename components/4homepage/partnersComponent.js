import React from 'react'
import { Flex, Divider } from '@chakra-ui/layout'
import { Image, Text } from '@chakra-ui/react'

const PartnersComponent = () => {
    return (
        <>
            <Flex bg="none" alignItems={{ base:"center" }} flexDirection="column" px={{ base:"15px", md:"30px", lg:90}} py={2}>
                <Text fontSize={{ base:16, md:18, lg:20 }} fontWeight={700} mt={{ base:10 }} textAlign="center">Trusted by hundreds of entrepreneurs like you.</Text>
                <Text fontFamily="comfortaa" color="gray" fontSize={{ base:12, md:14, lg:16 }} fontWeight={500} textAlign="center">Join companies from Africa, US, UK and Asia using Sidebrief.</Text>

                {/* Logo Box */}
                <Flex flexWrap="wrap" justifyContent="space-between" overflowX="hidden">
                    <Image src="/partnerLogos/01.png" h={{ base:"60px", md:"100px"}} w={{ base:"60px", md:"100px"}} />
                    <Image src="/partnerLogos/02.png" h={{ base:"60px", md:"100px"}} w={{ base:"60px", md:"100px"}} />
                    <Image src="/partnerLogos/03.png" h={{ base:"60px", md:"100px"}} w={{ base:"60px", md:"100px"}} />
                    <Image src="/partnerLogos/04.png" h={{ base:"60px", md:"100px"}} w={{ base:"60px", md:"100px"}} />
                    <Image src="/partnerLogos/05.png" h={{ base:"60px", md:"100px"}} w={{ base:"60px", md:"100px"}} />
                    <Image src="/partnerLogos/06.png" h={{ base:"60px", md:"100px"}} w={{ base:"60px", md:"100px"}} />
                    <Image src="/partnerLogos/07.png" h={{ base:"60px", md:"100px"}} w={{ base:"60px", md:"100px"}} />
                    <Image src="/partnerLogos/08.png" h={{ base:"60px", md:"100px"}} w={{ base:"60px", md:"100px"}} />
                </Flex>
            <Divider />
            </Flex>
        </>
    )
}

export default PartnersComponent

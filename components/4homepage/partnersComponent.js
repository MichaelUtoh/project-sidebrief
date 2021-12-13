import React from 'react'
import { Flex } from '@chakra-ui/layout'
import { Image, Text } from '@chakra-ui/react'

const PartnersComponent = () => {
    return (
        <>
            <Flex bg="gray.50" alignItems={{ base:"center", md:"flex-start" }} flexDirection="column" px={{ base:"15px", md:"30px", lg:90}} py={2}>
                <Text fontSize={22} fontWeight={700} mt={{ base:10 }}>Trusted by hundreds of entrepreneurs like you.</Text>
                <Text color="gray" fontSize={16} fontWeight={500}>Join companies from Africa, US, UK and Asia using Sidebrief.</Text>

                {/* Logo Box */}
                <Flex flexWrap="wrap" justifyContent="space-between" overflowX="hidden">
                    <Image src="/partnerLogos/01.png" h={{ base:"75px", md:"130px"}} w={{ base:"75px", md:"130px"}} />
                    <Image src="/partnerLogos/02.png" h={{ base:"75px", md:"130px"}} w={{ base:"75px", md:"130px"}} />
                    <Image src="/partnerLogos/03.png" h={{ base:"75px", md:"130px"}} w={{ base:"75px", md:"130px"}} />
                    <Image src="/partnerLogos/04.png" h={{ base:"75px", md:"130px"}} w={{ base:"75px", md:"130px"}} />
                    <Image src="/partnerLogos/05.png" h={{ base:"75px", md:"130px"}} w={{ base:"75px", md:"130px"}} />
                    <Image src="/partnerLogos/06.png" h={{ base:"75px", md:"130px"}} w={{ base:"75px", md:"130px"}} />
                    <Image src="/partnerLogos/07.png" h={{ base:"75px", md:"130px"}} w={{ base:"75px", md:"130px"}} />
                    <Image src="/partnerLogos/08.png" h={{ base:"75px", md:"130px"}} w={{ base:"75px", md:"130px"}} />
                </Flex>
            </Flex>
        </>
    )
}

export default PartnersComponent

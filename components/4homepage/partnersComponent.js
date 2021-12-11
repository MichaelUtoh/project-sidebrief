import React from 'react'
import { Flex } from '@chakra-ui/layout'
import { Image, Text } from '@chakra-ui/react'

const PartnersComponent = () => {
    return (
        <>
            <Flex bg="gray.50" flexDirection="column" px={{ base:"15px", md:"30px", lg:90}} py={2} w="100%">
                <Text textAlign="left" fontSize={22} fontWeight={700}>Trusted by hundreds of entrepreneurs like you.</Text>
                <Text color="gray" fontSize={16} fontWeight={500}>Join companies from Africa, US, UK and Asia using Sidebrief.</Text>

                {/* Logo Box */}
                <Flex justifyContent="space-between" className="slideBox">
                    <Image src="/partnerLogos/01.png" h="130px" w="130px" />
                    <Image src="/partnerLogos/02.png" h="130px" w="130px" />
                    <Image src="/partnerLogos/03.png" h="130px" w="130px" />
                    <Image src="/partnerLogos/04.png" h="130px" w="130px" />
                    <Image src="/partnerLogos/05.png" h="130px" w="130px" />
                    <Image src="/partnerLogos/06.png" h="130px" w="130px" />
                    <Image src="/partnerLogos/07.png" h="130px" w="130px" />
                    <Image src="/partnerLogos/08.png" h="130px" w="130px" />
                </Flex>
            </Flex>
        </>
    )
}

export default PartnersComponent

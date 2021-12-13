import React from 'react'
import { Flex, Text } from '@chakra-ui/layout'
import { Button, Image } from '@chakra-ui/react'

const HeroComponent = () => {
    return (
        <>
            <Flex flexDirection={{ base:"column-reverse", md:"row" }} h={600} alignItems={{ base:"center", }} px={{ base:"15px", md:"30px", lg:90}}>

            {/* Welcome text */}
            <Flex alignItems={{ base:"center", md:"flex-start", lg:"flex-start" }} flexDirection="column" justifyContent="center" w={{base:"100%", md:"100%", lg:"60%"}}>

                <Text color="gray.800" fontSize={{ base: '22px', md: '35px', lg: '42px' }} fontWeight={700} lineHeight={{ base:1.3, md:1.2 }} m={2} textAlign={{ base:"center", md:"left" }} w="90%">
                    Form and manage your company from anywhere.
                </Text>

                <Text color="gray" fontSize={{ base:12, md:14 }} fontWeight={700} m={2} textAlign={{ base:"center", md:"left" }} w={{ base:"80%", lg:"80%" }}>
                    Sidebrief makes starting a new business seamless by removing lengthy paperwork, 
                    legal jargons, and hidden fees. Form companies across markets, with free business 
                    bank account, tax registration, business compliance, and more.
                </Text>

                <Flex flexWrap="wrap" mt={2} w={{ base:"90%", lg:"90%"}}>
                    <Button borderRadius={0} color="white" colorScheme="cyan" m={2} w={{ base:"100%", lg:"70%" }}>Get Started</Button>
                </Flex>
            </Flex>

            {/* Animation */}
            <Flex alignItems="center" justifyContent="center" mt={{ base:10 }} w={{ base:"60%" }}>
                <Image src="/77389.gif" w={{ base:"100%", md:"70%"}} />
            </Flex>
            </Flex>
        </>
    )
}

export default HeroComponent

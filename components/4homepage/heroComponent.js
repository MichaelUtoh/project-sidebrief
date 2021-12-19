import React from 'react'
import { Flex, Text } from '@chakra-ui/layout'
import { Button, Image } from '@chakra-ui/react'
import { SiGooglemessages } from "react-icons/si";

const HeroComponent = () => {
    return (
        <>
            <Flex bgImage={('/bizman.jpg')} bgPosition="top" bgSize="cover" flexDirection={{ base:"column-reverse", md:"row" }} h={{ base:700 }} alignItems={{ base:"center" }} px={{ base:"15px", md:"30px", lg:90}}>

            {/* Welcome text */}
            <Flex
                alignItems={{ base:"flex-start" }}
                // bg="#f8f8f8"
                borderRadius={10}
                flexDirection="column"
                justifyContent="center"
                px={{ base:"15px" }}
                // mt={{ base:0, md:50 }}
                // pl={{ base:5, md:50 }}
                py={10}
                w={{base:"100%", md:"80%", lg:"60%"}}
            >

                <Text color="white" fontSize={{ base: '22px', md: '28px', lg: '40px' }} fontWeight={700} lineHeight={{ base:1.3, md:1.2 }} m={2} w="90%">
                    Form and manage your company from anywhere.
                </Text>

                <Text color="white" fontFamily="comfortaa" fontSize={{ base:12, md:14 }} fontWeight={700} m={2} w={{ base:"90%", lg:"80%" }}>
                    Sidebrief makes starting a new business seamless by removing lengthy paperwork, 
                    legal jargons, and hidden fees. Form companies across markets, with free business 
                    bank account, tax registration, business compliance, and more.
                </Text>

                <Flex alignItems="center" flexWrap="wrap" mt={2} w={{ base:"100%", md:"60%", lg:"80%" }}>
                    <Button boxShadow="sm" color="white" colorScheme="cyan" m={2} w={{ base:"70%", md:"50%", lg:"70%" }}>Get Started</Button>
                    <Button colorScheme="none" mx={2}>
                        <SiGooglemessages color="white" size="28" />
                    </Button>
                </Flex>
            </Flex>

            {/* Animation */}
            {/* <Flex alignItems="center" justifyContent="center" w={{ base:"80%" }}>
                <Image src="/77389.gif" w={{ base:"100%", md:"70%"}} />
            </Flex> */}
            </Flex>
        </>
    )
}

export default HeroComponent

import React from 'react'
import Link from 'next/link'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { Button, Image, useMediaQuery } from '@chakra-ui/react'
import { FaFacebookSquare, FaiInstagram, FaInstagram, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import FooterComponent from '../3footerSection/Footer';
import PartnersComponent from './partnersComponent';
import InfoComponent from './infoProcess';
import CardsComponent from './sidebriefCards';


const WelcomeBox = () => {
    const [isMobileScreen] = useMediaQuery('(max-width: 900px)')

    return (
        <>
            <Flex h={600} px={{ base:"15px", md:"30px", lg:90}}>

                {/* Welcome text */}
                <Flex alignItems={{ base:"center", md:"flex-start", lg:"flex-start" }} flexDirection="column" justifyContent="center" w={{base:"100%", md:"100%", lg:"50%"}}>
                    <Text fontSize={{ base: '28px', md: '35px', lg: '45px' }} fontWeight={700} lineHeight={1.3} m={2} textAlign={{ base:"center", md:"left", lg:"left" }} w="90%">
                        Form and manage your company from anywhere.
                    </Text>
                    <Text color="gray" fontSize={14} fontWeight={700} m={2} textAlign={{ base:"center", md:"left", lg:"left" }} w={{ base:"70%", lg:"80%" }}>
                        Sidebrief makes starting a new business seamless by removing lengthy paperwork, 
                        legal jargons, and hidden fees. Form companies across markets, with free business 
                        bank account, tax registration, business compliance, and more.
                    </Text>
                    <Flex flexWrap="wrap" mt={2} w={{ base:"90%", lg:"90%"}}>
                        <Button color="white" borderRadius={0} colorScheme="cyan" m={2} w={{ base:"90%", lg:"50%" }}>Get Started</Button>
                        {/* <Button border="1px" color="black" m={2} variant="outline" w={{ base:"90%", lg:"40%" }}>Schedule a Meeting</Button> */}
                    </Flex>
                </Flex>

                {/* Animation */}
                <Flex alignItems="center" display={{ base: "none", md:"flex", lg:"flex" }} justifyContent="center" w="50%">
                    <Image src="/77389.gif" w="400px" />
                </Flex>
            </Flex>

            {/* Arrow  down */}
            <Flex justifyContent="center" mb={4}>
                <Link href="#info">
                    <Image cursor="pointer" src="63278-down-arrow.gif" h={6} />
                </Link>
            </Flex>

            <InfoComponent />
            <CardsComponent />
            <PartnersComponent />
            <FooterComponent />

        </>
    )
}

export default WelcomeBox

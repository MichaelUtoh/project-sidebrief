import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { Button, Image, useMediaQuery } from '@chakra-ui/react'

const WelcomeBox = () => {
    const [isMobileScreen] = useMediaQuery('(max-width: 900px)')

    return (
        <>
        <Flex h={600} px={90}>

            {/* Welcome text */}
            <Flex m={2} flexDirection="column" justifyContent="center" w="50%">
                <Text fontSize={{ base: '28px', md: '35px', lg: '45px' }} fontWeight={700} lineHeight={1.3} m={2} w="90%">
                    Form and manage your company from anywhere.
                </Text>
                <Text color="gray" fontSize={14} fontWeight={700} m={2} w="80%">
                    Sidebrief makes starting a new business seamless by removing lengthy paperwork, 
                    legal jargons, and hidden fees. Form companies across markets, with free business 
                    bank account, tax registration, business compliance, and more.
                </Text>
                <Flex flexWrap="wrap" mt={2}>
                    <Button boxShadow="lg" color="white" colorScheme="cyan" m={2} w="50%">Get Started</Button>
                    <Button border="1px" color="black" m={2} variant="outline" w="40%">Schedule a Meeting</Button>
                </Flex>
            </Flex>

            {/* Animation */}
            <Flex alignItems="center" justifyContent="center" m={2} w="50%">
                <Image src="/77389.gif" w="400px" />
            </Flex>

        </Flex>

        {/* Arrow  down */}
        <Flex justifyContent="center">
            <Image src="63278-down-arrow.gif" h={6} />
        </Flex>
        </>
    )
}

export default WelcomeBox

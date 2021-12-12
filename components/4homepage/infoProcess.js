import React from 'react'
import { Box, Flex } from '@chakra-ui/layout'
import { Button, Image, Text } from '@chakra-ui/react'

const InfoComponent = () => {
    return (
        <>
            <Flex alignItems="center" id="info" h={600} px={{ base:"15px", md:"30px", lg:90}} mb={10}>

                {/* Animation */}
                <Flex alignItems="center" display={{ base: "none", md:"flex", lg:"flex" }} justifyContent="center" w="50%">
                    <Image src="/63820-hello.gif" w="400px" />
                </Flex>

                {/* Welcome text */}
                <Flex flexDirection="column" alignItems="start">
                    <Text fontSize={{ base: '18px' }} fontWeight={700}>The easiest way to start doing business in any market.</Text>
                    <Flex alignItems="center" borderBottom="3px" borderColor="cyan.500" borderRadius="sm" m={4} p={4}>
                        <Box bg="cyan.50" color="cyan.500" borderRadius="50%" fontWeight={700} p={2} px={4}>1</Box>
                        <Text color="gray" fontSize={16} fontWeight={500} m={2}>Sign-up or login to your Sidebrief dashboard.</Text>
                    </Flex>

                    <Flex alignItems="center" borderBottom="3px" borderColor="cyan.500" borderRadius="sm" m={4} p={4}>
                        <Box bg="cyan.50" color="cyan.500" borderRadius="50%" fontWeight={700} p={2} px={4}>2</Box>
                        <Text color="gray" fontSize={16} fontWeight={500} m={2}>Provide formation info and documents.</Text>
                    </Flex>

                    <Flex alignItems="center" borderBottom="3px" borderColor="cyan.500" borderRadius="sm" m={4} p={4}>
                        <Box bg="cyan.50" color="cyan.500" borderRadius="50%" fontWeight={700} p={2} px={4}>3</Box>
                        <Text color="gray" fontSize={16} fontWeight={500} m={2}>Pay and wait for formation of company.</Text>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}

export default InfoComponent

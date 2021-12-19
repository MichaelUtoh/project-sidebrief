import React from 'react'
import { Box, Flex } from '@chakra-ui/layout'
import { Button, Image, Text } from '@chakra-ui/react'

const InfoComponent = () => {
    return (
        <>
            <Flex alignItems="center" id="info" h={400} px={{ base:"15px", md:"30px", lg:90}} mb={10} mx="auto">


                {/* Animation */}
                <Flex alignItems="center" display={{ base: "none", md:"flex", lg:"flex" }} justifyContent="center" w="50%">
                    <Image src="/63820.gif" w="250px" />
                </Flex>

                {/* Welcome text */}
                <Flex flexDirection="column" alignItems="start">
                    <Text textAlign={{ base:"center" }} fontSize={{ base:"16px", lg:"18px" }} fontWeight={700}>The easiest way to start doing business in any market.</Text>
                    <TextComponent index="1" message="Sign-up or login to your Sidebrief dashboard." />
                    <TextComponent index="2" message="Provide formation info and documents." />
                    <TextComponent index="3" message="Pay and wait for formation of company." />
                </Flex>

            </Flex>
        </>
    )
}

export const TextComponent = ({ index, message }) => {
    return (
        <Flex alignItems="center" borderBottom="3px" borderColor="cyan.500" borderRadius="sm" m={4}>
            <Box bg="cyan.50" color="cyan.500" borderRadius="50%" fontWeight={700} p={2} px={4}> {index} </Box>
            <Text color="gray" fontSize={{ base:14, md:16 }} fontWeight={500}> {message} </Text>
        </Flex>
    )
}

export default InfoComponent

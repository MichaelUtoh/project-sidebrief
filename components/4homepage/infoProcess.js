import React from 'react'
import { Box, Flex } from '@chakra-ui/layout'
import { Button, Image, Text } from '@chakra-ui/react'

const InfoComponent = () => {
    return (
        <>
            <Flex alignItems="center" bg="#f8f8f8" borderRadius={10} h={400} justifyContent="center" px={{ base:"15px", md:"30px", lg:90}} mb={10} mx="auto" w="80%">


                {/* Animation */}
                {/* <Flex alignItems="center" display={{ base: "none", md:"flex", lg:"flex" }} justifyContent="center" w="50%">
                    <Image src="/77389.gif" w="300px" />
                </Flex> */}

                {/* Welcome text */}
                <Flex flexDirection="column" alignItems="start">
                    <Text color="#5a5a5a" fontFamily="cutive" fontSize={{ base:"16px", lg:"18px" }} fontWeight={700} textAlign={{ base:"center" }}>The easiest way to start doing business in any market.</Text>
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
            <Text color="#5a5a5a" fontFamily="poppins" fontSize={{ base:14, md:16 }} fontWeight={300} ml={2}> {message} </Text>
        </Flex>
    )
}

export default InfoComponent

import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'


const SupportComponent = () => {
    return (
        <Flex alignItems={{ base:"center" }} bg="" px={{ base:"15px", md:"30px", lg:90}}>
            <Box bg="#f8f8f8" borderRadius={10} minH={300} my={10} p={5} w="100%">
                <Flex flexDirection={{ base:"column", md:"row" }} justifyContent="space-between">
                    <Flex flexDirection="column" m={4}>
                        <Text fontSize={{ base:14, md:24, lg:30 }} fontWeight={700}>We&lsquo;re here to help.</Text>
                    </Flex>
                    <Image src="/85552.gif" h={250} w="250px" />

                </Flex>
            </Box>
        </Flex>
    )
}

export default SupportComponent

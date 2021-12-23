import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'


const SupportComponent = () => {
    return (
        <Flex alignItems={{ base:"center" }} bg="" px={{ base:"15px", md:"30px", lg:90}}>
            <Box bg="white" borderRadius={10} boxShadow="md" minH={300} mx="auto" my={10} p={5} w="80%">
                <Flex flexDirection={{ base:"column", md:"row" }} justifyContent="space-between">
                    <Flex flexDirection="column" justifyContent="space-between" m={4}>
                        <Flex flexDirection="column">
                            <Text fontFamily="comfortaa" fontSize={{ base:14, md:24, lg:30 }} fontWeight={700}>We&lsquo;re here to help.</Text>
                            <Text color="gray" fontSize={{ base:14, md:16 }}>Our lines are availaible all week round.</Text>
                        </Flex>

                        <Flex>
                            
                        </Flex>

                    </Flex>
                    <Image src="/63820.gif" w="250px" />

                </Flex>
            </Box>
        </Flex>
    )
}

export default SupportComponent

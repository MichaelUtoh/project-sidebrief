import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { Button, Image } from '@chakra-ui/react'


const SupportComponent = () => {
    return (
        <Flex alignItems={{ base:"center" }} bg="" px={{ base:"15px", md:"30px", lg:90}}>
            <Box bg="#5a5a5a" borderRadius={10} minH={200} mx="auto" my={10} p={5} w="80%">
                <Flex alignItems={{ base: "center" }} flexDirection={{ base:"column", md:"row" }} h="100%" justifyContent="space-between" m={4}>
                    <Flex flexDirection="column" h={300} justifyContent="center" w={{ base:"100%", md:"50%"}}>
                        <Text color="#fff" fontFamily="cutive" fontSize={{ base:14, md:24, lg:30 }} fontWeight={700}>We&lsquo;re here to help.</Text>
                        <Text color="#fff" fontFamily="poppins" fontSize={{ base:14, md:16 }} fontWeight={200}>Our lines are availaible all week round.</Text>
                        <Text color="#fff" fontFamily="poppins" fontSize={{ base:14, md:16 }} fontWeight={500} mt={{ base:2 }}>Mail: hello@sidebrief.com</Text>
                        <Text color="#fff" fontFamily="poppins" fontSize={{ base:12, md:16 }} fontWeight={500} mt={{ base:2 }}>Phone: 09018081296</Text>
                    </Flex>

                    <Flex alignItems="center" flexDirection="column" h={300} justifyContent="center" w={{ base:"100%", md:"50%"}}>
                        <Button color="#fff" colorScheme="cyan" fontFamily="poppins" my={2} px={10}>Email Us</Button>
                        <Button color="#fff" colorScheme="cyan" fontFamily="poppins" my={2} px={10}>Schedule a visit</Button>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    )
}

export default SupportComponent

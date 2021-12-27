import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { Button, Image } from '@chakra-ui/react'


const SupportComponent = () => {
    return (
        <Flex alignItems={{ base:"center" }} bg="" px={{ base:"15px", md:"30px", lg:90}}>
            <Box bg="" borderRadius={10} alignItems="center" minH={200} mx="auto" my={10} p={5} w="80%">
                <Flex alignItems={{ base: "center" }} flexDirection={{ base:"column", md:"row" }} h="100%" justifyContent="space-between" m={4}>
                    <Flex flexDirection="column" h={300} justifyContent="center" w={{ base:"100%", md:"50%"}}>
                        <Text color="#5a5a5a" fontFamily="cutive" fontSize={{ base:14, md:24, lg:30 }} fontWeight={700}>We&lsquo;re here to help.</Text>
                        <Text color="#141414" fontFamily="poppins" fontSize={{ base:14, md:16 }} fontWeight={200}>Our lines are availaible all week round.</Text>
                        <Text color="#141414" fontFamily="poppins" fontSize={{ base:14, md:16 }} fontWeight={500} mt={{ base:2 }}>Mail: hello@sidebrief.com</Text>
                        <Text color="#141414" fontFamily="poppins" fontSize={{ base:12, md:16 }} fontWeight={500} mt={{ base:2 }}>Phone: 09018081296</Text>
                        <Flex alignItems="center" justifyContent="flex-start" mt={4} w={{ base:"100%" }}>
                            <Button color="#fff" colorScheme="cyan" fontFamily="poppins" fontSize={14} mr={2} px={4}>Email Us</Button>
                            <Button color="#fff" colorScheme="cyan" fontFamily="poppins" fontSize={14} mr={2} px={4}>Schedule a visit</Button>
                        </Flex>
                    </Flex>

                    <Flex alignItems="center" flexDirection="column" h={300} justifyContent="center" w={{ base:"100%", md:"50%"}}>
                        <Image alt="" src="/contact.png" h={260} />
                    </Flex>

                </Flex>
            </Box>
        </Flex>
    )
}

export default SupportComponent

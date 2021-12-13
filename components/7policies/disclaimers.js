import { Flex } from '@chakra-ui/layout'
import React from 'react'

const Disclaimer = () => {
    return (
        <>
            <Flex bg="gray.100"
                alignItems={{ base:"center" }}
                flexDirection="column"
                justifyContent="center"
                minH={{ base:"100vh" }}
                overflowY="scroll"
                px={{ base:"15px", md:"30px" }}
                w={{ base:"100%" }}
            >
                Disclaimer
            </Flex>
        </>
    )
}

export default Disclaimer

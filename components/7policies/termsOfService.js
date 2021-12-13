import { Flex } from '@chakra-ui/layout'
import React from 'react'

const TermsOfService = () => {
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
                Terms of Service
            </Flex>
        </>
    )
}

export default TermsOfService

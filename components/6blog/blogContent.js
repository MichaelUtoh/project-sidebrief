import React from 'react'
import { Flex, Heading, Image, Text } from '@chakra-ui/react'

const BlogContent = () => {
    return (
        <>
            <Flex flexDirection={{ base:"column" }} alignItems={{ base:"center" }} px={{ base:"15px", md:"30px", lg:90 }} py={{ base:100, md:"120px" }} w="100%">
                <Image alt="" src="/bizman.jpg" h="400px" mb={5} />
                <Heading color="#5a5a5a" fontFamily="cutive" size="md">Hello world</Heading>
                <BlogHeadingsTexts />
            </Flex>
        </>
    )
}

const BlogHeadingsTexts = () => {
    return (
        <>

        </>
    )
}

export default BlogContent

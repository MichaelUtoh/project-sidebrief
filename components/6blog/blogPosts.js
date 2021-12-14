import React from 'react'
import { Flex, Image, Text } from '@chakra-ui/react'
import { FaHeart } from 'react-icons/fa'
import { Card, CardStyle2 } from '../5utils/cardUtil'

const BlogPosts = () => {
    return (
        <>
            <Flex flexDirection={{ base:"column" }} alignItems={{ base:"center" }} px={{ base:"15px", md:"30px", lg:90 }} py={{ base:100 }} w="100%">
                <Text textAlign="center" fontSize={{ base:16, md:18, lg:24 }} fontWeight={{ base:700 }}>Articles for founders</Text>
                <Flex alignItems="center" justifyContent="center">
                    <Text color="gray" mr={2} textAlign="center">Articles on doing business and compliance across the world collated with</Text>
                    <FaHeart color="red" />
                </Flex>
                
                <Flex flexWrap="wrap">
                    <CardStyle2 title="Doing Business In Nigeria" />
                    <CardStyle2 title="Doing Business In Nigeria" />
                    <CardStyle2 title="Doing Business In Nigeria" />
                </Flex>
                
            </Flex>
        </>
    )
}


export default BlogPosts

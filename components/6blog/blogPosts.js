import React from 'react'
import { Flex, Image, Text } from '@chakra-ui/react'
import { FaHeart } from 'react-icons/fa'
import { Card, CardStyle2 } from '../5utils/cardUtil'

const BlogPosts = () => {
    return (
        <>
            <Flex flexDirection={{ base:"column" }} alignItems={{ base:"center" }} px={{ base:"15px", md:"30px", lg:90 }} py={{ base:100, md:"150px" }} w="100%">
                <Text color="#5a5a5a" fontFamily="cutive" fontSize={{ base:16, md:18, lg:24 }} fontWeight={{ base:700 }} textAlign="center">Articles for founders</Text>
                <Flex alignItems="center" justifyContent="center">
                    <Text color="gray" fontFamily="poppins" mr={2} textAlign="center">Articles on doing business and compliance across the world collated with</Text>
                    <FaHeart color="red" />
                </Flex>
                
                <Flex flexWrap="wrap">
                    <CardStyle2
                        image_url="/63820.gif"
                        date="25-12-2021"
                        title="Doing Business In Nigeria"
                        snippet="Although the Nigerian market is an enticing one and several companies make millions in profit annually, 
                                there is a lot that can be done as regards the ease of doing business in Nigeria."
                    />

                    <CardStyle2
                        image_url=""
                        date="25-12-2021"
                        title="Registering A Company in Nigeria: A practical Step by Step guide"
                        snippet="The Corporate Affairs Commission (CAC) in a bid to ease doing business in Nigeria has made the process 
                                of registering a company in Nigeria quite seamless."
                    />

                    <CardStyle2
                        image_url="/63820.gif"
                        date="25-12-2021"
                        title="How do i register my Business Name in Nigeria ?"
                        snippet="When starting a business, a lot of entrepreneurs are usually confused as to whether to register their 
                                business with the Corporate Affairs Commission as a Business Name or a Company."
                    />
                </Flex>
                
            </Flex>
        </>
    )
}


export default BlogPosts

import React from 'react'
import { Flex, Text } from '@chakra-ui/layout'
import TopNavigation from '../../components/2navSection/TopNavigation'
import Header from '../../components/1headSection/Header'
import FooterComponent from '../../components/3footerSection/Footer'
import BlogPosts from '../../components/6blog/blogPosts'


const Blog = () => {
    return (
        <>
            <Header title="Blog" />
            <TopNavigation />
            <BlogPosts />
            <FooterComponent />
        </>
    )
}

export default Blog

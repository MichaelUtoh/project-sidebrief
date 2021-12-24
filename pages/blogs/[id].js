import React from 'react'
import { Flex } from '@chakra-ui/react'
import TopNavigation from '../../components/2navSection/TopNavigation'
import FooterComponent from '../../components/3footerSection/Footer'
import BlogContent from '../../components/6blog/blogContent'

const BlogDetail = () => {
    return (
        <>
            <TopNavigation />
            <BlogContent />
            <FooterComponent />
        </>
    )
}

export default BlogDetail

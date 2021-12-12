import React from 'react'
import { Flex, Text } from '@chakra-ui/layout'
import TopNavigation from '../components/2navSection/TopNavigation'


const Blog = () => {
    return (
        <>
            <Flex alignItems="flex-start" justifyContent="center" h="100vh">
                <TopNavigation />
            </Flex>
        </>
    )
}

export default Blog

import React from 'react'
import Link from 'next/link'
import { Box, Container } from '@chakra-ui/layout'
import { Flex, Image } from '@chakra-ui/react'

const TopNavigation = () => {
    return (
        <Flex alignItems="center" bg="white" boxShadow="sm" fontFamily="primary.heading" h={14} justifyContent="space-between" px={90} w="100%">
            <Image src="/sidebrief.png" width={100} h={6} />
            <Flex alignItems="center" h="100%" justifyContent="space-between" px={4} w="30%">
                <Link href="#"><a className="nav-animate" mx={2}>Blog</a></Link>
                <Link href="#"><a className="nav-animate" mx={2}>Contact</a></Link>
                <Link href="#"><a className="nav-animate" mx={2}>Register</a></Link>
                <Link href="#"><a className="nav-animate" mx={2}>Login</a></Link>
            </Flex>
        </Flex>
    )
}

export default TopNavigation

import React from 'react'
import Link from 'next/link'
import { Box, Container } from '@chakra-ui/layout'
import { Button, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Flex, Image, Input, Text, useDisclosure } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { FaTimes } from 'react-icons/fa'

const TopNavigation = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <Flex
            alignItems="center"
            bg="gray.800" 
            boxShadow="sm" 
            fontFamily="primary.heading" 
            h={14} 
            justifyContent="space-between" 
            position="fixed" 
            px={{ base:"15px", md:"30px", lg:90}} 
            w="100%"
            zIndex={10000}
        >
            <Text cursor="pointer" p={2}> <Link href="/"><Image src="/sidebrief.png" width={100} h={6} /></Link> </Text>
            <Flex alignItems="center" display={{ base:"none", md:"none", lg:"flex"}} fontSize={14} fontWeight={500} h="100%" justifyContent="space-between" px={4}>
                <Link href="/blog"><Text color="gray.100" cursor="pointer" fontSize={14} fontWeight={700} m={2} mx={4}>Blog</Text></Link>
                <Link href="#"><Text color="gray.100" cursor="pointer" fontSize={14} fontWeight={700} m={2} mx={4}>Contact</Text></Link>
                <Link href="#"><Text color="gray.100" cursor="pointer" fontSize={14} fontWeight={700} m={2} mx={4}>Register</Text></Link>
                <Link href="#"><Text color="gray.100" cursor="pointer" fontSize={14} fontWeight={700} m={2} mx={4}>Login</Text></Link>
            </Flex>

            <Flex alignItems="center" display={{ base:"flex", md:"flex", lg:"none"}} fontWeight={500} h="100%" justifyContent="space-between" px={4}>
                <Button cursor="pointer" onClick={onOpen} ref={btnRef} variant="ghost"> <FiMenu fontSize={{ base:14 }} /> </Button>
            </Flex>

            {/* Hamburger Menu MobileView */}
            <Drawer
                colorScheme="black"
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size="sm"
            >
                <DrawerOverlay />
                <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create your account</DrawerHeader>

                <DrawerBody>
                    <Text textAlign="center" color="cyan.400" fontSize={{ base:16, md:18, lg:20 }} fontWeight={700}>Menu</Text>
                    <Flex alignItems="center" flexDirection="column">
                        <Link href="/"><a className="link-animate">Home</a></Link>
                        <Link href="/blog"><a className="link-animate">Blog</a></Link>
                        <Link href=""><a className="link-animate">Contact</a></Link>
                        <Link href=""><a className="link-animate">Login</a></Link>
                    </Flex>
                </DrawerBody>

                <DrawerFooter justifyContent="center">
                    <Flex borderRadius={50} boxShadow="lg" color="red.500" onClick={onClose} p={4}> <FaTimes /> </Flex>
                </DrawerFooter>


                </DrawerContent>
            </Drawer>
            
        </Flex>
    )
}

export default TopNavigation

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
            bg="white"
            boxShadow="md" 
            h={16} 
            justifyContent="space-between" 
            position="fixed" 
            px={{ base:"15px", md:"30px", lg:90}} 
            w="100%"
            zIndex={10000}
        >
            <Text cursor="pointer" p={2}> <Link href="/" passHref={true}><Image src="/sidebrief.png" width={100} h={6} alt="sidebrief" /></Link> </Text>
            <Flex alignItems="center" color="#5a5a5a" display={{ base:"none", md:"none", lg:"flex"}} fontFamily="poppins" fontSize={16} fontWeight={300} h="100%" justifyContent="space-between" px={4}>
                <Link className="link-wrap" href="/blogs" passHref={true}><Text className="link-animate" cursor="pointer" m={2} mx={4}>Blog</Text></Link>
                <Link className="link-wrap" href="/about" passHref={true}><Text className="link-animate" cursor="pointer" m={2} mx={4}>Contact</Text></Link>
                <Link className="link-wrap" href="#" passHref={true}><Text className="link-animate" cursor="pointer" m={2} mx={4}>Register</Text></Link>
                <Link className="link-wrap" href="#" passHref={true}><Text className="link-animate" cursor="pointer" m={2} mx={4}>Login</Text></Link>
            </Flex>

            <Flex alignItems="center" display={{ base:"flex", md:"flex", lg:"none"}} fontWeight={500} h="100%" justifyContent="space-between" px={4}>
                <Button color="white" cursor="pointer" onClick={onOpen} ref={btnRef} variant="ghost"> <FiMenu fontSize={{ base:14 }} /> </Button>
            </Flex>

            {/* Hamburger Menu MobileView */}
            <Drawer
                colorScheme="'black'"
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
                        <Flex className="link-animate" p={2}> <Link href="/">Home</Link> </Flex>
                        <Flex p={2}> <Link href="/blogs">Blog</Link> </Flex>
                        <Flex p={2}> <Link href="#">Contact</Link> </Flex>
                        <Flex p={2}> <Link href="#">Login</Link> </Flex>
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

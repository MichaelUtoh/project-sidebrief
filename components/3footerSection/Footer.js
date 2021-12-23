import React from 'react'
import Link from 'next/link'
import { Box, Flex } from '@chakra-ui/layout'
import { Image, Text } from '@chakra-ui/react'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

const FooterComponent = () => {
    return (
        <>
            {/* Footer Section */}
            <Flex bg="#f8f8f8" flexWrap="wrap" justifyContent={{ base:"flex-start", md:"space-between" }} px={{ base:"15px", md:"30px", lg:90}} py={10}>
                
                {/* Box 1 */}
                <Flex flexDirection="column" justifyContent="space-between" mx={4} p={2} w={{ base:"100%", md:"inherit" }}>
                    <Box>
                        <Link href="/"><Image cursor="pointer" src="/sidebrief.png" w="100px" /></Link>
                        <Text color="#5a5a5a" fontFamily="poppins" fontSize={{ base:10, md:12 }} mt={{ base:3 }}>Build without borders.</Text>
                    </Box>

                    <Box my={{ base:30, md:5 }}>
                        <Flex color="#5a5a5a" fontFamily="poppins" justifyContent="space-between" py={1} w={120}>
                            <FaTwitterSquare size={20} />
                            <FaFacebookSquare size={20} />
                            <FaLinkedin size={20} />
                            <FaInstagramSquare size={20} />
                        </Flex>
                        <Text color="#5a5a5a" fontFamily="poppins" fontSize={12}>© 2021 Sidebrief Inc.</Text>
                        <Text color="#5a5a5a" fontFamily="poppins" fontSize={12}>All Right Reserved </Text>
                    </Box>
                </Flex>

                {/* Box 2 */}
                <Flex flexDirection="column" justifyContent="flex-start" mx={3} p={2} w={{ base:"100%", md:"inherit" }}>
                    <Text color="#5a5a5a" fontFamily="cutive" fontSize={{ base:14, md:16, lg:18 }} fontWeight={700} mb={2}>Products</Text>
                    <Text color="#5a5a5a" cursor="pointer" fontFamily="poppins" fontSize={{ base:12, md:12, lg:14 }} fontWeight={400} mb={2}>Formation</Text>
                    <Text color="#5a5a5a" cursor="pointer" fontFamily="poppins" fontSize={{ base:12, md:12, lg:14 }} fontWeight={400} mb={2}>Maintenance</Text>
                    <Text color="#5a5a5a" cursor="pointer" fontFamily="poppins" fontSize={{ base:12, md:12, lg:14 }} fontWeight={400} mb={2}>Compliance</Text>
                    <Text color="#5a5a5a" cursor="pointer" fontFamily="poppins" fontSize={{ base:12, md:12, lg:14 }} fontWeight={400} mb={2}>Filing</Text>
                    <Text color="#5a5a5a" cursor="pointer" fontFamily="poppins" fontSize={{ base:12, md:12, lg:14 }} fontWeight={400} mb={2}>Hiring</Text>
                </Flex>

                {/* Box 2 */}
                <Flex flexDirection="column" justifyContent="flex-start" mx={3} p={2} w={{ base:"100%", md:"inherit" }}>
                    <Text color="#5a5a5a" fontFamily="cutive" fontSize={{ base:14, md:16, lg:18 }} fontWeight={700} mb={2}>Policies</Text>
                    <Text color="#5a5a5a" cursor="pointer" fontFamily="poppins" fontSize={{ base:12, md:12, lg:14 }} fontWeight={400} mb={2}><Link href="/policies/data">Data Policy</Link></Text>
                    <Text color="#5a5a5a" cursor="pointer" fontFamily="poppins" fontSize={{ base:12, md:12, lg:14 }} fontWeight={400} mb={2}><Link href="/policies/privacy">Privacy Policy</Link></Text>
                    <Text color="#5a5a5a" cursor="pointer" fontFamily="poppins" fontSize={{ base:12, md:12, lg:14 }} fontWeight={400} mb={2}><Link href="/policies/payment">Payment Policy</Link></Text>
                    <Text color="#5a5a5a" cursor="pointer" fontFamily="poppins" fontSize={{ base:12, md:12, lg:14 }} fontWeight={400} mb={2}><Link href="/policies/disclaimers">Disclaimer</Link></Text>
                    <Text color="#5a5a5a" cursor="pointer" fontFamily="poppins" fontSize={{ base:12, md:12, lg:14 }} fontWeight={400} mb={2}><Link href="/policies/terms">Terms of Service</Link></Text>
                </Flex>

                {/* Box 2 */}
                <Flex flexDirection="column" justifyContent="flex-start" mx={3} p={2} w={{ base:"100%", md:"inherit" }}>
                    <Text color="#5a5a5a" fontFamily="cutive" fontSize={{ base:14, md:16, lg:18 }} fontWeight={700} mb={2}>Contact</Text>
                    <Text color="#5a5a5a" cursor="pointer" fontFamily="poppins" fontSize={{ base:12, md:12, lg:14 }} fontWeight={400} mb={2}>Message</Text>
                    <Text color="#5a5a5a" cursor="pointer" fontFamily="poppins" fontSize={{ base:12, md:12, lg:14 }} fontWeight={400} mb={2}>Africa</Text>
                    <Text color="#5a5a5a" cursor="pointer" fontFamily="poppins" fontSize={{ base:12, md:12, lg:14 }} fontWeight={400} mb={2}>UK</Text>
                    <Text color="#5a5a5a" cursor="pointer" fontFamily="poppins" fontSize={{ base:12, md:12, lg:14 }} fontWeight={400} mb={2}>US</Text>
                </Flex>
                {/* Box 2 */}

                <Flex flexDirection="column" justifyContent="flex-start" mx={{ base:3, md:3 }} w={{ base:"100%", md:"inherit" }}>
                    <Flex flexDirection="column" justifyContent="flex-start" p={2}>
                        <Text color="#5a5a5a" fontFamily="cutive" fontSize={{ base:14, md:16, lg:18 }} fontWeight={700} mb={2}>Career</Text>
                        <Text color="#5a5a5a" cursor="pointer" fontFamily="poppins" fontSize={{ base:12, md:12, lg:14 }} fontWeight={400} mb={2}>Join Our Team</Text>
                    </Flex>

                    <Flex flexDirection="column" justifyContent="flex-start" p={2}>
                        <Text color="#5a5a5a" fontFamily="cutive" fontSize={{ base:14, md:16, lg:18 }} fontWeight={700} mb={2}>Media</Text>
                        <Text color="#5a5a5a" cursor="pointer" fontFamily="poppins" fontSize={{ base:12, md:12, lg:14 }} fontWeight={400} mb={2}>Press Kit</Text>
                    </Flex>
                </Flex>

                <Flex flexDirection="column" justifyContent="flex-start" mx={{ base:3 }} p={2} w={{ base:"100%", md:"inherit" }}>
                    <Text color="#5a5a5a" fontFamily="cutive" fontSize={{ base:14, md:16, lg:18 }} fontWeight={700} mb={2}>Resources</Text>
                    <Text color="#5a5a5a" cursor="pointer" fontFamily="poppins" fontSize={{ base:12, md:12, lg:14 }} fontWeight={400} mb={2}>Blog</Text>
                    <Text color="#5a5a5a" cursor="pointer" fontFamily="poppins" fontSize={{ base:12, md:12, lg:14 }} fontWeight={400} mb={2}>Resources</Text>
                </Flex>


            </Flex>

        </>
    )
}

export default FooterComponent

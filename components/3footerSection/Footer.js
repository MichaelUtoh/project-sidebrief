import React from 'react'
import { Box, Flex } from '@chakra-ui/layout'
import { Image, Text } from '@chakra-ui/react'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

const FooterComponent = () => {
    return (
        <>
            {/* Footer Section */}
            <Flex bg="gray.50" justifyContent="flex-start" px={{ base:"15px", md:"30px", lg:90}} py={10}>
                
                {/* Box 1 */}
                <Flex flexDirection="column" justifyContent="space-between" mx={4} p={2}>
                    <Image src="/sidebrief.png" w="100px" />
                    <Box>
                        <Flex color="gray" justifyContent="space-between" py={1} w={120}>
                            <FaTwitterSquare size={20} />
                            <FaFacebookSquare size={20} />
                            <FaLinkedin size={20} />
                            <FaInstagramSquare size={20} />
                        </Flex>
                        <Text color="gray" fontSize={12}>©2021 Sidebrief Inc. All Right Reserved </Text>
                    </Box>
                </Flex>

                {/* Box 2 */}
                <Flex flexDirection="column" justifyContent="flex-start" mx={5} p={2}>
                    <Text color="gray.500" fontSize={18} fontWeight={700} mb={2}>Products</Text>
                    <Text color="gray" cursor="pointer" fontSize={14} fontWeight={500} mb={2}>Formation</Text>
                    <Text color="gray" cursor="pointer" fontSize={14} fontWeight={500} mb={2}>Maintenance</Text>
                    <Text color="gray" cursor="pointer" fontSize={14} fontWeight={500} mb={2}>Compliance</Text>
                    <Text color="gray" cursor="pointer" fontSize={14} fontWeight={500} mb={2}>Filing</Text>
                    <Text color="gray" cursor="pointer" fontSize={14} fontWeight={500} mb={2}>Hiring</Text>
                </Flex>

                {/* Box 2 */}
                <Flex flexDirection="column" justifyContent="flex-start" mx={5} p={2}>
                    <Text color="gray.500" fontSize={18} fontWeight={700} mb={2}>Policies</Text>
                    <Text color="gray" cursor="pointer" fontSize={14} fontWeight={500} mb={2}>Data Policy</Text>
                    <Text color="gray" cursor="pointer" fontSize={14} fontWeight={500} mb={2}>Privacy Policy</Text>
                    <Text color="gray" cursor="pointer" fontSize={14} fontWeight={500} mb={2}>Payment Policy</Text>
                    <Text color="gray" cursor="pointer" fontSize={14} fontWeight={500} mb={2}>Disclaimer</Text>
                    <Text color="gray" cursor="pointer" fontSize={14} fontWeight={500} mb={2}>Terms of Service</Text>
                </Flex>

                {/* Box 2 */}

                <Flex flexDirection="column" justifyContent="flex-start" mx={5}>
                    <Flex flexDirection="column" justifyContent="flex-start" p={2}>
                        <Text color="gray.500" fontSize={18} fontWeight={700} mb={2}>Career</Text>
                        <Text color="gray" cursor="pointer" fontSize={14} fontWeight={500} mb={2}>Join Our Team</Text>
                    </Flex>

                    <Flex flexDirection="column" justifyContent="flex-start" p={2}>
                        <Text color="gray.500" fontSize={18} fontWeight={700} mb={2}>Media</Text>
                        <Text color="gray" cursor="pointer" fontSize={14} fontWeight={500} mb={2}>Press Kit</Text>
                    </Flex>
                </Flex>

                <Flex flexDirection="column" justifyContent="flex-start" mx={5} p={2}>
                    <Text color="gray.500" fontSize={18} fontWeight={700} mb={2}>Resources</Text>
                    <Text color="gray" cursor="pointer" fontSize={14} fontWeight={500} mb={2}>Blog</Text>
                    <Text color="gray" cursor="pointer" fontSize={14} fontWeight={500} mb={2}>Resources</Text>
                </Flex>

                {/* Box 2 */}
                <Flex flexDirection="column" justifyContent="flex-start" mx={5} p={2}>
                    <Text color="gray.500" fontSize={18} fontWeight={700} mb={2}>Contact</Text>
                    <Text color="gray" cursor="pointer" fontSize={14} fontWeight={500} mb={2}>Message</Text>
                    <Text color="gray" cursor="pointer" fontSize={14} fontWeight={500} mb={2}>Africa</Text>
                    <Text color="gray" cursor="pointer" fontSize={14} fontWeight={500} mb={2}>UK</Text>
                    <Text color="gray" cursor="pointer" fontSize={14} fontWeight={500} mb={2}>US</Text>
                </Flex>

            </Flex>

        </>
    )
}

export default FooterComponent

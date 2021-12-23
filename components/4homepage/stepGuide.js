import React from 'react'
import { Box, Flex } from '@chakra-ui/layout'
import { Button, Heading, Image, Text } from '@chakra-ui/react'

const StepGuide = () => {
    return (
        <>
            <Flex id="info" bg="#f8f8f8" flexDirection="column" justifyContent="space-between" my={{ base:5 }} px={{ base:"15px", md:"30px", lg:90}} py={{ base:5, md:50 }}>
                <Heading color="#5a5a5a" fontFamily="cutive" mt={5} size="3xl" textAlign="start">Formation Simplified</Heading>
                <Text color="#5a5a5a" fontFamily="poppins" fontSize={{ base:14, md:16, lg:18 }} fontWeight={500} mb={10}>Form company and get started in new markets.</Text>

                {/* Section 1 */}
                <Flex flexDirection={{ base:"column", md:"row" }} justifyContent={{ base:"flex-start" }}>
                    <Flex bg="#f8f8f8" borderLeft="4px" borderLeftColor="cyan.300" flexDirection="column" justifyContent="center" h={{ base:200 }} mb={4} mx={{ base:2, md:4 }} p={{ base:6 }} py={0} w={{ base:"100%", md:400 }}>
                        <Text color="#5a5a5a" fontFamily="cutive" fontSize={{ base:20, md:24, lg:30 }} fontWeight={700}>Formation.</Text>
                        <Text color="#5a5a5a" fontFamily="poppins" fontSize={{ base:16, md:20 }} fontWeight={200}>Form company</Text>
                        <Text color="#5a5a5a" fontFamily="poppins" fontSize={{ base:14, md:16 }} fontWeight={400} mt={4}>
                            Register a new profit or non-profit entity seamlessly, with support for all types of business vehicles.
                        </Text>
                    </Flex>

                    {/* <Flex alignItems="center" justifyContent="center" h={300} w={{ base:"100%", md:400 }}>
                        <Image src="/56420-cubes.gif" h={250} />
                    </Flex> */}
                </Flex>

                {/* Section 2 */}
                <Flex flexDirection={{ base:"column-reverse", md:"row" }} justifyContent={{ base:"flex-start", md:"center" }}>
                    <Flex bg="#f8f8f8" borderLeft="4px" borderLeftColor="cyan.400" flexDirection="column" justifyContent="center" h={{ base:200 }} mb={4} mx={{ base:2, md:4 }} p={{ base:6 }} py={0} w={{ base:"100%", md:400 }}>
                        <Text color="#5a5a5a" fontFamily="cutive" fontSize={{ base:20, md:24, lg:30 }} fontWeight={700}>Launch.</Text>
                        <Text color="#5a5a5a" fontFamily="poppins" fontSize={{ base:16, md:20 }} fontWeight={200}>Access local support</Text>
                        <Text color="#5a5a5a" fontFamily="poppins" fontSize={{ base:14, md:16 }} fontWeight={400} mt={4}>
                            Get started with tax registration, bank account set-up, IP protection and local support on-demand.
                        </Text>
                    </Flex>
                    
                    {/* <Flex alignItems="center" justifyContent="center" h={300} w={{ base:"100%", md:400 }}>
                        <Image src="46433-rocket-launch.gif" h={250} />
                    </Flex> */}
                </Flex>

                {/* Section 3 */}
                <Flex flexDirection={{ base:"column", md:"row" }} justifyContent={{ base:"flex-start", md:"flex-end" }}>
                    {/* Info */}
                    <Flex bg="#f8f8f8" borderLeft="4px" borderLeftColor="cyan.700" flexDirection="column" justifyContent="center" h={{ base:200 }} mb={4} mx={{ base:2, md:4 }} p={{ base:6 }} py={0} w={{ base:"100%", md:400 }}>
                        <Text color="#5a5a5a" fontFamily="cutive" fontSize={{ base:20, md:24, lg:30 }} fontWeight={700}>Compliance.</Text>
                        <Text color="#5a5a5a" fontFamily="poppins" fontSize={{ base:16, md:20 }} fontWeight={200}>Get business licenses</Text>
                        <Text color="#5a5a5a" fontFamily="poppins" fontSize={{ base:14, md:16 }} fontWeight={400} mt={4}>
                            Obtain business licenses and approvals required start business locally in any market.
                        </Text>
                    </Flex>
                    {/* Animation */}
                    {/* <Flex alignItems="center" justifyContent="center" h={300} w={{ base:"100%", md:400 }}>
                        <Image src="30266-documents.gif" h={250} />
                    </Flex> */}
                </Flex>

            </Flex>
        </>
    )
}

export const TextComponent = ({ index, message }) => {
    return (
        <Flex alignItems="center" borderBottom="3px" borderColor="cyan.500" borderRadius="sm" m={4}>
            <Box bg="cyan.50" color="cyan.500" borderRadius="50%" fontWeight={700} p={2} px={4}> {index} </Box>
            <Text color="gray" fontSize={{ base:14, md:16 }} fontWeight={500}> {message} </Text>
        </Flex>
    )
}

export default StepGuide

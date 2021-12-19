import React from 'react'
import { Box, Flex } from '@chakra-ui/layout'
import { Button, Image, Text } from '@chakra-ui/react'

const StepGuide = () => {
    return (
        <>
            <Flex id="info" alignItems="center" flexDirection="column" justifyContent="space-between" my={{ base:5 }} px={{ base:"15px", md:"30px", lg:90}}>
                <Text fontSize={{ base:16, md:18, lg:26 }} fontWeight={700} mt={5}>Formation Simplified</Text>
                <Text color="gray" fontFamily="comfortaa" fontSize={{ base:14, md:16, lg:18 }} fontWeight={500} mb={10}>Form company and get started in new markets.</Text>

                {/* Section 1 */}
                <Flex flexDirection={{ base:"column", md:"row" }} justifyContent="space-between">
                    <Flex bg="#f8f8f8" borderRadius={10} flexDirection="column" justifyContent="center" h={{ base:200, md:300 }} mx={{ base:2, md:4 }} p={{ base:6 }} w={{ base:"100%", md:400 }}>
                        <Text fontFamily="comfortaa" fontSize={{ base:20, md:24, lg:30 }} fontWeight={700}>Formation.</Text>
                        <Text color="gray" fontSize={{ base:16, md:20 }}>Form company</Text>
                        <Text color="gray" fontSize={{ base:14, md:16 }} fontWeight={600} mt={4}>
                            Register a new profit or non-profit entity seamlessly, with support for all types of business vehicles.
                        </Text>
                    </Flex>

                    <Flex alignItems="center" borderRadius={10} justifyContent="center" h={300} w={{ base:"100%", md:400 }}>
                        <Image src="/56420-cubes.gif" h={250} />
                    </Flex>
                </Flex>

                {/* Section 2 */}
                <Flex flexDirection={{ base:"column-reverse", md:"row" }} justifyContent="space-between">
                    <Flex alignItems="center" borderRadius={10} justifyContent="center" h={300} w={{ base:"100%", md:400 }}>
                        <Image src="46433-rocket-launch.gif" h={250} />
                    </Flex>

                    <Flex bg="#f8f8f8" borderRadius={10} flexDirection="column" justifyContent="center" h={{ base:200, md:300 }} mx={{ base:2, md:4 }} p={{ base:6 }} w={{ base:"100%", md:400 }}>
                        <Text fontFamily="comfortaa" fontSize={{ base:20, md:24, lg:30 }} fontWeight={700}>Launch.</Text>
                        <Text color="gray" fontSize={{ base:16, md:20 }}>Access local support</Text>
                        <Text color="gray" fontSize={{ base:14, md:16 }} fontWeight={600} mt={4}>
                            Get started with tax registration, bank account set-up, IP protection and local support on-demand.
                        </Text>
                    </Flex>
                </Flex>

                {/* Section 3 */}
                <Flex flexDirection={{ base:"column", md:"row" }} justifyContent="space-between">
                    {/* Info */}
                    <Flex bg="#f8f8f8" borderRadius={10} flexDirection="column" justifyContent="center" h={{ base:200, md:300 }} mx={{ base:2, md:4 }} p={{ base:6 }} w={{ base:"100%", md:400 }}>
                        <Text fontFamily="comfortaa" fontSize={{ base:20, md:24, lg:30 }} fontWeight={700}>Compliance.</Text>
                        <Text color="gray" fontSize={{ base:16, md:20 }}>Get business licenses</Text>
                        <Text color="gray" fontSize={{ base:14, md:16 }} fontWeight={600} mt={4}>
                            Obtain business licenses and approvals required start business locally in any market.
                        </Text>
                    </Flex>
                    {/* Animation */}
                    <Flex alignItems="center" borderRadius={10} justifyContent="center" h={300} w={{ base:"100%", md:400 }}>
                        <Image src="30266-documents.gif" h={250} />
                    </Flex>
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

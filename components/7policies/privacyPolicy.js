import React from 'react'
import { Box, Divider, Flex, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'

const PrivacyPolicy = () => {
    return (
        <>
            <Flex
                alignItems={{ base:"center" }}
                flexDirection="column"
                justifyContent="flex-start"
                minH={{ base:"100vh" }}
                px={{ base:"15px", md:"30px" }}
                py={{ base:100 }}
                w={{ base:"100%" }}
            >
                <Image src="/illustrations/privacy.svg" my={2} w={150} />
                <Flex alignItems="center" bg="gray.50" flexDirection="column" py={4} w="full">
                    <Text color="gray.700" fontWeight={700}>Privacy Policy</Text>
                    <Text color="gray.400" fontSize={14} mt={0}>How we collect and use client data.</Text>
                </Flex>

                <Flex flexDirection="column" p={{ base:15, md:50 }}>
                    <Text color="gray.700" fontWeight={700} mt={{ base:5 }}>Our Privacy Policy.</Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }}>
                        We’ve created this privacy policy to explain how we collect, use, disclose and protect your 
                        information – including any nonpublic personal information.
                    </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }}>
                        This privacy policy applies to the Services provided by Sidebrief (“we” or “us”).
                    </Text>

                    <Text color="gray.700" fontWeight={700} mt={{ base:5 }}>What personal information do we collect?</Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }}>
                        We use the information we collect from you to prepare your license and permit report and to 
                        service your inquiries related to such report. When you request a report, we will ask you for 
                        information such as company name, business activity, business structure, your name, email address, 
                        phone number and cother information. This allows us to generate your report.
                    </Text>

                    <Text color="gray.700" fontWeight={700} mt={{ base:5 }}>Do we use cookies?</Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }}>
                        Yes, we use cookies to help us remember and process services. They are also used to help us 
                        understand your preferences based on previous or current site activity, which enables us to 
                        provide you with improved services.
                    </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }} mt={2}>
                        We also use cookies to help us compile aggregate data about site traffic and site interaction 
                        so that we can offer better site experiences and tools in the future.
                    </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }} mt={2}>
                        We also use cookies to understand and save user’s preferences for future visits.
                    </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }} mt={2}>
                        We may also use trusted third-party services that track this information on our behalf.
                    </Text>


                    <Text color="gray.700" fontWeight={700} mt={{ base:5 }}>What can you do about cookies?</Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }}>
                        You can choose to have your computer warn you each time a cookie is being sent, or you can 
                        choose to turn off all cookies. You do this through your browser settings. Each browser is 
                        a little different, so look at your browser’s Help menu to learn the correct way to modify 
                        your cookies.
                    </Text>

                    <Text color="gray.700" fontWeight={700} mt={{ base:5 }}>When you disable cookies?</Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }}>
                        If you disable cookies, some features will be disabled It will turn off some of the features 
                        that make your site experience more efficient and some of our services will not function properly.
                    </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }}>
                        If you have any questions about this Cookies Policy, please contact us at:
                        policy@sidebrief.com.
                    </Text>
                </Flex>

            </Flex>
        </>
    )
}

export default PrivacyPolicy

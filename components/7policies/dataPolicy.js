import React from 'react'
import { Box, Divider, Flex, Text } from '@chakra-ui/layout'
import { Image, List, ListIcon, ListItem, UnorderedList } from '@chakra-ui/react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, } from '@chakra-ui/react'


const DataPolicy = () => {
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
                <Image alt="" src="/illustrations/privacy.svg" my={2} w={150} />
                <Flex alignItems="center" bg="#f8f8f8" flexDirection="column" py={4} w="full">
                    <Text color="#5a5a5a" fontFamily="cutive" fontWeight={700}>Data Policy</Text>
                    <Text color="#5a5a5a" fontFamily="poppins" fontSize={14} fontWeight={300} mt={0}>How we track and use cookies.</Text>
                </Flex>

                <Flex flexDirection="column" p={{ base:15, md:50 }} w="100%">

                    <Accordion w="100%">
                        <AccordionBox
                            title="Our Cookies Policy."
                            textbox1="We’ve created this privacy policy to explain how we collect, use, disclose and protect 
                                    your information – including any nonpublic personal information."
                        />

                        <AccordionBox
                            title="What are cookies?"
                            textbox1="Cookies are small files that a site or its service provider transfers to your computer’s 
                                    hard drive through your web browser (if you allow) that enables the site’s or service 
                                    provider’s systems to recognize your browser and capture and remember certain information."
                        />

                        <AccordionBox
                            title="Do we use cookies?"
                            textbox1="Yes, we use cookies to help us remember and process services. They are also used to help us 
                                    understand your preferences based on previous or current site activity, which enables us to 
                                    provide you with improved services."
                        />

                        <AccordionBox
                            title="Do we use cookies?"
                            textbox1="Yes, we use cookies to help us remember and process services. They are also used to help us 
                                    understand your preferences based on previous or current site activity, which enables us to 
                                    provide you with improved services."
                            textbox2="We also use cookies to help us compile aggregate data about site traffic and site interaction 
                                    so that we can offer better site experiences and tools in the future."
                            textbox3="We also use cookies to understand and save user’s preferences for future visits."
                            textbox4="We may also use trusted third-party services that track this information on our behalf."
                        />

                        <AccordionBox
                            title="What can you do about cookies?"
                            textbox1="You can choose to have your computer warn you each time a cookie is being sent, or you can 
                                    choose to turn off all cookies. You do this through your browser settings. Each browser is 
                                    a little different, so look at your browser’s Help menu to learn the correct way to modify 
                                    your cookies."
                        />

                        <AccordionBox
                            title="When you disable cookies?"
                            textbox1="If you disable cookies, some features will be disabled It will turn off some of the features 
                                    that make your site experience more efficient and some of our services will not function properly."
                            textbox2="If you have any questions about this Cookies Policy, please contact us at:
                                    policy@sidebrief.com."
                        />                        
                    </Accordion>

                </Flex>
            </Flex>
        </>
    )
}


export const AccordionBox = ({ title, altText, textbox1, textbox2, textbox3, textbox4, textbox5, textbox6, textbox7 }) => {
    return (
        <>
            <AccordionItem>
                <AccordionButton>
                    <Text color="#5a5a5a" fontFamily="cutive" fontWeight={700}> {title ? title : ""} </Text>
                </AccordionButton>
                <AccordionPanel pb={4}>
                    <Text color="gray.700" fontFamily="cutive" fontSize={{ base:12, md:14 }} mb={2} fontWeight={500}> {altText ? altText : ""} </Text>
                    <Text color="gray" fontFamily="poppins" fontSize={{ base:12, md:14 }} mb={2} fontWeight={300}> {textbox1 ? textbox1 : ""} </Text>
                    <Text color="gray" fontFamily="poppins" fontSize={{ base:12, md:14 }} mb={2} fontWeight={300}> {textbox2 ? textbox2 : ""} </Text>
                    <Text color="gray" fontFamily="poppins" fontSize={{ base:12, md:14 }} mb={2} fontWeight={300}> {textbox3 ? textbox3 : ""} </Text>
                    <Text color="gray" fontFamily="poppins" fontSize={{ base:12, md:14 }} mb={2} fontWeight={300}> {textbox4 ? textbox4 : ""} </Text>
                    <Text color="gray" fontFamily="poppins" fontSize={{ base:12, md:14 }} mb={2} fontWeight={300}> {textbox5 ? textbox5 : ""} </Text>
                    <Text color="gray" fontFamily="poppins" fontSize={{ base:12, md:14 }} mb={2} fontWeight={300}> {textbox6 ? textbox6 : ""} </Text>
                    <Text color="gray" fontFamily="poppins" fontSize={{ base:12, md:14 }} mb={2} fontWeight={300}> {textbox7 ? textbox7 : ""} </Text>
                </AccordionPanel>
            </AccordionItem>
        </>
    )
}

export const ListBox = ({ text }) => {
    return (
        <>
            <Text color="gray" fontSize={{ base:12, md:14 }} my={{ base:2, md:4 }} w={{ base:"90%", md:"70%" }}>
                <ListIcon color="cyan.600" />
                {text}
            </Text>
        </>
    )
}



export default DataPolicy

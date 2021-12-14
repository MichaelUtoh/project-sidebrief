import React from 'react'
import { Box, Divider, Flex, Text } from '@chakra-ui/layout'
import { Image, List, ListIcon, ListItem, UnorderedList } from '@chakra-ui/react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, } from '@chakra-ui/react'

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

                <Flex flexDirection="column" p={{ base:15, md:50 }} w="100%">

                    <Accordion w="100%">
                        <AccordionBox
                            title="Our Privacy Policy."
                            textbox1="We’ve created this privacy policy to explain how we collect, use, disclose and protect your 
                                    information – including any nonpublic personal information."
                            textbox2="This privacy policy applies to the Services provided by Sidebrief (“we” or “us”)."
                        />

                        <AccordionBox
                            title="What personal information do we collect?"
                            textbox1="We use the information we collect from you to prepare your license and permit report and to 
                                    service your inquiries related to such report. When you request a report, we will ask you for 
                                    information such as company name, business activity, business structure, your name, email address, 
                                    phone number and cother information. This allows us to generate your report."
                            textbox2="We also use the information we collect from you to process your license and permit applications 
                                    and to service your account. Sidebrief requires information to process your order for filing 
                                    services and to maintain your account. When you create an account, we will ask you for information 
                                    such as company name, business activity, business structure, your name, email address, phone number, 
                                    and other information."
                            textbox3="Sidebrief also collects information needed to complete license and permit applications. The relevant 
                                    licensing authorities dictate what type information would be required to apply for a license."
                            textbox4="Sidebrief also collects your information when you contact or interact with us and any other information 
                                    you voluntarily provide us with in connection with using our Web sites."
                        />

                        <AccordionBox
                            title="When do we collect information?"
                            textbox1="We collect information from you when you register on our site, make a request, subscribe to a 
                                    newsletter, fill out a form, or enter information on our site."
                        />

                        <AccordionBox
                            title="How do we use your information?"
                            altText="We may use such information in the following ways:"
                            textbox1={<ListBox text="To personalize your experience on our site and to allow us to deliver the type of content and offerings in which you are most interested." />}
                            textbox2={<ListBox text="To improve our website in order to better serve you." />}
                            textbox3={<ListBox text="To allow us to better service you in responding to your customer service requests." />}
                            textbox4={<ListBox text="To administer a contest, promotion, survey or other site feature." />}
                            textbox5={<ListBox text="To quickly process your transactions." />}
                            textbox6={<ListBox text="To send periodic emails regarding your order or other products and services." />}
                            textbox6={<ListBox text="To send periodic emails regarding your order or other products and services." />}
                            textbox7={<ListBox text="To analyse traffic on our platform" />}
                        />

                        <AccordionBox
                            title="How do we protect the information we receive?"
                            textbox1="Our site is reviewed on a regular basis for security vulnerabilities in order to make your visit 
                                    to our site as safe as possible."
                            textbox2="Your personal information is contained behind secured networks and is only accessible by a limited 
                                    number of persons who have special access rights to such systems, and are required to keep the 
                                    information confidential."
                            textbox3="In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) 
                                    technology. We do not store credit/debit card information on our systems."
                            textbox4="We implement a variety of security measures when a user places an order, enters, submits, or accesses 
                                    their information to maintain the safety of your personal information."
                            textbox5="All transactions are processed through a gateway provider and are not stored or processed on our servers."
                        />

                        <AccordionBox
                            title="How can you opt out, remove or modify information provided to us?"
                            textbox1="You can request to have your information removed by filing the form on the Contact Us page."
                            textbox2="Please note that we may maintain information about an individual sales transaction in order to complete 
                                    that transaction and for record keeping purposes."
                        />

                        <AccordionBox
                            title="Third-party Disclosures"
                            textbox1="Sidebrief does not sell, trade, or otherwise transfer to outside parties your personally identifiable 
                                    information unless we provide you with advance notice.This does not include website hosting partners and 
                                    other parties who assist us in operating our website, conducting our business, or servicing you, so long 
                                    as those parties agree to keep this information confidential."
                            textbox2="We may also release your information when we believe release is appropriate to comply with the law, 
                                    enforce our site policies, or protect ours or others’ rights, property, or safety."
                        />

                        <AccordionBox
                            title="Third-party Links"
                            textbox1="Occasionally, at our discretion, we may include or offer third party products or services on 
                                    our website. These third-party sites have separate and independent privacy policies."
                            textbox2="We therefore have no responsibility or liability for the content and activities of these 
                                    linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback 
                                    about these sites."
                        />

                        <AccordionBox
                            title="Transfer Of Your Personal Information"
                            textbox1="Your information, including personal identifying information, may be transferred to — and 
                                    maintained on — computers located outside of your state, province, country or other governmental 
                                    jurisdiction where the data protection laws may differ from those from your jurisdiction."
                            textbox2="We will take all steps reasonably necessary to ensure that your data is treated securely and 
                                    in accordance with this Privacy Policy and no transfer of your personal information will take place 
                                    to an organization or a country unless there are adequate controls in place including the security 
                                    of your data and other personal information."
                        />

                        <AccordionBox
                            title="Disclosure Of Your Personal Information"
                            textbox1="If Sidebrief is involved in a merger, acquisition or asset sale, your personal information may be 
                                    transferred. We will provide notice before your personal information is transferred and becomes 
                                    subject to a different Privacy Policy."
                            textbox2="Under certain circumstances, we may be required to disclose your personal information if required 
                                    to do so by law or in response to valid requests by public authorities (e.g. a court or a government 
                                    agency)."
                        />

                        <AccordionBox
                            title="Retention of Your Personal Information"
                            textbox1="We will retain your personal information only for as long as is necessary for the purposes set out 
                                    in this Privacy Policy."
                            textbox2="We will retain and use your information to the extent necessary to comply with our legal obligations 
                                    (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, 
                                    and enforce our legal agreements and policies."
                        />

                        <AccordionBox
                            title="Service Providers"
                            textbox1="We employ third party companies and individuals to facilitate our services and products 
                                    (“Service Providers”), to perform Website-related services or to assist us in analyzing how our Website is used."
                            textbox2="These third-parties have access to your personal information only to perform these tasks on our behalf 
                                    and are obligated not to disclose or use it for any other purpose."
                        />

                        <AccordionBox
                            title="Analytics"
                            textbox1="Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses 
                                    the data collected to track and monitor the use of our Service. This data is shared with other Google services. 
                                    Google may use the collected data to contextualize and personalize the ads of its own advertising network."
                            textbox2="You can opt-out of having made your activity on the Service available to Google Analytics by installing the 
                                    Google Analytics opt-out browser add-on. The add-on prevents Google Analytics JavaScript (ga.js, analytics.js, 
                                    and dc.js) from sharing information with Google Analytics about visits activity."
                            textbox3="For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: 
                                    http://www.google.com/intl/en/policies/privacy/"
                        />

                        <AccordionBox
                            title="Payments processors"
                            textbox1="We provide paid products and/or services on our Website. In that case, we use third-party services for payment 
                                    processing (e.g. payment processors)."
                            textbox2="We will not store or collect your payment card details. That information is provided directly to our third-party 
                                    payment processors whose use of your personal information is governed by their Privacy Policy. These payment 
                                    processors adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council.
                                    If you have any questions about this Privacy Policy, please contact us at:policy@sidebrief.com."
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
                    <Text color="gray.700" fontWeight={700}> {title ? title : ""} </Text>
                </AccordionButton>
                <AccordionPanel pb={4}>
                    <Text color="gray.700" fontSize={{ base:12, md:14 }} mb={2} fontWeight={500}> {altText ? altText : ""} </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }} mb={2}> {textbox1 ? textbox1 : ""} </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }} mb={2}> {textbox2 ? textbox2 : ""} </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }} mb={2}> {textbox3 ? textbox3 : ""} </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }} mb={2}> {textbox4 ? textbox4 : ""} </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }} mb={2}> {textbox5 ? textbox5 : ""} </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }} mb={2}> {textbox6 ? textbox6 : ""} </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }} mb={2}> {textbox7 ? textbox7 : ""} </Text>
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

export default PrivacyPolicy

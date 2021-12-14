import React from 'react'
import { Flex } from '@chakra-ui/layout'
import { Image, List, ListIcon, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, } from '@chakra-ui/react'


const PaymentPolicy = () => {
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
                    <Text color="gray.700" fontWeight={700}>Payment Policy</Text>
                    <Text color="gray.400" fontSize={14} mt={0}>How we process payments and refunds.</Text>
                </Flex>

                <Flex flexDirection="column" p={{ base:15, md:50 }} w="100%">

                    <Accordion w="100%">
                        <AccordionBox
                            title="Our Privacy Policy."
                            textbox1="This payment policy explains how we collect and refund fees for our Services."
                            textbox2="For Services ordered under our Terms Engagement, you agree to pay Sidebrief the 
                                applicable fees in accordance with our then current standard fee schedules for such 
                                Services (or such other fees as we may agree to with you, such as for Compliance 
                                Services in certain jurisdictions or where we are asked to take on a larger role as 
                                described above). We reserve the right to modify those fees at any time."
                            textbox3="Our fees are exclusive of any taxes, levies, or duties, you are wholly responsible 
                                for any taxes, levies or duties that may arise out of this Agreement or your purchase or 
                                use of the Services, including without limitation sales, use or value-added taxes."
                            textbox4="All fees are due in advance at the time of purchase and are non-refundable. While 
                                we are under no obligation to do so, to the extent that we advance any amounts on your 
                                behalf, including without limitation taxes, filing fees, courier and delivery charges, 
                                and any other third-party fees or charges, you agree to reimburse us for such amounts 
                                immediately upon our request or invoice. If we do not receive payment from your payment 
                                account issuer or its agent, then you agree to pay all amounts due upon demand by 
                                Sidebrief or any of our agents."
                            textbox5="Amounts not paid when due are subject to a finance charge of 1.5% per month on any 
                                outstanding balance, or the maximum permitted by law, whichever is greater, plus all 
                                reasonable expenses of collection."
                            textbox6="Sidebrief may add new services for additional fees and charges, or amend fees and 
                                charges for existing services, at any time in its sole discretion."
                            textbox7="You authorize Sidebrief to bill you (and charge your card where applicable) for all 
                                fees and charges incurred in connection with your use of our subscription Services, 
                                Sidebrief’s fees, government fees, registered agent and other third party fees."
                            textbox8="If you register with us and subscribe to our Service, you may cancel your account at 
                                any time; however, there are no refunds for cancellation."
                            textbox9="In the event that Sidebrief suspends or terminates your account or this terms of 
                                service, you understand and agree that you shall receive no refund or exchange for any 
                                Sidebrief Services, any unused time or service on a subscription, any license or subscription 
                                fees for any portion of the Services, any content or data associated with your account, or 
                                for anything else."
                            textbox10="You agree to pay all charges incurred by users of your credit card, debit card, or 
                                other payment method used in connection with a purchase or transaction or other monetary 
                                transaction interaction with the Services at the prices in effect when such charges are 
                                incurred."
                            textbox11="If you have any questions about this Payment Policy, please contact us at: 
                                policy@sidebrief.com."
                        />

                    </Accordion>

                </Flex>

            </Flex>
        </>
    )
}


export const AccordionBox = ({ ...props }) => {
    return (
        <>
            <AccordionItem>
                <AccordionButton>
                    <Text color="gray.700" fontWeight={700}> {props.title ? props.title : ""} </Text>
                </AccordionButton>
                <AccordionPanel pb={4}>
                    <Text color="gray.700" fontSize={{ base:12, md:14 }} mb={2} fontWeight={500}> {props.altText ? props.altText : ""} </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }} mb={2}> {props.textbox1 ? props.textbox1 : ""} </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }} mb={2}> {props.textbox2 ? props.textbox2 : ""} </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }} mb={2}> {props.textbox3 ? props.textbox3 : ""} </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }} mb={2}> {props.textbox4 ? props.textbox4 : ""} </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }} mb={2}> {props.textbox5 ? props.textbox5 : ""} </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }} mb={2}> {props.textbox6 ? props.textbox6 : ""} </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }} mb={2}> {props.textbox7 ? props.textbox7 : ""} </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }} mb={2}> {props.textbox8 ? props.textbox8 : ""} </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }} mb={2}> {props.textbox9 ? props.textbox9 : ""} </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }} mb={2}> {props.textbox10 ? props.textbox10 : ""} </Text>
                    <Text color="gray" fontSize={{ base:12, md:14 }} mb={2}> {props.textbox11 ? props.textbox11 : ""} </Text>
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


export default PaymentPolicy 

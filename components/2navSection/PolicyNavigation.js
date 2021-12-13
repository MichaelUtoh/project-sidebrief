import React, { useState } from 'react'
import { Flex, Text } from '@chakra-ui/layout'
import DataPolicy from '../7policies/dataPolicy'
import PrivacyPolicy from '../7policies/privacyPolicy'
import PaymentPolicy from '../7policies/paymentPolicy'
import Disclaimer from '../7policies/disclaimers'
import TermsOfService from '../7policies/termsOfService'


const PolicyNavigation = () => {

    const [dataPolicy, setDataPolicy] = useState(true)
    const [privacyPolicy, setPrivacyPolicy] = useState(false)
    const [paymentPolicy, setPaymentPolicy] = useState(false)
    const [disclaimers, setDisclaimers] = useState(false)
    const [serviceTerms, setServiceTerms] = useState(false)

    const handleDataPolicy = () => { setDataPolicy(true), setPrivacyPolicy(false), setPaymentPolicy(false), setDisclaimers(false), setServiceTerms(false) };
    const handlePrivacyPolicy = () => { setDataPolicy(false), setPrivacyPolicy(true), setPaymentPolicy(false), setDisclaimers(false), setServiceTerms(false) };
    const handlePaymentPolicy = () => { setDataPolicy(false), setPrivacyPolicy(false), setPaymentPolicy(true), setDisclaimers(false), setServiceTerms(false) }
    const handleDisclaimers = () => { setDataPolicy(false), setPrivacyPolicy(false), setPaymentPolicy(false), setDisclaimers(true), setServiceTerms(false) }
    const handleServiceTerms = () => { setDataPolicy(false), setPrivacyPolicy(false), setPaymentPolicy(false), setDisclaimers(false), setServiceTerms(true) }

    return (
        <>
            <Flex alignItems={{ base:"center", }} px={{ base:"15px", md:"30px", lg:90}}>
                <Flex alignItems="start" flexDirection="column" fontSize={{ base:14, md:16 }} h={{ base:"100vh" }} justifyContent="center" p={4} w={{ base:"15%"}}>
                    <Text color="gray.600" cursor="pointer" fontWeight={700} mb={3} onClick={() => handleDataPolicy()}>Data Policy</Text>
                    <Text color="gray.600" cursor="pointer" fontWeight={700} mb={3} onClick={() => handlePrivacyPolicy()}>Privacy Policy</Text>
                    <Text color="gray.600" cursor="pointer" fontWeight={700} mb={3} onClick={() => handlePaymentPolicy()}>Payment Policy</Text>
                    <Text color="gray.600" cursor="pointer" fontWeight={700} mb={3} onClick={() => handleDisclaimers()}>Disclaimers</Text>
                    <Text color="gray.600" cursor="pointer" fontWeight={700} mb={3} onClick={() => handleServiceTerms()}>Terms of Service</Text>
                </Flex>

                <Flex w={{ base:"85%" }}>
                    {dataPolicy ? <DataPolicy /> : ""}
                    {privacyPolicy ? <PrivacyPolicy /> : ""}
                    {paymentPolicy ? <PaymentPolicy /> : ""}
                    {disclaimers ? <Disclaimer /> : ""}
                    {serviceTerms ? <TermsOfService /> : ""}
                </Flex>
            </Flex>

        </>
    )
}

export default PolicyNavigation;

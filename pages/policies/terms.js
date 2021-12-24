import React, { useState } from 'react'
import { Flex, Text } from '@chakra-ui/layout'
import TermsOfService from '../../components/7policies/termsOfService'
import Link from 'next/link'
import TopNavigation from '../../components/2navSection/TopNavigation'
import FooterComponent from '../../components/3footerSection/Footer'


const PaymentPolicyPage = () => {

    return (
        <>
            <TopNavigation />
            <Flex alignItems={{ base:"top", }} px={{ base:"15px", md:"30px", lg:90}}>
                <Flex
                    alignItems="start"
                    display={{ base:"none", md:"flex" }}
                    flexDirection="column"
                    fontSize={{ base:14, md:16 }}
                    h={{ base:"100vh" }}
                    justifyContent="flex-start"
                    p={4}
                    pt={{ base:200 }}
                    w={{ base:"15%"}}
                >
                    <Link href="/policies/data" passHref={true}><Text color="#5a5a5a" cursor="pointer" fontFamily="poppins" fontWeight={700} mb={3}>Data Policy</Text></Link>
                    <Link href="/policies/privacy" passHref={true}><Text color="#5a5a5a" cursor="pointer" fontFamily="poppins" fontWeight={700} mb={3}>Privacy Policy</Text></Link>
                    <Link href="/policies/payment" passHref={true}><Text color="#5a5a5a" cursor="pointer" fontFamily="poppins" fontWeight={700} mb={3}>Payment Policy</Text></Link>
                    <Link href="/policies/disclaimers" passHref={true}><Text color="#5a5a5a" cursor="pointer" fontFamily="poppins" fontWeight={700} mb={3}>Disclaimers</Text></Link>
                    <Link href="/policies/terms" passHref={true}><Text color="#5a5a5a" cursor="pointer" fontFamily="poppins" fontWeight={700} mb={3}>Terms of Service</Text></Link>
                </Flex>

                <Flex w={{ base:"100%", md:"85%" }}>
                    <TermsOfService />
                </Flex>
            </Flex>
            <FooterComponent />
        </>
    )
}

export default PaymentPolicyPage;

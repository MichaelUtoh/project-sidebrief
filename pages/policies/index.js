import React from 'react'
import Header from '../../components/1headSection/Header'
import PolicyNavigation from '../../components/2navSection/PolicyNavigation'
import TopNavigation from '../../components/2navSection/TopNavigation'
import FooterComponent from '../../components/3footerSection/Footer'
import { Flex } from '@chakra-ui/layout'

const Policies = () => {
    return (
        <>
            <Header title="Policy" />
            <TopNavigation />
            <PolicyNavigation />
            <FooterComponent />
        </>
    )
}

export default Policies

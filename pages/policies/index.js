import { Flex } from '@chakra-ui/layout'
import React from 'react'
import PolicyNavigation from '../../components/2navSection/PolicyNavigation'
import TopNavigation from '../../components/2navSection/TopNavigation'
import FooterComponent from '../../components/3footerSection/Footer'

const Policies = () => {
    return (
        <>
            <TopNavigation />
            <PolicyNavigation />
            <FooterComponent />
        </>
    )
}

export default Policies

import React from 'react'
import Link from 'next/link'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { Button, Image, useMediaQuery } from '@chakra-ui/react'
import { FaFacebookSquare, FaiInstagram, FaInstagram, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import FooterComponent from '../3footerSection/Footer';
import PartnersComponent from './partnersComponent';
import InfoComponent from './infoProcess';
import CardsComponent from './sidebriefCards';
import SupportComponent from './supportBox';
import ArrowComponent from './arrowDown';
import HeroComponent from './heroComponent';


const WelcomeBox = () => {
    return (
        <>
            <HeroComponent />
            <ArrowComponent />
            <PartnersComponent />
            <InfoComponent />
            <CardsComponent />
            <SupportComponent />
        </>
    )
}

export default WelcomeBox

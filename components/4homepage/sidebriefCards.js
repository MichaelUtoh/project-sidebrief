import React from 'react'
import { Image } from '@chakra-ui/image'
import { Divider, Flex, Text } from '@chakra-ui/layout'

const CardsWrapper = () => {
    return (
        <>
            <Flex flexDirection="column" alignItems="center" px={{ base:"15px", md:"30px", lg:90}}>
                <Text fontSize={{ base:22 }} fontWeight={700} textAlign={{ baseline:"center", lg:"center"}}>Why businesses love Sidebrief</Text>
                <Divider bg="cyan.400" h={1} mt={2} w={10} />

                {/* Why Customers love Sidebrief Cards */}
                <Flex flexWrap="wrap" justifyContent="center" py={4}>

                    <Card image_url={"/cardIcons/icon1.png"} title="Easy to use" description="Simple to use platform with no complex paperwork." />
                    <Card image_url={"/cardIcons/icon2.png"} title="Transparent Pricing" description="Clear and transparent pricing with no hidden charges." />
                    <Card image_url={"/cardIcons/icon3.png"} title="Speedy delivery" description="Completion timelines faster than traditional service providers." />
                    <Card image_url={"/cardIcons/icon4.png"} title="Secure service" description="Security of client information and privacy is paramount." />
                    <Card image_url={"/cardIcons/icon5.png"} title="Assured quality" description="Documents are vetted and prepared by qualified team." />
                    <Card image_url={"/cardIcons/icon6.png"} title="Dedicated service" description="Dedicated client officer for your questions and requests." />

                </Flex>

            </Flex>
        </>
    )
}

export const Card = ({ image_url, title, description }) => {
    return (
        <>
            <Flex
                alignItems="center"
                bg="white"
                border="1px"
                borderColor="gray.100"
                className="animate-card"
                flexDirection="column"
                m={{ base:5, md:7 }}
                px={2}
                py={{ base:4, md:8 }}
                w={{ base:"full", md:250}}
            >
                <Image src={image_url} w={6} />
                <Text fontSize={{ base:16, md:20 }} fontWeight={700} pt={2} textAlign="center">{title}</Text>
                <Text color="gray.500" fontSize={{base:14, md:16, lg:16}} textAlign="center" pt={3}>{description}</Text>
            </Flex>
        </>
    )
}

export default CardsWrapper

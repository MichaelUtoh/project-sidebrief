import { Avatar, Flex, Image, Text } from "@chakra-ui/react"


export const Card = ({ ...props }) => {
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
                <Image src={props.image_url ? props.image_url : ""} w={6} />
                <Text fontSize={{ base:16, md:20 }} fontWeight={700} pt={2} textAlign="center">{props.title ? props.title : ""}</Text>
                <Text color="gray.500" fontSize={{base:14, md:16, lg:16}} textAlign="center" pt={3}>{props.description ? props.description : ""}</Text>
            </Flex>
        </>
    )
}


export const CardStyle2 = ({ ...props }) => {
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
                <Image src={props.image_url ? props.image_url : <Avatar/>} w={6} />
                <Text color="cyan.400" fontSize={{ base:14, md:16 }} fontWeight={700} pt={2} textAlign="center">{props.title ? props.title : ""}</Text>
                <Text color="gray.500" fontSize={{base:14, md:16, lg:16}} textAlign="center" pt={3}>{props.snippet ? props.snippet : ""}</Text>
            </Flex>
        </>
    )
}
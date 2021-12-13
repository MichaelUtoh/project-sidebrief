import { Image, List, ListIcon, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, } from '@chakra-ui/react'


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

export default AccordionBox

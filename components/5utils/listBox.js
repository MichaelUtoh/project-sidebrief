import { Image, List, ListIcon, ListItem, UnorderedList } from '@chakra-ui/react'


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

export default ListBox
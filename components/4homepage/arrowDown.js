import React from 'react'
import Link from 'next/link'
import { Flex } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'

const ArrowComponent = () => {
    return (
        <>
            {/* Arrow  down */}
            <Flex justifyContent="center" my={4}>
                <Link href="#info">
                    <Image cursor="pointer" src="63278-down-arrow.gif" h={6} />
                </Link>
            </Flex>
        </>
    )
}

export default ArrowComponent

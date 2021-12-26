import React from 'react'
import { Box, Divider, Flex } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/react'
import Typed from 'typed.js'

const InfoComponent = () => {
    return (
        <>
            <Flex alignItems="center" bg="linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)" borderRadius={10} h={400} flexDirection="column" justifyContent="center" px={{ base:"15px", md:"30px", lg:90}} my={10} mx="auto" my={24} w={{ base:"90%", md:"80%" }}>
                {/* Welcome text */}
                <Flex flexDirection="column" alignItems="start">
                    <Text color="#5a5a5a" fontFamily="cutive" fontSize={{ base:"16px", lg:"24px" }} fontWeight={700} textAlign={{ base:"center" }}>The easiest way to start doing business in any market.</Text>
                    <TypedComponent />
                </Flex>
            </Flex>
        </>
    )
}

export const TypedComponent = () => {
    const el = React.useRef(null);
    const typed = React.useRef(null);
    
    React.useEffect(() => {
        const options = {
            strings: [
                '1. Sign-up or login to your Sidebrief dashboard.',
                '2. Provide formation info and documents.',
                '3. Pay and wait for formation of company.'
            ],
            loop: true,
            typeSpeed: 60,
            backSpeed: 10,
        }

        typed.current = new Typed(el.current, options);
        return () => {
            typed.current.destroy();
        }
    }, [])

    return (
        <div>
            <div className="type-wrap">
                <Text color="#5a5a5a" fontFamily="poppins" fontSize={{ base:12, md:18}} fontWeight={500} style={{ whiteSpace: 'pre' }} ref={el} />
            </div>
        </div>
    )
}

export default InfoComponent

import React from 'react'
import { Box, Flex } from '@chakra-ui/layout'
import { Button, Image, Text } from '@chakra-ui/react'
import Typed from 'typed.js'

const InfoComponent = () => {
    return (
        <>
            <Flex alignItems="center" bg="#5a5a5a" borderRadius={10} h={400} flexDirection="column" justifyContent="center" px={{ base:"15px", md:"30px", lg:90}} my={10} mx="auto" w="80%">
                {/* Welcome text */}
                <Flex flexDirection="column" alignItems="start">
                    <Text color="#fff" fontFamily="cutive" fontSize={{ base:"16px", lg:"18px" }} fontWeight={700} textAlign={{ base:"center" }}>The easiest way to start doing business in any market.</Text>
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
                'Sign-up or login to your Sidebrief dashboard.',
                'Provide formation info and documents.',
                'Pay and wait for formation of company.'
            ],
            loop: true,
            typeSpeed: 50,
            backSpeed: 50,
        }

        typed.current = new Typed(el.current, options);
        return () => {
            typed.current.destroy();
        }
    }, [])

    return (
        <div>
            <div className="type-wrap">
                <Text color="#f8f8f8" fontFamily="poppins" fontWeight={300} style={{ whiteSpace: 'pre' }} ref={el} />
            </div>
        </div>
    )
}

export default InfoComponent

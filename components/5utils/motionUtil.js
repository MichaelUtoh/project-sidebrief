import { Flex } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Flex)
const MotionBtn = motion(Button)

export function FadeInBox({ text }) {
  return (
    <MotionBox
      height='inherit'
      bg='white'
      initial='hidden'
      animate='visible'
      transition={{ delay: .5 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          delay: 1,
        }
      }}
    >
    {text}
    </MotionBox>
  )
}

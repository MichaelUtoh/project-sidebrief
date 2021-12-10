import Head from 'next/head'
import { Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import Header from '../components/1headSection/Header'
import HomepageComponent from '../components/4homepage/index.js'


export default function Home() {
  return (
    <div >
      <Header title="Home" />
      <HomepageComponent />

      
    </div>
  )
}

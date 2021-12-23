import React from 'react'
import { Flex, Image } from '@chakra-ui/react'
import { Autoplay, Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';



const SliderComponent = () => {
    return (
        <>
            <Swiper
                Autoplay="true"
                spaceBetween={1}
                slidesPerView={10}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                width="100%"
            >
                    <SwiperSlide><Image src="/partnerLogos/01.png" h={{ base:"60px", md:"100px"}} w={{ base:"60px", md:"100px"}} /></SwiperSlide>
                    <SwiperSlide><Image src="/partnerLogos/02.png" h={{ base:"60px", md:"100px"}} w={{ base:"60px", md:"100px"}} /></SwiperSlide>
                    <SwiperSlide><Image src="/partnerLogos/03.png" h={{ base:"60px", md:"100px"}} w={{ base:"60px", md:"100px"}} /></SwiperSlide>
            </Swiper>
            {/* <Flex flexWrap="wrap" justifyContent="space-between" overflowX="hidden">
                <Image src="/partnerLogos/01.png" h={{ base:"60px", md:"100px"}} w={{ base:"60px", md:"100px"}} />
                <Image src="/partnerLogos/02.png" h={{ base:"60px", md:"100px"}} w={{ base:"60px", md:"100px"}} />
                <Image src="/partnerLogos/03.png" h={{ base:"60px", md:"100px"}} w={{ base:"60px", md:"100px"}} />
                <Image src="/partnerLogos/04.png" h={{ base:"60px", md:"100px"}} w={{ base:"60px", md:"100px"}} />
                <Image src="/partnerLogos/05.png" h={{ base:"60px", md:"100px"}} w={{ base:"60px", md:"100px"}} />
                <Image src="/partnerLogos/06.png" h={{ base:"60px", md:"100px"}} w={{ base:"60px", md:"100px"}} />
                <Image src="/partnerLogos/07.png" h={{ base:"60px", md:"100px"}} w={{ base:"60px", md:"100px"}} />
                <Image src="/partnerLogos/08.png" h={{ base:"60px", md:"100px"}} w={{ base:"60px", md:"100px"}} />
            </Flex> */}
        </>
    )
}

export default SliderComponent

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Center, Image } from '@chakra-ui/react'


export const SliderComponent = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ 
        align: "center",
        loop: true,
        skipSnaps: true,
        slidesToScroll: 1,
    }, [Autoplay()])
  
    return (
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide"><Image alt="" src="/partnerLogos/01.png" h={{ base:"60px", md:"100px"}} w={{ base:"60px", md:"100px"}} /></div>
          <div className="embla__slide"><Image alt="" src="/partnerLogos/02.png" h={{ base:"60px", md:"100px"}} w={{ base:"60px", md:"100px"}} /></div>
          <div className="embla__slide"><Image alt="" src="/partnerLogos/03.png" h={{ base:"60px", md:"100px"}} w={{ base:"60px", md:"100px"}} /></div>
          <div className="embla__slide"><Image alt="" src="/partnerLogos/04.png" h={{ base:"60px", md:"100px"}} w={{ base:"60px", md:"100px"}} /></div>
          <div className="embla__slide"><Image alt="" src="/partnerLogos/05.png" h={{ base:"60px", md:"100px"}} w={{ base:"60px", md:"100px"}} /></div>
          <div className="embla__slide"><Image alt="" src="/partnerLogos/06.png" h={{ base:"60px", md:"100px"}} w={{ base:"60px", md:"100px"}} /></div>
          <div className="embla__slide"><Image alt="" src="/partnerLogos/07.png" h={{ base:"60px", md:"100px"}} w={{ base:"60px", md:"100px"}} /></div>
          <div className="embla__slide"><Image alt="" src="/partnerLogos/08.png" h={{ base:"60px", md:"100px"}} w={{ base:"60px", md:"100px"}} /></div>
        </div>
      </div>
    )
  }

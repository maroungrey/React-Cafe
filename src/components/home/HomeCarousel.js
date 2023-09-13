import React from 'react'
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';

const galleryData = [
  {
      image: 'banner-1',
      alt: 'Gallery image 1'
  },
  {
      image: 'banner-2',
      alt: 'Gallery image 2'
  },
  {
      image: 'banner-3',
      alt: 'Gallery image 3'
  },
]

export default function HomeCarousel() {
  return (
    <section> 
      <Carousel controls={false} indicators={false}> 
              {
                  galleryData.map((item)=>(
                      <Carousel.Item>
                          <Image src={require('../../assets/' + item.image + '.webp')} className="d-block w-100" fluid/>
                      </Carousel.Item>
                      ))
              }
      </Carousel>
  </section>
  )
}

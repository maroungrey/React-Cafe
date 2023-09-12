import React from 'react'
import { Container } from 'react-bootstrap'
import { ParallaxBanner } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function Parallax() {
  return (
    <section >
        <Container className="position-relative d-flex justify-content-center p-0">
            <ParallaxProvider>
                <ParallaxBanner 
                            layers={[
                                { image: require('../../assets/banner-4.jpg'), speed: -20 },
                            ]}
                            className=""
                style={{ height: '500px' }} />
                <div className="text-center vertical-center p-4 bg-image-text-bg mx-5 parallax-card">
                    <h1><span>Pearl Cafe</span></h1>
                    <div className="mx-auto">
                        <p> Founded in 1989, Pearl Cafe is serves an award-winning variety of European-Style breakfast and lunch dishes along with home-made desserts and delicious coffee.</p>
                    </div>
                </div>
            </ParallaxProvider>
        </Container>
    </section>
  )
}

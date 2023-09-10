import React from 'react'
import AppNavbar from '../components/navbar';
import AppFooter from '../components/footer';
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';

import { Parallax } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function HomePage() {
    
  return (
    <div>
        <header>
            <AppNavbar />
        </header>


        <section className='hero-block'> 

            <Carousel controls={false} indicators={false}>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={'https://placehold.co/1200x400'}
                        alt='Hero Image'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={'https://placehold.co/1200x400'}
                        alt='Hero Image'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={'https://placehold.co/1200x400'}
                        alt='Hero Image'
                    />
                </Carousel.Item>
            </Carousel>

        </section>

        <section>
            <Container>
                <Row className="py-4">
                    <Col className="text-center"  ><span><i class="fa-solid fa-location-dot p-1"></i>999 Marouns Ave, Los Marounes CA 99999</span></Col>
                </Row>
            </Container>
        </section>

        <section >
        <Container className="position-relative d-flex justify-content-center p-0">
            <ParallaxProvider>
                <ParallaxBanner 
                            layers={[
                                { image: 'https://placehold.co/600x400', speed: -20 },
                            ]}
                            className=""
                style={{ height: '500px' }} />
                <div className="text-center vertical-center p-4 bg-image-text-bg mx-5 parallax-card">
                    <h1><span>CAFE</span></h1>
                    <div className="mx-auto">
                        <p>Founded in 1989, Cafe is an award-winning restaurant offering a world class breakfast and lunch experience. </p>
                    <a href="/about"><Button>Our Locations</Button></a>
                    </div>
                </div>
            </ParallaxProvider>
            </Container>
        </section>

        <section>
        <Container>
            <Row>
                <Col xs={12} lg={6}>
                    <div>
                        <div className="text-center p-5">
                            <h1>OUR MENU</h1>
                            <p>At Café, customers can expect dishes prepared with premium ingredients from scratch and to-order, with service that is refreshingly personal, yet professional in environments that are vibrant and convivial.</p>
                            <Row >
                                <Col className="d-flex justify-content-center"><Button>Order Online</Button></Col>
                                <Col className="d-flex justify-content-center"><Button>View Menu</Button></Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col xs={12} lg={6} className="p-0 d-flex justify-content-center">
                    <Image src='https://placehold.co/660x420' fluid/>
                </Col>
            </Row>
            <Row>
                <Col xs={12} lg={6} className="p-0 d-flex justify-content-center">
                    <Image src='https://placehold.co/660x400' fluid/>
                </Col>
                <Col xs={12} lg={6} className="p-0 d-flex justify-content-center">
                    <Image src='https://placehold.co/660x400' fluid/>
                </Col>
            </Row>
            <Row>
                <Col xs={12} lg={6} className="p-0 d-flex justify-content-center">
                    <Image src='https://placehold.co/660x400' fluid/>
                </Col>
                <Col xs={12} lg={6} className="p-0">
                    <div>
                        <div className="text-center p-5">
                            <h1>WE CATER</h1>
                            <p>Café would love to cater your party, business meeting or corporate event!</p>
                            <Row >
                                <Col className="d-flex justify-content-center"><Button>Inquire Now</Button></Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>             
        </section>



        <footer>
          <AppFooter />
        </footer>
    </div>
  )
}
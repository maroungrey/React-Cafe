import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import './Gallery.css';

export default function Gallery() {
  return (
    <section>
        <Container className='pt-5 line-border'>
            <Row>
                <Col xs={12} lg={6} className="p-0 d-flex justify-content-center">
                    <Image src={require('../../assets/gal-1.webp')} fluid/>
                </Col>
                <Col xs={12} lg={6} className='bg-pattern p-0 d-flex justify-content-center align-items-center'>
                    <div className="text-center p-3 my-5 mx-auto gallery-text-container">
                        <h1>Artful Delights</h1>
                        <p>Delicious, homemade food & beverages at our friendly cafe, where each dish is a work of art. Good food, good vibes – come hungry, leave happy!</p>
                        <div className='text-center'>
                            <div className="d-inline-block p-2"><a href='https://www.doordash.com/home/'><Button>Order Online</Button></a></div>
                            <div className="d-inline-block p-2"><a href='/menu'><Button>View Menu</Button></a></div>
                        </div>
                    </div>
                </Col>

            </Row>
            <Row>
                <Col xs={12} lg={6} className="p-0 d-flex justify-content-center">
                    <Image src={require('../../assets/gal-2.webp')} fluid/>
                </Col>
                <Col xs={12} lg={6} className="p-0 d-flex justify-content-center">
                    <Image src={require('../../assets/gal-3.webp')} fluid/>
                </Col>
            </Row>
            <Row>
                <Col xs={12} lg={6} className="bg-pattern p-0 d-flex justify-content-center align-items-center">
                    <div className="text-center p-3 my-5 mx-auto gallery-text-container">
                        <h1>Meet and Study</h1>
                        <p>A perfect spot for productive business meetings, focused study sessions, and creative brainstorming, offering a cozy and inviting ambiance, artisanal coffee, and delicious treats.</p>
                        <Row >
                            <Col className="d-flex justify-content-center"><a href='/contact'><Button>Inquire Now</Button></a></Col>
                        </Row>
                    </div>   
                </Col>
                <Col xs={12} lg={6} className="p-0 d-flex justify-content-center">
                    <Image src={require('../../assets/gal-4.webp')} fluid/>
                </Col>
            </Row>
        </Container>             
    </section>
  )
}

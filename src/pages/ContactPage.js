import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AppNavbar from '../components/navbar';
import AppFooter from '../components/footer';
import MapImg from '../assets/map.webp'

export default function ContactPage() {
  return (
    <div>
        
          <AppNavbar />
        

        <section >
            <div className='text-center bg-image d-flex justify-content-center' id='contact-banner'>
                <div className='bg-image-text-container'>
                <div className='bg-image-text-bg mx-auto'>
                    <h1><span>CONTACT US</span></h1>
                </div>
                </div>
            </div>        
        </section>

        <Container>
            <Row className='py-5'>
              

              <Col lg={12} xl={4} className='p-5'>
                      <div>
                          <Image src={MapImg} fluid/>
                      </div>
                    </Col>

                    <Col lg={12} xl={4} className='px-5 pt-4'>

                    <Form>
                      <Form.Group className="mb-3" controlId="contactForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="contactForm.ControlInput2">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="contactForm.ControlTextarea1">
                        <Form.Label>Details</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                      <Button variant="dark">Submit</Button>
                    </Form>

                    </Col>
                    <Col lg={12} xl={4} className="px-5 pt-5">
                      <p>999 Marouns Ave, Los Marounes CA 99999</p>
                      <p>Tuesday - Saturday : 10am – 7pm</p>
                      <p>Sunday - Monday : 10am – 6pm</p>
                      <p>+1 (000) 000-000</p>
                      <p>example@example.com</p>

                      <Row className="py-2">
                        <Col xs="auto" sm="auto" md="auto" lg="auto" className="m-1"><a href='#'><i className="fa-brands fa-facebook-f"></i></a></Col>
                        <Col xs="auto" sm="auto" md="auto" lg="auto" className="m-1"><a href='#'><i className="fa-brands fa-instagram"></i></a></Col>
                      </Row>
                    </Col>


            </Row>
        </Container>

        <footer>
          <AppFooter />
        </footer>
    </div>
  )
}
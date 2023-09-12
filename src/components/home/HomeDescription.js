import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function HomeDescription() {
  return (
    <section>
    <Container className='py-5'>
        <Row className='text-center py-2'>
            <h1>Eat, Drink, Relax</h1>
            <p>Step into the warm embrace of Pearl Cafe, where fantastic food meets cozy ambiance. We pour love into every dish, crafting them from scratch with the freshest ingredients. From refreshing drinks to hearty breakfasts, satisfying lunches, and irresistible desserts, we've got it all covered. It's all about good food and good vibes here.</p>
        </Row>

        <Row className='text-center py-2'>
            <Col >
            <i class="fa-solid fa-mug-saucer fa-lg"></i>
                 <h5>Coffee</h5>   
            </Col>
            <Col>
            <i class="fa-solid fa-utensils fa-lg"></i>
                 <h5>Breakfast</h5>   
            </Col>
            <Col>
            <i class="fa-solid fa-burger fa-lg"></i>
                 <h5>Lunch</h5>   
            </Col>
            <Col>
            <i class="fa-solid fa-ice-cream fa-lg"></i>
                 <h5>Desserts</h5>   
            </Col>
        </Row>
    </Container>
    </section>
  )
}

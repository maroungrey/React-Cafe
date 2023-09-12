import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function AddressLine() {
  return (
    <section>
        <Container>
            <Row className="py-4">
                <Col className="text-center"  ><span><i className="fa-solid fa-location-dot p-1"></i>999 Marouns Ave, Los Marounes CA 99999</span></Col>
            </Row>
        </Container>
    </section>
  )
}

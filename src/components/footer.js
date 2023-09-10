import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function AppFooter() {
  return (
    <div>
        <Container className="d-flex flex-column align-items-center mt-5 p-3 footer-border">

            <Row className="py-2">
              <Col className="m-1"><a href='#'><i class="fa-brands fa-facebook-f"></i></a></Col>
              <Col className="m-1"><a href='#'><i class="fa-brands fa-instagram"></i></a></Col>
              <Col className="m-1"><a href='#'><i class="fa-brands fa-twitter"></i></a></Col>
              <Col className="m-1"><a href='#'><i class="fa-brands fa-tiktok"></i></a></Col>
            </Row>
            <Row>© {new Date().getFullYear()} Cafe. All rights reserved.</Row>
        </Container>
    </div>
  )
}
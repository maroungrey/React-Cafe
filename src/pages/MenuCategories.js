import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Data from './MenuData';

export default function MenuCategories({menuCategories, filterItems, setItems}) {
  return (
    <Row className='m-3'>
        {
            menuCategories.map(val => (
                <Col className='d-flex justify-content-center mx-auto p-0'>
                    <Button className='mx-auto' onClick={() => filterItems(val)}>
                        {val}
                    </Button>
                </Col>
            ))
        }
        <Col className='d-flex justify-content-center mx-auto p-0'>
            <Button onClick={() => setItems(Data)}>
                All
            </Button>
        </Col>
    </Row>
  )
}

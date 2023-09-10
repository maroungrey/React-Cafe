import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import AppNavbar from '../components/navbar';
import AppFooter from '../components/footer';
import Data from './MenuData';
import MenuCategories from './MenuCategories';



export default function MenuPage() {

const [item, setItems] = useState(Data)
const menuCategories = [...new Set(Data.map((val) => val.category))]

const filterItems = (cat) => {
  const newItems = Data.filter((newval) => newval.category === cat )
  setItems(newItems)
}

  return (
    <div>
    <header className="App-header">
        <AppNavbar />
    </header>

    <section >
      <div className='text-center bg-image d-flex justify-content-center'>
        <div className='bg-image-text-container'>
          <div className='bg-image-text-bg mx-auto'>
            <h1><span>MENU</span></h1>
          </div>
        </div>
      </div>        
    </section>

    <section className='.bg-pattern'>

    <Container>
      <MenuCategories 
          menuCategories = {menuCategories} 
          filterItems = {filterItems}
          setItems={setItems}
        />
      <Row>
        {item.map((val) => (
            <Col key={val.id} sm={6} md={4} className='card my-3 border-0'>
                <div className='card-img-top text-center'>
                  <Image src={val.image} alt={val.alt} className="w-75"/>
                </div>
                <div className='card-body'>
                  <div className='card-title'>
                    {val.title} --- {val.price}
                  </div>
                  <div className='card-text'>
                    {val.desc}
                  </div>
                </div>
              </Col>
          ))}
      </Row>
    </Container>


    </section>

    <footer>
      <AppFooter />
    </footer>
</div>
  )
}
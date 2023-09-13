import React, { useState } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import AppNavbar from '../components/navbar';
import AppFooter from '../components/footer';
import Data from '../components/menu/MenuData';
import MenuCategories from '../components/menu/MenuCategories';



export default function MenuPage() {

const [item, setItems] = useState(Data)
const menuCategories = [...new Set(Data.map((val) => val.category))]

const filterItems = (cat) => {
  const newItems = Data.filter((newval) => newval.category === cat )
  setItems(newItems)
}

  return (
    <div>
    <AppNavbar />
    <section >
      <div className='text-center bg-image d-flex justify-content-center' id='menu-banner'>
        <div className='bg-image-text-container'>
          <div className='bg-image-text-bg mx-auto'>
            <h1><span>MENU</span></h1>
          </div>
        </div>
      </div>        
    </section>

    <section>
    <Container>
      <MenuCategories 
          menuCategories = {menuCategories} 
          filterItems = {filterItems}
          setItems={setItems}
        />
      <Row>
        {item.map((val) => (
            <Col key={val.id} sm={6} md={4} lg={3} className='my-3 border-0'>
                <div className='card-img-top text-center'>
                  <Image src={require('../assets/menu/' + val.image + '.webp')} alt={val.title} className="rounded menu-item"/>
                  <div className='py-2'>
                    <div className='card-title'>
                      {val.title}
                    </div>
                    <div className='card-price'>
                      {val.price}
                    </div>
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
import React from 'react'
import AppNavbar from '../components/navbar';
import AppFooter from '../components/footer';
import { Container, Row, Col } from 'react-bootstrap'

export default function About() {
  return (
    <div>
        
            <AppNavbar />
        

        <section >
            <div className='text-center bg-image d-flex justify-content-center' id='about-banner'>
                <div className='bg-image-text-container'>
                <div className='bg-image-text-bg mx-auto'>
                    <h1><span>ABOUT</span></h1>
                </div>
                </div>
            </div>        
        </section>

        <Container>
            {/* Quote */}
            <div className='my-1'>
                <Row>
                    <Col>
                        <div className='mx-auto my-5 text-center'>
                            <div className="w-75 mx-auto">
                                <p>Established in 1989, Pearl Cafe has become a cherished culinary gem renowned for its exquisite European-style breakfast and lunch offerings. This beloved eatery has garnered accolades for its diverse menu that features an array of delectable dishes crafted with precision and passion. Patrons are treated to a gastronomic journey that spans from classic favorites to innovative creations, all expertly prepared and served in a welcoming and cozy atmosphere. Complementing the savory fare are the homemade desserts that are nothing short of divine, enticing diners to indulge their sweet cravings. With its commitment to excellence, Pearl Cafe   has not only won over the hearts and palates of its loyal customers but has also established itself as a go-to destination for coffee aficionados, who savor every sip of the rich and aromatic brews on offer.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>

        <footer>
          <AppFooter />
        </footer>
    </div>
  )
}
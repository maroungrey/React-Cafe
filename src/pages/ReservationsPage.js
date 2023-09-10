import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AppNavbar from '../components/navbar';
import AppFooter from '../components/footer';

export default function ReservationsPage() {
  return (
    <div>
    <header className="App-header">
        <AppNavbar />
    </header>

    <section >
      <div className='text-center bg-image d-flex justify-content-center'>
        <div className='bg-image-text-container'>
          <div className='bg-image-text-bg mx-auto'>
            <h1><span>Reservations</span></h1>
          </div>
        </div>
      </div>        
    </section>

    <section className='.bg-pattern'>

    </section>

    <footer>
      <AppFooter />
    </footer>
</div>
  )
}

import React from 'react'

import AppNavbar from '../components/navbar';
import AppFooter from '../components/footer';

import HomeCarousel from '../components/home/HomeCarousel';
import AddressLine from '../components/home/AddressLine';
import Parallax from '../components/home/Parallax';
import HomeDescription from '../components/home/HomeDescription';
import Gallery from '../components/home/Gallery';


export default function HomePage() {
    
  return (
    <div>
            <AppNavbar />
  

        <main>
            <HomeCarousel />
            <AddressLine />
            <Parallax />
            <HomeDescription />
            <Gallery />
        </main>

        <footer>
          <AppFooter />
        </footer>
    </div>
  )
}
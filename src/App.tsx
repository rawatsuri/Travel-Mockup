import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Rooms from './components/Rooms';
import Booking from './components/Booking';
import Features from './components/Features';
import TravelLocations from './components/TravelLocations';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Gallery />
      <Rooms />
      <Booking />
      <Features />
      <TravelLocations />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
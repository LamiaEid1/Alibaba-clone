import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import HeroSection from './pages/HeroSection';
import Footer from './Footer';
import NavBar from './NavBar';
import Services from './Services';
import ReviewSection from './ReviewSection';
import LastSection from './LastSection.jsx';

function App() {
  return (
    <Router> 
      <NavBar/>
      <HeroSection />
      <Services/>
      <ReviewSection/>
      <LastSection/>
      <Footer />
    </Router>
  );
}

export default App;
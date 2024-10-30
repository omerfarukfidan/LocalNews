import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Dropdown from '../components/Dropdown';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const navigate = useNavigate();

  const handleSelect = (city) => {
    if (city) {
      navigate(`/city/${city}`);
    }
  };

  return (
    <div className="home-container">
      <Header />
      <div className="content">
        <h2>Find Local News for Your City</h2>
        <Dropdown onSelect={handleSelect} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
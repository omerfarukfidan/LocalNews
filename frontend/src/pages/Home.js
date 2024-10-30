import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Dropdown from '../components/Dropdown';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleSelect = (city) => {
    if (city) {
      navigate(`/city/${city}`);
    }
  };

  const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix']; // Dummy data for cities

  return (
    <div className="home-container">
      <Header />
      <div className="content">
        <h2>Find Local News for Your City</h2>
        <Dropdown options={cities} onSelect={handleSelect} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
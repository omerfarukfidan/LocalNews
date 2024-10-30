import React, { useState } from 'react';

function Dropdown({ options, onSelect }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    onSelect(e.target.value);
  };

  return (
    <select value={selectedOption} onChange={handleChange} className="dropdown">
      <option value="">Select a city...</option>
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
  );
}

export default Dropdown;

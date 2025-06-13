import React, { useState } from 'react';
import openContentIcon from '../../images/icons/open-content.svg'; // Removed as SVG will be inlined

const FAQRow = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-row">
      <div className="faq-question" onClick={toggleOpen}>
        <p>{question}</p>
        <img 
          src={openContentIcon} 
          alt="Toggle FAQ" 
          className={`faq-toggle ${isOpen ? 'open' : ''}`}
        />
      </div>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FAQRow; 
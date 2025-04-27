import React, { useState } from 'react';
import BasketDetails from './BasketDetails';

const Basket: React.FC = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const cartItems = 3;

  return (
    <>
      <div className="indicator">
        <button 
          className="btn btn-primary btn-circle hover:btn-secondary h-7 w-7 min-h-0"
          onClick={() => setIsDetailsOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-primary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item badge-secondary">{cartItems}</span>
        </button>
      </div>
      <BasketDetails 
        isOpen={isDetailsOpen} 
        onClose={() => setIsDetailsOpen(false)} 
      />
    </>
  );
};

export default Basket; 
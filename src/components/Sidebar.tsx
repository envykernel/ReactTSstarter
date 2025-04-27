import React, { useState } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [selectedItem, setSelectedItem] = useState<string>('Item A');

  const menuItems = [
    { id: 'Item A', label: 'Item A' },
    { id: 'Item B', label: 'Item B' },
    { id: 'Item C', label: 'Item C' },
    { id: 'Item D', label: 'Item D' },
    { id: 'Item E', label: 'Item E' }
  ];

  return (
    <>
      {/* Overlay for mobile */}
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-black bg-opacity-50 z-40 lg:hidden ${isOpen ? 'block' : 'hidden'}`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className={`w-64 bg-base-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:relative fixed top-0 left-0 h-full z-50 lg:h-auto`}>
        <div className="p-4 h-full">
          {/* Close button for mobile */}
          <div className="flex justify-end lg:hidden mb-4">
            <button 
              className="btn btn-circle btn-ghost btn-sm"
              onClick={onClose}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="menu bg-base-200 w-full rounded-box">
            <li className="menu-title">Navigation</li>
            {menuItems.map((item) => (
              <li key={item.id}>
                <a 
                  className={`${selectedItem === item.id ? 'bg-primary text-primary-content font-bold' : ''}`}
                  onClick={() => setSelectedItem(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar; 
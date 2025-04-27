import React from 'react';
import Basket from './Basket';
import SearchBar from './SearchBar';

interface NavbarProps {
  onSidebarToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSidebarToggle }) => {
  return (
    <div className="navbar bg-base-100 shadow-lg min-h-16">
      <div className="flex-none lg:hidden">
        <button 
          className="btn btn-square btn-ghost"
          onClick={onSidebarToggle}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">After Sales - ReactJS</a>
      </div>
      <SearchBar />
      <div className="flex-none flex items-center">
        <ul className="menu menu-horizontal px-1">
        </ul>
        <div className="ml-4 mr-4">
          <Basket />
        </div>
      </div>
    </div>
  );
};

export default Navbar; 
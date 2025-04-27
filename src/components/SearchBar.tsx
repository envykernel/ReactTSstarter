import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="flex-1 max-w-md">
      <div className="form-control w-full">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search..." 
            className="input input-bordered w-full pl-10 focus:outline-none" 
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar; 
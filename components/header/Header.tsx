import React from 'react';

// components
import Navbar from './Navbar';

function Header() {
  return (
    <header
      className='
      px-4 h-[68px] flex items-center border-b custom-border-color 
      md:flex-col md:justify-center md:h-[100px] md:py-20
      xl:py-0 xl:flex-row xl:w-full xl:justify-start xl:px-8 xl:h-auto'
    >
      <Navbar />
    </header>
  );
}

export default Header;

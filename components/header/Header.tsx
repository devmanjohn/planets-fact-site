import React from 'react';

// components
import Navbar from './Navbar';

function Header() {
  return (
    <header className='px-4 h-[68px] flex items-center border-b custom-border-color'>
      <Navbar />
    </header>
  );
}

export default Header;

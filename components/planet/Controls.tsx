import React from 'react';

function Controls() {
  return (
    <section className='row-start-1 col-span-3'>
      <button className=''>
        <span className='hidden'>01</span>
        Overview
      </button>

      <button className=''>
        <span className='hidden'>02</span>
        Internal Structure
      </button>

      <button className=''>
        <span className='hidden'>03</span>
        Surface Geology
      </button>
    </section>
  );
}

export default Controls;

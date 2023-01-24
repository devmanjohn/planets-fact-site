import React from 'react';
import Image from 'next/image';

export default function PlanetImage() {
  return (
    <figure className='relative w-full h-full col-span-3 grid justify-center my-14'>
      <Image
        src='../assets/planet-earth.svg'
        width='173'
        height='173'
        alt='Planet Earth Illustration'
      />
    </figure>
  );
}

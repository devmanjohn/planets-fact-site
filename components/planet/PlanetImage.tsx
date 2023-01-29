import React from 'react';
import Image from 'next/image';

export default function PlanetImage({
  planetImage,
  size,
}: {
  planetImage: String;
  size: Number;
}) {
  return (
    <figure className='relative w-full h-full col-span-3 grid justify-center my-14'>
      <Image
        src={`.${planetImage}`}
        width={size}
        height={size}
        alt='Planet Earth Illustration'
      />
    </figure>
  );
}

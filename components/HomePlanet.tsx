import React from 'react';
import Image from 'next/image';
import PlanetModel from '../models/Planet';

export default function HomePlanet({ data }: { data: PlanetModel }) {
  return (
    <li className='mt-8'>
      <a href='/'>
        <h1 className='text-4xl uppercase'>{data.name}</h1>

        <figure className='relative mx-auto w-[175px] h-[175px] col-span-3 grid justify-center my-14 '>
          <Image
            src={`${data.images.planet}`}
            alt='Planet Earth Illustration'
            fill
          />
        </figure>
      </a>
    </li>
  );
}

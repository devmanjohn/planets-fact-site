import React, { ReactNode } from 'react';

type PlanetGridProps = {
  children: ReactNode;
};

export default function PlanetGrid({ children }: PlanetGridProps) {
  return <div className='grid grid-cols-3 text-center'>{children}</div>;
}

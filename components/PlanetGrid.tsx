import React, { ReactNode } from 'react';

type PlanetGridProps = {
  children: ReactNode;
};

export default function PlanetGrid({ children }: PlanetGridProps) {
  return <div>{children}</div>;
}

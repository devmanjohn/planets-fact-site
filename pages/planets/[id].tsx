import React, { useEffect, useState } from 'react';
import Head from 'next/head';

// components
import Header from '../../components/header/Header';
import Content, { StatCards } from '../../components/planet/Content';
import Controls from '../../components/planet/Controls';
import PlanetGrid from '../../components/PlanetGrid';
import PlanetImage from '../../components/planet/PlanetImage';
import PlanetModel from '../../models/Planet';

export default function Planet({ planetData }: { planetData: PlanetModel }) {
  const [contentToDisplay, setContentToDisplay] = useState<Number>(0);

  // dynamic data to display
  const [contentData, setContentData] = useState(planetData.structure.content);
  const [sourceData, setSourceData] = useState(planetData.structure.source);

  useEffect(() => {
    switch (contentToDisplay) {
      case 0:
        setContentData(planetData.overview.content);
        setSourceData(planetData.overview.source);
        break;

      case 1:
        setContentData(planetData.structure.content);
        setSourceData(planetData.structure.source);
        break;

      case 2:
        setContentData(planetData.geology.content);
        setSourceData(planetData.geology.source);
        break;
    }
  }, [contentToDisplay]);

  const statData = [
    { title: 'rotation-time', fact: planetData.rotation },
    { title: 'revolution time', fact: planetData.revolution },
    { title: 'radius', fact: planetData.radius },
    { title: 'average temp.', fact: planetData.temperature },
  ];
  return (
    <>
      <Head>
        <title>Frontend Mentor | Planets Fact Site</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
        <PlanetGrid>
          <PlanetImage />
          <Content
            content={contentData}
            source={sourceData}
            planetName={planetData.name}
          />
          <StatCards data={statData} />
          <Controls setContentToDisplay={setContentToDisplay} />
        </PlanetGrid>
      </main>
    </>
  );
}

export async function getServerSideProps(context: { query: { id: String } }) {
  const res = await fetch('http://localhost:3000/api/planets');
  const data = await res.json();

  if (!context.query.id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  } else {
    const planetData = await data.find(
      (planet: PlanetModel) =>
        planet.name.toLowerCase() === context.query.id.toLowerCase()
    );

    if (!planetData) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    return {
      props: { planetData },
    };
  }
}

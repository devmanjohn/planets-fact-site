import React, { useState } from 'react';

const PLANET_LINKS = [
  { title: 'mercury', url: 'planets/mercury', color: 'bg-[#DEF4FC]' },
  { title: 'venus', url: 'planets/venus', color: 'bg-[#F7CC7F]' },
  { title: 'earth', url: 'planets/earth', color: 'bg-[#545BFE]' },
  { title: 'mars', url: 'planets/mars', color: 'bg-[#FF6A45]' },
  { title: 'jupiter', url: 'planets/jupiter', color: 'bg-[#ECAD7A]' },
  { title: 'saturn', url: 'planets/saturn ', color: 'bg-[#FCCB6B]' },
  { title: 'uranus', url: 'planets/uranus', color: 'bg-[#65F0D5]' },
  { title: 'neptune', url: 'planets/neptune', color: 'bg-[#497EFA]' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Logo */}
      <p className='text-white uppercase font-antonio tracking-tighter text-3xl xl:mr-auto'>
        The Planets
      </p>

      <label className='custom-hamburger ml-auto md:hidden'>
        <input
          className='hidden'
          type='checkbox'
          name='hamburger'
          id='hamburger'
          onChange={() => {
            setIsOpen(!isOpen);
          }}
        />
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='17'>
          <g fill='#FFF' fill-rule='evenodd'>
            <path d='M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z' />
          </g>
        </svg>
      </label>

      {/* Nav Items */}
      <ul
        className={`
        bg-dark-blue absolute left-0 top-[68px] w-full custom-height transition-transform ease duration-500 
        ${!isOpen ? 'translate-x-full' : 'translate-x-0'} 
        md:static md:translate-x-0 md:flex md:justify-center md:gap-8 md:mt-8 
        xl:w-auto xl:h-auto xl:mt-0 xl:bg-transparent`}
      >
        {PLANET_LINKS.map(({ title, url, color }, index) => {
          return <NavItem key={index} title={title} url={url} color={color} />;
        })}
      </ul>
    </>
  );
}

type NavProps = {
  title: String;
  url: String;
  color: String;
};

export const NavItem = ({ title, url, color }: NavProps) => {
  return (
    <li className='nav-item text-white uppercase px-8 md:px-0'>
      <a
        className='
        group flex items-center py-6 border-b custom-border-color tracking-[2px] text-sm 
        md:border-none md:py-0 md:opacity-50 
        xl:p-8 xl:px-0 custom-hover-effect xl:relative xl:hover:opacity-100 xl:transition-opacity'
        href={`/${url}`}
      >
        <span
          className={`
          w-5 h-5 ${color} rounded-full mr-4 
          md:hidden 
          xl:block xl:absolute xl:top-0 xl:w-full xl:rounded-none xl:h-1 xl:-translate-y-2 xl:group-hover:translate-y-0 xl:transition-transform xl:duration-300`}
        ></span>
        {title}
        <svg
          className='ml-auto md:hidden'
          xmlns='http://www.w3.org/2000/svg'
          width='6'
          height='8'
        >
          <path fill='none' stroke='#FFF' opacity='.4' d='M1 0l4 4-4 4' />
        </svg>
      </a>
    </li>
  );
};

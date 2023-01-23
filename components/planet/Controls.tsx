import React, { useState } from 'react';

const CONTROLS = [
  {
    title: 'Overview',
  },
  {
    title: 'Structure',
  },
  {
    title: 'Surface',
  },
];

export default function Controls() {
  const [activeContent, setActiveContent] = useState('Overview');

  return (
    <section className='col-span-4 row-start-1 px-4 border-b custom-border-color flex justify-between'>
      {CONTROLS.map(({ title }) => {
        const isActive = title === activeContent ? true : false;
        return (
          <ControlButton
            title={title}
            isActive={isActive}
            setActiveContent={setActiveContent}
          />
        );
      })}
    </section>
  );
}

type ControlButtonProps = {
  title: String;
  isActive?: Boolean;
  // setActiveContent needs typing
};

export function ControlButton({
  title,
  isActive,
  setActiveContent,
}: ControlButtonProps) {
  const clickHandler = () => {
    setActiveContent(title);
  };

  return (
    <button
      onClick={clickHandler}
      className={`
      uppercase tracking-[1px] border-b-4 py-4
      ${isActive ? 'border-earth' : 'border-transparent'}`}
    >
      <span className='hidden'>03</span>
      <p className={`${isActive ? 'opacity-100' : 'opacity-50'}`}>{title}</p>
    </button>
  );
}

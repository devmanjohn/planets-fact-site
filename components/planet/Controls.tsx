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

export default function Controls({
  setContentToDisplay,
}: {
  setContentToDisplay: React.Dispatch<React.SetStateAction<Number>>;
}) {
  const [activeContent, setActiveContent] = useState<String>('Overview');

  return (
    <section className='col-span-4 row-start-1 px-4 border-b custom-border-color flex justify-between'>
      {CONTROLS.map(({ title }, index) => {
        const isActive = title === activeContent ? true : false;
        return (
          <ControlButton
            title={title}
            isActive={isActive}
            setActiveContent={setActiveContent}
            setContentToDisplay={setContentToDisplay}
            index={index}
          />
        );
      })}
    </section>
  );
}

type ControlButtonProps = {
  index: Number;
  title: String;
  isActive?: Boolean;
  setActiveContent: React.Dispatch<React.SetStateAction<String>>;
  setContentToDisplay: React.Dispatch<React.SetStateAction<Number>>;
};

export function ControlButton({
  index,
  title,
  isActive,
  setActiveContent,
  setContentToDisplay,
}: ControlButtonProps) {
  const clickHandler = () => {
    setActiveContent(`${title}`);
    setContentToDisplay(index);
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

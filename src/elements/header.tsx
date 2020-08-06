// Core
import React, { FC, useState } from 'react';

type PropTypes = {
  title?: string;
  children?: never;
};

export const Header: FC<PropTypes> = ({ title }: PropTypes) => {
  const content = typeof title === 'string' ? title.toLocaleLowerCase() : null;
  const [counter, setCounter] = useState<number>(0);

  const increase = (): void => {
    setCounter((prev) => prev + 1);
  };

  const decrease = (): void => {
    setCounter((prev) => prev - 1);
  };

  return (
    <>
      <h1>{content}</h1>
      <h3>{counter}</h3>
      <button onClick={increase}>Add +</button>
      <button onClick={decrease}>Sub -</button>
    </>
  );
};

Header.defaultProps = {
  title: 'Hello',
};

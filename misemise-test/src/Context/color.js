import React, { createContext, useState } from 'react';

// context default value
const ColorContext = createContext({
  state: { color: 'black', subcolor: 'red' },
  actios: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

// Provider
const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black');
  const [subcolor, setSubcolor] = useState('red');

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;

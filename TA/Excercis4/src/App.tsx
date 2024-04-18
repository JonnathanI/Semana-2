import React, { useState } from 'react';

const ResistorValues = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

type Color = keyof typeof ResistorValues;

function DecodedValueCalculator() {
  const [firstColor, setFirstColor] = useState<Color>('black');
  const [secondColor, setSecondColor] = useState<Color>('black');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>, setter: Function) => {
    const value = event.target.value as Color;
    setter(value);
  };

  const decodedValue = (): number => {
    return Number(`${ResistorValues[firstColor]}${ResistorValues[secondColor]}`);
  };

  return (
    <div>
      <label htmlFor="firstColor">First Color:</label>
      <select id="firstColor" value={firstColor} onChange={(e) => handleChange(e, setFirstColor)}>
        {Object.keys(ResistorValues).map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
      <br />
      <label htmlFor="secondColor">Second Color:</label>
      <select id="secondColor" value={secondColor} onChange={(e) => handleChange(e, setSecondColor)}>
        {Object.keys(ResistorValues).map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
      <br />
      <p>Decoded Value: {decodedValue()}</p>
    </div>
  );
}

export default DecodedValueCalculator;

import React, { useState } from 'react';

const ColorAry = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
] as const;

type Color = typeof ColorAry[number];

const ohms = [
  [1_000_000_000, 'giga'],
  [1_000_000, 'mega'],
  [1_000, 'kilo'],
] as const;

function ResistorValueCalculator() {
  const [band1, setBand1] = useState<Color>('black');
  const [band2, setBand2] = useState<Color>('black');
  const [band3, setBand3] = useState<Color>('black');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>, setter: Function) => {
    const value = event.target.value as Color;
    setter(value);
  };

  const decodedResistorValue = (): string => {
    let num = (ColorAry.indexOf(band1) * 10 + ColorAry.indexOf(band2)) * 10 ** ColorAry.indexOf(band3);
    const [divisor, prefix] = ohms.find(([divisor]) => num >= divisor) ?? [1, ''];
    return `${num / divisor} ${prefix}ohms`;
  };

  return (
    <div>
      <label htmlFor="band1">First Band:</label>
      <select id="band1" value={band1} onChange={(e) => handleChange(e, setBand1)}>
        {ColorAry.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
      <br />
      <label htmlFor="band2">Second Band:</label>
      <select id="band2" value={band2} onChange={(e) => handleChange(e, setBand2)}>
        {ColorAry.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
      <br />
      <label htmlFor="band3">Third Band:</label>
      <select id="band3" value={band3} onChange={(e) => handleChange(e, setBand3)}>
        {ColorAry.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
      <br />
      <p>Decoded Resistor Value: {decodedResistorValue()}</p>
    </div>
  );
}

export default ResistorValueCalculator;

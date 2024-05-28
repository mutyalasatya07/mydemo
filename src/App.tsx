
import React, { useState } from 'react';
import "./App.css"

const App: React.FC = () => {
  const [number, setNumber] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);
  const [width, setWidth] = useState<number | null>(null);

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(parseInt(e.target.value) || null);
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(parseInt(e.target.value) || null);
  };

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWidth(parseInt(e.target.value) || null);
  };

  const renderNumbers = () => {
    if (number === null) return null;
    return Array.from({ length: number }, (_, i) => i + 1).join(', ');
  };

  const calculateArea = () => {
    if (height === null || width === null) return null;
    return 0.5 * height * width;
  };

  return (
    <div className="container">
      <div className="input-group">
        <label htmlFor="numberInput">Number:</label>
        <input id="numberInput" type="number" onChange={handleNumberChange} />
        <div className="output">{renderNumbers()}</div>
      </div>
      <div className="input-group">
        <label htmlFor="heightInput">Height:</label>
        <input id="heightInput" type="number" onChange={handleHeightChange} />
      </div>
      <div className="input-group">
        <label htmlFor="widthInput">Width:</label>
        <input id="widthInput" type="number" onChange={handleWidthChange} />
      </div>
      <div className="output">
        Area of Triangle: {calculateArea()}
      </div>
    </div>
  );
};

export default App;
import React, { useState } from 'react';
import './TemperatureConverter.css';
import TemperatureInput from './components/TemperatureInput';
import { celsiusToFahrenheit, fahrenheitToCelsius } from './components/donusumler';


const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [isSwapped, setIsSwapped] = useState(false);

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    if (value === '') {
      setFahrenheit('');
    } else {
      setFahrenheit(isSwapped ? fahrenheitToCelsius(value) : celsiusToFahrenheit(value));
    }
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    if (value === '') {
      setCelsius('');
    } else {
      setCelsius(isSwapped ? fahrenheitToCelsius(value) : celsiusToFahrenheit(value));
    }
  };

  const swapUnits = () => {
    setIsSwapped(!isSwapped);
    setCelsius('');
    setFahrenheit('');
  };

  const clearValues = () => {
    setCelsius('');
    setFahrenheit('');
  };

  return (
    <div className="temperature-converter">
      <h1>Temperature Converter</h1>
      <TemperatureInput
        label={isSwapped ? 'Fahrenheit:' : 'Celsius:'}
        value={isSwapped ? fahrenheit : celsius}
        onChange={isSwapped ? handleFahrenheitChange : handleCelsiusChange}
      />
      <TemperatureInput
        label={isSwapped ? 'Celsius:' : 'Fahrenheit:'}
        value={isSwapped ? celsius : fahrenheit}
        onChange={isSwapped ? handleCelsiusChange : handleFahrenheitChange}
      />
      <button className="button-hover" onClick={swapUnits}>
        Swap Units
      </button>
      <button className="button-hover clear" onClick={clearValues}>
        Clear
      </button>
    </div>
  );
};

export default TemperatureConverter;

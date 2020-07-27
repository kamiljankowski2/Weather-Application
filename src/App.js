import React from 'react';
import './App.css';
import Container from './Components/Container'
import { WeatherProvider } from './Data'

function App() {
  return (
    <WeatherProvider>

      <Container />
    </WeatherProvider>

  );
}

export default App;

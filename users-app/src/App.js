import React from 'react';
import { Route } from 'react-router-dom'
import Onboard from './components/Onboard'

import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Onboard} />
    </div>
  );
}

export default App;

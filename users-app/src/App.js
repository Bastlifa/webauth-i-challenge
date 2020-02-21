import React from 'react';
import { Route } from 'react-router-dom'
import Onboard from './components/Onboard'
import UsersList from './components/UsersList';

import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Onboard} />
      <Route path='/home' component={UsersList} />
    </div>
  );
}

export default App;

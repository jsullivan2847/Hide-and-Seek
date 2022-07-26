import './App.css';
import { useState } from 'react';
import Menu from './pages/Menu';
import GamePlay from './pages/GamePlay';
import { Route } from 'react-router-dom';


function App() {


  return (
    <div className="App"> 
    <Route exact path={'/'}>
    <Menu/>
    </Route>
    <Route path={'/play'}>
      <GamePlay/>
    </Route>
    </div>
  );
}

export default App;

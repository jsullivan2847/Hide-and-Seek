import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Menu from './pages/Menu';
import { Route } from 'react-router-dom';


function App() {


  return (
    <div className="App"> 
    <Route exact path={'/'}>
    <Menu/>
    </Route>
    </div>
  );
}

export default App;

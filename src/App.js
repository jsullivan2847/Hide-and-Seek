import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Test from './components/Test'
import ToDo from './components/ToDo';
import Challenge from './components/Challenge';

function App() {


  return (
    <div className="App"> 
    {/* <Challenge/> */}
    <ToDo/>
    {/* <Test/> */}
    </div>
  );
}

export default App;

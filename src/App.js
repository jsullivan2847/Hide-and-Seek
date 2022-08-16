import './App.css';
import Menu from './pages/Menu';
import GamePlay from './pages/GamePlay';
import { Route, Router } from 'react-router-dom';
import { Routes } from 'react-router';
import AltButton from './components/AltButton/AltButton';
import {createBrowserHistory} from 'history';


function App() {

  const history = createBrowserHistory()
  return (
    <div className="App"> 
    <Router history={history}>
      <Route exact path={'/' }>
    <Menu/>
    </Route>
    <Route path={'/play'}>
      <GamePlay/>
    </Route>
    <Route path={'/test'}>
      <AltButton label="click me please"/>
    </Route>
    </Router>
    {/* <Route path={'/timer'}>
      <TimerPractice/>
    </Route> */}
    </div>
  );
}

export default App;

import './App.css';
import Menu from './pages/Menu';
import GamePlay from './pages/GamePlay';
import { Route, Router } from 'react-router-dom';
import AltButton from './components/AltButton/AltButton';
import {createBrowserHistory} from 'history';
import LeaderBoard from './pages/LeaderBoard/LeaderBoard';
import { useState } from 'react';


function App() {

  const [scores, setScores] = useState([])

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
    <Route path={'/leaderboard'}>
      <LeaderBoard scores={scores}/>
    </Route>
    </Router>
    {/* <Route path={'/timer'}>
      <TimerPractice/>
    </Route> */}
    </div>
  );
}

export default App;

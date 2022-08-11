import './App.css';
import Menu from './pages/Menu';
import GamePlay from './pages/GamePlay';
import { Route } from 'react-router-dom';


function App() {


  return (
    <div className="App"> 
    <Route exact path={'/' }>
    <Menu/>
    </Route>
    <Route path={'/play'}>
      <GamePlay/>
    </Route>
    {/* <Route path={'/timer'}>
      <TimerPractice/>
    </Route> */}
    </div>
  );
}

export default App;


import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Counter from './pages/Counter';

function App() {

  return (
    <Switch>
      <Route exact path="/"> 
        <Home/>
      </Route>
      <Route exact path="/counter" component={Counter}>
      </Route>
      {/* <Route exact path='/' render={(routerprops) => <Home {...routerprops} name="Yogi" />}>
      </Route> */}
    </Switch>
  );
}

export default App;

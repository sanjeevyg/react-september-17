
import {Redirect, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Counter from './pages/Counter';
import About from './pages/About';
import Profile from './pages/Profile';
import Login from './pages/Login';
import SumoForm from './pages/SumoForm';

function App() {

  return (
    <Switch>
      <Route exact path='/' render={(routerProps) => <Home {...routerProps} name="Yogi" />}/>
      <Route exact path="/login" component={Login} />
      <Route exact path="/counter" component={Counter} />
      <Route exact path="/about"> 
        <About/>
      </Route>
      <Route exact path='/SumoForm' render={(routerProps) => <SumoForm {...routerProps}/>}/>
      <PrivateRoute exact path="/profile" component={Profile} name="Yogi"/>
    </Switch>

  );
}

function PrivateRoute({component: Component, ...props}) {
  return (localStorage.token? 
  <Route {...props} render={(routerProps) => <Component {...routerProps} {...props}/> }/> :
  <Redirect to="/login"/>)

}

export default App;

import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './page/Home';
import Info from './page/Info';
import Learn from './page/Learn';
import Practice from './page/Practice';
import Login from './page/Login';
import Play from './page/Play';
import Profile from './page/Profile';
import Signup from './page/Signup';

function App() {
  return (
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/practice">
              <Practice />
            </Route>
            <Route path="/learn">
              <Learn />
            </Route>
            <Route path="/info">
              <Info />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/play">
              <Play />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';  

import UserContext from './context/UserContext';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

function App() {
  return (
    <UserContext>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    </UserContext>
  );
}

export default App;

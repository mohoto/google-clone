import { useStateValue } from './misc/stateProvider';
import Login from './pages/Login';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  const [{ user }] = useStateValue();

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/recherche" component={SearchPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import { Header, Home, Detail, Login } from './components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/detail" component={Detail} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;

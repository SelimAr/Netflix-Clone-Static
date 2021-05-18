import './App.css';
import Main from './Main.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

/* Netflix Clone Static */

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

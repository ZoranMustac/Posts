import './css/App.css';
import './css/styles.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Components/Header.js';
import SinglePost from './Components/SinglePost';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
          <Header/>
          </Route>
          <Route path="/SinglePost">
            <SinglePost/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

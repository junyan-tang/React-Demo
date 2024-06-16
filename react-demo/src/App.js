import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Router exact path="/">
              <Home />
            </Router>
            <Router path="/create">
              <Create />
            </Router>
            <Router path="/blogs/:id">
              <BlogDetails />
            </Router>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

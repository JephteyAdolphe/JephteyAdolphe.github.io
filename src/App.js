import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Resume from './pages/Resume';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Route exact path="/" render={props => (
          <React.Fragment>
            <div className="center-div">
              <h1 className="main-text">Jephtey Adolphe</h1>
              <div>
                <h2 className="main-text-dividers">|</h2>
                <Link to="/about" className="main-text-links">About</Link>
                <h2 className="main-text-dividers">|</h2>
                <Link to="/resume" className="main-text-links">Resume</Link>
                <h2 className="main-text-dividers">|</h2>
              </div>
              <div>
                <a className="link-space" href="https://www.linkedin.com/in/jephtey-adolphe-160166147/">
                  <img src={require("./linkedin.png")} alt="" className="icons" />
                </a>
                <a className="link-space" href="https://github.com/JephteyAdolphe">
                  <img src={require("./github.png")} alt="" className="icons" />
                </a>
              </div>
            </div>
          </React.Fragment>
        )} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
    </Router>
  );
}

export default App;

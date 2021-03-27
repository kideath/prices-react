import ReactDOM from 'react-dom';
import React from 'react';

//import "bootstrap/dist/css/bootstrap.min.css";
//import "@fortawesome/fontawesome-free/css/all.css";
//import "@fortawesome/fontawesome-free/js/all.js";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/nav.jsx';
import Home from './components/home.jsx';
//import Products from './components/products.jsx';
import NotFound from './components/notfound.jsx';
//import ItemsList from './components/ItemsList.jsx';
import PcGames from './components/pc.jsx';
import ConsoleGames from './components/console.jsx';
import Parts from './components/parts.jsx';


// Importing the Bootstrap CSS
//import 'bootstrap/dist/css/bootstrap.min.css';

//ReactDOM.render(<App />, document.getElementById('root'));


// var ReactDOM = require('react-dom');
// var React = require('react');
//var ItemsList = require('./components/ItemsList.jsx');



// {/* <Route exact path="/" component={Home} />
//<Route path="/products" component={Products} /> */}
/*
            <Route path="/pc" component={PcGames} />
            <Route path="/console" component={ConsoleGames} />
            <Route path="/parts" component={Parts} />
// */

ReactDOM.render(
  <Router>
      <Nav />
        <div className="container mt-3">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/pc" component={PcGames} />
            <Route path="/console" component={ConsoleGames} />
            <Route path="/parts" component={Parts} />
            <Route component={NotFound} />
        </Switch>
      </div>
  </Router>,
  document.getElementById("app")
)

// ReactDOM.render(
//     <ItemsList data={propsValues} />,
//     document.getElementById("app")
// )
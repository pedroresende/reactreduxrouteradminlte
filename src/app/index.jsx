global.jQuery = require('jquery');
require('bootstrap');
import 'bootstrap/dist/css/bootstrap.css';
require('./assets/less/main.less');
require('./assets/css/main.css');


import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory  } from 'react-router';
import Menu from './components/menu.jsx';

const App = ({ children }) => (
    <div>
        <Menu />
        {children}
    </div>
);

const Home = () => (
    <div>
        <h1>Home</h1>
    </div>
);

const About = () => (
    <div>
        <h1>About</h1>
    </div>
);

const Contact = () => (
    <div>
        <h1>Contact</h1>
    </div>
);

var NoMatch = React.createClass({
    render: function() {
        return <p> Error 404 </p>;
    }
});

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="contact" component={Contact} />
        <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('app'))

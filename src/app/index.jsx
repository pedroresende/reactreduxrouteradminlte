global.jQuery = window.jQuery = window.$ = require('jquery');
require('bootstrap');
require('bootstrap/dist/css/bootstrap.min.css');
require('./assets/js/app.min.js');
require('./assets/less/main.less');
require('./assets/css/main.css');

import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory  } from 'react-router';

import Header from './components/header.jsx';
import Aside from './components/aside.jsx';
import AsideRight from './components/aside-right.jsx';
import Content from './components/content.jsx';
import Footer from './components/footer.jsx';

const App = ({ children }) => (
    <div className="wrapper">
        <Header />
        <Aside />
        {children}
        <Footer />
        <AsideRight />
    <div className="control-sidebar-bg"></div>
    </div>
);

const Home = () => (
    <Content content="homepage"/>
);

const About = () => (
        <div className="wrapper">
            <Header />
            <Aside />
            <Content content="homepage"/>
            <Footer />
            <AsideRight />
        <div className="control-sidebar-bg"></div>
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

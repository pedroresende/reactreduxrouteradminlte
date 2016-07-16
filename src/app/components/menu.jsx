import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory  } from 'react-router'
import logo from './../assets/img/aimicon04.gif';
const ACTIVE = { color: 'red' }


export default class Menu extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="/" activeStyle={ACTIVE}>Project Name<img src={logo} alt="logo"/></Link>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li><Link className="navbar-brand" to="/" activeStyle={ACTIVE}>Home</Link></li>
                <li><Link className="navbar-brand" to="/about" activeStyle={ACTIVE}>About</Link></li>
                <li><Link className="navbar-brand" to="/contact" activeStyle={ACTIVE}>Contact</Link></li>
              </ul>
            </div>
          </div>
        </nav>
    )
  }
};

import React from 'react';
import {render} from 'react-dom';

export default class Header extends React.Component {
    render() {
        return (
            <header className="main-header">
                <a href="index2.html" className="logo">
                    <span className="logo-mini">
                        <b>A</b>LT</span>
                    <span className="logo-lg">
                        <b>Admin</b>LTE</span>
                </a>
                <nav className="navbar navbar-static-top" role="navigation">
                    <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                        <span className="sr-only">
                            Toggle navigation
                        </span>
                    </a>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown messages-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-envelope-o"/>
                                    <span className="label label-success">4</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">
                                        You have 4 messages
                                    </li>
                                    <li>
                                        <ul className="menu">
                                            <li>
                                                {/* start message */}
                                                <a href="#">
                                                    <div className="pull-left">
                                                        {/* User Image */}
                                                        <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
                                                    </div>
                                                    <h4>
                                                        Support Team
                                                        <small>
                                                            <i className="fa fa-clock-o"/>
                                                            5 mins
                                                        </small>
                                                    </h4>
                                                    <p>
                                                        Why not buy a new awesome theme?
                                                    </p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="footer">
                                        <a href="#">
                                            See All Messages
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown notifications-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-bell-o"/>
                                    <span className="label label-warning">10</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">
                                        You have 10 notifications
                                    </li>
                                    <li>
                                        <ul className="menu">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-users text-aqua"/>
                                                    5 new members joined today
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="footer">
                                        <a href="#">
                                            View all
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown tasks-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-flag-o"/>
                                    <span className="label label-danger">9</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">
                                        You have 9 tasks
                                    </li>
                                    <li>
                                        <ul className="menu">
                                            <li>
                                                <a href="#">
                                                    <h3>
                                                        Design some buttons
                                                        <small className="pull-right">20%</small>
                                                    </h3>
                                                    <div className="progress xs">
                                                        <div className="progress-bar progress-bar-aqua" style={{
                                                            width: '20%'
                                                        }} role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                                                            <span className="sr-only">
                                                                20% Complete
                                                            </span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="footer">
                                        <a href="#">
                                            View all tasks
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown user user-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User Image"/>
                                    <span className="hidden-xs">
                                        Alexander Pierce
                                    </span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="user-header">
                                        <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
                                        <p>
                                            Alexander Pierce - Web Developer
                                            <small>
                                                Member since Nov. 2012
                                            </small>
                                        </p>
                                    </li>
                                    <li className="user-body">
                                        <div className="row">
                                            <div className="col-xs-4 text-center">
                                                <a href="#">Followers</a>
                                            </div>
                                            <div className="col-xs-4 text-center">
                                                <a href="#">Sales</a>
                                            </div>
                                            <div className="col-xs-4 text-center">
                                                <a href="#">Friends</a>
                                            </div>
                                        </div>
                                        {/* /.row */}
                                    </li>
                                    <li className="user-footer">
                                        <div className="pull-left">
                                            <a href="#" className="btn btn-default btn-flat">Profile</a>
                                        </div>
                                        <div className="pull-right">
                                            <a href="#" className="btn btn-default btn-flat">
                                                Sign out
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" data-toggle="control-sidebar">
                                    <i className="fa fa-gears"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
};

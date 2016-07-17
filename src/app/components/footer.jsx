import React from 'react';
import {render} from 'react-dom';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="main-footer">
                <div className="pull-right hidden-xs">
                    Anything you want
                </div>
                <strong>Copyright © 2016 <a href="#">Company</a>.</strong> All rights reserved.
            </footer>
        )
    }
};

import React from 'react';
import {render} from 'react-dom';

export default class Content extends React.Component {
    render() {
        var content = this.props.content;
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Page Header
                        <small>
                            Optional description
                        </small>
                    </h1>
                    <ol className="breadcrumb">
                        <li>
                            <a href="#">
                                <i className="fa fa-dashboard"/>
                                Level
                            </a>
                        </li>
                        <li className="active">Here</li>
                    </ol>
                </section>
                <section className="content">
                    {content}
                </section>
            </div>

        )
    }
};

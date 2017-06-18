import React, { Component } from 'react';
import 'material-components-web/dist/material-components-web.css';
import MeasureApi from './measure-api';
import MeasureListItem from './measure-list-item';

class MeasureList extends Component {

    state = { lista : [] };
    measureApi = new MeasureApi();

    componentDidMount() {

        this.measureApi.list( list => {
            this.setState({lista: list} );
        });
    };

    render() {

        const items = this.state.lista.map(
            item => (<MeasureListItem item={item}/> )
        );

        return (
            <div className="mdc-list mdc-layout-grid__cell">
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
}

export default MeasureList;

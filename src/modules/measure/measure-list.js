import React, { Component } from 'react';
import 'material-components-web/dist/material-components-web.css';
import MeasureListItem from './measure-list-item';
import { connect } from 'react-redux';

class MeasureList extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'Listar'})
    }

    itemClick(payload) {
      this.props.dispatch({type: 'Edit', payload});
    }

    render() {

        const items = this.props.lista.map(
            item => (<MeasureListItem item={item} onClick={this.itemClick.bind(this, item)}/> )
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

export default connect ((state) => ({lista: state.lista}) ) (MeasureList);

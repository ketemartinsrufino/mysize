import React, { Component } from 'react';
import 'material-components-web/dist/material-components-web.css';
import MeasureListItem from './measure-list-item';
import { connect } from 'react-redux';
import { listar, getItems } from './redux/actions';

class MeasureList extends Component {

    componentDidMount() {
        this.props.getItems()
    }

    itemClick(payload) {
      this.props.dispatch({type: 'EDITAR', payload});
    }

    render() {
        const items = this.props.lista.map(
            item => (<MeasureListItem item={item} key= {'aaa'} onClick={this.itemClick.bind(this, item)}/> )
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

const mapStateToProps = (state) => ({lista: state.lista});

const mapDispatchToProps = dispatch => {
    return {
        getItems: () => dispatch(getItems())
    }
};

export default  connect( mapStateToProps, mapDispatchToProps )(MeasureList);
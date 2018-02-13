
import React, { Component } from 'react';
import 'material-components-web/dist/material-components-web.css';
import MeasureListItem from './measure-list-item';
import { connect } from 'react-redux';
import { loadItems, loadItem, deleteItem } from './redux/actions';

class MeasureElementList extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    render() {

        const items = this.props.lista.map(
            (item, indice) => (<MeasureListItem 
                                    key={`item-${indice}`} 
                                    item={item} 
                                    onEdit={this.props.getItem.bind(this, item.key)}
                                    onDelete={this.props.delete.bind(this, item.key)}
                                /> )
        );

        return (
            <div className="list">
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
        getItems: () => dispatch(loadItems()),
        getItem: (key) => dispatch(loadItem(key)),
        delete: (key) => dispatch(deleteItem(key))

    }
};

export default  connect( mapStateToProps, mapDispatchToProps )(MeasureList);
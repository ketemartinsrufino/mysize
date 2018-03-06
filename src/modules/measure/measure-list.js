import React, { Component } from 'react';
import 'material-components-web/dist/material-components-web.css';
import MeasureListItem from './measure-list-item';
import { connect } from 'react-redux';
import { loadItems, loadItem, deleteItem } from './redux/actions';

class MeasureList extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    render() {

        const items = this.props.lista.map(
            (item, indice) => (<MeasureListItem 
                                    key={`item-${indice}`} 
                                    item={item} 
                                    onEdit={this.props.getItem.bind(this, item.id)}
                                    onDelete={this.props.delete.bind(this, item.id)}
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
        getItem: (id) => dispatch(loadItem(id)),
        delete: (id) => dispatch(deleteItem(id))

    }
};

export default  connect( mapStateToProps, mapDispatchToProps )(MeasureList);

import React, { Component } from 'react';
import ElementListItem from './element-list-item';
import { connect } from 'react-redux';
import { loadItems, loadItem, deleteItem } from './redux/actions';

class ElementList extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    render() {

        const items = this.props.listElement.map(
            (item, indice) => (<ElementListItem 
                                    key={`item-${indice}`} 
                                    item={item} 
                                    onEdit={this.props.getItem.bind(this, item.key)}
                                    onDisable={this.props.delete.bind(this, item.key)}
                                /> )
        );

        const emptyItem = <ElementListItem 
                            key={`item-empty`} 
                            item={{description: "Nenhum item cadastrado"}} 
                        />
        return (
            <div className="list">
                <ul>
                    {items && items.length ? items : emptyItem}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listElement: state.listElement
    }
};
const mapDispatchToProps = dispatch => {
    return {
        getItems: () => dispatch(loadItems()),
        getItem: (key) => dispatch(loadItem(key)),
        delete: (key) => dispatch(deleteItem(key))

    }
};

export default connect( mapStateToProps, mapDispatchToProps )(ElementList);
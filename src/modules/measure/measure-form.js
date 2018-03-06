import React, { Component } from 'react';
import FormItem from 'modules/generic-components/form-item';
import { calcImc } from '../utils/imc';
import { connect } from 'react-redux';
import { saveItem } from './redux/actions';
import { loadElements } from 'modules/element/redux/actions';

class MeasureForm extends Component {

    constructor() {
        super();
        this.state = {
            elements: {}
        }
    }
    componentDidMount() {
        this.props.getElements();
        const transformToObj = (anterior, atual) => {
            const key = atual.id
            return {key: atual}
        };
        this.setState({elements: this.props.listElement.reducer(transformToObj,{})});
    }

    updateInfo(key, event) {
        console.log('event:', event.target.value)
        console.log('key:', key)
        const payload = { ...this.props.item };
        payload[key] = event.target.value;
    };

    render() {
        const {key} = this.props.item;

        const itens = this.props.listElement.map((element) => {
            return (
                <FormItem 
                    label={`${element.description} (${element.unit}):`}
                    value={this.state.elements[element.key]}
                    onChange={this.updateInfo.bind(this, element.key)}
                />
            )    
        });

        return (
            <div className="form mdc-layout-grid__cell">
                {itens}
                <div className="adicionar-resul">
                    <button className="mdc-button mdc-button--raised" 
                            onClick={() => this.props.save(this.props.item)}>
                            { key ? 'Salvar' : 'Adicionar' }
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    item: state.item,
    listElement: state.listElement
});
const mapDispatchToProps = dispatch => {
    return {
        save: (item) => dispatch(saveItem(item)),
        // //pesquisar se é a melhor forma ou se era melhor salvar essas mudanças locais no state mesmo
        // updateLocal: (item) => dispatch(updateLocalItem(item)) ,
        getElements: () => dispatch(loadElements())
    }
};
export default  connect( mapStateToProps, mapDispatchToProps )(MeasureForm);
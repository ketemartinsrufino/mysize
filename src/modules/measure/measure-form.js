import React, { Component } from 'react';
import FormItem from 'modules/generic-components/form-item';
import { calcImc } from '../utils/imc';
import { connect } from 'react-redux';
import { saveItem, updateLocalItem } from './redux/actions';
import { loadElements } from 'modules/element/redux/actions';

class MeasureForm extends Component {

    componentDidMount() {
        this.props.getElements();
    }

    updateInfo(field, event) {
        //atualizar via dispatch
        const payload = { ...this.props.item };
        payload[field] = event.target.value;        
        this.props.updateLocal(payload);
    };

    render() {
        const {key} = this.props.item;

        const itens = this.props.listElement.map((element) => {
            const description = element.description;
            const descriptionLowerCase = description.toLowerCase();
            return <FormItem label={`${description}:`} value={descriptionLowerCase}
                        onChange={this.updateInfo.bind(this, descriptionLowerCase)}
            />    
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
        //pesquisar se é a melhor forma ou se era melhor salvar essas mudanças locais no state mesmo
        updateLocal: (item) => dispatch(updateLocalItem(item)) ,
        getElements: () => dispatch(loadElements())
    }
};
export default  connect( mapStateToProps, mapDispatchToProps )(MeasureForm);
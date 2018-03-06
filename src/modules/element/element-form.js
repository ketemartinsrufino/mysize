import React, { Component } from 'react';
import FormItem from 'modules/generic-components/form-item';
import { connect } from 'react-redux';
import { saveItem, updateLocalItem } from './redux/actions';

class ElementForm extends Component {

    updateInfo(field, event) {
        //atualizar via dispatch
        const payload = { ...this.props.elementItem };
        payload[field] = event.target.value;        
        this.props.updateLocal(payload);
    };

    onClick() {
        (this.props.save(this.props.elementItem));   
    }

    render() {
        const { key, description, unit } = this.props.elementItem;
        return (
            <div className="form mdc-layout-grid__cell">
                <FormItem label="Descrição: " value={description}
                          onChange={this.updateInfo.bind(this, "description")}
                          type="text"
                />
                <FormItem label="Unidade de medida: " value={unit}
                          onChange={this.updateInfo.bind(this, "unit")}
                          type="text"
                />
                <div className="adicionar-resul">
                    <button className="mdc-button mdc-button--raised" 
                            onClick={this.onClick.bind(this)}>
                            { key ? 'Salvar' : 'Adicionar' }
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({elementItem: state.elementItem});
const mapDispatchToProps = dispatch => {
    return {
        save: (item) => dispatch(saveItem(item)),
        //pesquisar se é a melhor forma ou se era melhor salvar essas mudanças locais no state mesmo
        updateLocal: (element) => dispatch(updateLocalItem(element)) 
    }
};
export default  connect( mapStateToProps, mapDispatchToProps )(ElementForm);
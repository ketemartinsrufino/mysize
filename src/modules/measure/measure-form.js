import React, { Component } from 'react';
import FormItem from './measure-form-item';
import { calcImc } from './measure-utils';
import { connect } from 'react-redux';
import { saveItem, updateLocalItem } from './redux/actions';

class MeasureForm extends Component {

    updateInfo(field, event) {
        //atualizar via dispatch
        const payload = { ...this.props.item };
        payload[field] = event.target.value;        
        this.props.updateLocal(payload);
    };

    render() {
        const { 
            altura, 
            peso, 
            cintura, 
            abdomen, 
            quadril, 
            key 
        } = this.props.item;

        const imc = calcImc(altura, peso);
        return (
            <div className="form mdc-layout-grid__cell">
                <FormItem label="Altura (cm): " value={altura}
                          onChange={this.updateInfo.bind(this, "altura")}
                />
                <FormItem label="Peso(Kg): " value={peso}
                          onChange={this.updateInfo.bind(this, "peso")}
                />
                <FormItem label="Cintura (cm): " value={cintura}
                          onChange={this.updateInfo.bind(this, "cintura")}
                />
                <FormItem label="Abdomen (cm): " value={abdomen}
                          onChange={this.updateInfo.bind(this, "abdomen")}
                />
                <FormItem label="Quadril (cm): " value={quadril}
                          onChange={this.updateInfo.bind(this, "quadril")}
                />
                <div className="imc-result"><span>IMC: </span>32.65</div>
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

const mapStateToProps = (state) => ({item: state.item});
const mapDispatchToProps = dispatch => {
    return {
        save: (item) => dispatch(saveItem(item)),
        //pesquisar se é a melhor forma ou se era melhor salvar essas mudanças locais no state mesmo
        updateLocal: (item) => dispatch(updateLocalItem(item)) 
    }
};
export default  connect( mapStateToProps, mapDispatchToProps )(MeasureForm);
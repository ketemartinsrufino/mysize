import React, { Component } from 'react';
import FormItem from './measure-form-item';
import MeasureUtils from './measure-utils';
import { connect } from 'react-redux';
import { saveItem, updateLocalItem } from './redux/actions';

class MeasureForm extends Component {

    updateInfo(field, event) {
        //atualizar via dispatch
        const payload = { ...this.props.item };
        payload[field] = event.target.value;
        payload.imc = MeasureUtils.calcImc(payload.altura, payload.peso);
        this.props.updateLocal(payload);
    };

    render() {
        const item = this.props.item;

        return (
            <div className="form mdc-layout-grid__cell">
                <FormItem label="Altura (cm): " value={item.altura}
                            onChange={this.updateInfo.bind(this, "altura")}/>
                <FormItem label="Peso(Kg): " value={this.props.item.peso}
                            onChange={this.updateInfo.bind(this, "peso")}/>
                <FormItem label="Cintura (cm): " value={item.cintura}
                            onChange={this.updateInfo.bind(this, "cintura")}/>
                <FormItem label="Abdomen (cm): " value={item.abdomen}
                            onChange={this.updateInfo.bind(this, "abdomen")}/>
                <FormItem label="Quadril (cm): " value={item.quadril}
                            onChange={this.updateInfo.bind(this, "quadril")}/>
                <FormItem label="IMC: " value={item.imc} disabled={true}/>
                <div>
                    <button className="mdc-button mdc-button--raised" 
                            onClick={() => this.props.save(this.props.item)}>
                            { this.props.item.key ? 'Salvar' : 'Adicionar' }
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
import React, { Component } from 'react';
import FormItem from './measure-form-item';
import MeasureApi from './measure-api';
import MeasureUtils from './measure-utils';
import MeasureFormNew from './measure-form-new';
import MeasureFormEdit from './measure-form-new';
import { connect } from 'react-redux';

class MeasureForm extends Component {

    measureApi = new MeasureApi();

    saveNew = () => {
        // this.measureApi.create(this.state, () => {
        //     this.clearState();
        //     alert('Salvo com sucesso!');
        // });
    };

    // saveEdit = () => {
    //     this.measureApi.update(this.state, () => {
    //         this.clearState();
    //         alert('Salvo com sucesso!');
    //     });
    // };
    //
    // remove = () => {
    //     this.measureApi.delete(this.state, () => {
    //         this.clearState();
    //         alert('Salvo com sucesso!');
    //     })
    // };

    updateInfo(field, event) {
        //atualizar via dispatch
        const payload = this.props.item;
        payload[field] = event.target.value;
        payload.imc = MeasureUtils.calcImc(payload.altura, payload.peso);
        this.props.dispatch({type: 'UpdateIMC', payload});
    };

    jsx = (buttons) => {
      const item = this.props.item;

        return <div className="form mdc-layout-grid__cell">

          {/*<FormItem label="Data: " type="date" onChange={this.saveDateInfo.bind(this, "data")}/>*/}
            <FormItem label="Altura (cm): " value={item.altura}
                      onChange={this.updateInfo.bind(this, "altura")}/>
            <FormItem label="Peso(Kg): " value={item.peso}
                      onChange={this.updateInfo.bind(this, "peso")}/>
            <FormItem label="Cintura (cm): " value={item.cintura}
                      onChange={this.updateInfo.bind(this, "cintura")}/>
            <FormItem label="Abdomen (cm): " value={item.abdomen}
                      onChange={this.updateInfo.bind(this, "abdomen")}/>
            <FormItem label="Quadril (cm): " value={item.quadril}
                      onChange={this.updateInfo.bind(this, "quadril")}/>
            <FormItem label="IMC: " value={item.imc}/>

          {buttons}

        </div>
    };

    render() {
        if(!this.props.item.key) {
            return <MeasureFormNew jsx={this.jsx} save={this.saveNew}/>
        } else {
            return <MeasureFormEdit jsx={this.jsx} save={this.saveEdit} remove={this.remove}/>
        }
    }
}

export default connect ((state) => ({item: state.item}) ) (MeasureForm);
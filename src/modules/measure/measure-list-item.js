import React from 'react';
import moment from 'moment';
import 'font-awesome/css/font-awesome.min.css';
import { calcImc, getImcClassification } from 'modules/utils/imc';
import { itemLabels } from 'modules/measure/measure-item-elements';


const MeasureListItem = ( { item, onEdit, onDelete } ) => {

    const imcClass = getImcClassification(calcImc(item.altura, item.peso));
    const styles = {
        borderLeft: `8px solid ${imcClass.color}`,
        title: imcClass.description,
    }
    const infos = Object.keys(item).map((key) => {
        if(key !== 'key' && item[key]) {
            return <div> {itemLabels[key]}: {item[key]} </div> ;
        }else {
            return '';
        }
    });
    return (
        <li className="list-item" key={item.key} style={styles}>
            <i className="far fa-trash-alt" onClick={onDelete}> X</i>
            <div className="item-info" onClick={onEdit}>
                {infos}
                <div className="creation-date">{moment(item.datacriacao).fromNow()} </div>
            </div>
        </li>
    );
};

export default MeasureListItem;